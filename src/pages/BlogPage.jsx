import PageHeader from '../components/PageHeader';

const posts = [
  {
    title: '5 Financial Habits That Scale with Your Income',
    date: 'March 2, 2026',
    snippet: 'Build systems for saving, investing, and forecasting that evolve as your career grows.',
  },
  {
    title: 'How to Evaluate Business Expansion Risk',
    date: 'February 20, 2026',
    snippet: 'Use scenario modeling to test growth decisions before committing significant capital.',
  },
  {
    title: 'Smart Tax Moves Before Year-End',
    date: 'January 30, 2026',
    snippet: 'A practical checklist for business owners and professionals looking to reduce tax burden.',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Finance insights and market perspectives"
        description="Stay informed with practical articles from our advisors on wealth, tax, business planning, and market trends."
      />
      <section className="bg-slate-900 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-white/10 bg-slate-800 p-6 text-slate-100">
              <p className="text-sm text-cyan-300">{post.date}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-3 text-slate-300">{post.snippet}</p>
              <button className="mt-5 text-sm font-semibold text-cyan-300 hover:text-cyan-200">Read more →</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
