
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const THEME_KEY = 'user-theme';


function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    
    localStorage.setItem(THEME_KEY, newTheme);

    themeToggleBtn.setAttribute('aria-label', `Switch to ${currentTheme} mode`);
}


function loadThemePreference() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        const oppositeTheme = (savedTheme === 'dark') ? 'light' : 'dark';
        themeToggleBtn.setAttribute('aria-label', `Switch to ${oppositeTheme} mode`);
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);

loadThemePreference();