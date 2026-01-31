// Translations Object
const translations = {
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-greeting': "Hello, I'm",
        'hero-subtitle': 'Information Systems Graduate | Administration & Operational Support',
        'hero-summary': 'Information Systems graduate focused on service administration, operational data management, and system documentation. Committed to delivering accuracy and efficiency through structured workflows and SOP compliance.',
        'btn-download': 'Download CV',
        'btn-contact': 'Contact Me',
        'about-title': 'About Me',
        'about-p1': 'I am an Information Systems graduate with proven experience in participant training services, service administration, and operational data management within government institutions. I specialize in bridging the gap between administrative needs and system requirements.',
        'about-p2': 'My expertise includes developing system documentation such as SRS and Test Plans, as well as managing operational flows based on strict SOPs. I am a meticulous and communicative professional, dedicated to supporting administrative processes and structured system analysis.',
        'skills-title': 'Skills & Expertise',
        'skills-admin-title': 'Administration & Service',
        'skills-admin-item1': 'Participant/customer service (reception and service information)',
        'skills-admin-item2': 'Registration administration and data management',
        'skills-admin-item3': 'Document archiving and report preparation',
        'skills-admin-item4': 'Service coordination according to SOP',
        'skills-data-title': 'Analytics & System Documentation',
        'skills-data-item1': 'Excel/Google Sheets (PivotTable, VLOOKUP/XLOOKUP, data validation, charts)',
        'skills-data-item2': 'SRS and Test Plan preparation (IEEE 829)',
        'skills-data-item3': 'Minutes and activity documentation',
        'skills-data-item4': 'RapidMiner (basic)',
        'skills-system-title': 'Tools',
        'skills-system-item1': 'Microsoft Office and Google Workspace',
        'skills-system-item2': 'Odoo (ERP – basic)',
        'skills-system-item3': 'Genesys Cloud (basic administration)',
        'skills-system-item4': 'Figma/Canva',
        'skills-system-item5': 'Postman (basic)',
        'skills-soft-title': 'Soft Skills',
        'skills-soft-item1': 'Oral and written communication',
        'skills-soft-item2': 'Precision/Attention to detail',
        'skills-soft-item3': 'Time management',
        'skills-soft-item4': 'Problem solving',
        'skills-soft-item5': 'SOP discipline',
        'experience-title': 'Professional Experience',
        'experience-date1': 'Sep 2024 – Dec 2024',
        'experience-position1': 'Internship – ICT Learning Instructor',
        'experience-company1': 'Department of Communication and Informatics, Surabaya City',
        'experience-loc1': 'Surabaya, East Java',
        'experience-desc1-item1': 'Serving computer training participants as the front line of service, from reception and registration to providing activity information',
        'experience-desc1-item2': 'Performing participant registration administration, data verification, and attendance recap',
        'experience-desc1-item3': 'Handling participant inquiries regarding schedules, materials, and training technicalities with clear and polite communication',
        'experience-desc1-item4': 'Preparing training activity reports periodically and neatly',
        'experience-desc1-item5': 'Managing service documentation and ensuring data is accurate and compliant with SOPs',
        'experience-desc1-item6': 'Coordinating with instructors and internal teams to ensure smooth training service delivery',
        'experience-date2': 'Sep 2022 – Sep 2023',
        'experience-position2': 'Event Organizer (Preneurship)',
        'experience-company2': 'Radio Terminal UNESA',
        'experience-loc2': 'Surabaya, East Java',
        'experience-desc2-item1': 'Managing participant activity administration',
        'experience-desc2-item2': 'Preparing operational checklists and event SOPs',
        'experience-desc2-item3': 'Performing inventory recording and activity reporting',
        'experience-desc2-item4': 'Supporting smooth participant service during the event',
        'experience-date3': 'Aug 2022 – Sep 2023',
        'experience-position3': 'Cluster Person in Charge',
        'experience-company3': 'PKKMB FT UNESA',
        'experience-loc3': 'Surabaya, East Java',
        'experience-desc3-item1': 'Acting as the primary liaison between participants and the committee',
        'experience-desc3-item2': 'Managing participant data and centralized communication',
        'experience-desc3-item3': 'Preparing daily activity reports',
        'projects-title': 'Selected Projects',
        'project1-title': 'Software Requirements Specification (SRS) – IKIAE',
        'project1-desc': 'Preparing system requirements documents including functional and non-functional requirements, and system flow overview as a basis for development.',
        'project2-title': 'Test Plan (IEEE 829) – SPK Wisata Surabaya',
        'project2-desc': 'Preparing system test plan documents based on IEEE 829 standards, including test scenarios and test results recording.',
        'project3-title': 'CSF Analysis – PT KAI (Case Study)',
        'project3-desc': 'Identifying Critical Success Factors and performance indicators to understand the organizational strategic needs.',
        'project4-title': 'Risk Policy SOP (Case Study)',
        'project4-desc': 'Drafting simple risk management SOPs along with handling flows and process documentation.',
        'project5-title': 'Contact Center Administration – Genesys Cloud',
        'project5-desc': 'Creating basic Inbound IVR flows, setting up WebChat, and API testing using Postman to understand system integration flows.',
        'project6-title': 'Odoo ERP Implementation – Camel Shoes',
        'project6-desc': 'Studying and documenting Sales & Inventory module processes as a simulation of ERP system implementation in business operations.',
        'edu-training-title': 'Education & Training',
        'edu-tag': 'Education',
        'training-tag': 'Training',
        'edu-date': 'Aug 2021 – Jul 2025',
        'edu-degree': 'Bachelor of Information Systems',
        'edu-university': 'State University of Surabaya',
        'edu-loc': 'Surabaya, East Java',
        'training-date': 'Feb 2024 – Jun 2024',
        'training-course': 'Genesys Cloud for Customer Experience',
        'training-provider': 'Solutif (PT. Solusi Tiga Selaras)',
        'training-loc': 'South Jakarta, Jakarta',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Interested in collaborating? Feel free to reach out.',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Message',
        'form-send': 'Send Message'
    },
    'id': {
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-experience': 'Pengalaman',
        'nav-projects': 'Proyek',
        'nav-contact': 'Kontak',
        'hero-greeting': 'Halo, Saya',
        'hero-subtitle': 'Lulusan Sistem Informasi | Administrasi & Support Operasional',
        'hero-summary': 'Lulusan Sistem Informasi yang berfokus pada administrasi layanan, pengelolaan data operasional, dan dokumentasi sistem. Berkomitmen pada akurasi dan efisiensi kerja melalui alur kerja yang terstruktur dan kepatuhan terhadap SOP.',
        'btn-download': 'Unduh CV',
        'btn-contact': 'Hubungi Saya',
        'about-title': 'Tentang Saya',
        'about-p1': 'Saya adalah lulusan Sistem Informasi dengan pengalaman dalam pelayanan peserta pelatihan, administrasi layanan, serta pengelolaan data operasional di instansi pemerintah. Saya memiliki minat besar dalam memastikan kelancaran operasional melalui manajemen data yang baik.',
        'about-p2': 'Terbiasa menyusun dokumentasi sistem seperti SRS dan Test Plan, serta memahami alur operasional berbasis SOP. Saya pribadi yang teliti, komunikatif, dan mampu mendukung proses administrasi maupun kebutuhan analisis sistem secara terstruktur.',
        'skills-title': 'Keahlian & Kompetensi',
        'skills-admin-title': 'Administrasi & Pelayanan',
        'skills-admin-item1': 'Pelayanan peserta/pelanggan (penerimaan dan informasi layanan)',
        'skills-admin-item2': 'Administrasi pendaftaran dan pengelolaan data',
        'skills-admin-item3': 'Pengarsipan dokumen dan penyusunan laporan',
        'skills-admin-item4': 'Koordinasi layanan sesuai SOP',
        'skills-data-title': 'Analitik & Dokumentasi Sistem',
        'skills-data-item1': 'Excel/Google Sheets (PivotTable, VLOOKUP/XLOOKUP, validasi data, grafik)',
        'skills-data-item2': 'Penyusunan SRS dan Test Plan (IEEE 829)',
        'skills-data-item3': 'Notulensi dan dokumentasi aktivitas',
        'skills-data-item4': 'RapidMiner (dasar)',
        'skills-system-title': 'Tools',
        'skills-system-item1': 'Microsoft Office dan Google Workspace',
        'skills-system-item2': 'Odoo (ERP – dasar)',
        'skills-system-item3': 'Genesys Cloud (administrasi dasar)',
        'skills-system-item4': 'Figma/Canva',
        'skills-system-item5': 'Postman (dasar)',
        'skills-soft-title': 'Soft Skills',
        'skills-soft-item1': 'Komunikasi lisan dan tertulis',
        'skills-soft-item2': 'Ketelitian',
        'skills-soft-item3': 'Manajemen waktu',
        'skills-soft-item4': 'Problem solving',
        'skills-soft-item5': 'Disiplin terhadap SOP',
        'experience-title': 'Pengalaman Profesional',
        'experience-date1': 'September 2024 – Desember 2024',
        'experience-position1': 'Magang – Instruktur Pembelajaran TIK',
        'experience-company1': 'Dinas Komunikasi dan Informatika Kota Surabaya',
        'experience-loc1': 'Surabaya, Jawa Timur',
        'experience-desc1-item1': 'Melayani peserta pelatihan komputer sebagai garda depan layanan, mulai dari penerimaan, registrasi, hingga pemberian informasi kegiatan',
        'experience-desc1-item2': 'Melakukan administrasi pendaftaran peserta, verifikasi data, dan rekap kehadiran',
        'experience-desc1-item3': 'Menangani pertanyaan peserta terkait jadwal, materi, dan teknis pelatihan dengan komunikasi yang jelas dan sopan',
        'experience-desc1-item4': 'Menyusun laporan kegiatan pelatihan secara berkala dan rapi',
        'experience-desc1-item5': 'Mengelola dokumentasi layanan serta memastikan data akurat dan sesuai SOP',
        'experience-desc1-item6': 'Berkoordinasi dengan instruktur dan tim internal untuk memastikan kelancaran pelayanan pelatihan',
        'experience-date2': 'September 2022 – September 2023',
        'experience-position2': 'Event Organizer (Preneurship)',
        'experience-company2': 'Radio Terminal UNESA',
        'experience-loc2': 'Surabaya, Jawa Timur',
        'experience-desc2-item1': 'Mengelola administrasi peserta kegiatan',
        'experience-desc2-item2': 'Menyusun checklist operasional dan SOP acara',
        'experience-desc2-item3': 'Melakukan pencatatan inventaris dan laporan kegiatan',
        'experience-desc2-item4': 'Mendukung kelancaran pelayanan peserta selama acara berlangsung',
        'experience-date3': 'Agustus 2022 – September 2023',
        'experience-position3': 'Penanggung Jawab Gugus',
        'experience-company3': 'PKKMB FT UNESA',
        'experience-loc3': 'Surabaya, Jawa Timur',
        'experience-desc3-item1': 'Menjadi penghubung utama antara peserta dan panitia',
        'experience-desc3-item2': 'Mengelola data peserta dan komunikasi terpusat',
        'experience-desc3-item3': 'Menyusun laporan harian kegiatan',
        'projects-title': 'Proyek Terpilih',
        'project1-title': 'Software Requirements Specification (SRS) – IKIAE',
        'project1-desc': 'Menyusun dokumen kebutuhan sistem meliputi kebutuhan fungsional, non-fungsional, dan gambaran alur sistem sebagai dasar pengembangan.',
        'project2-title': 'Test Plan (IEEE 829) – SPK Wisata Surabaya',
        'project2-desc': 'Menyusun dokumen rencana pengujian sistem berdasarkan standar IEEE 829, termasuk skenario uji dan pencatatan hasil pengujian.',
        'project3-title': 'Analisis CSF – PT KAI (Studi Kasus)',
        'project3-desc': 'Melakukan identifikasi Critical Success Factors dan indikator kinerja untuk memahami kebutuhan strategis organisasi.',
        'project4-title': 'SOP Kebijakan Risiko (Studi Kasus)',
        'project4-desc': 'Menyusun draft SOP pengelolaan risiko sederhana beserta alur penanganan dan dokumentasi proses.',
        'project5-title': 'Administrasi Contact Center – Genesys Cloud',
        'project5-desc': 'Membuat alur dasar Inbound IVR, melakukan setup WebChat, serta pengujian API menggunakan Postman untuk memahami alur integrasi sistem.',
        'project6-title': 'Implementasi ERP Odoo – Camel Shoes',
        'project6-desc': 'Mempelajari dan mendokumentasikan proses modul Sales & Inventory sebagai simulasi penerapan sistem ERP dalam operasional bisnis.',
        'edu-training-title': 'Pendidikan & Pelatihan',
        'edu-tag': 'Pendidikan',
        'training-tag': 'Pelatihan',
        'edu-date': 'Agu 2021 – Jul 2025',
        'edu-degree': 'S1 Sistem Informasi',
        'edu-university': 'Universitas Negeri Surabaya',
        'edu-loc': 'Surabaya, Jawa Timur',
        'training-date': 'Feb 2024 – Jun 2024',
        'training-course': 'Genesys Cloud for Customer Experience',
        'training-provider': 'Solutif (PT. Solusi Tiga Selaras)',
        'training-loc': 'Jakarta Selatan, DKI Jakarta',
        'contact-title': 'Hubungi Saya',
        'contact-subtitle': 'Tertarik bekerja sama? Jangan ragu untuk menghubungi saya.',
        'form-name': 'Nama',
        'form-email': 'Email',
        'form-message': 'Pesan',
        'form-send': 'Kirim Pesan'
    }
};

// Variables
let currentLang = localStorage.getItem('lang') || 'id';

// DOM Elements
const langToggle = document.getElementById('lang-toggle');

// Initialize
document.documentElement.setAttribute('lang', currentLang);
updateLangButtonUI(currentLang);
applyLanguage(currentLang);

// Event Listeners
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('lang', currentLang);
    updateLangButtonUI(currentLang);
    applyLanguage(currentLang);
});

// Functions
function updateLangButtonUI(lang) {
    const spans = langToggle.querySelectorAll('.lang-text');
    // Assuming structure: [0] = ID, [2] = EN (divider is [1] if selected by class, but let's query specific texts if possible or just rebuild innerHTML)
    // Actually simpler: Just set innerHTML based on state or toggle classes. 
    // Let's use clean approach:
    if (lang === 'id') {
        langToggle.innerHTML = '<span class="lang-text active">ID</span> <span class="divider">|</span> <span class="lang-text">EN</span>';
    } else {
        langToggle.innerHTML = '<span class="lang-text">ID</span> <span class="divider">|</span> <span class="lang-text active">EN</span>';
    }
}

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA') {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update placeholders manually
    if (lang === 'id') {
        if (document.getElementById('name')) document.getElementById('name').placeholder = 'Nama Anda';
        if (document.getElementById('email')) document.getElementById('email').placeholder = 'Email Anda';
        if (document.getElementById('message')) document.getElementById('message').placeholder = 'Bagaimana saya bisa membantu?';
    } else {
        if (document.getElementById('name')) document.getElementById('name').placeholder = 'Your Name';
        if (document.getElementById('email')) document.getElementById('email').placeholder = 'Your Email';
        if (document.getElementById('message')) document.getElementById('message').placeholder = 'How can I help you?';
    }
}

// Mobile Menu Toggle (Preserved from original)
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scrolling (Preserved)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Fade-in Animation (Preserved)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Ensure loader stays at least 1s for better UX/Elegance
    setTimeout(() => {
        loader.classList.add('loader-hidden');
        
        loader.addEventListener('transitionend', () => {
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        });
    }, 1000);
});

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const recipient = 'oksanakhoirunnida.10@gmail.com';

        // Construct Content
        const rawBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const subject = `Portfolio Contact from ${name}`;
        
        // Feedback to user
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "Processing...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        setTimeout(() => {
            // Check if Desktop/Laptop (Simplified check)
            const isDesktop = window.innerWidth > 768;

            if (isDesktop) {
                // Gmail Web Compose URL
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(rawBody)}`;
                window.open(gmailUrl, '_blank');
            } else {
                // Mailto for Mobile
                const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rawBody)}`;
                window.location.href = mailtoLink;
            }
            
            // Reset button and form after a while
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.opacity = "1";
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 500);
    });
}
