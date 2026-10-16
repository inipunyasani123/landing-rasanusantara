import Link from 'next/link';
import { LAYANAN } from '@/lib/resep';
import Koleksi from './Koleksi';

export default function Layanan() {
  return (
    <>
      <section className="bg-rice-2 px-6 py-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <p className="recipe-label mb-4 text-clay">Contoh kartu</p>
              <h2 className="text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">Empat resep dari empat pulau</h2>
            </div>
            <Link href="/kartu-resep" className="recipe-label shrink-0 self-start py-2 text-clay underline underline-offset-4 sm:self-auto">Semua kartu resep</Link>
          </div>
          <Koleksi geser />
        </div>
      </section>

      <section id="layanan" className="scroll-mt-16 bg-rice px-6 py-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14">
          <div>
            <p className="recipe-label mb-4 text-clay">Layanan</p>
            <h2 className="max-w-2xl text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">Mulai dari satu resep, atau satu menu daerah penuh</h2>
            <p className="mt-5 max-w-md leading-relaxed">Setiap kartu memakai format yang sama dengan contoh di atas: gramasi, urutan kerja, titik kritis, dan HPP per porsi.</p>
          </div>
          {/* Daftar harga ditulis seperti indeks kartu resep: nama, titik penuntun, harga. */}
          <ol className="recipe-card bg-rice-2 px-6 py-2 sm:px-9">
            {LAYANAN.map((l) => (
              <li key={l.nama} className="border-b border-bark/20 py-7 last:border-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="basis-full text-[1.4rem] leading-tight font-semibold text-bark sm:basis-auto sm:text-2xl">{l.nama}</h3>
                  <span aria-hidden="true" className="min-w-8 flex-1 translate-y-[-0.3rem] border-b-2 border-dotted border-bark/35" />
                  <p className="shrink-0 font-[family-name:var(--font-fraunces)] text-[1.4rem] font-semibold whitespace-nowrap text-clay sm:text-2xl">
                    {l.harga} <span className="font-sans text-sm font-normal text-bark-soft">{l.satuan}</span>
                  </p>
                </div>
                <p className="mt-2 text-sm text-bark italic">{l.cocok}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
                  {l.isi.map((x) => (
                    <li key={x} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {x}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
