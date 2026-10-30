import Image from 'next/image';
import { resepBySlug } from '@/lib/resep';

/* Foto asli hidangan (CC0, lihat public/images/SUMBER.md) dipotong bulat seperti piring di atas meja. */
export default function Piring({ slug, size, className = '', alt = '', priority = false }) {
  const r = resepBySlug(slug);
  return (
    <Image
      src={`/images/hidangan/${slug}.webp`}
      alt={alt ? `Foto ${r.nama}, tampak atas` : ''}
      width={size}
      height={size}
      priority={priority}
      className={`${className} rounded-full border-2 border-rice object-cover shadow-[0_8px_18px_-8px_rgb(58_47_38/0.6)]`}
    />
  );
}
