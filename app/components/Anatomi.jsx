import Link from 'next/link';
import { RESEP, hitung, menit, rupiah } from '@/lib/resep';

/* Bagian penanda: kartu resep yang dibedah. Lima penanda bernomor menunjuk
   bagian kartu, keterangannya di kolom kanan. */
const BAGIAN = [
  ['Porsi & ukuran porsi', 'Berapa porsi dari satu kali masak, dan seberapa besar satu porsi — ditimbang, bukan dikira.'],
  ['Gramasi', 'Setiap bahan dalam gram atau satuan yang bisa dihitung. Tidak ada "secukupnya".'],
  ['Urutan kerja', 'Langkah bernomor yang bisa diikuti koki baru tanpa bertanya.'],
  ['Titik kritis', 'Momen yang menentukan hasil — dan tanda yang bisa dilihat, bukan perasaan.'],
  ['HPP & harga jual', 'Harga pokok per porsi dari daftar bahan, lalu harga jual pada target food cost.'],
];

function Penanda({ n }) {
  return (
    <span aria-hidden="true" className="absolute -left-9 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-batik text-xs font-bold text-rice">
      {n}
    </span>
  );
}

export default function Anatomi() {
  const r = RESEP[0];
  const h = hitung(r);
  return (
    <section id="anatomi" className="scroll-mt-16 bg-rice px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="recipe-label mb-4 text-clay">Anatomi kartu resep</p>
        <h2 className="max-w-2xl text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">Lima hal yang membuat resep bisa diulang</h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="recipe-card bg-rice-2 p-7 pl-12 sm:p-9 sm:pl-14" aria-label={`Contoh kartu resep: ${r.nama}`}>
            <div className="relative border-b border-bark/20 pb-4">
              <Penanda n={1} />
              <p className="recipe-label text-clay">{r.asal}</p>
              <h3 className="mt-1 text-2xl font-semibold text-bark">{r.nama}</h3>
              <p className="mt-1 text-sm">{r.porsi} porsi · {r.ukuranPorsi}</p>
            </div>
            <div className="relative mt-5">
              <Penanda n={2} />
              <ul className="space-y-1.5 text-sm">
                {r.bahan.slice(0, 4).map(([b, j, s]) => (
                  <li key={b} className="flex justify-between gap-4 text-bark"><span>{b}</span><span className="whitespace-nowrap tabular-nums">{j.toLocaleString('id-ID')} {s}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative mt-5 border-t border-bark/20 pt-4">
              <Penanda n={3} />
              <ol start={3} className="list-decimal space-y-1.5 pl-4 text-sm text-bark">
                {r.langkah.slice(2, 5).map((l) => <li key={l}>{l}</li>)}
              </ol>
            </div>
            <div className="relative mt-5 bg-clay/10 p-4">
              <Penanda n={4} />
              <p className="text-sm font-semibold text-clay">Titik kritis: {r.kritis[0]}</p>
            </div>
            <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-bark/20 pt-4 text-sm">
              <Penanda n={5} />
              <p><span className="recipe-label block">Waktu</span><span className="mt-1 block text-bark">{menit(r.masak)}</span></p>
              <p><span className="recipe-label block">HPP</span><span className="mt-1 block font-semibold text-bark">{rupiah(h.hpp)}</span></p>
              <p><span className="recipe-label block">Jual</span><span className="mt-1 block font-semibold text-clay">{rupiah(h.jual)}</span></p>
            </div>
          </article>

          <ol className="space-y-6 self-center">
            {BAGIAN.map(([j, d], i) => (
              <li key={j} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-batik text-sm font-bold text-rice">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-bark">{j}</h3>
                  <p className="mt-1 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
            <li className="pl-11">
              <Link href={`/kartu-resep/${r.slug}`} className="recipe-label inline-block py-1.5 leading-[1.8] text-clay underline underline-offset-4">Buka kartu {r.nama.toLowerCase()} lengkap</Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
