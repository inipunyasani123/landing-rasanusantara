import Link from 'next/link';
import { RESEP, SITE } from '@/lib/resep';
import Koleksi from '../components/Koleksi';

export const metadata = {
  title: 'Kartu Resep',
  description: `${RESEP.map((r) => r.nama).join(', ')}: kartu resep terstandar lengkap dengan gramasi, urutan, titik kritis, dan HPP per porsi.`,
  alternates: { canonical: `${SITE}/kartu-resep` },
};

export default function KartuResep() {
  return (
    <main className="bg-rice-2 px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="recipe-label text-clay">Kartu resep</p>
        <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.05] font-semibold text-bark md:text-6xl">Empat kartu, siap ditempel di dinding dapur</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Setiap kartu bisa diskalakan dari 1 sampai 200 porsi. Gramasi dan biaya bahan berubah, harga pokok per porsi tetap.</p>
        <div className="mt-14">
          <Koleksi judulTingkat="h1" />
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-bark/20 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-lg leading-relaxed">Ingin kartu untuk resep dapur Anda sendiri? Kami menulis ulang dan menguji masak dua kali.</p>
          <Link href="/#layanan" className="shrink-0 bg-clay px-6 py-3.5 font-semibold text-rice hover:bg-clay-2">Lihat layanan</Link>
        </div>
      </div>
    </main>
  );
}
