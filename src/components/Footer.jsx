export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 md:flex-row">
        <p>© {new Date().getFullYear()} Fidelity Finance Inc. All rights reserved.</p>
        <p>Built for clarity, growth, and financial confidence.</p>
      </div>
    </footer>
  );
}
