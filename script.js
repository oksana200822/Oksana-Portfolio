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
        'hero-subtitle': 'Information Systems Graduate | Service Administration & Contact Center Enthusiast',
        'hero-summary': 'Information Systems Graduate with a 3.79 GPA, experienced in service administration, system documentation, and user interaction management. Accustomed to handling requirements gathering, complaints, and structured service reporting. Possesses basic understanding of Contact Center (Genesys Cloud) and Odoo ERP. Detail-oriented, communicative, and customer-satisfaction oriented.',
        'btn-download': 'Download CV',
        'btn-contact': 'Contact Me',
        'about-title': 'About Me',
        'about-p1': 'I am an Information Systems graduate with a deep interest in service administration and system documentation. With a strong academic background, I am accustomed to bridging technical and operational needs to ensure optimal service delivery.',
        'about-p2': 'My main strengths lie in effective communication, attention to detail in documentation, and team coordination. I believe that excellent service begins with neat and structured administrative governance. I am ready to bring my dedication and expertise to contribute in a professional corporate or financial service environment.',
        'skills-title': 'Skills & Expertise',
        'skills-service-admin-title': 'Service & Administration',
        'skills-service-admin-item1': 'Service Administration',
        'skills-service-admin-item2': 'Documentation (SRS, Test Plan IEEE 829, SOP)',
        'skills-service-admin-item3': 'Reporting & Data Recap',
        'skills-technical-title': 'Technical Skills',
        'skills-technical-item1': 'Microsoft Excel (PivotTable, VLOOKUP)',
        'skills-technical-item2': 'Google Workspace',
        'skills-technical-item3': 'RapidMiner (Basic)',
        'skills-technical-item4': 'Odoo ERP (Basic)',
        'skills-technical-item5': 'Genesys Cloud (Basic Admin)',
        'skills-technical-item6': 'Postman (API Testing Basic)',
        'skills-soft-title': 'Soft Skills',
        'skills-soft-item1': 'Professional Communication',
        'skills-soft-item2': 'Problem Solving',
        'skills-soft-item3': 'Time Management',
        'skills-soft-item4': 'Empathy',
        'skills-soft-item5': 'Team Coordination',
        'experience-title': 'Professional Experience',
        'experience-date1': 'Sep – Dec 2024',
        'experience-position1': 'ICT Learning Instructor',
        'experience-company1': 'Department of Communication & Informatics, Surabaya City',
        'experience-desc1-item1': 'Handled participant questions and issues responsively.',
        'experience-desc1-item2': 'Documented complaints & technical issue follow-ups.',
        'experience-desc1-item3': 'Recapped service reports and monitored participant progress.',
        'experience-desc1-item4': 'Coordinated internally with the team for program evaluation.',
        'experience-date2': 'Sep 2022 – Sep 2023',
        'experience-position2': 'Event Organizer',
        'experience-company2': 'Radio Terminal UNESA',
        'experience-desc2-item1': 'Maintained effective communication with committee, participants, and vendors.',
        'experience-desc2-item2': 'Managed participant data and compiled detailed activity reports.',
        'experience-desc2-item3': 'Drafted event service SOPs for better operational standards.',
        'experience-date3': '2022 – 2023',
        'experience-position3': 'Cluster Person in Charge',
        'experience-company3': 'PKKMB FT UNESA',
        'experience-desc3-item1': 'Acted as the main liaison between new students and the central committee.',
        'experience-desc3-item2': 'Managed group communication and compiled daily activity reports.',
        'projects-title': 'Selected Projects',
        'project1-tag': 'Documentation',
        'project1-title': 'Documentation & Governance',
        'project1-item1': '<strong>Risk Policy SOP:</strong> Tokopedia Case Study.',
        'project1-item2': '<strong>SRS:</strong> IKIAE System Development.',
        'project1-item3': '<strong>Test Plan IEEE 829:</strong> Surabaya Tourism SPK.',
        'project1-item4': '<strong>CSF:</strong> PT KAI Critical Success Factor Analysis.',
        'project2-tag': 'Contact Center',
        'project2-title': 'Genesys Cloud Setup',
        'project2-item1': 'IVR Configuration & Routing flow.',
        'project2-item2': 'Reporting Setup & WebChat integration.',
        'project2-item3': 'API Testing for integration using Postman.',
        'project3-tag': 'ERP System',
        'project3-title': 'ERP Odoo Implementation',
        'project3-item1': 'Sales & Inventory Module Implementation.',
        'project3-item2': 'Camel Shoes Operational Case Study.',
        'project3-item3': 'End-to-end business flow simulation.',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Interested in collaborating? Feel free to reach out.',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Message',
        'form-send': 'Send Message'
    },
    'id': {
        'nav-home': 'Home',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-experience': 'Pengalaman',
        'nav-projects': 'Proyek',
        'nav-contact': 'Kontak',
        'hero-greeting': 'Halo, Saya',
        'hero-subtitle': 'Lulusan Sistem Informasi | Antusias Administrasi Layanan & Contact Center',
        'hero-summary': 'Lulusan S1 Sistem Informasi dengan IPK 3.79 yang memiliki pengalaman dalam administrasi layanan, dokumentasi sistem, serta pengelolaan interaksi pengguna. Terbiasa menangani pencatatan kebutuhan, keluhan, serta pelaporan layanan secara terstruktur. Memiliki pemahaman dasar Contact Center (Genesys Cloud) dan ERP Odoo. Detail-oriented, komunikatif, dan berorientasi pada kepuasan pelanggan.',
        'btn-download': 'Unduh CV',
        'btn-contact': 'Hubungi Saya',
        'about-title': 'Tentang Saya',
        'about-p1': 'Saya adalah lulusan Sistem Informasi yang memiliki ketertarikan mendalam pada dunia administrasi layanan dan dokumentasi sistem. Dengan latar belakang akademis yang kuat, saya terbiasa menjembatani kebutuhan teknis dan operasional untuk memastikan layanan berjalan optimal.',
        'about-p2': 'Kekuatan utama saya terletak pada komunikasi yang efektif, ketelitian dalam dokumentasi, dan kemampuan koordinasi tim. Saya percaya bahwa pelayanan prima dimulai dari tata kelola administrasi yang rapi dan terstruktur. Saat ini, saya siap membawa dedikasi dan keahlian saya untuk berkontribusi di lingkungan corporate maupun financial service yang profesional.',
        'skills-title': 'Keahlian & Kompetensi',
        'skills-service-admin-title': 'Layanan & Administrasi',
        'skills-service-admin-item1': 'Administrasi Layanan',
        'skills-service-admin-item2': 'Dokumentasi (SRS, Test Plan IEEE 829, SOP)',
        'skills-service-admin-item3': 'Pelaporan & Rekap Data',
        'skills-technical-title': 'Keahlian Teknis',
        'skills-technical-item1': 'Microsoft Excel (PivotTable, VLOOKUP)',
        'skills-technical-item2': 'Google Workspace',
        'skills-technical-item3': 'RapidMiner (Dasar)',
        'skills-technical-item4': 'Odoo ERP (Dasar)',
        'skills-technical-item5': 'Genesys Cloud (Admin Dasar)',
        'skills-technical-item6': 'Postman (API Testing Dasar)',
        'skills-soft-title': 'Soft Skills',
        'skills-soft-item1': 'Komunikasi Profesional',
        'skills-soft-item2': 'Pemecahan Masalah',
        'skills-soft-item3': 'Manajemen Waktu',
        'skills-soft-item4': 'Empati',
        'skills-soft-item5': 'Koordinasi Tim',
        'experience-title': 'Pengalaman Profesional',
        'experience-date1': 'Sep – Des 2024',
        'experience-position1': 'Instruktur Pembelajaran TIK',
        'experience-company1': 'Dinas Komunikasi & Informatika Kota Surabaya',
        'experience-desc1-item1': 'Menangani pertanyaan dan kendala peserta dengan responsif.',
        'experience-desc1-item2': 'Mendokumentasikan keluhan & tindak lanjut permasalahan teknis.',
        'experience-desc1-item3': 'Melakukan rekap laporan layanan dan memantau progres peserta.',
        'experience-desc1-item4': 'Melakukan koordinasi internal tim untuk evaluasi program.',
        'experience-date2': 'Sep 2022 – Sep 2023',
        'experience-position2': 'Event Organizer',
        'experience-company2': 'Radio Terminal UNESA',
        'experience-desc2-item1': 'Menjalin komunikasi efektif dengan panitia, peserta, dan vendor.',
        'experience-desc2-item2': 'Mengelola data peserta serta menyusun laporan kegiatan secara rinci.',
        'experience-desc2-item3': 'Menyusun SOP layanan event untuk standar operasional yang lebih baik.',
        'experience-date3': '2022 – 2023',
        'experience-position3': 'Penanggung Jawab Gugus',
        'experience-company3': 'PKKMB FT UNESA',
        'experience-desc3-item1': 'Menjadi penghubung utama antara peserta mahasiswa baru dan panitia pusat.',
        'experience-desc3-item2': 'Manajemen komunikasi grup dan menyusun laporan harian kegiatan gugus.',
        'projects-title': 'Proyek Pilihan',
        'project1-tag': 'Dokumentasi',
        'project1-title': 'Dokumentasi & Tata Kelola',
        'project1-item1': '<strong>SOP Kebijakan Risiko:</strong> Studi kasus Tokopedia.',
        'project1-item2': '<strong>SRS:</strong> Pengembangan sistem IKIAE.',
        'project1-item3': '<strong>Test Plan IEEE 829:</strong> SPK Wisata Surabaya.',
        'project1-item4': '<strong>CSF:</strong> Analisis Critical Success Factor PT KAI.',
        'project2-tag': 'Contact Center',
        'project2-title': 'Setup Genesys Cloud',
        'project2-item1': 'Konfigurasi IVR & Alur Routing.',
        'project2-item2': 'Setup Pelaporan & Integrasi WebChat.',
        'project2-item3': 'API Testing untuk integrasi menggunakan Postman.',
        'project3-tag': 'Sistem ERP',
        'project3-title': 'Implementasi Odoo ERP',
        'project3-item1': 'Implementasi Modul Penjualan & Inventori.',
        'project3-item2': 'Studi kasus operasional Camel Shoes.',
        'project3-item3': 'Simulasi alur bisnis end-to-end.',
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
