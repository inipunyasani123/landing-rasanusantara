import Image from 'next/image';

/* Hidangan yang sudah berfoto asli (CC0, lihat public/images/SUMBER.md) dipotong bulat seperti piring
   di atas meja; sisanya masih ilustrasi bertepi transparan. */
const FOTO = new Set(['rendang-daging', 'coto-makassar']);
const NAMA = { 'rendang-daging': 'Rendang daging', 'soto-banjar': 'Soto Banjar', 'ayam-betutu': 'Ayam betutu', 'coto-makassar': 'Coto Makassar' };

export default function Piring({ slug, size, className = '', alt, priority = false }) {
  const foto = FOTO.has(slug);
  const teks = alt === undefined ? '' : foto ? `Foto ${NAMA[slug]} di piring, tampak atas` : alt;
  return (
    <Image
      src={`/images/hidangan/${slug}.webp`}
      alt={teks}
      width={size}
      height={size}
      priority={priority}
      className={`${className} ${foto ? 'rounded-full border-2 border-rice object-cover shadow-[0_8px_18px_-8px_rgb(58_47_38/0.6)]' : ''}`}
    />
  );
}
