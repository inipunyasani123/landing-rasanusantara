# Rasa Nusantara — Kartu Resep Terstandar untuk Dapur Restoran

Rasa Nusantara menulis ulang resep tradisional menjadi kartu resep terstandar untuk dapur restoran: gramasi, urutan kerja, titik kritis, dan HPP per porsi. Minta 3 kartu resep gratis.

**Demo live:** https://landing-rasanusantara.vercel.app

![Tangkapan layar Rasa Nusantara](public/og.jpg)

> Template landing page untuk bisnis fiktif. Formulir di dalamnya hanya demo dan tidak mengirim data.

## Konsep

Bahasa rupa **Kartu Resep**. Kalau Citarasa adalah papan nama rumah makan, Rasa Nusantara adalah kartu resep dari dapurnya.

## Halaman

- `/` — jasa kartu resep terstandar untuk dapur restoran, dengan anatomi kartu bernomor
- `/kartu-resep` — empat contoh kartu resep: rendang, soto banjar, ayam betutu, coto makassar
- `/kartu-resep/[slug]` — kartu lengkap dengan penskala porsi 1–200 dan HPP per porsi

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Font: Fraunces, Inter (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 17 template landing page di [PortalLanding](https://www.pintuweb.id/landing-page). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
