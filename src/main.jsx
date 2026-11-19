import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { translations } from './translations.js';
import { useScrollReveal } from './useScrollReveal.js';

const cv = './CV%20Oksana%20Khoirunnida.pdf';
const email = 'oksanakhoirunnida.10@gmail.com';
const navigation = [['profil', 'Profil'], ['pengalaman', 'Pengalaman'], ['proyek', 'Proyek'], ['kompetensi', 'Kompetensi']];
const experiences = [
  { date: 'Februari 2026 — Sekarang', role: 'IT Support Service & Customer Service', company: 'PT BPR Taman Artha Kencana', location: 'Sidoarjo, Jawa Timur', current: true, tasks: ['Memantau Core Banking System (CBS) serta menangani kendala aplikasi, jaringan, dan perangkat untuk mendukung kelancaran operasional.', 'Mendukung pengguna internal, validasi dan pencadangan data, pengujian sistem, serta koordinasi penyelesaian masalah dengan vendor atau tim IT.', 'Mendukung pelayanan, penyampaian informasi, dan administrasi kebutuhan nasabah sesuai prosedur.', 'Menindaklanjuti pertanyaan atau kendala layanan bersama unit terkait.'] },
  { date: 'September — Desember 2024', role: 'Instruktur Pembelajaran TIK', company: 'Dinas Komunikasi dan Informatika Kota Surabaya', location: 'Surabaya, Jawa Timur · Magang', tasks: ['Menangani pendaftaran dan informasi pelatihan, verifikasi data peserta, serta rekapitulasi kehadiran.', 'Menyusun dokumentasi dan laporan kegiatan serta berkoordinasi dengan tim untuk mendukung kelancaran pelayanan.'] }
];
const skills = [
  ['01', 'Administrasi & layanan', 'Menjaga ketelitian data dan kualitas pelayanan.', ['Pengelolaan data & validasi dokumen', 'Layanan pelanggan & komunikasi pengguna', 'Laporan operasional & penerapan SOP']],
  ['02', 'IT & operasional', 'Mendukung sistem yang digunakan dalam pekerjaan sehari-hari.', ['Core Banking System (CBS)', 'Monitoring & troubleshooting aplikasi, perangkat, jaringan', 'Backup data & pengujian aplikasi']],
  ['03', 'Dokumentasi & aplikasi', 'Mendokumentasikan proses dan mengolah informasi.', ['Excel / Google Sheets: PivotTable, VLOOKUP/XLOOKUP', 'Microsoft Office, SRS & Test Plan', 'Genesys Cloud, ERP Odoo & Postman (dasar)']]
];
const projects = [
  ['Contact center & API', 'Administrasi Contact Center', 'Genesys Cloud', 'Menyusun alur Inbound IVR, mengatur WebChat, dan menguji API menggunakan Postman.', ['Genesys Cloud', 'Postman', 'IVR']],
  ['Dokumentasi & pengujian', 'Kebutuhan & Pengujian Sistem', 'IKIAE · SPK Wisata Surabaya', 'Menyusun SRS, skenario pengujian, dan Test Plan berdasarkan IEEE 829.', ['SRS', 'Test Plan', 'IEEE 829']],
  ['Sales & inventory', 'Simulasi ERP Odoo', 'Camel Shoes', 'Mempelajari dan mendokumentasikan proses operasional penjualan serta persediaan.', ['Odoo', 'Sales', 'Inventory']]
];
function Arrow({ down = false }) { return <span aria-hidden="true">{down ? '↓' : '↗'}</span>; }
function SectionHeading({ number, label, title, children }) { return <div className="section-heading"><p className="eyebrow"><span className="section-number">{number}</span>{label}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>; }
function App() {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id'; }
    catch { return 'id'; }
  });
  const t = text => language === 'en' ? (translations[text.trim()] ?? text) : text;
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'en'
      ? 'Oksana Khoirunnida — Professional Portfolio'
      : 'Oksana Khoirunnida — Portfolio Profesional';
    document.querySelector('meta[name="description"]').content = language === 'en'
      ? 'Oksana Khoirunnida — administration, operations, customer service and IT support. Based in Surabaya, Indonesia.'
      : 'Oksana Khoirunnida — administrasi, operasional, pelayanan pelanggan dan dukungan IT. Berbasis di Surabaya, Indonesia.';
    try { localStorage.setItem('portfolio-language', language); } catch {}
  }, [language]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useScrollReveal(loading);
  useEffect(() => {
    let cancelled = false;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const minimum = new Promise(resolve => setTimeout(resolve, 700));
    const assets = Promise.all([
      document.fonts.ready,
      ...Array.from(document.images, image => image.decode().catch(() => {})),
    ]);
    const timeout = setTimeout(finish, 4000);
    function finish() {
      if (!cancelled) {
        setLoading(false);
        document.body.style.overflow = previousOverflow;
      }
    }
    Promise.all([minimum, assets]).then(finish);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return <>
    <div className={`page-loader ${loading ? '' : 'is-loaded'}`} role="status" aria-live="polite" aria-hidden={!loading}>
      <div className="loader-monogram">ok<span>.</span></div>
      <p>{t("Oksana Khoirunnida")}</p>
      <div className="loader-track"><span /></div>
      <small>{t("Menyiapkan portfolio…")}</small>
    </div>
    <div className="app-shell" inert={loading}>
    <a className="skip-link" href="#main">{t("Lewati navigasi")}</a>
    <header className="site-header"><div className="container nav-bar">
      <a className="brand" href="#" aria-label={t("Oksana, kembali ke beranda")}>ok<span>.</span></a>
      <div className="header-controls"><div className="language-switch" role="group" aria-label={t('Pilihan bahasa')}>
        <button type="button" lang="id" aria-label="Bahasa Indonesia" aria-pressed={language === 'id'} onClick={() => setLanguage('id')}>ID</button><span aria-hidden="true">/</span><button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
      </div><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation">{t(menuOpen ? 'Tutup' : 'Menu')} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button></div>
      <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label={t("Navigasi utama")}>{navigation.map(([id, name]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t(name)}</a>)}<a className="nav-contact" href="#kontak" onClick={() => setMenuOpen(false)}>{t("Hubungi saya ")}<Arrow /></a></nav>
    </div></header>
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-body"><div className="hero-content"><div className="hero-intro"><p className="eyebrow">{t("Portfolio profesional · Surabaya, Indonesia")}</p><h1 id="hero-title"><span className="hero-salutation">{t("Halo, saya ")}</span><em>{t("Oksana Khoirunnida.")}</em></h1></div>
        <div className="hero-copy"><p className="hero-kicker">{t("Teliti dalam bekerja.")}{" "}{t("Hangat dalam melayani.")}</p><p className="hero-role">{t("Administrasi & Operasional")}<br />{t("Customer Service · Sistem Informasi")}</p><p className="hero-description">{t("Menghubungkan pelayanan yang baik, data yang akurat, dan dukungan teknologi untuk kelancaran operasional.")}</p><div className="actions"><a className="button primary" href={cv} download>{t("Unduh CV ")}<Arrow down /></a><a className="text-link" href="#pengalaman">{t("Pengalaman saya ")}<Arrow /></a></div></div></div><div className="portrait-area"><div className="portrait-frame"><img src="./images/profile.jpeg" alt={t("Potret Oksana Khoirunnida")} fetchPriority="high" /></div></div></div>
        <div className="hero-bottom"><span>{t("Administrasi. Pelayanan. Teknologi.")}</span><a href="#profil">{t("Kenali lebih dekat ")}<Arrow down /></a></div>
      </section>
      <section id="profil" className="section profile-section"><div className="container profile-layout"><SectionHeading number="01" label={t("Profil")} title={<>{t("Pelayanan yang berpusat")}<br />{t("pada kebutuhan pengguna.")}</>} /><div className="profile-copy"><p className="lead">{t("Lulusan S1 Sistem Informasi dengan pengalaman dalam administrasi, pelayanan pelanggan, dukungan operasional, dan pengelolaan sistem informasi.")}</p><p>{t("Terbiasa melakukan pengolahan dan validasi data, penyusunan dokumentasi, penanganan kebutuhan pengguna, serta koordinasi lintas divisi sesuai prosedur perusahaan.")}</p><p>{t("Saya membawa kemampuan komunikasi, ketelitian, pemecahan masalah, dan adaptasi terhadap berbagai proses bisnis untuk mendukung efektivitas operasional perusahaan.")}</p><article className="education"><p className="eyebrow">{t("Agustus 2021 — Juli 2025")}</p><h3>{t("Sarjana Sistem Informasi")}</h3><p className="company">{t("Universitas Negeri Surabaya")}</p><p className="gpa">{t("IPK ")}<strong>{t("3,79")}</strong>{t(" / 4,00")}</p><p>{t("Skripsi: Penerapan Market Basket Analysis untuk optimalisasi strategi pemasaran UMKM Diah Cookies.")}</p></article><div className="profile-facts"><div><span>{t("Pendidikan")}</span><strong>{t("S1 Sistem Informasi")}</strong></div><div><span>{t("Bahasa")}</span><strong>{t("Indonesia · Inggris")}</strong><small>{t("Native · Working Proficiency")}</small></div></div></div></div></section>
      <section id="pengalaman" className="section container"><SectionHeading number="02" label={t("Pengalaman profesional")} title={t("Bekerja dengan sistem. Melayani dengan perhatian.")} /><div className="experience-list">{experiences.map(item => <article className="experience" key={item.company}><div className="experience-date"><p>{t(item.date)}</p>{item.current && <span className="current-label">{t("Posisi saat ini")}</span>}</div><div><h3>{t(item.role)}</h3><p className="company">{item.company}</p><p className="muted">{t(item.location)}</p><ul>{item.tasks.map(task => <li key={task}>{t(task)}</li>)}</ul></div></article>)}</div></section>
      <section className="section learning-section"><div className="container learning-grid"><div><SectionHeading number="03" label={t("Pelatihan")} title={t("Belajar untuk berkembang.")} /><article className="training"><p className="eyebrow">{t("Februari — Juni 2024")}</p><h3>{t("Genesys Cloud for Customer Experience")}</h3><p className="company">{t("Solutif (PT Solusi Tiga Selaras)")}</p><p>{t("Foundation, Administrator, Technical Telephony & Routing, Scripting & Reporting, Architect.")}</p></article></div><div className="organization"><p className="eyebrow">{t("Pengalaman organisasi")}</p><article><span>{t("September 2022 — September 2023")}</span><h3>{t("Event Organizer (Preneurship)")}</h3><p className="company">{t("Radio Terminal UNESA")}</p><p>{t("Mengelola administrasi peserta, checklist operasional dan SOP acara, pencatatan inventaris, serta laporan kegiatan.")}</p></article><article><span>{t("Agustus 2022 — September 2023")}</span><h3>{t("Penanggung Jawab Gugus")}</h3><p className="company">{t("PKKMB FT UNESA")}</p><p>{t("Menjadi penghubung peserta dan panitia, mengelola data serta komunikasi terpusat, dan menyusun laporan harian.")}</p></article></div></div></section>
      <section id="proyek" className="section container"><SectionHeading number="04" label={t("Proyek relevan")} title={t("Dari pemahaman proses ke penerapan.")} >{t("Pilihan proyek pembelajaran dalam layanan, dokumentasi sistem, dan operasional bisnis.")}</SectionHeading><div className="project-list">{projects.map(([type, title, subtitle, desc, tags], index) => <article className="project" key={title}><div className="project-index">0{index + 1}</div><div><p className="eyebrow">{t(type)}</p><h3>{t(title)}</h3><p className="project-subtitle">{t(subtitle)}</p><p>{t(desc)}</p><div className="tags">{tags.map(tag => <span key={tag}>{t(tag)}</span>)}</div></div></article>)}</div></section>
      <section id="kompetensi" className="section skills-section"><div className="container"><SectionHeading number="05" label={t("Kompetensi")} title={t("Keahlian yang mendukung pekerjaan.")} /><div className="skills-grid">{skills.map(([n, title, desc, items]) => <article className="skill" key={n}><span className="skill-number">{n}</span><h3>{t(title)}</h3><p>{t(desc)}</p><ul>{items.map(item => <li key={item}>{t(item)}</li>)}</ul></article>)}</div></div></section>
      <section id="kontak" className="contact-section"><div className="container"><p className="eyebrow">{t("06 / Kontak")}</p><div className="contact-heading"><h2>{t("Mari terhubung.")}</h2><p>{t("Untuk diskusi profesional dan peluang kerja di bidang administrasi, layanan pelanggan, serta dukungan operasional dan IT.")}</p></div><a className="email-link" href={`mailto:${email}`}>{email}<Arrow /></a><div className="contact-links"><a href="tel:+6285135719754">{t("+62 851-3571-9754 ")}<Arrow /></a><a href="https://www.linkedin.com/in/oksana-khoirunnida-033a37291/" target="_blank" rel="noreferrer">{t("LinkedIn ")}<Arrow /></a><a href="https://github.com/oksana200822" target="_blank" rel="noreferrer">{t("GitHub ")}<Arrow /></a><a href={cv} download>{t("Unduh CV ")}<Arrow down /></a></div></div></section>
    </main><footer className="container footer"><span>© {new Date().getFullYear()} Oksana Khoirunnida</span><span>{t("Surabaya, Indonesia")}</span><a href="#">{t("Kembali ke atas ↑")}</a></footer>
    </div>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
