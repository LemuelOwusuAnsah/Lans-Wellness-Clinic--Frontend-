(function() {
    var STORAGE_KEY = 'lans_wellness_theme';

    function getTheme() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved) return saved;
        } catch (e) {}
        return 'light';
    }

    function setTheme(theme) {
        var html = document.documentElement;
        html.setAttribute('data-bs-theme', theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {}
    }

    function toggleTheme() {
        var current = document.documentElement.getAttribute('data-bs-theme') || 'light';
        var next = current === 'light' ? 'dark' : 'light';
        setTheme(next);
        updateButtonIcon(next);
    }

    function updateButtonIcon(theme) {
        var btn = document.getElementById('themeToggleBtn');
        if (!btn) return;
        var icon = btn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }

    function initTheme() {
        var theme = getTheme();
        setTheme(theme);
        updateButtonIcon(theme);

        var btn = document.getElementById('themeToggleBtn');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }
    }

    window.LansTheme = {
        init: initTheme,
        toggle: toggleTheme,
        set: setTheme,
        get: getTheme
    };
})();