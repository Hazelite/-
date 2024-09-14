// Mobile navigation toggle
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle('cs-active');
    CSnavbarMenu.classList.toggle('cs-active');
    CSbody.classList.toggle('cs-open');
    ariaExpanded();
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
const body = document.body;

function setDarkMode(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Check for existing preference in localStorage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode) {
    setDarkMode(savedDarkMode === 'true');
} else {
    setDarkMode(darkModePreference.matches);
}

darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}
