// ============================================
// GovBuddy AI — Main Application
// ============================================
import './style.css';
import { registerRoute, navigate, initRouter, onBeforeNavigate } from './router.js';
import { categories, agencies, getAgencyById, getServicesByAgency, getServiceById } from './data.js';

// ---- State ----
const state = {
  currentPage: 'home',
  checkedItems: JSON.parse(localStorage.getItem('govbuddy-checked') || '{}'),
  journeys: JSON.parse(localStorage.getItem('govbuddy-journeys') || '{}'),
  chatHistory: [],
  guidedAnswers: {},
};

function saveChecked() {
  localStorage.setItem('govbuddy-checked', JSON.stringify(state.checkedItems));
}

function saveJourneys() {
  localStorage.setItem('govbuddy-journeys', JSON.stringify(state.journeys));
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
const SEARCH_HINTS = [
  { text: 'ไปโรงพยาบาลครั้งแรก', keywords: ['โรงพยาบาล', 'ครั้งแรก', 'ทำบัตร'], serviceId: 'hospital-new-patient' },
  { text: 'ทำใบขับขี่มอไซ', keywords: ['มอไซ', 'จักรยานยนต์', 'ใบขับขี่'], serviceId: 'dlt-new-license' },
  { text: 'ต่ออายุใบขับขี่หมดแล้ว', keywords: ['ต่ออายุ', 'หมดอายุ'], serviceId: 'dlt-renew-license' },
  { text: 'โอนรถให้คนอื่น', keywords: ['โอน', 'กรรมสิทธิ์'], serviceId: 'dlt-transfer' },
  { text: 'ขอใบรับรองแพทย์', keywords: ['ใบรับรอง', 'แพทย์'], serviceId: 'hospital-medical-cert' },
  { text: 'รถเกิน 7 ปี ต้องตรวจไหม', keywords: ['7 ปี', 'ตรวจสภาพ', 'ตรอ'], serviceId: 'dlt-vehicle-reg' },
  { text: 'ใช้สิทธิ์บัตรทองยังไง', keywords: ['บัตรทอง', 'สิทธิ์', 'เบิก'], serviceId: 'hospital-claim-rights' },
  { text: 'จองคิวขนส่งยังไง', keywords: ['จองคิว', 'smart queue', 'ขนส่ง'], agencyId: 'dlt' },
  { text: 'ทำบัตรโรงพยาบาลใหม่', keywords: ['บัตรโรงพยาบาล', 'HN'], serviceId: 'hospital-new-patient' },
  { text: 'เปลี่ยนใบขับขี่เป็นรถยนต์', keywords: ['เปลี่ยนชนิด', 'รถยนต์'], serviceId: 'dlt-change-license' },
];

let hintTimer = null;
let hintIndex = 0;

function stopHintRotation() {
  if (hintTimer) {
    clearInterval(hintTimer);
    hintTimer = null;
  }
}

onBeforeNavigate(stopHintRotation);

function renderHome() {
  state.currentPage = 'home';
  stopHintRotation();

  app.innerHTML = `
    <div class="page" id="page-home">
      <!-- Home Header -->
      <header class="home-header">
        <div class="home-header-top">
          <div class="home-logo">
            <div class="home-logo-icon">${icons.sparkle}</div>
            <span class="home-logo-text">GovBuddy AI</span>
          </div>
          <button class="header-action" id="home-chat-btn" style="color: var(--color-primary); background: var(--color-primary-light);">
            ${icons.chat}
          </button>
        </div>
        <p class="home-greeting">สวัสดี! วันนี้ให้ช่วยเรื่องอะไรดี?</p>
        <!-- Search -->
        <div class="search-bar" id="search-bar">
          <span class="search-bar-icon">${icons.search}</span>
          <input type="text" placeholder="พิมพ์เป็นภาษาพูดได้ เช่น ไปหาหมอครั้งแรก" id="search-input" />
        </div>
        <div class="search-hints" id="search-hints"></div>
      </header>

      <div class="page-content">
        <!-- Search Results (hidden by default) -->
        <div id="search-results" class="hidden" style="margin-bottom: var(--space-6);"></div>

        <!-- Categories -->
        <div id="categories-section">
          <div class="section-title">
            <span>เลือกหน่วยงาน</span>
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
        <div id="home-ai-help" style="margin-top: var(--space-6); padding: var(--space-4); background: linear-gradient(135deg, var(--color-accent-light), var(--color-primary-light)); border-radius: var(--radius-lg); text-align: center;">
          <div style="font-size: 28px; margin-bottom: var(--space-2);">🤖</div>
          <div style="font-size: var(--font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-primary); margin-bottom: var(--space-1);">ไม่แน่ใจต้องทำอะไร?</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-3);">บอก AI เป็นภาษาพูดได้เลย แล้วจะชี้ทางทีละขั้น</div>
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
  const searchHints = document.getElementById('search-hints');
  const categoriesSection = document.getElementById('categories-section');
  const agenciesSection = document.getElementById('agencies-section');
  const aiHelpSection = document.getElementById('home-ai-help');

  function setBrowseVisible(visible) {
    [searchHints, categoriesSection, agenciesSection, aiHelpSection].forEach((el) => {
      if (!el) return;
      el.classList.toggle('hidden', !visible);
    });
    searchResults.classList.toggle('hidden', visible);
  }

  function bindSearchResultClicks() {
    searchResults.querySelectorAll('.agency-card').forEach(card => {
      card.addEventListener('click', () => navigate('/agency', { agencyId: card.dataset.agency }));
    });
    searchResults.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => navigate('/service', { serviceId: card.dataset.service }));
    });
  }

  function runHomeSearch(rawQuery) {
    const query = rawQuery.trim();
    searchInput.value = query;

    if (query.length === 0) {
      setBrowseVisible(true);
      return;
    }

    setBrowseVisible(false);

    const matchedAgencies = agencies.filter(a =>
      a.name.includes(query) || a.shortName.includes(query) || a.description.includes(query)
    );

    const allServices = Object.values(getServicesByAgency('dlt')).concat(Object.values(getServicesByAgency('hospital')));
    const matchedServices = allServices.filter(s =>
      s.name.includes(query) || s.description.includes(query)
    );

    SEARCH_HINTS.forEach((hint) => {
      const hit = hint.text.includes(query) || query.includes(hint.text) ||
        hint.keywords.some((k) => query.includes(k) || k.includes(query));
      if (!hit) return;
      if (hint.agencyId && !matchedAgencies.some((a) => a.id === hint.agencyId)) {
        const agency = agencies.find((a) => a.id === hint.agencyId);
        if (agency) matchedAgencies.push(agency);
      }
      if (hint.serviceId && !matchedServices.some((s) => s.id === hint.serviceId)) {
        const service = allServices.find((s) => s.id === hint.serviceId);
        if (service) matchedServices.push(service);
      }
    });

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
          <div class="empty-state-desc">ลองพิมพ์เป็นภาษาพูด เช่น ไปโรงพยาบาลครั้งแรก หรือถาม AI ช่วยได้เลย</div>
        </div>
      `;
    }

    searchResults.innerHTML = html;
    bindSearchResultClicks();
  }

  function paintHints() {
    const hints = [];
    for (let i = 0; i < 3; i++) {
      hints.push(SEARCH_HINTS[(hintIndex + i) % SEARCH_HINTS.length]);
    }
    searchHints.classList.add('is-fading');
    window.setTimeout(() => {
      searchHints.innerHTML = hints.map((hint) => (
        `<button type="button" class="search-hint-chip" data-hint="${hint.text}">${hint.text}</button>`
      )).join('');
      searchHints.querySelectorAll('.search-hint-chip').forEach((chip) => {
        chip.addEventListener('click', () => runHomeSearch(chip.dataset.hint));
      });
      searchHints.classList.remove('is-fading');
    }, 180);
  }

  paintHints();
  hintTimer = window.setInterval(() => {
    hintIndex = (hintIndex + 3) % SEARCH_HINTS.length;
    paintHints();
  }, 4500);

  searchInput?.addEventListener('input', (e) => {
    runHomeSearch(e.target.value);
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
// Screen 3: Service Detail — Step-by-step journey
// ============================================
const JOURNEY_STEPS = [
  { key: 'prepare', label: 'เตรียมเอกสาร', hint: 'ติ๊กรายการเอกสารและการเตรียมตัวให้ครบก่อนไปขั้นถัดไป' },
  { key: 'verify', label: 'ตรวจสอบ', hint: 'อัปโหลดรูปเอกสารอย่างน้อย 1 ใบ เพื่อประเมินความพร้อม' },
  { key: 'travel', label: 'เดินทาง', hint: 'เลือกจุดบริการที่จะไปก่อน แล้วค่อยไปขั้นรอคิว' },
  { key: 'queue', label: 'รอคิว', hint: 'จองคิวหรือยืนยันว่าเข้าใจเวลาทำการแล้ว' },
  { key: 'service', label: 'รับบริการ', hint: 'อ่านขั้นตอนและประโยคที่ควรแจ้งเจ้าหน้าที่' },
  { key: 'done', label: 'เสร็จสิ้น', hint: 'เตรียมครบทุกขั้นแล้ว พร้อมออกไปติดต่อ' },
];

function defaultJourneyState() {
  return {
    currentStep: 0,
    unlockedStep: 0,
    scanPassed: false,
    scanHtml: '',
    scanTone: '',
    selectedLocationIndex: null,
    queueConfirmed: false,
    serviceConfirmed: false,
    completed: false,
  };
}

function getJourneyState(serviceId) {
  if (!state.journeys[serviceId]) {
    state.journeys[serviceId] = defaultJourneyState();
  }
  return state.journeys[serviceId];
}

function getChecklistCounts(service) {
  const docs = service.documents || [];
  const prep = service.preparation || [];
  const checkedDocs = docs.filter((_, idx) => state.checkedItems[`${service.id}-doc-${idx}`]).length;
  const checkedPrep = prep.filter((_, idx) => state.checkedItems[`${service.id}-prep-${idx}`]).length;
  return {
    checked: checkedDocs + checkedPrep,
    total: docs.length + prep.length,
  };
}

function isJourneyStepComplete(service, journey, stepIndex) {
  const key = JOURNEY_STEPS[stepIndex]?.key;
  if (key === 'prepare') {
    const counts = getChecklistCounts(service);
    return counts.total === 0 || counts.checked === counts.total;
  }
  if (key === 'verify') return !!journey.scanPassed;
  if (key === 'travel') return journey.selectedLocationIndex !== null && journey.selectedLocationIndex !== undefined;
  if (key === 'queue') return !!journey.queueConfirmed;
  if (key === 'service') return !!journey.serviceConfirmed;
  if (key === 'done') return true;
  return false;
}

function getCtaLabel(service, journey, stepIndex) {
  const key = JOURNEY_STEPS[stepIndex]?.key;
  const complete = isJourneyStepComplete(service, journey, stepIndex);
  if (key === 'done') return 'กลับหน้าแรก';
  if (!complete) {
    if (key === 'prepare') {
      const counts = getChecklistCounts(service);
      return `ติ๊กให้ครบก่อนไปต่อ (${counts.checked}/${counts.total})`;
    }
    if (key === 'verify') return 'อัปโหลดเอกสารก่อนไปต่อ';
    if (key === 'travel') return 'เลือกจุดบริการก่อนไปต่อ';
    if (key === 'queue') return 'ยืนยันคิวหรือเวลาทำการก่อนไปต่อ';
    if (key === 'service') return 'อ่านและยืนยันก่อนไปต่อ';
  }
  if (stepIndex === JOURNEY_STEPS.length - 2) return 'ไปขั้นสุดท้าย';
  return `ไปขั้นถัดไป · ${JOURNEY_STEPS[stepIndex + 1].label}`;
}

function getNearestLocations(service) {
  const defaultMap = {
    dlt: [
      { name: 'สำนักงานขนส่งกลาง', address: 'กรุงเทพมหานคร', distance: '4.2 กม.', lat: 13.7563, lng: 100.5018 },
      { name: 'สำนักงานขนส่งลาดพร้าว', address: 'ลาดพร้าว', distance: '8.6 กม.', lat: 13.816, lng: 100.609 },
      { name: 'สำนักงานขนส่งนนทบุรี', address: 'นนทบุรี', distance: '16.8 กม.', lat: 13.862, lng: 100.514 },
    ],
    hospital: [
      { name: 'โรงพยาบาลศิริราช', address: 'เขตราชเทวี', distance: '5.1 กม.', lat: 13.7565, lng: 100.4856 },
      { name: 'โรงพยาบาลรามาธิบดี', address: 'เขตพญาไท', distance: '8.9 กม.', lat: 13.764, lng: 100.532 },
      { name: 'โรงพยาบาลทหารผ่านศึก', address: 'เขตบางกอกน้อย', distance: '12.1 กม.', lat: 13.7684, lng: 100.4658 },
    ],
  };

  return service.locations || defaultMap[service.agencyId] || [
    { name: 'หน่วยงานที่ใกล้ที่สุด', address: service.location, distance: 'ระยะทางประมาณ 3–10 กม.', lat: 13.7563, lng: 100.5018 },
  ];
}

function evaluateDocumentScan(service, fileName, fileSize) {
  const normalizedName = fileName.toLowerCase();
  const requirementNames = service.documents.map(doc => doc.name.toLowerCase().replace(/[^a-z]/g, ''));
  const matchCount = requirementNames.filter(name => normalizedName.includes(name)).length;
  const sizeOk = fileSize <= 5 * 1024 * 1024;

  if (!sizeOk) {
    return {
      status: 'ไฟล์ใหญ่เกินไป',
      tone: 'warning',
      message: 'ขนาดไฟล์เกิน 5 MB ควรลดขนาดรูปก่อนยื่นเอกสาร',
      score: 35,
    };
  }

  if (matchCount === 0) {
    return {
      status: 'ตรวจสอบอีกครั้ง',
      tone: 'warning',
      message: 'ยังไม่พบภาพเอกสารที่สอดคล้องกับรายการที่ต้องใช้ ควรตรวจสอบชื่อไฟล์หรือรูปภาพอีกครั้ง',
      score: 45,
    };
  }

  if (matchCount >= Math.min(2, requirementNames.length)) {
    return {
      status: 'เอกสารผ่าน',
      tone: 'success',
      message: 'รูปภาพมีความชัดเจนและสอดคล้องกับเอกสารที่ต้องใช้สำหรับบริการนี้',
      score: 92,
    };
  }

  return {
    status: 'ควรตรวจสอบ',
    tone: 'warning',
    message: 'เอกสารมีความเป็นไปได้ แต่ควรแน่ใจว่าข้อมูลและภาพมีความชัดเจนก่อนออกไป',
    score: 68,
  };
}

function geocodeDistanceKm(lat1, lng1, lat2, lng2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function updateNearestLocations(service, userCoords = null) {
  const listEl = document.getElementById('gps-locations');
  if (!listEl) return;

  const locations = getNearestLocations(service).map((loc) => {
    if (!userCoords) return { ...loc, distanceText: loc.distance || 'ประมาณ 5–15 กม.' };
    const km = geocodeDistanceKm(userCoords.latitude, userCoords.longitude, loc.lat, loc.lng);
    return { ...loc, distanceText: `${km.toFixed(1)} กม.` };
  });

  listEl.innerHTML = locations
    .slice(0, 3)
    .map((loc, index) => `
      <div class="gps-item ${index === 0 ? 'recommended' : ''}" data-loc="${index}">
        <div class="gps-item-rank">${index === 0 ? 'แนะนำ' : index + 1}</div>
        <div class="gps-item-content">
          <div class="gps-item-name">${loc.name}</div>
          <div class="gps-item-address">${loc.address}</div>
        </div>
        <div class="gps-item-distance">${loc.distanceText}</div>
      </div>
    `)
    .join('');
}

function renderConfirmRow({ id, checked, title, hint }) {
  return `
    <label class="confirm-row ${checked ? 'is-checked' : ''}">
      <input type="checkbox" id="${id}" class="confirm-input" ${checked ? 'checked' : ''} />
      <span class="confirm-box" aria-hidden="true">${icons.check}</span>
      <span class="confirm-copy">
        <span class="confirm-title">${title}</span>
        <span class="confirm-hint">${hint}</span>
      </span>
    </label>
  `;
}

function getDocumentSample(name = '') {
  const rules = [
    { test: /ประชาชน/, file: 'id-card.svg' },
    { test: /ใบขับขี่/, file: 'driving-license.svg' },
    { test: /ใบรับรองแพทย์/, file: 'medical-cert.svg' },
    { test: /รูปถ่าย/, file: 'photo-1inch.svg' },
    { test: /คู่มือจดทะเบียน|สมุด/, file: 'vehicle-book.svg' },
    { test: /พ\.ร\.บ/, file: 'prb.svg' },
    { test: /ตรวจสภาพ|ตรอ/, file: 'inspection.svg' },
    { test: /สัญญาซื้อขาย/, file: 'contract.svg' },
    { test: /มอบอำนาจ/, file: 'poa.svg' },
    { test: /สิทธิ์การรักษา|บัตรทอง/, file: 'health-card.svg' },
    { test: /ส่งตัว|Referral/, file: 'referral.svg' },
    { test: /ยา/, file: 'medicine.svg' },
    { test: /HN/, file: 'hn-card.svg' },
  ];
  const match = rules.find((rule) => rule.test.test(name));
  if (!match) return null;
  return {
    src: `${import.meta.env.BASE_URL}samples/${match.file}`,
    title: name,
  };
}

function openSamplePreview(src, title) {
  document.querySelector('.sample-overlay')?.remove();
  const overlay = document.createElement('div');
  overlay.className = 'sample-overlay';
  overlay.innerHTML = `
    <div class="sample-sheet">
      <div class="sample-sheet-top">
        <div>
          <div class="sample-sheet-kicker">ภาพตัวอย่าง</div>
          <div class="sample-sheet-title">${title}</div>
        </div>
        <button type="button" class="sample-close" id="sample-close">${icons.close}</button>
      </div>
      <img class="sample-image" src="${src}" alt="ตัวอย่าง ${title}" />
      <p class="sample-caption">นี่คือภาพจำลองเพื่อให้รู้ว่าเอกสารหน้าตาประมาณไหน ไม่ใช่เอกสารจริง และไม่มีข้อมูลบุคคล</p>
    </div>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  overlay.querySelector('#sample-close')?.addEventListener('click', close);
}

function renderChecklistItems(items, prefix, serviceId) {
  return items.map((item, i) => {
    const itemKey = `${serviceId}-${prefix}-${i}`;
    const isChecked = state.checkedItems[itemKey];
    const sample = prefix === 'doc' ? getDocumentSample(item.name) : null;
    return `
      <div class="checklist-item ${isChecked ? 'checked' : ''}" data-key="${itemKey}">
        <div class="checklist-checkbox">${icons.check}</div>
        <div class="checklist-item-content">
          <div class="checklist-item-name">${item.name}</div>
          ${item.note ? `<div class="checklist-item-note">${item.note}</div>` : ''}
          ${item.isConditional ? `<div class="checklist-item-conditional">⚠️ ${item.condition || 'มีเงื่อนไข'}</div>` : ''}
          ${item.link ? `<a href="${item.link}" target="_blank" class="checklist-link">${icons.link} เปิดลิงก์</a>` : ''}
        </div>
        ${sample ? `
          <button type="button" class="doc-sample" data-src="${sample.src}" data-title="${sample.title}" aria-label="ดูตัวอย่าง ${item.name}">
            <img src="${sample.src}" alt="" />
            <span>ตัวอย่าง</span>
          </button>
        ` : ''}
      </div>
    `;
  }).join('');
}

function renderStepBody(service, agency, journey, stepKey) {
  const locationList = getNearestLocations(service);
  const now = new Date();
  const isOpen = now.getDay() >= 1 && now.getDay() <= 5 && now.getHours() >= 8 && now.getHours() < 16;
  const selectedLoc = locationList[journey.selectedLocationIndex];

  if (stepKey === 'prepare') {
    return `
      <div class="step-intro">
        <p>เตรียมของให้ครบก่อนออกจากบ้าน ติ๊กทีละรายการได้เลย กดรูปตัวอย่างถ้ายังไม่แน่ใจว่าเอกสารหน้าตาเป็นยังไง</p>
      </div>
      <div class="meta-chip-row">
        <div class="meta-chip">📍 ${service.location}</div>
        <div class="meta-chip">💰 ${service.estimatedCost}</div>
        <div class="meta-chip">⏱ ${service.estimatedTime}</div>
      </div>
      <div class="checklist-section">
        <div class="checklist-section-title">
          <span class="checklist-section-number">1</span>
          เอกสารที่ต้องเตรียม
        </div>
        <div class="checklist-items">${renderChecklistItems(service.documents, 'doc', service.id)}</div>
      </div>
      ${service.preparation?.length ? `
        <div class="checklist-section">
          <div class="checklist-section-title">
            <span class="checklist-section-number">2</span>
            การเตรียมตัวล่วงหน้า
          </div>
          <div class="checklist-items">${renderChecklistItems(service.preparation, 'prep', service.id)}</div>
        </div>
      ` : ''}
    `;
  }

  if (stepKey === 'verify') {
    return `
      <div class="step-intro">
        <p>อัปโหลดรูปเอกสารที่เตรียมไว้ ระบบจะช่วยดูคร่าว ๆ ว่าพร้อมยื่นหรือยัง</p>
      </div>
      <div class="utility-card document-card">
        <div class="utility-card-header">
          <div>
            <div class="utility-card-title">ตรวจสอบเอกสาร</div>
            <div class="utility-card-subtitle">ถ่ายหรืออัปโหลดรูปอย่างน้อย 1 ใบ</div>
          </div>
          <div class="utility-chip">AI Scan</div>
        </div>
        <input type="file" id="doc-scan-input" accept="image/*" capture="environment" class="hidden" />
        <button id="doc-scan-btn" class="scan-button">📷 ถ่าย/อัปโหลดเอกสาร</button>
        <div id="scan-result" class="scan-result ${journey.scanTone || ''}">
          ${journey.scanHtml || 'ยังไม่มีการสแกนเอกสาร กรุณาอัปโหลดรูปภาพเพื่อประเมินความพร้อม'}
        </div>
      </div>
    `;
  }

  if (stepKey === 'travel') {
    return `
      <div class="step-intro">
        <p>เลือกจุดที่จะไปก่อน อย่าเพิ่งกังวลเรื่องคิว — ขั้นถัดไปจะให้จองคิว</p>
      </div>
      <div class="utility-card gps-card">
        <div class="utility-card-header">
          <div>
            <div class="utility-card-title">จุดที่ควรไป</div>
            <div class="utility-card-subtitle">แตะเพื่อเลือกสาขาหรือหน่วยงาน</div>
          </div>
          <button id="gps-locate-btn" class="ghost-button">📍 ตำแหน่งของฉัน</button>
        </div>
        <div id="gps-locations" class="gps-list">
          ${locationList.slice(0, 3).map((loc, index) => `
            <div class="gps-item ${index === 0 ? 'recommended' : ''} ${journey.selectedLocationIndex === index ? 'selected' : ''}" data-loc="${index}">
              <div class="gps-item-rank">${index === 0 ? 'แนะนำ' : index + 1}</div>
              <div class="gps-item-content">
                <div class="gps-item-name">${loc.name}</div>
                <div class="gps-item-address">${loc.address}</div>
              </div>
              <div class="gps-item-distance">${loc.distance || '5–15 กม.'}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (stepKey === 'queue') {
    const queue = agency?.queueSystem;
    return `
      <div class="step-intro">
        <p>จองคิวหรือเช็กเวลาทำการก่อนเดินทาง จะได้ไม่ไปแล้วเจอปิด</p>
      </div>
      <div class="utility-card">
        <div class="utility-card-header">
          <div>
            <div class="utility-card-title">${selectedLoc?.name || service.location}</div>
            <div class="utility-card-subtitle">${service.operatingHours}</div>
          </div>
          <span class="status-pill ${isOpen ? '' : 'pill-closed'}">${isOpen ? 'เปิดอยู่' : 'ปิดแล้ว'}</span>
        </div>
        ${queue?.url ? `
          <a href="${queue.url}" target="_blank" class="scan-button queue-link">${icons.link} จองคิวผ่าน ${queue.name}</a>
        ` : `
          <div class="scan-result">หน่วยงานนี้อาจไม่มีคิวออนไลน์ แนะนำโทรสอบถามหรือไปเช้า</div>
        `}
        ${renderConfirmRow({
          id: 'queue-confirm',
          checked: journey.queueConfirmed,
          title: 'ฉันจองคิวแล้ว หรือเข้าใจเวลาทำการแล้ว',
          hint: 'แตะช่องสี่เหลี่ยมเพื่อติ๊กยืนยัน',
        })}
      </div>
    `;
  }

  if (stepKey === 'service') {
    const scripts = service.officerScripts || [
      `แจ้งจุดรับเรื่อง: "มาติดต่อขอรับบริการ ${service.name}"`,
      `ยื่นเอกสาร: "ยื่นบัตรประชาชนและเอกสารตามเช็คลิสต์ที่เตรียมไว้"`,
    ];
    return `
      <div class="step-intro">
        <p>เมื่อถึงเคาน์เตอร์ ทำตามลำดับนี้ และใช้ประโยคด้านล่างได้เลย</p>
      </div>
      <div class="checklist-section">
        <div class="checklist-section-title">ขั้นตอน ณ จุดบริการ</div>
        <div class="process-list">
          ${service.steps.map((step, i) => `
            <div class="process-item">
              <div class="process-num">${i + 1}</div>
              <div>${step}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="tips-section" style="background: var(--color-primary-50); border: 1px dashed var(--color-accent);">
        <div class="tips-title" style="color: var(--color-primary);">🗣️ สิ่งที่ควรแจ้งเจ้าหน้าที่</div>
        <div class="tips-list">
          ${scripts.map(script => `<div class="tip-item" style="color: var(--color-text);">${script}</div>`).join('')}
        </div>
      </div>
      ${renderConfirmRow({
        id: 'service-confirm',
        checked: journey.serviceConfirmed,
        title: 'ฉันอ่านขั้นตอนและพร้อมแจ้งเจ้าหน้าที่แล้ว',
        hint: 'แตะช่องสี่เหลี่ยมเพื่อติ๊กยืนยัน',
      })}
    `;
  }

  const counts = getChecklistCounts(service);
  return `
    <div class="done-card">
      <div class="done-emoji">🎉</div>
      <h2>เตรียมครบแล้ว</h2>
      <p>พร้อมไปติดต่อเรื่อง “${service.name}”</p>
      <ul class="done-summary">
        <li>เอกสาร ${counts.checked}/${counts.total} รายการ</li>
        <li>จุดบริการ: ${selectedLoc?.name || service.location}</li>
        <li>เวลาโดยประมาณ: ${service.estimatedTime}</li>
      </ul>
    </div>
    <div class="tips-section">
      <div class="tips-title">💡 ก่อนออกจากบ้าน</div>
      <div class="tips-list">
        ${(service.tips || []).slice(0, 3).map(tip => `<div class="tip-item">${tip}</div>`).join('')}
      </div>
    </div>
    <div class="done-actions">
      <button class="ghost-button done-chat-btn" id="done-chat-btn">${icons.sparkle} ถาม AI เพิ่มเติม</button>
    </div>
    <div class="source-block">
      <div class="source-label">📌 แหล่งข้อมูล</div>
      ${service.sources.map(src => `
        <a href="${src.url}" target="_blank" class="chat-source">
          <span class="chat-source-icon">${icons.link}</span>
          ${src.title}
        </a>
      `).join('')}
    </div>
  `;
}

function renderServiceDetail(params) {
  state.currentPage = 'service';
  const service = getServiceById(params.serviceId);
  if (!service) return navigate('/');

  const agency = getAgencyById(service.agencyId);
  const journey = getJourneyState(service.id);

  let stepIndex = JOURNEY_STEPS.findIndex((step) => step.key === params.step);
  if (stepIndex < 0) stepIndex = journey.currentStep || 0;
  if (stepIndex > journey.unlockedStep) stepIndex = journey.unlockedStep;
  journey.currentStep = stepIndex;
  saveJourneys();

  const current = JOURNEY_STEPS[stepIndex];
  const progress = ((stepIndex + 1) / JOURNEY_STEPS.length) * 100;
  const complete = isJourneyStepComplete(service, journey, stepIndex);

  app.innerHTML = `
    <div class="page" id="page-service-detail">
      <header class="header">
        <button class="header-back" id="detail-back">${icons.back}</button>
        <h1 class="header-title">${service.name}</h1>
        <button class="header-action" id="detail-chat-btn">${icons.chat}</button>
      </header>

      <div class="page-scroll">
        <div class="wizard-bar">
          <div class="wizard-bar-top">
            <span>ขั้น ${stepIndex + 1} จาก ${JOURNEY_STEPS.length}</span>
            <span>${current.label}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${progress}%"></div>
          </div>
          <div class="wizard-dots" role="list">
            ${JOURNEY_STEPS.map((step, index) => `
              <button
                type="button"
                class="wizard-dot ${index === stepIndex ? 'current' : ''} ${index < stepIndex ? 'done' : ''} ${index > journey.unlockedStep ? 'locked' : ''}"
                data-step="${step.key}"
                ${index > journey.unlockedStep ? 'disabled' : ''}
                aria-label="${step.label}"
              ></button>
            `).join('')}
          </div>
          <p class="wizard-hint">${current.hint}</p>
        </div>

        <div class="page-content wizard-content">
          ${renderStepBody(service, agency, journey, current.key)}
          <div style="height: 88px;"></div>
        </div>
      </div>

      <div class="cta-container">
        <button class="cta-button ${complete && current.key !== 'done' ? 'success' : ''}" id="cta-ready" ${complete ? '' : 'disabled'}>
          ${getCtaLabel(service, journey, stepIndex)}
        </button>
      </div>

      ${renderBottomNav('home')}
    </div>
  `;

  bindNavEvents();
  bindWizardEvents(service, journey, stepIndex);
}

function refreshWizardCta(service, journey, stepIndex) {
  const btn = document.getElementById('cta-ready');
  if (!btn) return;
  const complete = isJourneyStepComplete(service, journey, stepIndex);
  btn.disabled = !complete;
  btn.classList.toggle('success', complete && JOURNEY_STEPS[stepIndex].key !== 'done');
  btn.innerHTML = getCtaLabel(service, journey, stepIndex);
}

function bindWizardEvents(service, journey, stepIndex) {
  const current = JOURNEY_STEPS[stepIndex];

  document.getElementById('detail-back')?.addEventListener('click', () => {
    if (stepIndex > 0) {
      navigate('/service', { serviceId: service.id, step: JOURNEY_STEPS[stepIndex - 1].key });
      return;
    }
    navigate('/agency', { agencyId: service.agencyId });
  });

  document.getElementById('detail-chat-btn')?.addEventListener('click', () => {
    navigate('/chat', { serviceId: service.id });
  });

  document.querySelectorAll('.wizard-dot:not(.locked)').forEach((dot) => {
    dot.addEventListener('click', () => {
      navigate('/service', { serviceId: service.id, step: dot.dataset.step });
    });
  });

  document.querySelectorAll('.checklist-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('a, .doc-sample')) return;
      const key = item.dataset.key;
      state.checkedItems[key] = !state.checkedItems[key];
      saveChecked();
      item.classList.toggle('checked');
      const checkbox = item.querySelector('.checklist-checkbox');
      checkbox.style.animation = 'checkPop 0.3s ease-out';
      setTimeout(() => { checkbox.style.animation = ''; }, 300);
      refreshWizardCta(service, journey, stepIndex);
    });
  });

  document.querySelectorAll('.doc-sample').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openSamplePreview(btn.dataset.src, btn.dataset.title);
    });
  });

  const scanInput = document.getElementById('doc-scan-input');
  const scanResult = document.getElementById('scan-result');
  document.getElementById('doc-scan-btn')?.addEventListener('click', () => scanInput?.click());
  scanInput?.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file || !scanResult) return;

    if (!file.type.startsWith('image/')) {
      scanResult.className = 'scan-result warning';
      scanResult.innerHTML = '<strong>รูปแบบไฟล์ไม่ถูกต้อง</strong><br>กรุณาอัปโหลดภาพเอกสารที่ชัดเจน';
      return;
    }

    const result = evaluateDocumentScan(service, file.name, file.size);
    const statusClass = result.tone === 'success' ? 'success' : result.tone === 'warning' ? 'warning' : 'neutral';
    const html = `
      <div class="scan-result-top">
        <span class="scan-pill ${result.tone}">${result.status}</span>
        <span class="scan-score">${result.score}%</span>
      </div>
      <div class="scan-result-message">${result.message}</div>
    `;
    scanResult.className = `scan-result ${statusClass}`;
    scanResult.innerHTML = html;
    journey.scanPassed = true;
    journey.scanHtml = html;
    journey.scanTone = statusClass;
    saveJourneys();
    refreshWizardCta(service, journey, stepIndex);
  });

  const bindLocationClicks = () => {
    document.querySelectorAll('#gps-locations .gps-item').forEach((item) => {
      item.addEventListener('click', () => {
        journey.selectedLocationIndex = Number(item.dataset.loc);
        saveJourneys();
        document.querySelectorAll('#gps-locations .gps-item').forEach((el) => el.classList.remove('selected'));
        item.classList.add('selected');
        refreshWizardCta(service, journey, stepIndex);
      });
    });
  };
  bindLocationClicks();

  document.getElementById('gps-locate-btn')?.addEventListener('click', () => {
    const apply = (coords = null) => {
      updateNearestLocations(service, coords);
      document.querySelectorAll('#gps-locations .gps-item').forEach((item, index) => {
        item.dataset.loc = String(index);
        item.classList.toggle('selected', journey.selectedLocationIndex === index);
      });
      bindLocationClicks();
    };

    if (!navigator.geolocation) {
      apply();
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      apply({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }, () => apply());
  });

  document.getElementById('queue-confirm')?.addEventListener('change', (e) => {
    journey.queueConfirmed = e.target.checked;
    e.target.closest('.confirm-row')?.classList.toggle('is-checked', e.target.checked);
    saveJourneys();
    refreshWizardCta(service, journey, stepIndex);
  });

  document.getElementById('service-confirm')?.addEventListener('change', (e) => {
    journey.serviceConfirmed = e.target.checked;
    e.target.closest('.confirm-row')?.classList.toggle('is-checked', e.target.checked);
    saveJourneys();
    refreshWizardCta(service, journey, stepIndex);
  });

  document.getElementById('done-chat-btn')?.addEventListener('click', () => {
    navigate('/chat', { serviceId: service.id, autoMessage: 'ฉันเตรียมเอกสารเรียบร้อยแล้ว มีอะไรที่ต้องรู้เพิ่มเติมไหม?' });
  });

  document.getElementById('cta-ready')?.addEventListener('click', () => {
    if (!isJourneyStepComplete(service, journey, stepIndex)) return;

    if (current.key === 'done') {
      journey.completed = true;
      saveJourneys();
      navigate('/');
      return;
    }

    const nextIndex = Math.min(stepIndex + 1, JOURNEY_STEPS.length - 1);
    journey.unlockedStep = Math.max(journey.unlockedStep, nextIndex);
    journey.currentStep = nextIndex;
    saveJourneys();
    navigate('/service', { serviceId: service.id, step: JOURNEY_STEPS[nextIndex].key });
  });
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
                  <div class="service-card-desc">${s.checkedCount}/${s.totalCount} รายการ · ${JOURNEY_STEPS[getJourneyState(s.id).currentStep]?.label || 'เริ่มต้น'}</div>
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
      state.journeys = {};
      saveChecked();
      saveJourneys();
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
