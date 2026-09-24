let currentLang = 'ta'; // default to Tamil

function toggleLanguage() {
  currentLang = currentLang === 'ta' ? 'en' : 'ta';
  document.getElementById('lang-label').textContent = currentLang.toUpperCase();
  
  // Find all elements with data-ta and data-en attributes
  const elements = document.querySelectorAll('[data-ta][data-en]');
  
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
  
  // Optional: Swap specific fonts based on language
  if (currentLang === 'en') {
    document.documentElement.style.setProperty('--font-tamil', 'var(--font-body)');
  } else {
    document.documentElement.style.setProperty('--font-tamil', "'Noto Sans Tamil', sans-serif");
  }
}
