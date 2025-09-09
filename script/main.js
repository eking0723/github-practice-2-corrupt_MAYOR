const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const themeLinks = document.querySelectorAll('.dropdown-content a');
const body = document.body;
const themeIcon = {
    summer: '🌞',
    light: '🔆',
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

    body.classList.remove('summer','light', 'dark', 'spring', 'autumn', 'winter');

    body.classList.add(theme);

    localStorage.setItem('selectedTheme', theme);

    const btnIcon = dropbtn.querySelector('.icon');
    btnIcon.textContent = themeIcon[theme];

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

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    setTheme(savedTheme);
});