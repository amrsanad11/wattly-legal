const language = localStorage.getItem('wattly-language') || 'en';

function setLanguage(nextLanguage) {
  const selected = nextLanguage === 'ar' ? 'ar' : 'en';
  localStorage.setItem('wattly-language', selected);
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-language]').forEach((element) => {
    element.hidden = element.dataset.language !== selected;
  });
  document.querySelectorAll('[data-set-language]').forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.setLanguage === selected ? 'true' : 'false');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-set-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLanguage));
  });
  setLanguage(language);
});
