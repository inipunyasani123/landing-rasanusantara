import Link from 'next/link';
import MenuPonsel from './MenuPonsel';

const NAV = [
  ['/#anatomi', 'Anatomi kartu'],
  ['/kartu-resep', 'Kartu resep'],
  ['/#layanan', 'Layanan'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bark/10 bg-rice/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="/" className="py-2 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-bark sm:text-xl">
          Rasa <span className="text-clay">Nusantara</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="recipe-label py-2 text-bark-soft transition-colors hover:text-clay">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#minta" className="inline-flex h-11 items-center bg-clay px-3.5 text-sm font-semibold text-rice hover:bg-clay-2 sm:px-4">
            3 kartu gratis
          </Link>
          <MenuPonsel tautan={NAV} />
        </div>
      </div>
    </header>
  );
}
