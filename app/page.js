"use client"

import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/public/profile-instagram.webp";
import { useEffect, useState } from "react";

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

const skills = [
  "C",
  "JAVA",
  "JavaScript",
  "SQL",
  "Spring Boot",
  "React.js",
  "Next.js",
  "Git",
];

const GlassCard = ({ title, children }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-8 md:p-10 shadow-2xl">
      <div className="absolute top-16 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl" />

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
        {title}
      </h2>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background:
          "linear-gradient(160deg, #e8eaf6 0%, #fce4ec 100%)",
      }}
    >
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 sm:pt-0">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-10 sm:gap-20 w-full max-w-6xl">
          <div className="max-w-[560px] text-center sm:text-left">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-indigo-500 mb-4">
              Full-Stack Developer
            </p>

            <h1 className="text-[clamp(2rem,8vw,3.8rem)] font-black leading-[1.08] tracking-[-0.03em] text-[#1a1a2e] mb-6">
              Crafting Digital
              <br />
              Experiences,
              <br />
              <span className="text-indigo-500">
                Designing Tomorrow.
              </span>
            </h1>

            <p className="text-sm sm:text-base leading-[1.75] text-gray-500 mb-8">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code,
              my portfolio showcases projects that reflect my commitment to
              excellence.
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
            <Image
              src={ProfileImg}
              alt="Ayush Sonone"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <Quotes />

      {/* SKILLS */}
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

      {/* WORK EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <GlassCard title="Work Experience">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white">
              Data and Webpage Management
            </h3>

            <p className="text-gray-300 mt-2">
              <strong>Company:</strong> KVC Consultants Ltd
            </p>

            <p className="text-gray-300">
              <strong>Duration:</strong> July 2024 – Present
            </p>

            <div className="mt-4 space-y-2 text-gray-300">
              <p>
                Built an internal HR Dashboard to manage recruiter
                performance, pending leads and leave tracking.
              </p>

              <p>
                Automated WhatsApp broadcasts using AiSensy API.
              </p>

              <p>
                Cleaned and structured spreadsheet data to generate HR
                insights and reports.
              </p>
            </div>

            <p className="mt-4 text-indigo-300">
              Next.js • JavaScript • Tailwind CSS • AiSensy • Google Sheets
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Web Developer Intern
            </h3>

            <p className="text-gray-300 mt-2">
              <strong>Company:</strong> Tech Global Solutions
            </p>

            <p className="text-gray-300">
              <strong>Duration:</strong> Sep 2023 – Jan 2024
            </p>

            <div className="mt-4 space-y-2 text-gray-300">
              <p>
                Developed responsive web pages and implemented CRUD
                operations.
              </p>

              <p>
                Integrated authentication and handled SQL database
                interactions.
              </p>
            </div>

            <p className="mt-4 text-indigo-300">
              HTML • CSS • JavaScript • jQuery • SQL • PHP
            </p>
          </div>
        </GlassCard>
      </section>

      {/* EDUCATION */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <GlassCard title="Education">
          <h3 className="text-2xl font-bold text-white">
            Bachelor of Technology (B.Tech)
          </h3>

          <p className="text-gray-300 mt-4">
            <strong>University:</strong> RGPV University
          </p>

          <p className="text-gray-300">
            <strong>Year:</strong> 2019 – 2023
          </p>

          <p className="text-gray-300">
            <strong>Branch:</strong> Electronics & Communication
          </p>
        </GlassCard>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-10 shadow-2xl">
          <div className="absolute top-12 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-24 h-24 bg-pink-400/30 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white">
              Have a Project in Mind?
            </h2>

            <Link
              href="/contact"
              className="inline-block mt-4 text-blue-400 font-semibold hover:text-blue-300"
            >
              Let's Talk ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}