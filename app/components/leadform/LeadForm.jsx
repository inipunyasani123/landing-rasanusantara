'use client';

import { useState } from 'react';
import { RESEP } from '@/lib/resep';

const DAPUR = ['Restoran', 'Katering', 'Kafe', 'Hotel', 'Dapur awan (cloud kitchen)'];

export default function LeadForm() {
  const [pilih, setPilih] = useState(() => RESEP.slice(0, 3).map((r) => r.slug));
  const [selesai, setSelesai] = useState(false);

  const ubah = (slug) =>
    setPilih((p) => (p.includes(slug) ? p.filter((x) => x !== slug) : p.length < 3 ? [...p, slug] : p));

  const kirim = (e) => {
    e.preventDefault();
    // Purwarupa desain: tidak ada data yang dikirim ke mana pun.
    setSelesai(true);
  };

  const input = 'w-full border border-bark/20 bg-rice px-4 py-3 text-bark focus:border-clay focus:outline-none';

  return (
    <section id="minta" className="scroll-mt-16 bg-rice-2 px-6 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="recipe-label mb-4 text-clay">Gratis</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">Tiga kartu resep lengkap, dikirim ke surel dapur Anda</h2>
          <p className="mt-5 leading-relaxed">Pilih tiga dari empat kartu. Lengkap dengan gramasi, urutan, titik kritis, dan HPP contoh — boleh langsung dipakai di dapur.</p>
        </div>

        <div className="recipe-card bg-rice p-7 sm:p-9">
          {selesai ? (
            <div role="status" className="py-8">
              <p className="recipe-label text-clay">Tercatat</p>
              <p className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-bark">Terima kasih. Selamat memasak.</p>
              <p className="mt-4 leading-relaxed">Ini purwarupa desain, jadi tidak ada data yang dikirim dan tidak ada surel yang akan datang. Kartu lengkapnya tetap bisa dibaca di halaman kartu resep.</p>
              <button type="button" onClick={() => setSelesai(false)} className="recipe-label mt-6 border border-bark/30 px-4 py-3 text-bark hover:border-bark">Isi ulang</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-5">
              <fieldset>
                <legend className="recipe-label mb-3 text-bark">Kartu yang diminta ({pilih.length}/3)</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {RESEP.map((r) => (
                    <label key={r.slug} className={`flex cursor-pointer items-center gap-3 border px-4 py-3 ${pilih.includes(r.slug) ? 'border-clay bg-clay/8' : 'border-bark/20'}`}>
                      <input type="checkbox" checked={pilih.includes(r.slug)} onChange={() => ubah(r.slug)} className="h-4 w-4 accent-[#9a4423]" />
                      <span className="text-sm text-bark">{r.nama}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="recipe-label mb-2 block text-bark">Nama</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="surel" className="recipe-label mb-2 block text-bark">Surel dapur</label>
                  <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
                </div>
                <div>
                  <label htmlFor="usaha" className="recipe-label mb-2 block text-bark">Nama usaha</label>
                  <input id="usaha" name="usaha" required autoComplete="organization" className={input} />
                </div>
                <div>
                  <label htmlFor="dapur" className="recipe-label mb-2 block text-bark">Jenis dapur</label>
                  <select id="dapur" name="dapur" required defaultValue="" className={input}>
                    <option value="" disabled>Pilih jenis dapur</option>
                    {DAPUR.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" disabled={pilih.length === 0} className="w-full bg-clay py-4 font-semibold text-rice hover:bg-clay-2 disabled:opacity-60">
                Kirim {pilih.length} kartu resep ke surel saya
              </button>
              <p className="text-xs leading-relaxed">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
