export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-gradient-to-r from-brand-deep via-brand-ocean to-brand-sky py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-100">{eyebrow}</p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-cyan-50/90">{description}</p>
      </div>
    </section>
  );
}
