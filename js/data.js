(function() {
    window.LansData = {
        heroSlides: [
            {
                eyebrow: 'Evidence-Based Integrative Care',
                title: 'Precision Health Engineered for <span style="color: var(--secondary-blue);">Generational Vitality</span>',
                description: 'At Lans Wellness Clinic, we converge advanced genomic profiling, predictive diagnostics, and personalized treatment plans to prevent illness and restore optimal health.',
                buttonText: 'Reserve Consultation',
                buttonIcon: 'fa-calendar-check',
                buttonTarget: 'appointmentModal',
                secondaryLink: 'Explore Pathways',
                secondaryTarget: 'clinical-pathways',
                metrics: [
                    { icon: 'fa-heart-pulse', value: '99.4%', label: 'Diagnostic Accuracy' },
                    { icon: 'fa-microscope', value: '40+', label: 'Testing Suites' }
                ],
                image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
                imageAlt: 'Lans Wellness Clinic High Tech Consultation',
                quote: '"Restoring balance before symptoms manifest."',
                quoteAuthor: 'Clinical Philosophy',
                badge: 'ISO 15189 Certified',
                badgeSub: 'International Standard'
            },
            {
                eyebrow: 'Next-Gen Diagnostics',
                title: 'Early Detection That Changes Your <span style="color: var(--accent-cyan);">Health Trajectory</span>',
                description: 'Discover hidden cardiovascular risks, hormonal imbalances, and cellular inflammation with our non-invasive 360 Comprehensive Longevity Scan.',
                buttonText: 'Book Longevity Scan',
                buttonIcon: 'fa-shield-halved',
                buttonTarget: 'appointmentModal',
                secondaryLink: 'Laboratory Capabilities',
                secondaryTarget: 'diagnostics',
                metrics: [
                    { icon: 'fa-dna', value: '24-Hour', label: 'Biomarker Turnaround' },
                    { icon: 'fa-user-shield', value: '1:1', label: 'Consultant Dedication' }
                ],
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
                imageAlt: 'Advanced medical consultation',
                quote: '"Empowered decisions start with deep insight."',
                quoteAuthor: 'Diagnostic Protocol',
                badge: 'Same-Day Action Plan',
                badgeSub: 'Integrated Therapeutics'
            }
        ],

        pathways: [
            {
                id: 'cardio-metabolic',
                category: 'preventive',
                icon: 'fa-heart-pulse',
                title: 'Cardio-Metabolic',
                description: 'Advanced arterial elasticity testing, lipid particle fractionation, and glycemic optimization strategies.',
                badge: 'Preventive Protocol',
                detailTitle: 'Cardio-Metabolic Health',
                detailBody: 'Our specialized cardio-metabolic screening goes beyond conventional cholesterol panels to assess total vascular integrity and metabolic longevity.'
            },
            {
                id: 'neuro-cognitive',
                category: 'vitality',
                icon: 'fa-brain',
                title: 'Neuro-Cognitive',
                description: 'Addressing neuroinflammation, cognitive fatigue, and circadian rhythm optimization using targeted biomarker analysis.',
                badge: 'Vitality Support',
                detailTitle: 'Neuro-Cognitive Balance',
                detailBody: 'Personalized neuro-nutrient programs and sleep-cycle modulation engineered for executive focus and stress resilience.'
            },
            {
                id: 'immunological',
                category: 'chronic',
                icon: 'fa-shield-virus',
                title: 'Immunological',
                description: 'Resolving autoimmune responses, systemic inflammatory cascades, and recurring immunological depletion.',
                badge: 'Chronic Care',
                detailTitle: 'Immunological Health',
                detailBody: 'Targeted immune-modulation regimens designed to mitigate inflammatory stressors and calibrate cellular defense mechanisms.'
            },
            {
                id: 'endocrine',
                category: 'vitality',
                icon: 'fa-seedling',
                title: 'Endocrine Balance',
                description: 'Bio-identical hormone evaluations, adrenal burnout recovery, and thyroid function optimization.',
                badge: 'Vitality Support',
                detailTitle: 'Endocrine & Hormone Care',
                detailBody: 'Calibrated hormonal balancing protocols designed to boost daytime stamina, regulate metabolism, and restore cellular energy.'
            },
            {
                id: 'orthopedic',
                category: 'preventive',
                icon: 'fa-bone',
                title: 'Orthopedic Care',
                description: 'Non-surgical joint preservation, regenerative platelet therapy, and biomechanical posture calibration.',
                badge: 'Preventive Care',
                detailTitle: 'Orthopedic Rehabilitation',
                detailBody: 'Focusing on kinetic preservation, functional flexibility, and long-term joint cartilage longevity.'
            },
            {
                id: 'microbiome',
                category: 'chronic',
                icon: 'fa-bacteria',
                title: 'Microbiome Care',
                description: 'Full-sequencing microbiome diagnostics, mucosal lining repair, and customized nutritional biology.',
                badge: 'Chronic Care',
                detailTitle: 'Gut Microbiome Restoration',
                detailBody: 'Restoring gut barrier integrity to eliminate food-induced inflammation and enhance direct nutrient absorption.'
            }
        ],

        facilityFeatures: [
            {
                icon: 'fa-atom',
                title: 'Low-Radiation Digital Imaging',
                description: 'High-definition bone density and soft tissue evaluations.'
            },
            {
                icon: 'fa-temperature-arrow-down',
                title: 'Cryo-Therapeutic & Recovery Suites',
                description: 'Accelerated vascular regeneration and systemic anti-inflammatory chambers.'
            },
            {
                icon: 'fa-flask-vial',
                title: 'Certified Molecular Pathology Lab',
                description: 'Automated biochemical assays producing accurate clinical results in hours.'
            }
        ],

        testimonials: [
            {
                name: 'Lemuel Owusu-Ansah',
                role: 'Metabolic Recovery Patient',
                image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                text: 'The depth of information provided after my initial 360 Scan was astonishing. Rather than merely handing me prescriptions, Lans Wellness built an incremental lifestyle and cellular protocol that restored my baseline energy within two months.',
                stars: 5
            },
            {
                name: 'Lemuel Owusu-Ansah',
                role: 'Cardiovascular Preventive Patient',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                text: 'No rushed five-minute checkups. The clinicians at Lans Wellness took over an hour to go through my biomarker history. The digital coordination between their in-house diagnostic lab and treatment staff is best-in-class.',
                stars: 5
            }
        ],

        insights: [
            {
                image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=80',
                category: 'Cardio Biology',
                date: 'Sep 2026',
                title: 'Mitochondrial Health as a Precursor to Heart Longevity',
                link: '#'
            },
            {
                image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80',
                category: 'Nutritional Science',
                date: 'Aug 2026',
                title: 'The Anti-Inflammatory Index: Balancing Gut Microbes',
                link: '#'
            },
            {
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
                category: 'Longevity',
                date: 'Jul 2026',
                title: 'Annual Comprehensive Biomarker Benchmarks',
                link: '#'
            }
        ],

        footer: {
            brand: 'Lans Wellness',
            tagline: 'Pioneering integrative clinical medicine, predictive diagnostics, and longevity solutions designed to sustain human vitality across every chapter of life.',
            social: [
                { icon: 'fa-linkedin-in', label: 'LinkedIn' },
                { icon: 'fa-x-twitter', label: 'Twitter' },
                { icon: 'fa-facebook-f', label: 'Facebook' },
                { icon: 'fa-instagram', label: 'Instagram' }
            ],
            pathways: [
                { label: 'Cardio-Metabolic', target: 'clinical-pathways' },
                { label: 'Neuro-Cognitive', target: 'clinical-pathways' },
                { label: 'Immunological', target: 'clinical-pathways' },
                { label: 'Endocrine Balance', target: 'clinical-pathways' },
                { label: 'Orthopedic Care', target: 'clinical-pathways' },
                { label: 'Microbiome Care', target: 'clinical-pathways' }
            ],
            facilities: [
                { label: 'Pathology Laboratory', target: 'diagnostics' },
                { label: 'Digital Imaging Suite', target: 'diagnostics' },
                { label: 'Cryotherapy Pods', target: 'diagnostics' },
                { label: 'Executive Suites', target: 'diagnostics' },
                { label: 'Patient Portal', target: 'portalModal' }
            ],
            contact: {
                email: ['hello@lemuelowusuansah.org', 'hello@lemuelowusuansah.org'],
                phone: ['+233 245791297', '+233 59 817 6689'],
                address: 'Lans Wellness Clinical Pavilion, 450 Health Avenue, Suite 800'
            }
        },

        bookingPathways: [
            'Comprehensive 360 Longevity Scan',
            'Cardio-Metabolic Health',
            'Neuro-Cognitive Balance',
            'Endocrine & Hormone Restoration',
            'Gut Microbiome Sequencing'
        ],

        sessionTypes: [
            'On-Site Consultation & Diagnostics',
            'Initial Tele-Medicine Triage'
        ]
    };
})();