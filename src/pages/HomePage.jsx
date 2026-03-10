import { Link } from 'react-router-dom';

const stats = [
  { label: 'Client assets advised', value: '$2.8B+' },
  { label: 'Businesses supported', value: '1,200+' },
  { label: 'Client retention', value: '97%' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-ocean to-brand-sky py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-100">We are here to secure your future</p>
            <h1 className="mb-6 text-5xl font-black leading-tight md:text-6xl">Modern Finance for Growing Ambitions</h1>
            <p className="mb-8 max-w-xl text-cyan-50/90">
              We partner with business owners, professionals, and families to build resilient financial strategies through smart planning and transparent advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-deep transition hover:bg-cyan-100">
                Explore Services
              </Link>
              <Link to="/about" className="rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Meet Our Team
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-square rounded-full border-8 border-cyan-100/80 bg-[radial-gradient(circle_at_30%_20%,#d4f9ff_0%,#9de7f5_45%,#37b3d7_100%)] p-6 shadow-glow">
              <div className="grid h-full place-items-center rounded-full bg-slate-50/95 text-center text-slate-700">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Trusted Advisory</p>
                  <p className="mt-4 text-3xl font-bold text-brand-deep">Plan. Protect. Prosper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/10 bg-slate-800/80 p-6">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-slate-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
