// Navigation
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const featureButtons = document.querySelectorAll('[data-goto]');
  
  function navigateToPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      }
    });
  }
  
  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage(link.dataset.page);
    });
  });
  
  // Handle feature button clicks
  featureButtons.forEach(button => {
    button.addEventListener('click', () => {
      navigateToPage(button.dataset.goto);
    });
  });
}

// Initialize the application
function init() {
  initNavigation();
}

// Start the app
init();