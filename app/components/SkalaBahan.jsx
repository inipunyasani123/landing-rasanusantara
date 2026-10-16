'use client';

import { useState } from 'react';

const rp = (n) => `Rp ${Math.round(n).toLocaleString('id-ID')}`;
const jumlah = (n) => (n >= 100 ? Math.round(n) : Math.round(n * 10) / 10).toLocaleString('id-ID');

/* Tabel bahan yang bisa diskalakan: ubah jumlah porsi, gramasi dan biaya
   ikut berubah proporsional. HPP per porsi tetap — itulah gunanya resep standar. */
export default function SkalaBahan({ bahan, porsiDasar, targetFoodCost }) {
  const [porsi, setPorsi] = useState(porsiDasar);
  const k = porsi / porsiDasar;
  const total = bahan.reduce((s, b) => s + b[3], 0) * k;
  const hpp = total / porsi;
  const jual = Math.round(hpp / (targetFoodCost / 100) / 1000) * 1000;

  const atur = (n) => setPorsi(Math.min(200, Math.max(1, n)));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 border-b border-bark/20 pb-5">
        <span className="recipe-label text-bark" id="label-porsi">Jumlah porsi</span>
        <div className="flex items-center" role="group" aria-labelledby="label-porsi">
          <button type="button" onClick={() => atur(porsi - 1)} className="h-10 w-10 border border-bark/30 text-lg text-bark hover:border-clay" aria-label="Kurangi satu porsi">−</button>
          <output className="flex h-10 min-w-16 items-center justify-center border-y border-bark/30 px-3 font-semibold tabular-nums text-bark" aria-live="polite">{porsi}</output>
          <button type="button" onClick={() => atur(porsi + 1)} className="h-10 w-10 border border-bark/30 text-lg text-bark hover:border-clay" aria-label="Tambah satu porsi">+</button>
        </div>
        <div className="flex gap-2">
          {[porsiDasar, 25, 50].filter((v, i, a) => a.indexOf(v) === i).map((n) => (
            <button key={n} type="button" onClick={() => atur(n)} aria-pressed={porsi === n}
              className={`recipe-label px-3 py-2 ${porsi === n ? 'bg-clay text-rice' : 'border border-bark/25 text-bark hover:border-clay'}`}>
              {n} porsi
            </button>
          ))}
        </div>
      </div>

      <table className="mt-4 w-full text-sm">
        <caption className="sr-only">Bahan untuk {porsi} porsi</caption>
        <thead>
          <tr className="border-b border-bark/20 text-left">
            <th scope="col" className="recipe-label py-2 pr-3 font-semibold">Bahan</th>
            <th scope="col" className="recipe-label py-2 pr-3 text-right font-semibold">Jumlah</th>
            <th scope="col" className="recipe-label py-2 text-right font-semibold">Biaya</th>
          </tr>
        </thead>
        <tbody>
          {bahan.map(([b, j, s, biaya]) => (
            <tr key={b} className="border-b border-bark/10">
              <td className="py-2.5 pr-3 text-bark">{b}</td>
              <td className="py-2.5 pr-3 text-right whitespace-nowrap tabular-nums text-bark">{jumlah(j * k)} {s}</td>
              <td className="py-2.5 text-right whitespace-nowrap tabular-nums">{rp(biaya * k)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-bark">
            <th scope="row" colSpan={2} className="py-3 text-left font-semibold text-bark">Total bahan</th>
            <td className="py-3 text-right font-semibold whitespace-nowrap tabular-nums text-bark">{rp(total)}</td>
          </tr>
        </tfoot>
      </table>

      <dl className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-rice p-4">
          <dt className="recipe-label">HPP per porsi</dt>
          <dd className="mt-1 font-[family-name:var(--font-fraunces)] text-xl font-semibold whitespace-nowrap tabular-nums text-bark sm:text-2xl">{rp(Math.round(hpp / 50) * 50)}</dd>
        </div>
        <div className="bg-rice p-4">
          <dt className="recipe-label">Harga jual saran</dt>
          <dd className="mt-1 font-[family-name:var(--font-fraunces)] text-xl font-semibold whitespace-nowrap tabular-nums text-clay sm:text-2xl">{rp(jual)}</dd>
          <dd className="mt-0.5 text-xs">pada food cost {targetFoodCost}%</dd>
        </div>
      </dl>
    </div>
  );
}
