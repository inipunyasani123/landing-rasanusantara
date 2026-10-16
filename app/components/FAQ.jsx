import { FAQ as DAFTAR } from '@/lib/resep';

export default function FAQ() {
  return (
    <section className="bg-rice px-6 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="recipe-label mb-4 text-clay">Pertanyaan kepala dapur</p>
          <h2 className="text-[2rem] leading-[1.1] font-semibold text-bark md:text-[2.6rem]">Sebelum resep keluarga diserahkan</h2>
        </div>
        <div className="border-t-2 border-bark">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-bark/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-bark [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="text-2xl text-clay transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
