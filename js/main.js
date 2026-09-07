(function() {
    function init() {
        LansRender.renderApp();
        LansTheme.init();
        LansFilters.init();

        // Handle nav link click for mobile collapse
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        var navbarCollapse = document.getElementById('lansNavContent');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth < 1200 && navbarCollapse.classList.contains('show')) {
                    var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });

        // Initialize reveal on scroll
        var observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        };

        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(function(el) {
            revealObserver.observe(el);
        });

        // Global function for service detail modal
        window.openServiceDetail = function(title, content) {
            document.getElementById('serviceDetailTitle').innerText = title;
            document.getElementById('serviceDetailBody').innerText = content;
            var modal = new bootstrap.Modal(document.getElementById('serviceDetailModal'));
            modal.show();
        };
    }

    document.addEventListener('DOMContentLoaded', init);
})();