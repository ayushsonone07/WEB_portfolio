import Link from "next/link";

const projects = [
  {
    id: 6,
    image: "https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Direct WhatsApp",
    description: "Chat with anyone on WhatsApp without saving their number — paste a phone number and open a conversation instantly.",
    link: "https://ayushsonone07.github.io/DirectWhatsapp/",
    tag: "Utility",
    tagStyle: "bg-emerald-100 text-emerald-800",
  },
  {
    id: 5,
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2Mi1hdW0tMDEta2x4Y3AwNTMuanBn.jpg",
    title: "Promptia",
    description: "A full-stack platform to share, edit, and delete AI prompts. Login with Google and contribute to a growing ideas library.",
    link: "https://promptia-alpha.vercel.app",
    tag: "Full-Stack",
    tagStyle: "bg-violet-100 text-violet-800",
  },
  {
    id: 4,
    image: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1072-037-c-kvhh08mp.jpg?w=800",
    title: "Jokeran",
    description: "A lighthearted app that serves a random Hindi joke on every page load. Simple, fun, and a great first taste of APIs.",
    link: "https://ayushsonone07.github.io/joke/",
    tag: "Fun",
    tagStyle: "bg-pink-100 text-pink-800",
  },
  {
    id: 3,
    image: "https://thumbs.dreamstime.com/b/abstract-music-background-vinyl-mixer-64824483.jpg",
    title: "QR Code Generator",
    description: "Paste any URL or text and get a scannable QR code in seconds. Uses a public API for instant generation.",
    link: "https://ayushsonone07.github.io/QR_CODE-_Generator/",
    tag: "Tool",
    tagStyle: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    image: "https://i0.wp.com/picjumbo.com/wp-content/uploads/colored-circles-abstract-background-free-photo.jpg?w=1024&quality=50",
    title: "To-Do List",
    description: "A clean task manager built with vanilla HTML, CSS, and JS. Add, complete, and remove tasks with zero friction.",
    link: "https://ayushsonone07.github.io/TODO_List/",
    tag: "Productivity",
    tagStyle: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 1,
    image: "https://4kwallpapers.com/images/walls/thumbs/9022.png",
    title: "Calculator",
    description: "A sleek web calculator for everyday arithmetic. Responsive, keyboard-friendly, and pixel-perfect.",
    link: "https://ayushsonone07.github.io/calculator/",
    tag: "App",
    tagStyle: "bg-slate-100 text-slate-700",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "linear-gradient(160deg, #e8eaf6 0%, #fce4ec 100%)" }}>
      <div className="max-w-6xl mx-auto px-8 pt-28 pb-20">

        {/* ── HEADER ── */}
        <p className="text-xs font-bold tracking-[0.14em] uppercase text-indigo-500 mb-3">
          What I've built
        </p>
        <h1
          className="text-[clamp(2.8rem,6vw,4.5rem)] font-black tracking-[-0.04em] leading-none mb-4"
          style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          Projects.
        </h1>
        <p className="text-base text-gray-500 leading-relaxed mb-14">
          A selection of things I've shipped — from quick tools to full-stack apps.
        </p>

        {/* ── GRID ── */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/70 border border-black/[0.07] rounded-[18px] overflow-hidden backdrop-blur-xl flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tag */}
                <span className={`self-start text-[0.7rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-md mb-3 ${project.tagStyle}`}>
                  {project.tag}
                </span>

                <h2 className="text-[1.1rem] font-extrabold text-[#1a1a2e] tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-[0.88rem] text-gray-500 leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-2 text-[0.85rem] font-bold text-indigo-500 border-[1.5px] border-indigo-500 px-4 py-2.5 rounded-xl transition-all hover:bg-indigo-500 hover:text-white"
                >
                  <i className="ti ti-external-link" aria-hidden="true" />
                  See project
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}