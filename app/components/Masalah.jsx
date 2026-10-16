import { MASALAH } from '@/lib/resep';

export default function Masalah() {
  return (
    <section className="bg-rice-2 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="recipe-label mb-4 text-clay">Di dapur yang sibuk</p>
        <h2 className="max-w-2xl text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.7rem]">
          “Secukupnya” adalah takaran yang paling mahal
        </h2>
        <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
          {MASALAH.map(([j, d]) => (
            <li key={j} className="recipe-card bg-rice p-6 md:p-7">
              <h3 className="text-xl font-semibold text-bark">{j}</h3>
              <p className="mt-3 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
