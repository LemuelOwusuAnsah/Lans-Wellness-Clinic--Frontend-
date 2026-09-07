(function() {
    function initFilters() {
        var filterButtons = document.querySelectorAll('#pathwayFilterControls .filter-tab-pill');
        var pathwayCards = document.querySelectorAll('#pathwayGrid .pathway-item-col');

        filterButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterButtons.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                var category = btn.getAttribute('data-filter');

                pathwayCards.forEach(function(card) {
                    var cardCat = card.getAttribute('data-category');
                    if (category === 'all' || cardCat === category) {
                        card.style.display = 'block';
                        setTimeout(function() {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(function() {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    window.LansFilters = {
        init: initFilters
    };
})();