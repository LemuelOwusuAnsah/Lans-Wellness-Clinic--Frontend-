(function() {
    function renderApp() {
        var app = document.getElementById('app');
        app.innerHTML = renderTopBar() + renderNav() + renderHero() + renderPathwaysSection() + renderInfrastructureSection() + renderCTASection() + renderTestimonialsSection() + renderInsightsSection() + renderFooter() + renderModals() + renderThemeToggle();
    }

    function renderTopBar() {
        return '<div class="py-2 text-center small top-bar"><div class="container d-flex justify-content-between align-items-center"><span class="top-bar-message"><i class="fa-solid fa-shield-heart me-2 text-info"></i> Accredited Center for Precision Medicine &amp; Preventive Diagnostics</span><div class="d-none d-md-flex gap-3"><a href="mailto:hello@lemuelowusuansah.org" class="top-bar-link"><i class="fa-regular fa-envelope me-1"></i> hello@lemuelowusuansah.org</a><span class="top-bar-divider">|</span><span class="top-bar-phone"><i class="fa-solid fa-phone me-1"></i> Urgent Care Line: +233 245791297</span></div></div></div>';
    }

    function renderNav() {
        return '<nav class="navbar navbar-expand-xl navbar-lans sticky-top py-3"><div class="container"><a class="navbar-brand-logo" href="#"><div class="brand-icon-mark"><i class="fa-solid fa-dna"></i></div><div>Lans <span style="color: var(--secondary-blue); font-weight: 400;">Wellness</span></div></a><button class="navbar-toggler navbar-toggler-sandwich" type="button" data-bs-toggle="collapse" data-bs-target="#lansNavContent" aria-controls="lansNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa-solid fa-bars"></i></button><div class="collapse navbar-collapse" id="lansNavContent"><ul class="navbar-nav mx-auto mb-2 mb-xl-0"><li class="nav-item"><a class="nav-link active" href="#home">Home</a></li><li class="nav-item"><a class="nav-link" href="#clinical-pathways">Pathways</a></li><li class="nav-item"><a class="nav-link" href="#diagnostics">Labs</a></li><li class="nav-item"><a class="nav-link" href="#patient-experience">Reviews</a></li><li class="nav-item"><a class="nav-link" href="#research">Insights</a></li><li class="nav-item"><a class="nav-link" href="#contact-us">Centers</a></li></ul><div class="d-flex align-items-center gap-2 nav-action-buttons"><button class="btn btn-lans-outline" data-bs-toggle="modal" data-bs-target="#portalModal"><i class="fa-regular fa-id-badge me-2"></i> Patient Portal</button><button class="btn btn-lans-primary" data-bs-toggle="modal" data-bs-target="#appointmentModal">Book Consultation <i class="fa-solid fa-arrow-right ms-2"></i></button></div></div></div></nav>';
    }

    function renderHero() {
        var slides = window.LansData.heroSlides;
        var indicators = '';
        var items = '';

        slides.forEach(function(slide, index) {
            indicators += '<button type="button" data-bs-target="#lansHeroCarousel" data-bs-slide-to="' + index + '" class="' + (index === 0 ? 'active' : '') + '" aria-current="' + (index === 0 ? 'true' : 'false') + '"></button>';

            items += '<div class="carousel-item ' + (index === 0 ? 'active' : '') + '"><div class="row align-items-center carousel-item-content g-5"><div class="col-lg-6 reveal-on-scroll slide-left is-revealed"><span class="brand-eyebrow mb-3"><i class="fa-solid fa-certificate"></i> ' + slide.eyebrow + '</span><h1 class="display-5 fw-bold text-dark mt-2 mb-3">' + slide.title + '</h1><p class="lead text-secondary mb-4">' + slide.description + '</p><div class="d-flex flex-wrap gap-3 mb-5"><button class="btn btn-lans-primary" data-bs-toggle="modal" data-bs-target="#' + slide.buttonTarget + '">' + slide.buttonText + ' <i class="fa-solid ' + slide.buttonIcon + ' ms-2"></i></button><a href="#' + slide.secondaryTarget + '" class="btn btn-lans-outline">' + slide.secondaryLink + '</a></div><div class="row g-3">';

            slide.metrics.forEach(function(m) {
                items += '<div class="col-sm-6"><div class="hero-metric-chip"><div class="hero-metric-icon"><i class="fa-solid ' + m.icon + '"></i></div><div><h5 class="fw-bold mb-0">' + m.value + '</h5><small class="text-muted">' + m.label + '</small></div></div></div>';
            });

            items += '</div></div><div class="col-lg-6 reveal-on-scroll slide-right is-revealed"><div class="hero-visual-frame"><img src="' + slide.image + '" alt="' + slide.imageAlt + '" class="w-100 object-fit-cover" style="height: 500px;"><div class="hero-overlay-callout"><p class="editorial-quote mb-1">' + slide.quote + '</p><small class="text-muted fw-semibold">— ' + slide.quoteAuthor + '</small></div><div class="hero-badge-certified"><i class="fa-solid fa-circle-check text-success fs-3"></i><div><h6 class="mb-0 fw-bold">' + slide.badge + '</h6><small class="text-muted">' + slide.badgeSub + '</small></div></div></div></div></div></div>';
        });

        return '<header class="hero-carousel-section" id="home"><div class="container"><div id="lansHeroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000"><div class="carousel-inner">' + items + '</div><div class="d-flex justify-content-between align-items-center mt-4"><div class="carousel-indicators position-static m-0 justify-content-start">' + indicators + '</div><div class="d-flex gap-2"><button class="btn btn-outline-primary rounded-circle" type="button" data-bs-target="#lansHeroCarousel" data-bs-slide="prev" style="width: 40px; height: 40px; padding: 0;"><i class="fa-solid fa-chevron-left"></i></button><button class="btn btn-outline-primary rounded-circle" type="button" data-bs-target="#lansHeroCarousel" data-bs-slide="next" style="width: 40px; height: 40px; padding: 0;"><i class="fa-solid fa-chevron-right"></i></button></div></div></div></div></header>';
    }

    function renderPathwaysSection() {
        var data = window.LansData;
        var cards = '';

        data.pathways.forEach(function(p) {
            cards += '<div class="col-md-6 col-lg-4 pathway-item-col" data-category="' + p.category + '"><div class="pathway-card reveal-on-scroll"><div><div class="pathway-icon-box"><i class="fa-solid ' + p.icon + '"></i></div><h4 class="fw-bold mb-2">' + p.title + '</h4><p class="text-muted small mb-4">' + p.description + '</p></div><div class="d-flex justify-content-between align-items-center pt-3 border-top"><span class="badge bg-light text-primary fw-semibold">' + p.badge + '</span><a href="javascript:void(0)" onclick="window.openServiceDetail(\'' + p.detailTitle + '\', \'' + p.detailBody + '\')" class="text-decoration-none fw-semibold" style="color: var(--secondary-blue);">View Specs <i class="fa-solid fa-arrow-right-long ms-1"></i></a></div></div></div>';
        });

        return '<section class="py-5 my-3" id="clinical-pathways"><div class="container py-4"><div class="row align-items-end mb-5 reveal-on-scroll"><div class="col-lg-7"><span class="brand-eyebrow mb-2">Targeted Care Disciplines</span><h2 class="display-6 fw-bold text-dark mt-2">Comprehensive Clinical Pathways</h2><p class="text-muted mb-0">Every clinical pathway merges advanced therapeutic modalities with thorough follow-through to foster sustained physiological well-being.</p></div><div class="col-lg-5 text-lg-end mt-4 mt-lg-0"><div class="d-inline-flex flex-wrap" id="pathwayFilterControls"><button class="filter-tab-pill active" data-filter="all">All Disciplines</button><button class="filter-tab-pill" data-filter="preventive">Preventive</button><button class="filter-tab-pill" data-filter="chronic">Chronic Care</button><button class="filter-tab-pill" data-filter="vitality">Vitality</button></div></div></div><div class="row g-4" id="pathwayGrid">' + cards + '</div></div></section>';
    }

    function renderInfrastructureSection() {
        var features = '';
        window.LansData.facilityFeatures.forEach(function(f) {
            features += '<div class="facility-feature-badge"><div class="facility-badge-icon"><i class="fa-solid ' + f.icon + '"></i></div><div><h6 class="fw-bold mb-1">' + f.title + '</h6><small class="text-muted">' + f.description + '</small></div></div>';
        });

        return '<section class="infrastructure-section py-5" id="diagnostics"><div class="container py-4"><div class="row align-items-center g-5"><div class="col-lg-6 reveal-on-scroll slide-left"><span class="brand-eyebrow mb-2">Clinical Infrastructure</span><h2 class="display-6 fw-bold mb-3">World-Class Diagnostic Capabilities</h2><p class="text-muted mb-4">Lans Wellness Clinic maintains an on-site testing suite engineered to deliver accurate, rapid biological metrics while keeping patient comfort at the forefront.</p><div class="d-flex flex-column gap-3 mb-4">' + features + '</div><button class="btn btn-lans-primary" data-bs-toggle="modal" data-bs-target="#appointmentModal">Schedule Diagnostic Tour <i class="fa-solid fa-arrow-right ms-2"></i></button></div><div class="col-lg-6 reveal-on-scroll slide-right"><div class="position-relative"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80" alt="Lans Wellness Clinic facility exterior and suites" class="w-100 rounded-4 shadow-lg object-fit-cover" style="height: 480px;"><div class="p-4 bg-white rounded-3 shadow position-absolute bottom-0 start-0 m-4 d-none d-sm-block border-start border-4 border-info"><div class="d-flex align-items-center gap-3"><i class="fa-solid fa-clock-rotate-left fs-2 text-primary"></i><div><h6 class="fw-bold mb-0">Average Wait Time: under 7 Mins</h6><small class="text-muted">Strict schedule adhesion for your convenience</small></div></div></div></div></div></div></div></section>';
    }

    function renderCTASection() {
        return '<section class="container py-5"><div class="booking-cta-strip reveal-on-scroll"><div class="row align-items-center position-relative" style="z-index: 2;"><div class="col-lg-8"><span class="badge bg-white text-primary mb-3 px-3 py-2 rounded-pill fw-bold">Active Consultations</span><h2 class="display-6 fw-bold text-white mb-3">Begin Your Personalized Health Blueprint</h2><p class="text-white-50 lead mb-4 mb-lg-0">Experience medical care designed around the cadence of your life. Book an in-depth intake with our clinical care directors today.</p></div><div class="col-lg-4 text-lg-end"><button class="btn btn-light text-primary btn-lg rounded-pill fw-bold px-4 shadow" data-bs-toggle="modal" data-bs-target="#appointmentModal">Request Appointment <i class="fa-solid fa-calendar-plus ms-2"></i></button></div></div></div></section>';
    }

    function renderTestimonialsSection() {
        var data = window.LansData;
        var items = '';

        data.testimonials.forEach(function(t, index) {
            var stars = '';
            for (var i = 0; i < t.stars; i++) stars += '<i class="fa-solid fa-star"></i>';

            items += '<div class="carousel-item ' + (index === 0 ? 'active' : '') + '"><div class="testimonial-slide-box"><span class="testimonial-quote-mark"><i class="fa-solid fa-quote-right"></i></span><div class="text-warning mb-3">' + stars + '</div><p class="fs-5 fst-italic text-secondary mb-4">"' + t.text + '"</p><div class="d-flex align-items-center gap-3"><img src="' + t.image + '" alt="' + t.name + '" class="rounded-circle object-fit-cover" style="width: 58px; height: 58px;"><div><h6 class="fw-bold mb-0">' + t.name + '</h6><small class="text-muted">' + t.role + '</small></div></div></div></div>';
        });

        return '<section class="py-5" id="patient-experience"><div class="container py-4"><div class="text-center max-w-700 mx-auto mb-5 reveal-on-scroll"><span class="brand-eyebrow mb-2">Verified Patient Journeys</span><h2 class="display-6 fw-bold text-dark">Voices of Lasting Vitality</h2><p class="text-muted">Real outcomes from our integrative diagnostics and therapeutic protocols.</p></div><div class="row justify-content-center"><div class="col-lg-8"><div id="patientTestimonialsCarousel" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner">' + items + '</div><div class="d-flex justify-content-center gap-3 mt-4"><button class="btn btn-outline-primary rounded-circle" type="button" data-bs-target="#patientTestimonialsCarousel" data-bs-slide="prev" style="width: 44px; height: 44px;"><i class="fa-solid fa-arrow-left"></i></button><button class="btn btn-outline-primary rounded-circle" type="button" data-bs-target="#patientTestimonialsCarousel" data-bs-slide="next" style="width: 44px; height: 44px;"><i class="fa-solid fa-arrow-right"></i></button></div></div></div></div></div></section>';
    }

    function renderInsightsSection() {
        var data = window.LansData;
        var cards = '';

        data.insights.forEach(function(i) {
            cards += '<div class="col-md-4"><div class="insight-card reveal-on-scroll"><div class="insight-img-wrapper"><img src="' + i.image + '" alt="' + i.title + '" class="w-100 h-100 object-fit-cover"></div><div class="p-4 d-flex flex-column justify-content-between" style="min-height: 220px;"><div><small class="text-info fw-bold text-uppercase">' + i.category + ' &bull; ' + i.date + '</small><h5 class="fw-bold mt-2">' + i.title + '</h5></div><a href="' + i.link + '" class="fw-semibold text-decoration-none pt-3" style="color: var(--secondary-blue);">Read Clinical Brief <i class="fa-solid fa-arrow-right-long ms-1"></i></a></div></div></div>';
        });

        return '<section class="py-5 bg-light" id="research"><div class="container py-4"><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 reveal-on-scroll"><div><span class="brand-eyebrow mb-2">Clinical Journals &amp; News</span><h2 class="display-6 fw-bold text-dark">Latest Medical Insights</h2><p class="text-muted mb-0">Staying informed on preventive protocols, nutrition biology, and lifestyle diagnostics.</p></div><div class="mt-3 mt-md-0"><a href="#" class="btn btn-lans-outline">Browse All Publications</a></div></div><div class="row g-4">' + cards + '</div></div></section>';
    }

    function renderFooter() {
        var data = window.LansData.footer;
        var social = '';
        var pathways = '';
        var facilities = '';

        data.social.forEach(function(s) {
            social += '<a href="#" class="footer-social-btn" aria-label="' + s.label + '"><i class="fa-brands ' + s.icon + '"></i></a>';
        });

        data.pathways.forEach(function(p) {
            pathways += '<li><a href="#' + p.target + '">' + p.label + '</a></li>';
        });

        data.facilities.forEach(function(f) {
            var target = f.target === 'portalModal' ? 'data-bs-toggle="modal" href="#' + f.target + '"' : 'href="#' + f.target + '"';
            facilities += '<li><a ' + target + '>' + f.label + '</a></li>';
        });

        return '<footer class="footer-lans" id="contact-us"><div class="container"><div class="row g-5 pb-5 border-bottom border-secondary border-opacity-25"><div class="col-lg-4"><div class="d-flex align-items-center gap-2 mb-3"><div class="brand-icon-mark" style="width: 36px; height: 36px; font-size: 1rem;"><i class="fa-solid fa-dna"></i></div><h4 class="text-white fw-bold mb-0">' + data.brand + '</h4></div><p class="text-white-50 mb-4">' + data.tagline + '</p><div>' + social + '</div></div><div class="col-sm-6 col-lg-2"><h6 class="text-white fw-bold text-uppercase mb-3">Pathways</h6><ul class="list-unstyled d-flex flex-column gap-2 small">' + pathways + '</ul></div><div class="col-sm-6 col-lg-2"><h6 class="text-white fw-bold text-uppercase mb-3">Facilities</h6><ul class="list-unstyled d-flex flex-column gap-2 small">' + facilities + '</ul></div><div class="col-lg-4"><h6 class="text-white fw-bold text-uppercase mb-3">Clinic Inquiries</h6><ul class="list-unstyled d-flex flex-column gap-3 small text-white-50"><li class="d-flex align-items-start gap-3"><i class="fa-solid fa-envelope text-info mt-1"></i><div><div>' + data.contact.email[0] + '</div><div>' + data.contact.email[1] + '</div></div></li><li class="d-flex align-items-start gap-3"><i class="fa-solid fa-phone text-info mt-1"></i><div><div>' + data.contact.phone[0] + '</div><div>' + data.contact.phone[1] + '</div></div></li><li class="d-flex align-items-start gap-3"><i class="fa-solid fa-location-dot text-info mt-1"></i><div>' + data.contact.address + '</div></li></ul></div></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 small text-white-50"><div>&copy; 2026 Lans Wellness Clinic. All rights reserved.</div><div class="d-flex gap-3 mt-3 mt-md-0"><a href="#">Privacy Policy</a><span>&bull;</span><a href="#">HIPAA Compliance</a><span>&bull;</span><a href="#">Terms of Care</a></div></div></div></footer>';
    }

    function renderModals() {
        var pathways = '';
        var sessions = '';

        window.LansData.bookingPathways.forEach(function(p) {
            pathways += '<option value="' + p + '">' + p + '</option>';
        });

        window.LansData.sessionTypes.forEach(function(s) {
            sessions += '<option>' + s + '</option>';
        });

        return '<div id="modalContainerInner"><div class="modal fade modal-lans" id="appointmentModal" tabindex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header modal-header-lans"><div><h5 class="modal-title fw-bold" id="appointmentModalLabel">Schedule Your Clinical Assessment</h5><small class="text-white-50">Choose your pathway and preferred clinical timeslot</small></div><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body p-4 p-md-5"><form id="lansBookingForm" onsubmit="window.handleBookingSubmit(event)"><div class="row g-3 mb-4"><div class="col-md-6"><label class="form-label small fw-bold text-secondary">Full Name</label><input type="text" class="form-control rounded-pill px-3" required placeholder="Lemuel Owusu-Ansah"></div><div class="col-md-6"><label class="form-label small fw-bold text-secondary">Email Address</label><input type="email" class="form-control rounded-pill px-3" required placeholder="hello@lemuelowusuansah.org"></div><div class="col-md-6"><label class="form-label small fw-bold text-secondary">Phone Number</label><input type="tel" class="form-control rounded-pill px-3" required placeholder="+233 245791297"></div><div class="col-md-6"><label class="form-label small fw-bold text-secondary">Target Clinical Pathway</label><select class="form-select rounded-pill px-3" id="pathwaySelection">' + pathways + '</select></div><div class="col-md-6"><label class="form-label small fw-bold text-secondary">Preferred Date</label><input type="date" class="form-control rounded-pill px-3" required></div><div class="col-md-6"><label class="form-label small fw-bold text-secondary">Session Type</label><select class="form-select rounded-pill px-3">' + sessions + '</select></div><div class="col-12"><label class="form-label small fw-bold text-secondary">Relevant Health Notes or Symptoms</label><textarea class="form-control rounded-3" rows="3" placeholder="Briefly outline any active conditions or objectives..."></textarea></div></div><div class="d-flex justify-content-end gap-2"><button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button><button type="submit" class="btn btn-lans-primary">Confirm Appointment Details</button></div></form></div></div></div></div><div class="modal fade modal-lans" id="serviceDetailModal" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header modal-header-lans"><h5 class="modal-title fw-bold" id="serviceDetailTitle">Pathway Blueprint</h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body p-4"><p id="serviceDetailBody" class="text-secondary"></p><div class="alert alert-info py-2 small mb-4"><i class="fa-solid fa-circle-info me-1"></i> Protocols include full biomarker reports and follow-up guidance.</div><button class="btn btn-lans-primary w-100" data-bs-target="#appointmentModal" data-bs-toggle="modal">Proceed to Consultation</button></div></div></div></div><div class="modal fade modal-lans" id="portalModal" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header modal-header-lans"><h5 class="modal-title fw-bold">Lans Patient Portal Access</h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body p-4 text-center"><i class="fa-solid fa-lock text-primary fs-1 mb-3"></i><p class="text-secondary mb-3">Log in to view clinical pathology reports, scheduled scans, and direct messages from your wellness consultant.</p><input type="text" class="form-control rounded-pill mb-2" placeholder="Patient Identification #"><input type="password" class="form-control rounded-pill mb-3" placeholder="Access Passcode"><button class="btn btn-lans-primary w-100 mb-2" onclick="alert(\'Portal authenticating via encrypted token...\');">Secure Sign-In</button><small><a href="mailto:support@lemuelowusuansah.org" class="text-decoration-none">Need access assistance? Email support@lemuelowusuansah.org</a></small></div></div></div></div></div>';
    }

    function renderThemeToggle() {
        return '<button id="themeToggleBtn" class="theme-toggle-btn" aria-label="Toggle dark/light mode"><i class="fa-solid fa-moon"></i></button>';
    }

    window.LansRender = {
        renderApp: renderApp
    };
})();