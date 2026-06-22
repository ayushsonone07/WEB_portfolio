"use client"

import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/public/profile.webp";
import { useEffect, useState } from "react";

// shadcn/ui imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* ─────────────────────────────────────────
   QUOTES
───────────────────────────────────────── */
function Quotes() {
  const [quote, setQuote] = useState({ q: "", a: "" });

  useEffect(() => {
    fetch("https://zenquotes.io/api/today")
      .then((res) => res.json())
      .then((data) => setQuote(data[0] || { q: "", a: "" }))
      .catch(() => setQuote({ q: "Stay hungry, stay foolish.", a: "Steve Jobs" }));
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic text-gray-700 mb-4">
          &ldquo;{quote.q}&rdquo;
        </blockquote>
        <footer className="text-sm sm:text-base text-gray-500 font-medium">
          &mdash; {quote.a}
        </footer>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const skills = ["C", "JAVA", "JavaScript", "SQL", "Spring Boot", "React.js", "Next.js", "Git"];

const projects = [
  {
    title: "HR Dashboard",
    tag: "Internal Tool",
    tagColor: "bg-indigo-500/20 text-indigo-300",
    description:
      "Internal HR Dashboard to manage recruiter performance, pending leads, and leave tracking for KVC Consultants Ltd.",
    tech: ["Next.js", "Tailwind CSS", "Google Sheets"],
    year: "2024",
    status: "Live",
  },
  {
    title: "WhatsApp Broadcast Automation",
    tag: "Automation",
    tagColor: "bg-green-500/20 text-green-300",
    description:
      "Automated WhatsApp broadcasts using AiSensy API, reducing manual outreach effort by 80%.",
    tech: ["JavaScript", "AiSensy API", "Next.js"],
    year: "2024",
    status: "Live",
  },
  {
    title: "Portfolio Website",
    tag: "Personal",
    tagColor: "bg-purple-500/20 text-purple-300",
    description:
      "This portfolio — built with Next.js 14, Tailwind CSS, and shadcn/ui. Features smooth animations and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    year: "2025",
    status: "Live",
  },
  {
    title: "CRUD Web Application",
    tag: "Internship",
    tagColor: "bg-yellow-500/20 text-yellow-300",
    description:
      "Responsive web application with full CRUD operations, authentication, and SQL database integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    year: "2023",
    status: "Completed",
  },
];

/* ─────────────────────────────────────────
   GLASS CARD
───────────────────────────────────────── */
const GlassCard = ({ title, children }) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-8 md:p-10 shadow-2xl">
    <div className="absolute top-16 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl" />
    <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl" />
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">{title}</h2>
    <div className="relative z-10">{children}</div>
  </div>
);

/* ─────────────────────────────────────────
   ABOUT DIALOG CONTENT
───────────────────────────────────────── */
function AboutDialogContent() {
  return (
    <div className="space-y-8">
      {/* Top: avatar + intro */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg flex-shrink-0">
          <Image src={ProfileImg} alt="Ayush Sonone" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-indigo-400 mb-1">
            Full-Stack Developer
          </p>
          <h3 className="text-2xl font-bold text-white mb-2">Ayush Sonone</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Based in Indore, India — I build fast, accessible, and visually precise web
            experiences. I care about the gap between design and engineering, and I work
            to close it.
          </p>
        </div>
      </div>

      <div className="h-px bg-white/[0.07]" />

      {/* Story */}
      <div>
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-gray-500 mb-3">
          My story
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          I graduated with a B.Tech in Electronics & Communication from RGPV University in 2023.
          While my degree was in hardware, I discovered a deep love for software — particularly
          the craft of turning ideas into interactive products people can use every day.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed mt-3">
          Since then I've shipped production work at KVC Consultants Ltd, where I built
          internal tooling, automated workflows, and pushed for better engineering practices.
          I believe clean code and delightful UI are not trade-offs.
        </p>
      </div>

      <div className="h-px bg-white/[0.07]" />

      {/* Skills */}
      <div>
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-gray-500 mb-3">
          Skills & tools
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/[0.07] border border-white/10 text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-white/[0.07]" />

      {/* Fun facts row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "2+", label: "Years Experience" },
          { value: "10+", label: "Projects Shipped" },
          { value: "2", label: "Companies" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-2xl font-black text-white">{value}</p>
            <p className="text-[11px] text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex gap-3 pt-2">
        <Link
          href="/about"
          className="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Full About Page
        </Link>
        <Link
          href="/contact"
          className="flex-1 text-center border border-white/15 hover:bg-white/[0.07] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PROJECTS DIALOG CONTENT
───────────────────────────────────────── */
function ProjectsDialogContent() {
  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm">
        A selection of things I've built — from internal tools to personal projects.
      </p>

      <div className="space-y-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.07] p-5 transition-colors"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-white font-bold text-base">{p.title}</h4>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[11px] text-gray-500">{p.year}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400">
                  {p.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[13px] leading-relaxed mb-3">{p.description}</p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Link
          href="/projects"
          className="block text-center bg-[#1a1a2e] hover:bg-[#262645] border border-white/10 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
        >
          View All Projects ↗
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   DIALOG TRIGGER BUTTON (reusable)
───────────────────────────────────────── */
function PreviewButton({
  children,
  className = "",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
        border border-white/10 bg-white/[0.06] text-gray-300
        hover:bg-white/[0.1] hover:text-white transition-all ${className}`}
    >
      {children}
      <span className="opacity-40 group-hover:opacity-100 transition-opacity text-xs">↗</span>
    </button>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "linear-gradient(160deg, #e8eaf6 0%, #fce4ec 100%)" }}
    >

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 sm:pt-0">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-10 sm:gap-20 w-full max-w-6xl">
          <div className="max-w-[560px] text-center sm:text-left">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-indigo-500 mb-4">
              Full-Stack Developer
            </p>
            <h1 className="text-[clamp(2rem,8vw,3.8rem)] font-black leading-[1.08] tracking-[-0.03em] text-[#1a1a2e] mb-6">
              Crafting Digital
              <br />Experiences,
              <br />
              <span className="text-indigo-500">Designing Tomorrow.</span>
            </h1>
            <p className="text-sm sm:text-base leading-[1.75] text-gray-500 mb-8">
              Welcome to my digital canvas, where innovation and creativity converge. With a keen
              eye for aesthetics and a mastery of code, my portfolio showcases projects that
              reflect my commitment to excellence.
            </p>
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <Link
                href="/projects"
                className="bg-[#1a1a2e] text-white px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-[#1a1a2e] text-[#1a1a2e] px-6 py-3 rounded-xl font-semibold hover:bg-black/5 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image src={ProfileImg} alt="Ayush Sonone" className="w-full h-full object-cover" priority />
          </div>
        </div>
      </section>

      {/* ── QUOTES ── */}
      <Quotes />

      {/* ── QUICK PREVIEW SECTION (dialogs) ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-8 md:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-2">
              Quick Peek
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Explore My Work
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md">
              Get a snapshot of who I am and what I've built — without leaving this page.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ABOUT DIALOG */}
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                      ↗
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl mb-4">
                      👤
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">About Me</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      Who I am, where I've been, and what drives my work.
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-lg bg-zinc-900 border-white/10 text-white max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-white text-xl font-bold">About Me</DialogTitle>
                  </DialogHeader>
                  <AboutDialogContent />
                </DialogContent>
              </Dialog>

              {/* PROJECTS DIALOG */}
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                      ↗
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl mb-4">
                      🛠️
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">Projects</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      A curated list of things I've shipped — tools, apps, and experiments.
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-lg bg-zinc-900 border-white/10 text-white max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-white text-xl font-bold">Projects</DialogTitle>
                  </DialogHeader>
                  <ProjectsDialogContent />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-gray-400 text-center">
            Technologies
          </p>
          <h2 className="text-3xl font-bold text-center text-[#1a1a2e] mt-2 mb-10">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/70 backdrop-blur-lg rounded-xl py-3 text-center font-semibold text-gray-700 border border-black/5"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <GlassCard title="Work Experience">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white">Data and Webpage Management</h3>
            <p className="text-gray-300 mt-2"><strong>Company:</strong> KVC Consultants Ltd</p>
            <p className="text-gray-300"><strong>Duration:</strong> July 2024 – Present</p>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>Built an internal HR Dashboard to manage recruiter performance, pending leads and leave tracking.</p>
              <p>Automated WhatsApp broadcasts using AiSensy API.</p>
              <p>Cleaned and structured spreadsheet data to generate HR insights and reports.</p>
            </div>
            <p className="mt-4 text-indigo-300">Next.js • JavaScript • Tailwind CSS • AiSensy • Google Sheets</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Web Developer Intern</h3>
            <p className="text-gray-300 mt-2"><strong>Company:</strong> Tech Global Solutions</p>
            <p className="text-gray-300"><strong>Duration:</strong> Sep 2023 – Jan 2024</p>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>Developed responsive web pages and implemented CRUD operations.</p>
              <p>Integrated authentication and handled SQL database interactions.</p>
            </div>
            <p className="mt-4 text-indigo-300">HTML • CSS • JavaScript • jQuery • SQL • PHP</p>
          </div>
        </GlassCard>
      </section>

      {/* ── EDUCATION ── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <GlassCard title="Education">
          <h3 className="text-2xl font-bold text-white">Bachelor of Technology (B.Tech)</h3>
          <p className="text-gray-300 mt-4"><strong>University:</strong> RGPV University</p>
          <p className="text-gray-300"><strong>Year:</strong> 2019 – 2023</p>
          <p className="text-gray-300"><strong>Branch:</strong> Electronics & Communication</p>
        </GlassCard>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-10 shadow-2xl">
          <div className="absolute top-12 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-24 h-24 bg-pink-400/30 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white">Have a Project in Mind?</h2>
            <Link href="/contact" className="inline-block mt-4 text-blue-400 font-semibold hover:text-blue-300">
              Let's Talk ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}