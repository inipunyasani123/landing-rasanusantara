import Link from 'next/link';
import { RESEP } from '@/lib/resep';

export default function Footer() {
  return (
    <footer className="bg-bark px-6 text-rice">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div className="col-span-2 md:col-span-1">
          <p className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">Rasa <span className="text-[#e9a27c]">Nusantara</span></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-rice/80">Kartu resep terstandar untuk dapur restoran, katering, dan kafe yang menyajikan masakan Nusantara.</p>
        </div>
        <nav aria-label="Kartu resep">
          <p className="recipe-label mb-4 text-[#e9a27c]">Kartu resep</p>
          <ul className="space-y-1 text-sm text-rice/80">
            {RESEP.map((r) => <li key={r.slug}><Link href={`/kartu-resep/${r.slug}`} className="inline-block py-1.5 hover:text-rice">{r.nama}</Link></li>)}
          </ul>
        </nav>
        <nav aria-label="Halaman">
          <p className="recipe-label mb-4 text-[#e9a27c]">Halaman</p>
          <ul className="space-y-1 text-sm text-rice/80">
            <li><Link href="/#anatomi" className="inline-block py-1.5 hover:text-rice">Anatomi kartu</Link></li>
            <li><Link href="/#layanan" className="inline-block py-1.5 hover:text-rice">Layanan</Link></li>
            <li><Link href="/#minta" className="inline-block py-1.5 hover:text-rice">3 kartu gratis</Link></li>
          </ul>
        </nav>
      </div>
      <p className="recipe-label mx-auto max-w-6xl border-t border-rice/15 py-6 leading-[1.8] text-rice/70">
        © 2026 Rasa Nusantara · Harga bahan, HPP, dan harga jual di situs ini adalah contoh untuk purwarupa desain.
      </p>
    </footer>
  );
}
