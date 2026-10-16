import Link from 'next/link';
import { RESEP, hitung, rupiah } from '@/lib/resep';
import Pedas from '../Pedas';

/* Hero: janji utamanya di kiri, kartu resep rendang yang sedikit miring di
   kanan — seperti kartu yang ditempel di dinding dapur. */
export default function Hero() {
  const r = RESEP[0];
  const h = hitung(r);
  return (
    <section className="relative overflow-hidden bg-rice px-6 pt-28 pb-16 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="recipe-label text-clay">Kartu resep terstandar untuk dapur restoran</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.05] font-semibold text-bark sm:text-5xl lg:text-[3.6rem]">
            Rendang yang sama, <span className="text-clay italic">siapa pun</span> yang memasak.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            Rasa Nusantara menulis ulang resep tradisional menjadi kartu yang bisa diulang: gramasi,
            urutan, titik kritis, dan harga pokok per porsi. Resepnya tetap milik dapur Anda.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="#minta" className="inline-flex justify-center bg-clay px-7 py-4 font-semibold text-rice hover:bg-clay-2">
              Minta 3 kartu resep gratis
            </Link>
            <Link href="/kartu-resep" className="inline-flex justify-center border border-bark/30 px-7 py-4 font-semibold text-bark hover:border-bark">
              Lihat kartu resep
            </Link>
          </div>
        </div>

        <figure className="recipe-card relative mx-auto w-full max-w-md rotate-[1.5deg] bg-rice-2 p-7 shadow-[0_24px_50px_-28px_rgb(58_47_38/0.55)]">
          <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 bg-indigo-batik/80" />
          <figcaption className="flex items-start justify-between gap-4 border-b border-bark/20 pb-4">
            <span>
              <span className="recipe-label text-clay">{r.asal}</span>
              <span className="mt-1 block font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-bark">{r.nama}</span>
            </span>
            <span className="text-right text-sm">
              <span className="block text-bark">{r.porsi} porsi</span>
              <Pedas n={r.pedas} />
            </span>
          </figcaption>
          <table className="mt-4 w-full text-sm">
            <caption className="sr-only">Sebagian bahan rendang daging</caption>
            <tbody>
              {r.bahan.slice(0, 5).map(([b, j, s]) => (
                <tr key={b} className="border-b border-bark/10">
                  <td className="py-2 pr-3 text-bark">{b}</td>
                  <td className="py-2 text-right whitespace-nowrap tabular-nums text-bark">{j.toLocaleString('id-ID')} {s}</td>
                </tr>
              ))}
              <tr><td className="pt-2 text-bark-soft italic" colSpan={2}>…dan {r.bahan.length - 5} bahan lain</td></tr>
            </tbody>
          </table>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-bark/20 pt-4 text-sm">
            <p><span className="recipe-label block">HPP / porsi</span><span className="mt-1 block font-semibold text-bark">{rupiah(h.hpp)}</span></p>
            <p><span className="recipe-label block">Harga jual saran</span><span className="mt-1 block font-semibold text-clay">{rupiah(h.jual)}</span></p>
          </div>
        </figure>
      </div>
    </section>
  );
}
