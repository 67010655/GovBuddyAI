// ============================================
// GovBuddy AI — Main Application
// ============================================
import './style.css';
import { registerRoute, navigate, initRouter } from './router.js';
import { categories, agencies, getAgencyById, getServicesByAgency, getServiceById } from './data.js';

// ---- State ----
const state = {
  currentPage: 'home',
  checkedItems: JSON.parse(localStorage.getItem('govbuddy-checked') || '{}'),
  chatHistory: [],
  guidedAnswers: {},
};

function saveChecked() {
  localStorage.setItem('govbuddy-checked', JSON.stringify(state.checkedItems));
}

// ---- Icons (SVG inline) ----
const icons = {
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  back: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  send: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9z"/></svg>`,
  check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  chevron: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
  clipboard: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
  sparkle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"/></svg>`,
  user: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>`,
  location: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
  money: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>`,
  link: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
};

// ---- App Shell ----
const app = document.getElementById('app');

function renderBottomNav(activePage) {
  return `
    <nav class="bottom-nav" id="bottom-nav">
      <button class="nav-item ${activePage === 'home' ? 'active' : ''}" data-nav="home" id="nav-home">
        <span class="nav-item-icon">${icons.home}</span>
        <span class="nav-item-label">หน้าแรก</span>
      </button>
      <button class="nav-item ${activePage === 'checklist' ? 'active' : ''}" data-nav="checklist" id="nav-checklist">
        <span class="nav-item-icon">${icons.clipboard}</span>
        <span class="nav-item-label">การเตรียมตัว</span>
      </button>
      <button class="nav-item ai-chat ${activePage === 'chat' ? 'active' : ''}" data-nav="chat" id="nav-chat">
        <span class="nav-item-icon">${icons.sparkle}</span>
        <span class="nav-item-label">AI Chat</span>
      </button>
      <button class="nav-item ${activePage === 'profile' ? 'active' : ''}" data-nav="profile" id="nav-profile">
        <span class="nav-item-icon">${icons.user}</span>
        <span class="nav-item-label">โปรไฟล์</span>
      </button>
    </nav>
  `;
}

function bindNavEvents() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.nav;
      if (page === 'home') navigate('/');
      else if (page === 'chat') navigate('/chat');
      else if (page === 'checklist') navigate('/saved');
      else if (page === 'profile') navigate('/profile');
    });
  });
}

// ============================================
// Screen 1: Home — Explore & Select
// ============================================
function renderHome() {
  state.currentPage = 'home';

  app.innerHTML = `
    <div class="page" id="page-home">
      <!-- Home Header -->
      <header class="home-header">
        <div class="home-header-top">
          <div class="home-logo">
            <div class="home-logo-icon">${icons.sparkle}</div>
            <span class="home-logo-text">GovBuddy AI</span>
          </div>
          <button class="header-action" id="home-chat-btn" style="color: rgba(255,255,255,0.8)">
            ${icons.chat}
          </button>
        </div>
        <p class="home-greeting">สวัสดี! วันนี้ให้ช่วยเรื่องอะไรดี?</p>
        <!-- Search -->
        <div class="search-bar" id="search-bar">
          <span class="search-bar-icon">${icons.search}</span>
          <input type="text" placeholder="ค้นหาหน่วยงาน หรือบริการที่ต้องการ" id="search-input" />
        </div>
      </header>

      <div class="page-content">
        <!-- Search Results (hidden by default) -->
        <div id="search-results" class="hidden" style="margin-bottom: var(--space-6);"></div>

        <!-- Categories -->
        <div id="categories-section">
          <div class="section-title">
            <span>หมวดหมู่หน่วยงาน</span>
          </div>
          <div class="category-grid">
            ${categories.map(cat => `
              <div class="category-item ${cat.enabled ? '' : 'disabled'}" data-category="${cat.id}">
                <div class="category-icon" style="background: ${cat.color}15; color: ${cat.color}">
                  ${cat.icon}
                </div>
                <span class="category-label">${cat.name}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Popular Agencies -->
        <div id="agencies-section">
          <div class="section-title">
            <span>หน่วยงานยอดนิยม</span>
          </div>
          <div class="agency-list">
            ${agencies.map(agency => `
              <div class="agency-card" data-agency="${agency.id}" id="agency-${agency.id}">
                <div class="agency-card-icon" style="background: ${agency.bgColor}">
                  ${agency.icon}
                </div>
                <div class="agency-card-info">
                  <div class="agency-card-name">${agency.name}</div>
                  <div class="agency-card-desc">${agency.description}</div>
                </div>
                <span class="agency-card-arrow">${icons.chevron}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Quick AI Help -->
        <div style="margin-top: var(--space-6); padding: var(--space-4); background: linear-gradient(135deg, var(--color-accent-light), var(--color-primary-light)); border-radius: var(--radius-lg); text-align: center;">
          <div style="font-size: 28px; margin-bottom: var(--space-2);">🤖</div>
          <div style="font-size: var(--font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-primary); margin-bottom: var(--space-1);">ไม่แน่ใจต้องทำอะไร?</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-3);">บอก AI ว่าคุณต้องการทำอะไร แล้วเราจะช่วยแนะนำ</div>
          <button class="cta-button" id="home-ai-btn" style="max-width: 240px; margin: 0 auto; font-size: var(--font-size-base); padding: var(--space-3) var(--space-5);">
            ${icons.sparkle} เริ่มคุยกับ AI
          </button>
        </div>
      </div>

      ${renderBottomNav('home')}
    </div>
  `;

  bindNavEvents();

  // Agency card clicks
  document.querySelectorAll('.agency-card').forEach(card => {
    card.addEventListener('click', () => {
      navigate('/agency', { agencyId: card.dataset.agency });
    });
  });

  // Category clicks
  document.querySelectorAll('.category-item:not(.disabled)').forEach(item => {
    item.addEventListener('click', () => {
      const categoryId = item.dataset.category;
      const agency = agencies.find(a => a.categoryId === categoryId);
      if (agency) {
        navigate('/agency', { agencyId: agency.id });
      }
    });
  });

  // Chat buttons
  document.getElementById('home-chat-btn')?.addEventListener('click', () => navigate('/chat'));
  document.getElementById('home-ai-btn')?.addEventListener('click', () => navigate('/chat'));

  // Search
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const categoriesSection = document.getElementById('categories-section');
  const agenciesSection = document.getElementById('agencies-section');

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length === 0) {
      searchResults.classList.add('hidden');
      categoriesSection.classList.remove('hidden');
      agenciesSection.classList.remove('hidden');
      return;
    }

    categoriesSection.classList.add('hidden');
    agenciesSection.classList.add('hidden');
    searchResults.classList.remove('hidden');

    // Search agencies and services
    const matchedAgencies = agencies.filter(a =>
      a.name.includes(query) || a.shortName.includes(query) || a.description.includes(query)
    );

    const allServices = Object.values(getServicesByAgency('dlt')).concat(Object.values(getServicesByAgency('hospital')));
    const matchedServices = allServices.filter(s =>
      s.name.includes(query) || s.description.includes(query)
    );

    let html = '';
    if (matchedAgencies.length > 0) {
      html += `<div class="section-title">หน่วยงาน</div><div class="agency-list" style="margin-bottom: var(--space-4);">`;
      matchedAgencies.forEach(a => {
        html += `
          <div class="agency-card" data-agency="${a.id}">
            <div class="agency-card-icon" style="background: ${a.bgColor}">${a.icon}</div>
            <div class="agency-card-info">
              <div class="agency-card-name">${a.name}</div>
              <div class="agency-card-desc">${a.description}</div>
            </div>
            <span class="agency-card-arrow">${icons.chevron}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    if (matchedServices.length > 0) {
      html += `<div class="section-title">บริการ</div><div class="service-list">`;
      matchedServices.forEach(s => {
        html += `
          <div class="service-card" data-service="${s.id}">
            <div class="service-card-icon" style="background: var(--color-primary-light); color: var(--color-primary)">${s.icon}</div>
            <div class="service-card-info">
              <div class="service-card-name">${s.name}</div>
              <div class="service-card-desc">${s.description}</div>
            </div>
            <span class="service-card-arrow">${icons.chevron}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    if (matchedAgencies.length === 0 && matchedServices.length === 0) {
      html = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-title">ไม่พบผลลัพธ์</div>
          <div class="empty-state-desc">ลองค้นหาด้วยคำอื่น หรือถาม AI ช่วยได้เลย</div>
        </div>
      `;
    }

    searchResults.innerHTML = html;

    // Bind search result clicks
    searchResults.querySelectorAll('.agency-card').forEach(card => {
      card.addEventListener('click', () => navigate('/agency', { agencyId: card.dataset.agency }));
    });
    searchResults.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => navigate('/service', { serviceId: card.dataset.service }));
    });
  });
}


// ============================================
// Screen 2: Agency — Service List
// ============================================
function renderAgency(params) {
  state.currentPage = 'agency';
  const agency = getAgencyById(params.agencyId);
  if (!agency) return navigate('/');

  const agencyServices = getServicesByAgency(agency.id);

  // Group by category
  const grouped = {};
  agencyServices.forEach(s => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  app.innerHTML = `
    <div class="page" id="page-agency">
      <header class="header">
        <button class="header-back" id="agency-back">${icons.back}</button>
        <h1 class="header-title">${agency.name}</h1>
        <button class="header-action" id="agency-chat-btn">${icons.chat}</button>
      </header>

      <!-- Agency Info Banner -->
      <div style="padding: var(--space-3) var(--space-4); background: ${agency.bgColor}; border-bottom: 1px solid var(--color-border-light);">
        <div style="display: flex; align-items: center; gap: var(--space-3);">
          <div style="font-size: 32px;">${agency.icon}</div>
          <div style="flex: 1;">
            <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">สายด่วน</div>
            <div style="display: flex; align-items: center; gap: var(--space-2);">
              <a href="tel:${agency.hotline}" style="font-size: var(--font-size-xl); font-weight: var(--font-weight-bold); color: var(--color-primary);">${agency.hotline}</a>
              <span style="color: var(--color-text-muted);">${icons.phone}</span>
            </div>
          </div>
          <a href="${agency.website}" target="_blank" style="display: flex; align-items: center; gap: 4px; padding: var(--space-2) var(--space-3); background: var(--color-surface); border-radius: var(--radius-full); font-size: var(--font-size-xs); color: var(--color-accent); font-weight: var(--font-weight-medium); box-shadow: var(--shadow-xs);">
            เว็บไซต์ ${icons.link}
          </a>
        </div>
      </div>

      <div class="page-content">
        <div class="section-title" style="margin-top: var(--space-2);">
          <span>บริการทั้งหมด</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: var(--font-weight-regular);">${agencyServices.length} บริการ</span>
        </div>

        ${Object.entries(grouped).map(([category, svcs]) => `
          <div style="margin-bottom: var(--space-5);">
            <div style="font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: var(--space-2); padding-left: var(--space-1);">
              ${category}
            </div>
            <div class="service-list">
              ${svcs.map(s => `
                <div class="service-card" data-service="${s.id}" id="service-${s.id}">
                  <div class="service-card-icon" style="background: ${agency.bgColor}; color: ${agency.color}">
                    ${s.icon}
                  </div>
                  <div class="service-card-info">
                    <div class="service-card-name">${s.name}</div>
                    <div class="service-card-desc">${s.description}</div>
                  </div>
                  <span class="service-card-arrow">${icons.chevron}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}

        <!-- Ask AI -->
        <div style="padding: var(--space-4); background: var(--color-primary-50); border-radius: var(--radius-lg); text-align: center; margin-top: var(--space-2);">
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-2);">ไม่แน่ใจว่าต้องการบริการไหน?</div>
          <button class="quick-reply-btn" id="agency-ask-ai" style="font-size: var(--font-size-base); padding: var(--space-2) var(--space-5);">
            ${icons.sparkle} ถาม AI ช่วยแนะนำ
          </button>
        </div>
      </div>

      ${renderBottomNav('home')}
    </div>
  `;

  bindNavEvents();

  // Events
  document.getElementById('agency-back')?.addEventListener('click', () => navigate('/'));
  document.getElementById('agency-chat-btn')?.addEventListener('click', () => navigate('/chat', { agencyId: agency.id }));
  document.getElementById('agency-ask-ai')?.addEventListener('click', () => navigate('/chat', { agencyId: agency.id }));

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.dataset.service;
      showGuidedQuestions(serviceId);
    });
  });
}


// ============================================
// Guided Questions (Bottom Sheet)
// ============================================
function showGuidedQuestions(serviceId) {
  const service = getServiceById(serviceId);
  if (!service || !service.guidedQuestions || service.guidedQuestions.length === 0) {
    navigate('/service', { serviceId });
    return;
  }

  state.guidedAnswers = {};
  let currentQ = 0;
  const questions = service.guidedQuestions;

  function renderQuestion(idx) {
    const q = questions[idx];
    const progress = ((idx + 1) / questions.length) * 100;

    // Remove existing overlay
    document.querySelector('.guided-overlay')?.remove();

    const overlay = document.createElement('div');
    overlay.className = 'guided-overlay';
    overlay.innerHTML = `
      <div class="guided-sheet">
        <div class="guided-handle"></div>
        <div class="progress-bar" style="margin: 0 0 var(--space-5) 0;">
          <div class="progress-bar-fill" style="width: ${progress}%"></div>
        </div>
        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--space-2);">
          คำถาม ${idx + 1} จาก ${questions.length}
        </div>
        <div class="guided-question">${q.question}</div>
        <div class="guided-options">
          ${q.options.map((opt, i) => `
            <button class="guided-option" data-option="${i}">${opt}</button>
          `).join('')}
        </div>
        <button class="guided-skip" id="guided-skip">ข้ามคำถามนี้ →</button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Bind option clicks
    overlay.querySelectorAll('.guided-option').forEach(btn => {
      btn.addEventListener('click', () => {
        state.guidedAnswers[q.id] = q.options[parseInt(btn.dataset.option)];
        btn.classList.add('selected');
        setTimeout(() => {
          if (idx + 1 < questions.length) {
            renderQuestion(idx + 1);
          } else {
            overlay.remove();
            navigate('/service', { serviceId });
          }
        }, 300);
      });
    });

    // Skip
    overlay.querySelector('#guided-skip')?.addEventListener('click', () => {
      if (idx + 1 < questions.length) {
        renderQuestion(idx + 1);
      } else {
        overlay.remove();
        navigate('/service', { serviceId });
      }
    });

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });
  }

  renderQuestion(0);
}


// ============================================
// Screen 3: Service Detail — Checklist & Action Plan
// ============================================
function renderServiceDetail(params) {
  state.currentPage = 'service';
  const service = getServiceById(params.serviceId);
  if (!service) return navigate('/');

  const agency = getAgencyById(service.agencyId);
  const checkKey = service.id;

  // Check if it's open (simple weekday check)
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 16;

  app.innerHTML = `
    <div class="page" id="page-service-detail">
      <header class="header">
        <button class="header-back" id="detail-back">${icons.back}</button>
        <h1 class="header-title">${service.name}</h1>
        <button class="header-action" id="detail-chat-btn">${icons.chat}</button>
      </header>

      <div class="page-scroll">
        <!-- Hero -->
        <div class="detail-hero">
          <div style="font-size: 36px; margin-bottom: var(--space-3);">${service.icon}</div>
          <h2 class="detail-hero-title">${service.name}</h2>
          <p class="detail-hero-subtitle">${service.description}</p>
        </div>

        <div class="page-content" style="margin-top: -8px;">
          <!-- Info Cards -->
          <div class="info-cards">
            <!-- Location -->
            <div class="info-card">
              <div class="info-card-icon" style="background: var(--color-accent-light); color: var(--color-accent);">
                ${icons.location}
              </div>
              <div class="info-card-content">
                <div class="info-card-label">สถานที่</div>
                <div class="info-card-value">${service.location}</div>
                ${service.locationNote ? `<div class="info-card-note">${service.locationNote}</div>` : ''}
              </div>
              <span class="info-card-badge ${isOpen ? 'badge-open' : 'badge-closed'}">${isOpen ? 'เปิดอยู่' : 'ปิดแล้ว'}</span>
            </div>

            <!-- Cost -->
            <div class="info-card">
              <div class="info-card-icon" style="background: var(--color-success-light); color: var(--color-success);">
                ${icons.money}
              </div>
              <div class="info-card-content">
                <div class="info-card-label">ค่าใช้จ่าย</div>
                <div class="info-card-value">${service.estimatedCost}</div>
                ${service.costBreakdown ? `
                  <div class="info-card-note">${service.costBreakdown.map(c => `${c.item}: ${c.amount}`).join(' | ')}</div>
                ` : ''}
              </div>
            </div>

            <!-- Time -->
            <div class="info-card">
              <div class="info-card-icon" style="background: var(--color-warning-light); color: var(--color-warning);">
                ${icons.clock}
              </div>
              <div class="info-card-content">
                <div class="info-card-label">เวลาดำเนินการ</div>
                <div class="info-card-value">${service.estimatedTime}</div>
                <div class="info-card-note">${service.operatingHours}</div>
              </div>
            </div>
          </div>

          <!-- Documents Checklist -->
          <div class="checklist-section">
            <div class="checklist-section-title">
              <span class="checklist-section-number">1</span>
              เอกสารที่ต้องเตรียม
            </div>
            <div class="checklist-items" id="documents-checklist">
              ${service.documents.map((doc, i) => {
                const itemKey = `${checkKey}-doc-${i}`;
                const isChecked = state.checkedItems[itemKey];
                return `
                  <div class="checklist-item ${isChecked ? 'checked' : ''}" data-key="${itemKey}">
                    <div class="checklist-checkbox">${icons.check}</div>
                    <div class="checklist-item-content">
                      <div class="checklist-item-name">${doc.name}</div>
                      ${doc.note ? `<div class="checklist-item-note">${doc.note}</div>` : ''}
                      ${doc.isConditional ? `<div class="checklist-item-conditional">⚠️ ${doc.condition || 'มีเงื่อนไข'}</div>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Preparation Checklist -->
          ${service.preparation ? `
            <div class="checklist-section">
              <div class="checklist-section-title">
                <span class="checklist-section-number">2</span>
                การเตรียมตัวล่วงหน้า
              </div>
              <div class="checklist-items" id="preparation-checklist">
                ${service.preparation.map((prep, i) => {
                  const itemKey = `${checkKey}-prep-${i}`;
                  const isChecked = state.checkedItems[itemKey];
                  return `
                    <div class="checklist-item ${isChecked ? 'checked' : ''}" data-key="${itemKey}">
                      <div class="checklist-checkbox">${icons.check}</div>
                      <div class="checklist-item-content">
                        <div class="checklist-item-name">${prep.name}</div>
                        ${prep.note ? `<div class="checklist-item-note">${prep.note}</div>` : ''}
                        ${prep.link ? `<a href="${prep.link}" target="_blank" style="display: inline-flex; align-items: center; gap: 4px; margin-top: 4px; font-size: var(--font-size-xs); color: var(--color-accent);">${icons.link} เปิดลิงก์</a>` : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Steps -->
          <div class="checklist-section">
            <div class="checklist-section-title">
              <span class="checklist-section-number">3</span>
              ขั้นตอนการดำเนินการ
            </div>
            <div style="background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border-light); overflow: hidden;">
              ${service.steps.map((step, i) => `
                <div style="display: flex; gap: var(--space-3); padding: var(--space-3) var(--space-4); ${i > 0 ? 'border-top: 1px solid var(--color-border-light);' : ''}">
                  <div style="width: 24px; height: 24px; background: var(--color-primary-light); color: var(--color-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; font-size: var(--font-size-xs); font-weight: var(--font-weight-bold); flex-shrink: 0;">${i + 1}</div>
                  <div style="font-size: var(--font-size-sm); color: var(--color-text); line-height: var(--line-height-relaxed); padding-top: 2px;">${step}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Tips -->
          <div class="tips-section">
            <div class="tips-title">💡 เคล็ดลับ</div>
            <div class="tips-list">
              ${service.tips.map(tip => `<div class="tip-item">${tip}</div>`).join('')}
            </div>
          </div>

          <!-- Officer Scripts (Painpoint #8) -->
          <div class="tips-section" style="background: var(--color-primary-50); border: 1px dashed var(--color-accent);">
            <div class="tips-title" style="color: var(--color-primary);">🗣️ สิ่งที่ควรแจ้งเจ้าหน้าที่เมื่อไปถึง</div>
            <div class="tips-list">
              ${(service.officerScripts || [
                `แจ้งจุดรับเรื่อง: "มาติดต่อขอรับบริการ ${service.name}"`,
                `ยื่นเอกสาร: "ยื่นบัตรประชาชนและเอกสารตามเช็คลิสต์ที่เตรียมไว้"`,
              ]).map(script => `
                <div class="tip-item" style="color: var(--color-text);">
                  ${script}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Sources -->
          <div style="margin-bottom: var(--space-8);">
            <div style="font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); color: var(--color-text-secondary); margin-bottom: var(--space-2);">📌 แหล่งข้อมูล</div>
            ${service.sources.map(src => `
              <a href="${src.url}" target="_blank" class="chat-source" style="margin-bottom: var(--space-1);">
                <span class="chat-source-icon">${icons.link}</span>
                ${src.title}
              </a>
            `).join('')}
          </div>

          <!-- Spacer for CTA -->
          <div style="height: 80px;"></div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-container">
        <button class="cta-button" id="cta-ready">
          ✅ ฉันเตรียมพร้อมแล้ว
        </button>
      </div>

      ${renderBottomNav('home')}
    </div>
  `;

  bindNavEvents();

  // Back
  document.getElementById('detail-back')?.addEventListener('click', () => {
    navigate('/agency', { agencyId: service.agencyId });
  });

  // Chat
  document.getElementById('detail-chat-btn')?.addEventListener('click', () => {
    navigate('/chat', { serviceId: service.id });
  });

  // Checklist toggle
  document.querySelectorAll('.checklist-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Don't toggle on link clicks
      const key = item.dataset.key;
      state.checkedItems[key] = !state.checkedItems[key];
      saveChecked();
      item.classList.toggle('checked');

      // Animate checkbox
      const checkbox = item.querySelector('.checklist-checkbox');
      checkbox.style.animation = 'checkPop 0.3s ease-out';
      setTimeout(() => checkbox.style.animation = '', 300);

      // Update CTA
      updateCTA(service);
    });
  });

  // CTA
  document.getElementById('cta-ready')?.addEventListener('click', () => {
    const btn = document.getElementById('cta-ready');
    btn.classList.add('success');
    btn.innerHTML = '🎉 บันทึกแล้ว! พร้อมไปติดต่อ';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      navigate('/chat', { serviceId: service.id, autoMessage: 'ฉันเตรียมเอกสารเรียบร้อยแล้ว มีอะไรที่ต้องรู้เพิ่มเติมไหม?' });
    }, 1500);
  });

  updateCTA(service);
}

function updateCTA(service) {
  const totalItems = (service.documents?.length || 0) + (service.preparation?.length || 0);
  const checkedCount = [...document.querySelectorAll('.checklist-item.checked')].length;
  const btn = document.getElementById('cta-ready');
  if (btn && !btn.classList.contains('success')) {
    if (checkedCount === totalItems && totalItems > 0) {
      btn.innerHTML = '🎉 เตรียมครบแล้ว! ไปต่อเลย';
      btn.classList.add('success');
    } else {
      btn.innerHTML = `✅ ฉันเตรียมพร้อมแล้ว (${checkedCount}/${totalItems})`;
    }
  }
}


// ============================================
// Screen 4: AI Chat — Interactive Guide
// ============================================
function renderChat(params = {}) {
  state.currentPage = 'chat';

  const serviceId = params.serviceId;
  const agencyId = params.agencyId;
  const service = serviceId ? getServiceById(serviceId) : null;
  const agency = agencyId ? getAgencyById(agencyId) : null;

  // Prepare initial messages
  let welcomeMsg = 'สวัสดีค่ะ! 😊 ยินดีต้อนรับสู่ GovBuddy AI\n\nฉันช่วยเตรียมตัวก่อนไปติดต่อหน่วยงานรัฐได้ค่ะ บอกมาเลยว่าต้องการทำอะไร?';
  let quickReplies = [
    'อยากทำใบขับขี่ใหม่',
    'ต้องเตรียมเอกสารอะไรบ้าง?',
    'อยากไปโรงพยาบาล',
    'ค่าใช้จ่ายเท่าไหร่?',
  ];

  if (service) {
    welcomeMsg = `สวัสดีค่ะ! 😊 คุณกำลังดูเรื่อง "${service.name}"\n\nมีอะไรอยากถามเพิ่มเติมไหมคะ? ฉันช่วยได้เลย!`;
    quickReplies = [
      'ต้องเตรียมเอกสารอะไรบ้าง?',
      'ค่าใช้จ่ายทั้งหมดเท่าไหร่?',
      'จองคิวล่วงหน้าได้ไหม?',
      'มีอะไรต้องระวังบ้าง?',
    ];
  } else if (agency) {
    welcomeMsg = `สวัสดีค่ะ! 😊 คุณสนใจบริการจาก "${agency.name}"\n\nบอกมาเลยว่าต้องการทำอะไรคะ?`;
  }

  if (params.autoMessage) {
    quickReplies = [];
  }

  app.innerHTML = `
    <div class="page chat-page" id="page-chat">
      <header class="header chat-header">
        <button class="header-back" id="chat-back">${icons.back}</button>
        <div style="display: flex; align-items: center; gap: var(--space-2); flex: 1; justify-content: center;">
          <div style="width: 28px; height: 28px; background: linear-gradient(135deg, var(--color-accent), var(--color-primary)); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">
            ${icons.sparkle}
          </div>
          <h1 class="header-title" style="flex: none;">GovBuddy AI</h1>
        </div>
        <button class="header-action" id="chat-close">${icons.close}</button>
      </header>

      <div class="chat-messages" id="chat-messages">
        <div class="chat-bubble ai">
          <div class="chat-bubble-label">GovBuddy AI</div>
          ${welcomeMsg.replace(/\n/g, '<br>')}
        </div>
        ${quickReplies.length > 0 ? `
          <div class="chat-quick-replies" id="quick-replies">
            ${quickReplies.map(q => `<button class="quick-reply-btn" data-reply="${q}">${q}</button>`).join('')}
          </div>
        ` : ''}
      </div>

      <div class="chat-input-container">
        <div class="chat-input-wrapper">
          <input type="text" class="chat-input" id="chat-input" placeholder="พิมพ์คำถามของคุณ..." />
          <button class="chat-send-btn" id="chat-send" disabled>${icons.send}</button>
        </div>
      </div>
    </div>
  `;

  const messagesContainer = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  // Back / Close
  document.getElementById('chat-back')?.addEventListener('click', () => {
    if (service) navigate('/service', { serviceId: service.id });
    else if (agency) navigate('/agency', { agencyId: agency.id });
    else navigate('/');
  });
  document.getElementById('chat-close')?.addEventListener('click', () => navigate('/'));

  // Quick replies
  document.querySelectorAll('.quick-reply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sendMessage(btn.dataset.reply);
      document.getElementById('quick-replies')?.remove();
    });
  });

  // Input handling
  chatInput?.addEventListener('input', () => {
    chatSend.disabled = chatInput.value.trim().length === 0;
  });

  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && chatInput.value.trim()) {
      sendMessage(chatInput.value.trim());
    }
  });

  chatSend?.addEventListener('click', () => {
    if (chatInput.value.trim()) {
      sendMessage(chatInput.value.trim());
    }
  });

  // Auto-message
  if (params.autoMessage) {
    setTimeout(() => sendMessage(params.autoMessage), 500);
  }

  function sendMessage(text) {
    // Add user bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = text;
    messagesContainer.appendChild(userBubble);

    chatInput.value = '';
    chatSend.disabled = true;

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    messagesContainer.appendChild(typing);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Mock AI response
    setTimeout(() => {
      typing.remove();
      const response = generateMockResponse(text, service, agency);
      const aiBubble = document.createElement('div');
      aiBubble.className = 'chat-bubble ai';
      aiBubble.innerHTML = `<div class="chat-bubble-label">GovBuddy AI</div>${response.text}`;

      if (response.source) {
        aiBubble.innerHTML += `
          <a href="${response.source.url}" target="_blank" class="chat-source">
            <span class="chat-source-icon">${icons.link}</span>
            ${response.source.title}
          </a>
        `;
      }

      messagesContainer.appendChild(aiBubble);

      // Quick replies
      if (response.quickReplies && response.quickReplies.length > 0) {
        const repliesDiv = document.createElement('div');
        repliesDiv.className = 'chat-quick-replies';
        repliesDiv.innerHTML = response.quickReplies.map(q =>
          `<button class="quick-reply-btn" data-reply="${q}">${q}</button>`
        ).join('');
        messagesContainer.appendChild(repliesDiv);

        repliesDiv.querySelectorAll('.quick-reply-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            sendMessage(btn.dataset.reply);
            repliesDiv.remove();
          });
        });
      }

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1200 + Math.random() * 800);
  }
}


// ============================================
// Mock AI Response Generator
// ============================================
function generateMockResponse(userMsg, service, agency) {
  const msg = userMsg.toLowerCase();

  // Document-related
  if (msg.includes('เอกสาร') || msg.includes('เตรียม') || msg.includes('document')) {
    if (service) {
      const docs = service.documents.map(d => `• ${d.name}${d.note ? ` <span style="color: var(--color-text-muted)">(${d.note})</span>` : ''}`).join('<br>');
      return {
        text: `สำหรับ "${service.name}" ต้องเตรียมเอกสารดังนี้ค่ะ:<br><br>${docs}<br><br>ต้องการทราบข้อมูลเพิ่มเติมไหมคะ?`,
        source: service.sources?.[0],
        quickReplies: ['ค่าใช้จ่ายเท่าไหร่?', 'ขั้นตอนเป็นยังไง?', 'จองคิวยังไง?'],
      };
    }
    return {
      text: 'กรุณาเลือกบริการที่ต้องการก่อนนะคะ จะได้แนะนำเอกสารที่ต้องเตรียมได้ถูกต้อง 😊',
      quickReplies: ['อยากทำใบขับขี่ใหม่', 'อยากไปโรงพยาบาล'],
    };
  }

  // Cost-related
  if (msg.includes('ค่าใช้จ่าย') || msg.includes('ราคา') || msg.includes('เท่าไหร่') || msg.includes('กี่บาท')) {
    if (service) {
      let costInfo = `ค่าใช้จ่ายสำหรับ "${service.name}" ประมาณ <strong>${service.estimatedCost}</strong> ค่ะ`;
      if (service.costBreakdown) {
        costInfo += '<br><br>รายละเอียด:<br>' + service.costBreakdown.map(c => `• ${c.item}: ${c.amount}`).join('<br>');
      }
      return {
        text: costInfo,
        source: service.sources?.[0],
        quickReplies: ['ต้องเตรียมเอกสารอะไร?', 'ใช้เวลานานไหม?'],
      };
    }
    return {
      text: 'บอกมาเลยค่ะว่าต้องการทำเรื่องอะไร จะได้แนะนำค่าใช้จ่ายได้ถูกต้อง 😊',
      quickReplies: ['ทำใบขับขี่ใหม่', 'ต่ออายุใบขับขี่', 'ทำบัตร รพ. ใหม่'],
    };
  }

  // Booking/Queue
  if (msg.includes('จองคิว') || msg.includes('นัด') || msg.includes('คิว') || msg.includes('queue')) {
    if (service?.agencyId === 'dlt') {
      return {
        text: `สำหรับกรมการขนส่งทางบก สามารถจองคิวล่วงหน้าผ่านระบบ <strong>DLT Smart Queue</strong> ได้ค่ะ<br><br>📱 จองได้ที่เว็บไซต์หรือแอป DLT Smart Queue<br>⏰ จองล่วงหน้าอย่างน้อย 1 วัน<br>📍 เลือกสาขาที่สะดวก`,
        source: { title: 'DLT Smart Queue', url: 'https://gecc.dlt.go.th/dlt-queue/' },
        quickReplies: ['ต้องเตรียมเอกสารอะไร?', 'ใช้เวลานานไหม?'],
      };
    }
    return {
      text: 'แต่ละหน่วยงานมีระบบจองคิวต่างกันค่ะ บอกมาเลยว่าต้องการจองคิวที่ไหน?',
      quickReplies: ['จองคิวขนส่ง', 'จองคิวโรงพยาบาล'],
    };
  }

  // License
  if (msg.includes('ใบขับขี่') || msg.includes('ขับขี่')) {
    return {
      text: 'เกี่ยวกับใบขับขี่ มีหลายบริการค่ะ:<br><br>🪪 <strong>ทำใบขับขี่ใหม่</strong> — สำหรับคนที่ยังไม่มี<br>🔄 <strong>ต่ออายุใบขับขี่</strong> — ใกล้หมดหรือหมดแล้ว<br>🔀 <strong>เปลี่ยนชนิด</strong> — เช่น มอเตอร์ไซค์ → รถยนต์<br><br>คุณต้องการทำเรื่องไหนคะ?',
      source: { title: 'กรมการขนส่งทางบก', url: 'https://www.dlt.go.th' },
      quickReplies: ['ทำใบขับขี่ใหม่', 'ต่ออายุใบขับขี่', 'เปลี่ยนชนิดใบขับขี่'],
    };
  }

  // Hospital
  if (msg.includes('โรงพยาบาล') || msg.includes('หมอ') || msg.includes('แพทย์') || msg.includes('รักษา')) {
    return {
      text: 'เกี่ยวกับโรงพยาบาลรัฐ มีหลายบริการค่ะ:<br><br>📝 <strong>ทำบัตรใหม่ / นัดพบแพทย์</strong><br>📄 <strong>ขอใบรับรองแพทย์</strong><br>💳 <strong>เบิกสิทธิ์การรักษา</strong><br>📁 <strong>ขอประวัติการรักษา</strong><br><br>คุณต้องการทำเรื่องไหนคะ?',
      source: { title: 'สปสช.', url: 'https://www.nhso.go.th' },
      quickReplies: ['ทำบัตร รพ. ใหม่', 'ขอใบรับรองแพทย์', 'ตรวจสอบสิทธิ์การรักษา'],
    };
  }

  // Steps/Process
  if (msg.includes('ขั้นตอน') || msg.includes('ยังไง') || msg.includes('อย่างไร') || msg.includes('วิธี')) {
    if (service) {
      const steps = service.steps.map((s, i) => `${i + 1}. ${s}`).join('<br>');
      return {
        text: `ขั้นตอนสำหรับ "${service.name}" มีดังนี้ค่ะ:<br><br>${steps}<br><br>มีข้อสงสัยเพิ่มเติมไหมคะ?`,
        source: service.sources?.[0],
        quickReplies: ['ต้องเตรียมเอกสารอะไร?', 'ค่าใช้จ่ายเท่าไหร่?'],
      };
    }
  }

  // Time
  if (msg.includes('เวลา') || msg.includes('นานไหม') || msg.includes('กี่นาที') || msg.includes('กี่ชั่วโมง')) {
    if (service) {
      return {
        text: `สำหรับ "${service.name}" ใช้เวลาประมาณ <strong>${service.estimatedTime}</strong> ค่ะ<br><br>⏰ เวลาทำการ: ${service.operatingHours}<br>💡 แนะนำให้มาถึงก่อนเวลานัดอย่างน้อย 30 นาที`,
        source: service.sources?.[0],
        quickReplies: ['จองคิวยังไง?', 'ต้องเตรียมอะไรบ้าง?'],
      };
    }
  }

  // Ready / prepared
  if (msg.includes('เตรียมพร้อม') || msg.includes('เรียบร้อย') || msg.includes('ครบ')) {
    return {
      text: `เยี่ยมเลยค่ะ! 🎉<br><br>สรุปสิ่งที่ต้องจำ:<br>✅ เตรียมเอกสารครบถ้วน<br>✅ จองคิวล่วงหน้า (ถ้ามีระบบ)<br>✅ ไปถึงก่อนเวลานัด 30 นาที<br>✅ แต่งกายสุภาพ<br><br>ขอให้ทุกอย่างราบรื่นนะคะ! 😊`,
      quickReplies: ['ขอบคุณ!', 'มีคำถามเพิ่มเติม'],
    };
  }

  // Thank you
  if (msg.includes('ขอบคุณ') || msg.includes('ขอบใจ') || msg.includes('thank')) {
    return {
      text: 'ยินดีค่ะ! 😊 หากมีคำถามเพิ่มเติมสามารถถามได้ตลอดเวลาค่ะ<br><br>ขอให้การติดต่อหน่วยงานราชการเป็นไปอย่างราบรื่นนะคะ! 🙏',
      quickReplies: ['กลับหน้าแรก'],
    };
  }

  // Default
  return {
    text: `ขอบคุณสำหรับคำถามค่ะ! 😊<br><br>ตอนนี้ฉันช่วยเตรียมตัวก่อนไปติดต่อ <strong>กรมการขนส่งทางบก</strong> และ <strong>โรงพยาบาลรัฐ</strong> ได้ค่ะ<br><br>ลองบอกมาเลยว่าต้องการทำเรื่องอะไร แล้วฉันจะช่วยแนะนำขั้นตอน เอกสาร และค่าใช้จ่ายให้ค่ะ`,
    quickReplies: ['อยากทำใบขับขี่ใหม่', 'อยากไปโรงพยาบาล', 'ต้องเตรียมเอกสารอะไร?'],
  };
}


// ============================================
// Saved Checklist / Preparations
// ============================================
function renderSaved() {
  state.currentPage = 'saved';

  const hasChecked = Object.keys(state.checkedItems).some(k => state.checkedItems[k]);

  app.innerHTML = `
    <div class="page" id="page-saved">
      <header class="header">
        <div style="width: 36px;"></div>
        <h1 class="header-title">การเตรียมตัว</h1>
        <div style="width: 36px;"></div>
      </header>

      <div class="page-content">
        ${hasChecked ? `
          <div style="padding: var(--space-4); background: var(--color-success-light); border-radius: var(--radius-lg); margin-bottom: var(--space-4);">
            <div style="font-size: var(--font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-success); margin-bottom: var(--space-1);">✅ มีรายการที่เตรียมแล้ว</div>
            <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">กดที่บริการด้านล่างเพื่อดูรายละเอียด</div>
          </div>
          <div class="service-list">
            ${getCheckedServices().map(s => `
              <div class="service-card" data-service="${s.id}">
                <div class="service-card-icon" style="background: var(--color-primary-light); color: var(--color-primary)">${s.icon}</div>
                <div class="service-card-info">
                  <div class="service-card-name">${s.name}</div>
                  <div class="service-card-desc">${s.checkedCount}/${s.totalCount} รายการเตรียมแล้ว</div>
                </div>
                <span class="service-card-arrow">${icons.chevron}</span>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="empty-state">
            <div class="empty-state-icon">📋</div>
            <div class="empty-state-title">ยังไม่มีรายการเตรียมตัว</div>
            <div class="empty-state-desc">เลือกบริการที่ต้องการแล้วเริ่มเช็คลิสต์การเตรียมตัวได้เลย</div>
            <button class="cta-button" style="margin-top: var(--space-5); max-width: 200px;" id="saved-explore">
              เริ่มสำรวจ
            </button>
          </div>
        `}
      </div>

      ${renderBottomNav('checklist')}
    </div>
  `;

  bindNavEvents();

  document.getElementById('saved-explore')?.addEventListener('click', () => navigate('/'));

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => navigate('/service', { serviceId: card.dataset.service }));
  });
}

function getCheckedServices() {
  const serviceMap = {};
  Object.keys(state.checkedItems).forEach(key => {
    if (!state.checkedItems[key]) return;
    const serviceId = key.split('-doc-')[0].split('-prep-')[0];
    // Try to re-construct the actual service ID
    const parts = key.split(/-doc-|-prep-/);
    const sId = parts[0];
    if (!serviceMap[sId]) {
      const service = getServiceById(sId);
      if (service) {
        serviceMap[sId] = {
          ...service,
          checkedCount: 0,
          totalCount: (service.documents?.length || 0) + (service.preparation?.length || 0),
        };
      }
    }
    if (serviceMap[sId]) serviceMap[sId].checkedCount++;
  });
  return Object.values(serviceMap);
}


// ============================================
// Profile Page (Simple placeholder)
// ============================================
function renderProfile() {
  state.currentPage = 'profile';

  app.innerHTML = `
    <div class="page" id="page-profile">
      <header class="header">
        <div style="width: 36px;"></div>
        <h1 class="header-title">โปรไฟล์</h1>
        <div style="width: 36px;"></div>
      </header>

      <div class="page-content">
        <div style="text-align: center; padding: var(--space-8) 0;">
          <div style="width: 80px; height: 80px; background: var(--color-primary-light); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-4); font-size: 36px;">
            👤
          </div>
          <div style="font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--space-1);">ผู้ใช้ทั่วไป</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">GovBuddy AI Prototype</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--space-2);">
          <div class="service-card" style="cursor: default;">
            <div class="service-card-icon" style="background: var(--color-primary-light); color: var(--color-primary);">📋</div>
            <div class="service-card-info">
              <div class="service-card-name">รายการเตรียมตัว</div>
              <div class="service-card-desc">${Object.keys(state.checkedItems).filter(k => state.checkedItems[k]).length} รายการที่เช็คแล้ว</div>
            </div>
          </div>
          <div class="service-card" id="clear-data" style="cursor: pointer;">
            <div class="service-card-icon" style="background: var(--color-danger-light); color: var(--color-danger);">🗑️</div>
            <div class="service-card-info">
              <div class="service-card-name" style="color: var(--color-danger);">ล้างข้อมูลทั้งหมด</div>
              <div class="service-card-desc">ลบรายการเช็คลิสต์ทั้งหมด</div>
            </div>
          </div>
        </div>

        <div style="margin-top: var(--space-8); text-align: center;">
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">
            GovBuddy AI v1.0 Prototype<br>
            CDG Hackathon 2026
          </div>
        </div>
      </div>

      ${renderBottomNav('profile')}
    </div>
  `;

  bindNavEvents();

  document.getElementById('clear-data')?.addEventListener('click', () => {
    if (confirm('ต้องการล้างข้อมูลทั้งหมดหรือไม่?')) {
      state.checkedItems = {};
      saveChecked();
      renderProfile();
    }
  });
}


// ============================================
// Register Routes & Init
// ============================================
registerRoute('/', renderHome);
registerRoute('/agency', renderAgency);
registerRoute('/service', renderServiceDetail);
registerRoute('/chat', renderChat);
registerRoute('/saved', renderSaved);
registerRoute('/profile', renderProfile);

// Start
initRouter();
