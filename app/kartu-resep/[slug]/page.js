import Piring from '../../components/Piring';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RESEP, SITE, hitung, menit, resepBySlug, rupiah } from '@/lib/resep';
import Pedas from '../../components/Pedas';
import SkalaBahan from '../../components/SkalaBahan';

export function generateStaticParams() {
  return RESEP.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = resepBySlug(slug);
  if (!r) return {};
  const h = hitung(r);
  return {
    title: `Kartu Resep ${r.nama}`,
    description: `${r.nama} (${r.asal}) untuk ${r.porsi} porsi: gramasi, urutan kerja, titik kritis, dan HPP ${rupiah(h.hpp)} per porsi.`,
    alternates: { canonical: `${SITE}/kartu-resep/${r.slug}` },
  };
}

export default async function Kartu({ params }) {
  const { slug } = await params;
  const r = resepBySlug(slug);
  if (!r) notFound();
  const lain = RESEP.filter((x) => x.slug !== r.slug);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: r.nama,
    recipeCuisine: `Indonesia — ${r.asal}`,
    recipeYield: `${r.porsi} porsi`,
    prepTime: `PT${r.persiapan}M`,
    cookTime: `PT${r.masak}M`,
    recipeIngredient: r.bahan.map(([b, j, s]) => `${j} ${s} ${b}`),
    recipeInstructions: r.langkah.map((t) => ({ '@type': 'HowToStep', text: t })),
    image: `${SITE}/images/hidangan/${r.slug}.webp`,
  };

  return (
    <main className="bg-rice-2 px-4 pt-28 pb-24 sm:px-6">
      <article className="recipe-card mx-auto max-w-4xl bg-rice-2 shadow-[0_24px_60px_-34px_rgb(58_47_38/0.6)]">
        <header className="border-b-2 border-bark px-6 pt-10 pb-7 sm:px-10">
          <figure className="float-right -mt-4 -mr-2 ml-3 w-28 sm:-mt-6 sm:ml-6 sm:w-48 md:w-56">
            <Piring slug={r.slug} size={448} priority alt={r.nama} className="h-auto w-full" />
            <figcaption className="recipe-label mt-1 text-center text-bark-soft">Contoh penyajian</figcaption>
          </figure>
          <p className="recipe-label text-clay"><Link href="/kartu-resep" className="inline-block py-3 hover:underline">Kartu resep</Link> · {r.asal}</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-[2.4rem] leading-[1.05] font-semibold text-bark md:text-5xl">{r.nama}</h1>
            <Pedas n={r.pedas} />
          </div>
          <p className="mt-3 text-lg leading-relaxed">{r.ringkas}</p>
          <dl className="clear-both mt-6 grid grid-cols-2 gap-4 text-sm sm:clear-none sm:grid-cols-4">
            <div><dt className="recipe-label">Porsi dasar</dt><dd className="mt-1 text-bark">{r.porsi} porsi</dd></div>
            <div><dt className="recipe-label">Satu porsi</dt><dd className="mt-1 text-bark">{r.ukuranPorsi}</dd></div>
            <div><dt className="recipe-label">Persiapan</dt><dd className="mt-1 text-bark">{menit(r.persiapan)}</dd></div>
            <div><dt className="recipe-label">Masak</dt><dd className="mt-1 text-bark">{menit(r.masak)}</dd></div>
          </dl>
        </header>

        <section aria-labelledby="bahan" className="px-6 py-8 sm:px-10">
          <h2 id="bahan" className="recipe-label mb-4 text-clay">Bahan &amp; biaya</h2>
          <SkalaBahan bahan={r.bahan} porsiDasar={r.porsi} targetFoodCost={r.targetFoodCost} />
        </section>

        <section aria-labelledby="langkah" className="border-t border-bark/20 px-6 py-8 sm:px-10">
          <h2 id="langkah" className="recipe-label mb-4 text-clay">Urutan kerja</h2>
          <ol className="space-y-4">
            {r.langkah.map((l, i) => (
              <li key={l} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3">
                <span className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-clay">{i + 1}</span>
                <p className="leading-relaxed text-bark">{l}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid gap-px border-t border-bark/20 bg-bark/15 md:grid-cols-2">
          <section aria-labelledby="kritis" className="bg-clay/10 px-6 py-8 sm:px-10">
            <h2 id="kritis" className="recipe-label mb-4 text-clay">Titik kritis</h2>
            <ul className="space-y-3">
              {r.kritis.map((k) => <li key={k} className="font-semibold leading-relaxed text-bark">{k}</li>)}
            </ul>
          </section>
          <section aria-labelledby="konsisten" className="bg-rice-2 px-6 py-8 sm:px-10">
            <h2 id="konsisten" className="recipe-label mb-4 text-clay">Supaya sama tiap shift</h2>
            <ul className="space-y-3">
              {r.konsisten.map((k) => (
                <li key={k} className="flex gap-3 leading-relaxed text-bark">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-batik" />{k}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="border-t border-bark/20 px-6 py-6 text-sm sm:px-10">
          <p><span className="recipe-label">Simpan:</span> <span className="text-bark">{r.simpan}</span></p>
          <p className="recipe-label mt-4 leading-[1.7]">Harga bahan dan HPP adalah contoh untuk purwarupa desain.</p>
        </footer>
      </article>

      <nav aria-label="Kartu resep lain" className="mx-auto mt-14 max-w-4xl">
        <p className="recipe-label mb-5 text-clay">Kartu lain</p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {lain.map((x) => (
            <li key={x.slug}>
              <Link href={`/kartu-resep/${x.slug}`} className="recipe-card flex items-center gap-4 bg-rice p-5 hover:border-clay">
                <Piring slug={x.slug} size={112} className="h-14 w-14 shrink-0" />
                <span>
                  <span className="recipe-label text-clay">{x.asal}</span>
                  <span className="mt-1 block font-[family-name:var(--font-fraunces)] text-xl font-semibold text-bark">{x.nama}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#minta" className="mt-10 inline-flex bg-clay px-7 py-4 font-semibold text-rice hover:bg-clay-2">Minta tiga kartu ke surel Anda</Link>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  );
}
