import Image from 'next/image';
import Link from 'next/link';
import { RESEP, hitung, menit, rupiah } from '@/lib/resep';
import Pedas from './Pedas';

/* geser: di ponsel kartu berjajar menyamping dan bisa digeser seperti
   membalik kartu di laci; mulai layar sm kembali menjadi kisi dua kolom. */
export default function Koleksi({ judulTingkat = 'h2', geser = false }) {
  const H = judulTingkat === 'h2' ? 'h3' : 'h2';
  return (
    <ul className={geser ? '-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 py-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:py-0' : 'grid gap-6 sm:grid-cols-2'}>
      {RESEP.map((r, i) => {
        const h = hitung(r);
        return (
          <li key={r.slug} className={geser ? 'w-[84%] shrink-0 snap-start sm:w-auto' : undefined}>
            <Link
              href={`/kartu-resep/${r.slug}`}
              className={`recipe-card relative block h-full bg-rice p-6 transition-transform hover:-translate-y-1 sm:p-7 ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
            >
              {/* Ilustrasi penyajian: diletakkan seperti piring di sudut kartu */}
              <Image src={`/images/hidangan/${r.slug}.webp`} alt="" width={112} height={112} className="pointer-events-none absolute top-3 right-3 h-[4.5rem] w-[4.5rem] sm:top-4 sm:right-4 sm:h-[5.25rem] sm:w-[5.25rem]" />
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1 pr-20 sm:pr-24">
                <span className="recipe-label text-clay">{r.asal}</span>
                <Pedas n={r.pedas} />
              </span>
              <H className="mt-2 pr-20 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-bark sm:pr-24">{r.nama}</H>
              <span className="mt-4 block leading-relaxed sm:mt-5">{r.ringkas}</span>
              <span className="mt-5 grid grid-cols-3 gap-3 border-t border-bark/20 pt-4 text-sm">
                <span><span className="recipe-label block">Porsi</span><span className="mt-1 block text-bark">{r.porsi}</span></span>
                <span><span className="recipe-label block">Masak</span><span className="mt-1 block text-bark">{menit(r.masak)}</span></span>
                <span><span className="recipe-label block">HPP</span><span className="mt-1 block font-semibold text-bark">{rupiah(h.hpp)}</span></span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
