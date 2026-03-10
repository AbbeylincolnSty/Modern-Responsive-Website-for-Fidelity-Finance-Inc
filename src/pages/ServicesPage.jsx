import PageHeader from '../components/PageHeader';

const services = [
  {
    title: 'Wealth Management',
    description: 'Portfolio design, risk calibration, and active guidance aligned with your goals.',
  },
  {
    title: 'Business Financial Strategy',
    description: 'Cash-flow planning, growth financing, and operational profitability support.',
  },
  {
    title: 'Retirement Planning',
    description: 'Future income modeling and tax-aware structures for lasting financial independence.',
  },
  {
    title: 'Tax Optimization',
    description: 'Strategic structures and planning to reduce liabilities while remaining compliant.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive finance services"
        description="From personal wealth to enterprise strategy, we provide tailored services that help you make smarter, faster, and more secure financial moves."
      />
      <section className="bg-slate-900 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-slate-800/80 p-7 text-slate-100">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
