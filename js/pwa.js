(function() {
    var deferredPrompt = null;
    var installButton = null;

    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
                .then(function(reg) {
                    console.log('Service Worker registered successfully');
                })
                .catch(function(err) {
                    console.log('Service Worker registration failed:', err);
                });
        }
    }

    function setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', function(e) {
            e.preventDefault();
            deferredPrompt = e;
            showInstallButton();
        });

        window.addEventListener('appinstalled', function() {
            console.log('App installed successfully');
            if (installButton) {
                installButton.remove();
                installButton = null;
            }
        });
    }

    function showInstallButton() {
        var container = document.querySelector('.nav-action-buttons');
        if (!container) return;
        if (installButton) return;

        installButton = document.createElement('button');
        installButton.className = 'btn btn-lans-outline btn-sm';
        installButton.innerHTML = '<i class="fa-solid fa-download me-1"></i> Install';
        installButton.addEventListener('click', function() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(function(choice) {
                    if (choice.outcome === 'accepted') {
                        console.log('App installed');
                    }
                    deferredPrompt = null;
                    if (installButton) {
                        installButton.remove();
                        installButton = null;
                    }
                });
            }
        });
        container.prepend(installButton);
    }

    function checkOffline() {
        if (!navigator.onLine) {
            showOfflineBanner();
        }

        window.addEventListener('online', function() {
            hideOfflineBanner();
        });

        window.addEventListener('offline', function() {
            showOfflineBanner();
        });
    }

    function showOfflineBanner() {
        var existing = document.querySelector('.offline-banner');
        if (existing) return;

        var banner = document.createElement('div');
        banner.className = 'offline-banner';
        banner.textContent = '⚠️ You are offline. Some features may be limited.';
        document.body.prepend(banner);
    }

    function hideOfflineBanner() {
        var banner = document.querySelector('.offline-banner');
        if (banner) {
            banner.remove();
        }
    }

    function init() {
        registerServiceWorker();
        setupInstallPrompt();
        checkOffline();
    }

    window.LansPWA = {
        init: init,
        registerServiceWorker: registerServiceWorker,
        setupInstallPrompt: setupInstallPrompt
    };

    document.addEventListener('DOMContentLoaded', function() {
        init();
    });
})();