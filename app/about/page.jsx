import Link from "next/link";

const highlights = [
  { icon: "ti-code", label: "Frontend", desc: "React, Next.js, HTML/CSS, JavaScript" },
  { icon: "ti-server", label: "Backend", desc: "Node.js, PHP, SQL, NoSQL, REST APIs" },
  { icon: "ti-tool", label: "Tools", desc: "Git, Linux, Vercel, GitHub Pages" },
  { icon: "ti-school", label: "Education", desc: "B.E. Electronics & Communication — Global Engineering College, Jabalpur" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "linear-gradient(160deg, #e8eaf6 0%, #fce4ec 100%)" }}>
      <div className="max-w-4xl mx-auto px-8 pt-28 pb-20">

        {/* ── HEADER ── */}
        <header className="mb-16">
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-indigo-500 mb-3">
            Who I am
          </p>
          <h1
            className="text-[clamp(2.8rem,6vw,4.5rem)] font-black tracking-[-0.04em] leading-none mb-8"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            About me.
          </h1>
          <p className="text-[1.1rem] leading-[1.8] text-gray-500 max-w-xl border-l-[3px] border-indigo-500 pl-6">
            I'm Ayush — a passionate web developer who believes that great software lives
            at the intersection of clean code and thoughtful design.
          </p>
        </header>

        {/* ── HIGHLIGHT CARDS ── */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mb-12">
          {highlights.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="bg-white/65 border border-black/[0.08] rounded-2xl p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]"
            >
              <i className={`ti ${icon} text-indigo-500 text-2xl block mb-3`} aria-hidden="true" />
              <p className="text-[0.75rem] font-bold tracking-[0.10em] uppercase text-gray-400 mb-1">
                {label}
              </p>
              <p className="text-[0.9rem] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── STORY ── */}
        <div className="mb-12">
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-gray-400 mb-5">
            My story
          </p>
          <div className="space-y-5 text-base leading-[1.85] text-gray-500">
            <p>
              I recently completed my graduation from Global Engineering College Jabalpur in
              Electronics and Communication Engineering — and in parallel I fell in love with
              building for the web. What started as curiosity about how websites worked turned
              into a craft I practice every day.
            </p>
            <p>
              I'm strong in design and integration, with an intuitive approach to problem-solving.
              Proficient in C, PHP, JavaScript, SQL, and NoSQL on the traditional side, I've also
              picked up React, Next.js, Git, and Linux to ship full-stack projects from idea to production.
            </p>
            <p>
              I'm driven by the ability to translate business requirements into technical solutions —
              whether that's a QR code generator that just works, or a full-stack social platform
              with Google Auth and real-time data. Every project is a chance to learn something new.
            </p>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1-FdPWz9Wvbc4cCJOjI6s-c0JAZU1gaix/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,26,46,0.25)]"
          >
            <i className="ti ti-download" aria-hidden="true" />
            Download Resume
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-transparent text-[#1a1a2e] border-[1.5px] border-[#1a1a2e] px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:bg-black/[0.05]"
          >
            <i className="ti ti-arrow-right" aria-hidden="true" />
            See My Work
          </Link>
        </div>

      </div>
    </div>
  );
}