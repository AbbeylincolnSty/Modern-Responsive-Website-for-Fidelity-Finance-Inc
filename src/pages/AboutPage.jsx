import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built on trust, driven by outcomes"
        description="Our advisors combine data-led planning with a human-first approach to help you make confident financial decisions at every stage of life and business."
      />
      <section className="bg-slate-900 py-16 text-slate-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Who we are</h2>
            <p className="mt-4 text-slate-300">
              Fidelity Finance Inc. is a multidisciplinary team of planners, analysts, and strategists focused on long-term wealth health. We simplify complex financial choices with clear recommendations and measurable plans.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-800 p-8">
            <h3 className="text-xl font-semibold text-white">Our values</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Transparency in every recommendation</li>
              <li>• Responsibility to your long-term goals</li>
              <li>• Innovation through modern financial tools</li>
              <li>• Partnership grounded in trust and accountability</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
