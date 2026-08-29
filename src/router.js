// ============================================
// GovBuddy AI — Simple SPA Router
// ============================================

const routes = {};
let currentPath = '';
let beforeNavigateHook = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path, params = {}) {
  if (beforeNavigateHook) {
    beforeNavigateHook();
  }
  currentPath = path;
  const state = { path, params };
  window.history.pushState(state, '', `#${path}`);
  renderRoute(path, params);
}

export function onBeforeNavigate(fn) {
  beforeNavigateHook = fn;
}

function renderRoute(path, params = {}) {
  const handler = routes[path] || routes['/'];
  if (handler) {
    handler(params);
  }
}

// Handle browser back/forward
window.addEventListener('popstate', (e) => {
  if (e.state) {
    renderRoute(e.state.path, e.state.params);
  } else {
    renderRoute('/');
  }
});

// Parse initial hash
export function initRouter() {
  const hash = window.location.hash.slice(1) || '/';
  renderRoute(hash);
}
