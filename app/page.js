import Image from "next/image";
import Link from "next/link";
import Profile from "@/public/avtar.png";

export const metadata = {
  title: "Portfolio / ayushsonone07",
  description: "Portfolio website of Ayush Sonone",
};

const skills = [
  "C", "PHP", "JavaScript", "SQL", "NoSQL",
  "React", "Next.js", "Git", "Linux", "HTML", "CSS", "Node.js",
];

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "linear-gradient(160deg, #e8eaf6 0%, #fce4ec 100%)" }}
    >

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 sm:pt-0">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-10 sm:gap-20 w-full max-w-5xl">

          {/* Text */}
          <div className="max-w-[560px] text-center sm:text-left">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-indigo-500 mb-4">
              Full-Stack Developer
            </p>
            <h1 className="text-[clamp(2rem,8vw,3.8rem)] font-black leading-[1.08] tracking-[-0.03em] text-[#1a1a2e] mb-6">
              Crafting Digital<br />
              Experiences,<br />
              <span className="text-indigo-500">Designing</span> Tomorrow.
            </h1>
            <p className="text-sm sm:text-base leading-[1.75] text-gray-500 mb-8 sm:mb-10">
              Welcome to my digital canvas, where innovation and creativity converge.
              With a keen eye for aesthetics and a mastery of code, my portfolio showcases
              a diverse collection of projects that reflect my commitment to excellence.
            </p>
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,26,46,0.25)]"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-[#1a1a2e] border-[1.5px] border-[#1a1a2e] px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all hover:bg-black/[0.05]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src={Profile}
              alt="Ayush Sonone"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <hr className="w-full h-px border-0 bg-black/[0.08]" />

      {/* ── SKILLS ── */}
      <section className="py-14 sm:py-20 px-6 sm:px-12">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-gray-400 text-center mb-2">
          Technologies
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#1a1a2e] tracking-tight mb-10">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-[700px] mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center justify-center bg-white/70 border border-black/[0.08] rounded-xl px-3 py-2.5 text-[0.78rem] sm:text-[0.82rem] font-semibold text-gray-600 backdrop-blur-lg text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <hr className="w-full h-px border-0 bg-black/[0.08]" />

      {/* ── BADGES & CERTS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 px-6 sm:px-12 py-12">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a1a2e] tracking-tight text-center mb-8">
            My Badges
          </h2>
          {/* <Badges /> */}
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a1a2e] tracking-tight text-center mb-8">
            Certifications
          </h2>
          {/* <Slider /> */}
        </div>
      </div>

    </div>
  );
}