import profilImg from "@/assets/profil.webp";

export const PROFILE = {
  name: "Agung Ramadhan Setiawan",
  role: "Web Developer",
  tagline: "Lulusan D4 Teknik Informatika — Politeknik Negeri Lhokseumawe",
  location: "Lhokseumawe, Aceh",
  email: "ramadhanagung1112@gmail.com",
  photo: profilImg as string,
  about:
    "Saya adalah lulusan D4 Teknik Informatika yang memiliki passion dan pengalaman dalam pengembangan aplikasi web. Menguasai berbagai teknologi modern seperti Laravel, React, MySQL, dan JavaScript, saya berkomitmen untuk menciptakan solusi digital yang efisien, inovatif, dan memberikan nilai tambah bagi pengguna. Saya juga aktif dalam organisasi dan kegiatan komunitas, memperkuat kemampuan kepemimpinan, kerja tim, serta tanggung jawab sosial.",
  stats: [
    { value: "D4", label: "Teknik Informatika" },
    { value: "10+", label: "Proyek & Tugas" },
    { value: "8+", label: "Teknologi dikuasai" },
  ],
  skills: [
    { name: "HTML", level: 95 },
    { name: "CSS / Tailwind", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "PHP / Laravel", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "Git", level: 78 },
    { name: "Node.js", level: 70 },
  ],
  projects: [
    {
      title: "Warehouse Sistem PermanaNet",
      desc: "Aplikasi web manajemen inventaris dan gudang untuk PermanaNet, dilengkapi fitur CRUD, pencatatan stok, dan riwayat transaksi.",
      tags: ["Reactjs", "MySQL", "Tailwind"],
      accent: "coral",
      link: "#",
    },
    {
      title: "Portfolio Interaktif",
      desc: "Website portofolio pribadi dengan animasi smooth, dark mode, dan layout responsif — dibangun dengan React & Tailwind.",
      tags: ["React", "Tailwind", "Motion"],
      accent: "gold",
      link: "#",
    },
    {
      title: "Cafe China",
      desc: "Toko online untuk produk UMKM lengkap dengan keranjang, katalog, dan pembayaran. Frontend interaktif + backend REST API.",
      tags: ["React", "Node.js", "MySQL"],
      accent: "coral",
      link: "#",
    },
    {
      title: "NyakWit",
      desc: "Aplikasi untuk melakukan klasifikasi penyakit daun kelapa sawit dengan 5 kelas penyakit",
      tags: ["Nodejs", "Typescript", "Supabase"],
      accent: "gold",
      link: "https://nyak-wit.vercel.app/",
    },
  ],
  organizations: [
    {
      role: "Penanggung Jawab Media Sosial",
      org: "GenBI (Generasi Baru Indonesia)",
      period: "2024 — 2025",
      type: "Komunitas Penerima Beasiswa Bank Indonesia",
      desc: "Memimpin pengelolaan akun media sosial komunitas GenBI — mulai dari perencanaan konten, pembuatan desain, hingga penjadwalan publikasi. Bertanggung jawab membangun citra positif komunitas dan meningkatkan engagement audiens.",
      achievements: [
        "Mengelola akun Instagram & media sosial GenBI",
        "Merancang strategi konten & kalender publikasi",
        "Meningkatkan engagement dan jangkauan akun",
        "Mengkoordinasi tim kreatif untuk setiap kampanye",
      ],
      accent: "coral",
    },
    {
      role: "Ketua Departemen Kesejahteraan Mahasiswa",
      org: "HIMATIK",
      period: "2024 — 2025",
      type: "Himpunan Mahasiswa Teknik Informatika PNL",
      desc: "Bertanggung jawab dalam merencanakan dan melaksanakan program kerja yang mendukung kesejahteraan mahasiswa Teknik Informatika, termasuk kegiatan sosial, pengembangan soft skill, dan program bantuan bagi mahasiswa yang membutuhkan.",
      achievements: [
        "Merencanakan dan melaksanakan program kerja departemen",
        "Meningkatkan kesejahteraan mahasiswa melalui program-program yang inovatif",
        "Membangun hubungan yang baik dengan mahasiswa dan pihak terkait",
        "Mengelola anggaran departemen secara efektif",
      ],
      accent: "gold",
    }
  ],
  gallery: [
    { title: "GenBi Divisi Pubsos", caption: "Foto bersama divisi Pubsos" },
    { title: "LP (Leadership Camp)", caption: "Momen pelatihan kepemimpinan GenBi di Takengon" },
    { title: "Pengabdian Masyarakat", caption: "Foto divisi pubsos pada kegiatan pengabdian masyarakat di desa sido mulyo" },
    { title: "Foto Pribadi", caption: "Foto sendiri" },
    { title: "Bedah Buku GenBI", caption: "Foto saat acara bedah buku" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Agrama26", handle: "@Agrama26" },
    { label: "LinkedIn", href: "www.linkedin.com/in/agung-ramadhan-setiawan-ss", handle: "Agung Ramadhan S." },
    { label: "Email", href: "mailto:ramadhanagung1112@gmail.com", handle: "ramadhanagung1112@gmail.com" },
  ],
};
