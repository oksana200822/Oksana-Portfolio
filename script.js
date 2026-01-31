// Translations Object
const translations = {
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-projects': 'System Experience',
        'nav-contact': 'Contact',
        'hero-greeting': "Hello, I'm",
        'hero-subtitle': 'Information Systems Graduate | Administration & Operational Support',
        'hero-summary': 'Information Systems Graduate experienced in service administration and operational data management. Accustomed to recording, validating, and recapping reports according to procedures. Highly detail-oriented, disciplined in following SOPs, and capable of coordinating to ensure smooth operational processes.',
        'btn-download': 'Download CV',
        'btn-contact': 'Contact Me',
        'about-title': 'About Me',
        'about-p1': 'I have a strong Information Systems background focusing on administration, data validation, and operations. I am accustomed to working with high precision and discipline towards procedures to ensure data accuracy and good documentation.',
        'about-p2': 'My ability to maintain data consistency and follow SOPs allows me to support smooth business processes. I am ready to bring my dedication and professionalism to contribute in a corporate and financial service environment.',
        'skills-title': 'Skills & Expertise',
        'skills-admin-title': 'Administration & Operations',
        'skills-admin-item1': 'Data Validation',
        'skills-admin-item2': 'Document Archiving',
        'skills-admin-item3': 'Operational Reports',
        'skills-admin-item4': 'Procedure Documentation',
        'skills-admin-item5': 'Team Coordination',
        'skills-data-title': 'Data Processing',
        'skills-data-item1': 'Microsoft Excel (PivotTable, VLOOKUP/XLOOKUP)',
        'skills-data-item2': 'Microsoft Word',
        'skills-data-item3': 'PowerPoint',
        'skills-data-item4': 'Google Workspace',
        'skills-system-title': 'Systems & Tools',
        'skills-system-item1': 'Contact Center System (Basic)',
        'skills-system-item2': 'Odoo ERP (Basic)',
        'skills-system-item3': 'Service Monitoring',
        'skills-soft-title': 'Soft Skills',
        'skills-soft-item1': 'Detail-oriented',
        'skills-soft-item2': 'Time Management',
        'skills-soft-item3': 'Professional Communication',
        'skills-soft-item4': 'Operational Problem Solving',
        'skills-soft-item5': 'SOP Discipline',
        'experience-title': 'Professional Experience',
        'experience-date1': 'Sep 2024 – Dec 2024',
        'experience-position1': 'ICT Learning Instructor',
        'experience-company1': 'Department of Communication & Informatics, Surabaya City',
        'experience-desc1-item1': 'Participant administration recording and attendance data recap',
        'experience-desc1-item2': 'Periodic activity report preparation',
        'experience-desc1-item3': 'Service documentation management and data accuracy',
        'experience-desc1-item4': 'Internal coordination according to procedures',
        'experience-date2': 'Sep 2022 – Sep 2023',
        'experience-position2': 'Event Organizer (Preneurship)',
        'experience-company2': 'Radio Terminal UNESA',
        'experience-desc2-item1': 'Participant data management and activity administration',
        'experience-desc2-item2': 'Operational checklist and SOP preparation',
        'experience-desc2-item3': 'Inventory recording and activity reporting',
        'experience-date3': 'Aug 2022 – Aug 2023',
        'experience-position3': 'Cluster Person in Charge',
        'experience-company3': 'PKKMB FT UNESA',
        'experience-desc3-item1': 'Participant data management and centralized communication',
        'experience-desc3-item2': 'Daily activity report preparation',
        'projects-title': 'System & Documentation Experience',
        'project1-tag': 'Documentation',
        'project1-title': 'System Req. & Procedure Documentation',
        'project1-item1': 'System requirements document preparation (SRS)',
        'project1-item2': 'Operational SOP creation',
        'project2-tag': 'Testing',
        'project2-title': 'System Testing',
        'project2-item1': 'Functionality testing regarding user needs',
        'project2-item2': 'Test result documentation (Test Plan)',
        'project3-tag': 'System Config',
        'project3-title': 'Contact Center System Config',
        'project3-item1': 'Basic service flow setup',
        'project3-item2': 'User and routing configuration',
        'project4-tag': 'Monitoring',
        'project4-title': 'System Change Monitoring',
        'project4-item1': 'Change log recording',
        'project4-item2': 'System update verification',
        'edu-training-title': 'Education & Training',
        'edu-tag': 'Education',
        'training-tag': 'Training',
        'edu-degree': 'Bachelor of Information Systems',
        'edu-university': 'State University of Surabaya',
        'edu-gpa': 'GPA: 3.79 / 4.00',
        'training-course': 'Genesys Cloud for Customer Experience',
        'training-provider': 'PT. Solusi Tiga Selaras',
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
        'nav-projects': 'Pengalaman Sistem',
        'nav-contact': 'Kontak',
        'hero-greeting': 'Halo, Saya',
        'hero-subtitle': 'Lulusan Sistem Informasi | Administrasi & Support Operasional',
        'hero-summary': 'Lulusan S1 Sistem Informasi dengan pengalaman dalam administrasi layanan dan pengelolaan data operasional. Terbiasa melakukan pencatatan, validasi, serta rekap laporan sesuai prosedur. Memiliki ketelitian tinggi, disiplin terhadap SOP, dan mampu berkoordinasi untuk memastikan kelancaran proses operasional.',
        'btn-download': 'Unduh CV',
        'btn-contact': 'Hubungi Saya',
        'about-title': 'Tentang Saya',
        'about-p1': 'Saya memiliki latar belakang Sistem Informasi yang kuat dengan fokus pada administrasi, validasi data, dan operasional. Saya terbiasa bekerja dengan ketelitian tinggi dan disiplin terhadap prosedur untuk memastikan akurasi data dan dokumentasi yang baik.',
        'about-p2': 'Kemampuan saya dalam menjaga konsistensi data dan mengikuti SOP memungkinkan saya untuk mendukung kelancaran proses bisnis. Saya siap membawa dedikasi dan profesionalisme saya untuk berkontribusi di lingkungan corporate dan financial service.',
        'skills-title': 'Keahlian & Kompetensi',
        'skills-admin-title': 'Administrasi & Operasional',
        'skills-admin-item1': 'Validasi Data',
        'skills-admin-item2': 'Pengarsipan Dokumen',
        'skills-admin-item3': 'Laporan Operasional',
        'skills-admin-item4': 'Dokumentasi Prosedur',
        'skills-admin-item5': 'Koordinasi Tim',
        'skills-data-title': 'Pengolahan Data',
        'skills-data-item1': 'Microsoft Excel (PivotTable, VLOOKUP/XLOOKUP)',
        'skills-data-item2': 'Microsoft Word',
        'skills-data-item3': 'PowerPoint',
        'skills-data-item4': 'Google Workspace',
        'skills-system-title': 'Sistem & Tools',
        'skills-system-item1': 'Sistem Contact Center (Basic)',
        'skills-system-item2': 'Odoo ERP (Basic)',
        'skills-system-item3': 'Monitoring Layanan',
        'skills-soft-title': 'Soft Skills',
        'skills-soft-item1': 'Teliti',
        'skills-soft-item2': 'Manajemen Waktu',
        'skills-soft-item3': 'Komunikasi Profesional',
        'skills-soft-item4': 'Problem Solving Operasional',
        'skills-soft-item5': 'Disiplin terhadap SOP',
        'experience-title': 'Pengalaman Profesional',
        'experience-date1': 'Sep 2024 – Des 2024',
        'experience-position1': 'Instruktur Pembelajaran TIK',
        'experience-company1': 'Dinas Komunikasi & Informatika Kota Surabaya',
        'experience-desc1-item1': 'Pencatatan administrasi peserta dan rekap data kehadiran',
        'experience-desc1-item2': 'Penyusunan laporan kegiatan secara berkala',
        'experience-desc1-item3': 'Pengelolaan dokumentasi layanan dan akurasi data',
        'experience-desc1-item4': 'Koordinasi internal sesuai prosedur',
        'experience-date2': 'Sep 2022 – Sep 2023',
        'experience-position2': 'Event Organizer (Preneurship)',
        'experience-company2': 'Radio Terminal UNESA',
        'experience-desc2-item1': 'Pengelolaan data peserta dan administrasi kegiatan',
        'experience-desc2-item2': 'Penyusunan checklist operasional dan SOP',
        'experience-desc2-item3': 'Pencatatan inventori dan laporan kegiatan',
        'experience-date3': 'Agu 2022 – Agu 2023',
        'experience-position3': 'Penanggung Jawab Gugus',
        'experience-company3': 'PKKMB FT UNESA',
        'experience-desc3-item1': 'Pengelolaan data peserta dan komunikasi terpusat',
        'experience-desc3-item2': 'Penyusunan laporan harian kegiatan',
        'projects-title': 'Pengalaman Sistem & Dokumentasi',
        'project1-tag': 'Dokumentasi',
        'project1-title': 'Dokumentasi Kebutuhan Sistem & Prosedur',
        'project1-item1': 'Penyusunan dokumen kebutuhan sistem (SRS)',
        'project1-item2': 'Pembuatan SOP Operasional',
        'project2-tag': 'Testing',
        'project2-title': 'Pengujian Sistem',
        'project2-item1': 'Pengujian fungsionalitas sesuai kebutuhan user',
        'project2-item2': 'Dokumentasi hasil uji (Test Plan)',
        'project3-tag': 'Konfigurasi Sistem',
        'project3-title': 'Konfigurasi Sistem Contact Center',
        'project3-item1': 'Setup dasar alur layanan',
        'project3-item2': 'Konfigurasi pengguna dan routing',
        'project4-tag': 'Monitoring',
        'project4-title': 'Monitoring Perubahan Sistem',
        'project4-item1': 'Pencatatan log perubahan',
        'project4-item2': 'Verifikasi update sistem',
        'edu-training-title': 'Pendidikan & Pelatihan',
        'edu-tag': 'Pendidikan',
        'training-tag': 'Pelatihan',
        'edu-degree': 'S1 Sistem Informasi',
        'edu-university': 'Universitas Negeri Surabaya',
        'edu-gpa': 'IPK: 3.79 / 4.00',
        'training-course': 'Genesys Cloud for Customer Experience',
        'training-provider': 'PT. Solusi Tiga Selaras',
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
