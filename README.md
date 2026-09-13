# Portofolio Agung Ramadhan Setiawan

Website portofolio pribadi **Agung Ramadhan Setiawan** — lulusan D4 Teknik Informatika Politeknik Negeri Lhokseumawe. Dibangun dengan React, TanStack Start, dan Tailwind CSS, menampilkan profil, proyek, organisasi, dan galeri kegiatan.

## ✨ Fitur

- **Hero & About** — Profil singkat, foto formal, dan statistik
- **Skills** — Progress bar interaktif untuk setiap teknologi
- **Projects** — Showcase proyek nyata dengan tag teknologi dan link
- **Organizations** — Riwayat pengalaman organisasi beserta pencapaian
- **Gallery** — Galeri foto kegiatan
- **Contact** — Tautan ke GitHub, LinkedIn, dan Email
- Animasi smooth dengan **Framer Motion**
- Desain **dark mode** dengan glassmorphism
- Layout **fully responsive**

## 🚀 Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animasi | [Motion (Framer Motion)](https://motion.dev) |
| UI Components | [Radix UI](https://radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Build Tool | [Vite](https://vitejs.dev) |
| Package Manager | [Bun](https://bun.sh) |
| Bahasa | TypeScript |

## 📁 Struktur Proyek

```
src/
├── assets/              # Gambar (foto profil, galeri)
├── components/
│   └── portfolio/       # Komponen per seksi (Hero, About, Skills, dll)
├── lib/
│   └── profile-data.ts  # Satu sumber data untuk seluruh konten
├── routes/              # Halaman (TanStack Router)
└── styles.css           # Global CSS & design tokens
```

## 🛠️ Pengembangan Lokal

Pastikan sudah menginstal [Bun](https://bun.sh).

```bash
# Clone repositori
git clone https://github.com/Agrama26/Portofolio_ARS.git
cd Portofolio_ARS

# Install dependensi
bun install

# Jalankan dev server
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## ⚙️ Kustomisasi Konten

Seluruh data konten dikelola dalam satu file:

```
src/lib/profile-data.ts
```

Edit file tersebut untuk mengubah nama, foto, skill, proyek, organisasi, galeri, dan tautan sosial — tanpa perlu menyentuh komponen lainnya.

## 📦 Build Production

```bash
bun run build
```

Output akan berada di folder `dist/`.

## 📬 Kontak

- **GitHub**: [@Agrama26](https://github.com/Agrama26)
- **LinkedIn**: [Agung Ramadhan Setiawan](https://www.linkedin.com/in/agung-ramadhan-setiawan-ss)
- **Email**: ramadhanagung1112@gmail.com
