const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const themeLinks = document.querySelectorAll('.dropdown-content a');
const body = document.body;
const themeIcon = {
  light: '☀️',
  dark: '🌙',
  spring: '🌷',
  autumn: '🍂',
  winter: '❄️',
};
dropbtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownContent.classList.toggle('show');
});
themeLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const theme = e.currentTarget.getAttribute('data-theme');
    setTheme(theme);
    dropdownContent.classList.remove('show');
  });
});
document.addEventListener('click', () => {
  dropdownContent.classList.remove('show');
});
dropdownContent.addEventListener('click', (e) => {
  e.stopPropagation();
});
function setTheme(theme) {
  // Remove all theme classes
  body.classList.remove('light', 'dark', 'spring', 'autumn', 'winter');

  // Add selected theme
  body.classList.add(theme);

  // Save to localStorage
  localStorage.setItem('selectedTheme', theme);

  // Update button content
  const btnIcon = dropbtn.querySelector('.icon');
  btnIcon.textContent = themeIcon[theme];

  // Update dropdown options
  updateDropdownOptions(theme);
}
function updateDropdownOptions(currentTheme) {
  themeLinks.forEach((link) => {
    const linkTheme = link.getAttribute('data-theme');
    if (linkTheme === currentTheme) {
      link.style.display = 'none';
    } else {
      link.style.display = 'flex';
    }
  });
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'light';
  setTheme(savedTheme);
});
