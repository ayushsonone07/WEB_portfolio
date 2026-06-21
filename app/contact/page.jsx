"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaInstagram, FaFacebookF,
  FaYoutube, FaTelegramPlane, FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "ayushsonone07",
    href: "https://github.com/ayushsonone07",
    bg: "hover:bg-gray-800",
    text: "hover:text-white",
    desc: "Check out my open-source work",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "ayush-sonone",
    href: "https://www.linkedin.com/in/ayush-sonone-4a3100220/",
    bg: "hover:bg-blue-600",
    text: "hover:text-white",
    desc: "Let's connect professionally",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@ayushsonone07",
    href: "https://www.instagram.com/ayushsonone07/",
    bg: "hover:bg-pink-500",
    text: "hover:text-white",
    desc: "Follow my creative side",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    handle: "aayush.sonone.7",
    href: "https://www.facebook.com/aayush.sonone.7",
    bg: "hover:bg-blue-700",
    text: "hover:text-white",
    desc: "Connect on Facebook",
  },
  {
    icon: BsTwitterX,
    label: "Twitter / X",
    handle: "@sononeayush07",
    href: "https://twitter.com/sononeayush07",
    bg: "hover:bg-black",
    text: "hover:text-white",
    desc: "Follow for dev thoughts",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    handle: "@ayushsonone4772",
    href: "https://www.youtube.com/@ayushsonone4772",
    bg: "hover:bg-red-600",
    text: "hover:text-white",
    desc: "Watch my video content",
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    handle: "@Ayushsonone07",
    href: "https://t.me/Ayushsonone07",
    bg: "hover:bg-sky-500",
    text: "hover:text-white",
    desc: "Message me on Telegram",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    handle: "+91 83493 07304",
    href: "https://api.whatsapp.com/send/?phone=%2B918349307304&text&type=phone_number&app_absent=0",
    bg: "hover:bg-green-500",
    text: "hover:text-white",
    desc: "Chat directly on WhatsApp",
  },
];

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handleWhatsApp = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    const text = name.trim()
      ? `Hi Ayush, I'm ${name.trim()}.\n\n${trimmed}`
      : trimmed;
    window.open(
      `https://api.whatsapp.com/send/?phone=%2B918349307304&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setMessage("");
    setName("");
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "linear-gradient(160deg, #e8eaf6 0%, #fce4ec 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-28 pb-20">

        {/* ── HEADER ── */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-xs font-bold tracking-[0.14em] uppercase text-indigo-500 mb-3">
            Let's talk
          </p>
          <h1
            className="text-[clamp(2.8rem,6vw,4.5rem)] font-black tracking-[-0.04em] leading-none mb-5"
            style={{
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get in Touch.
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-xl">
            Whether you have a project in mind, a question, or just want to say hi —
            I'm always open to a conversation. Pick any channel below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">

          {/* ── LEFT: Social cards ── */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              className="text-xs font-bold tracking-[0.12em] uppercase text-gray-400 mb-5"
            >
              Find me on
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socials.map(({ icon: Icon, label, handle, href, bg, text, desc }, i) => (
                <motion.a
                  key={label}
                  {...fadeUp(0.12 + i * 0.05)}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 bg-white/65 border border-black/[0.07] rounded-2xl px-5 py-4 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(0,0,0,0.10)] ${bg} ${text}`}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-black/[0.05] group-hover:bg-white/20 transition-colors">
                    <Icon className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#1a1a2e] group-hover:text-inherit leading-tight">
                      {label}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-inherit/80 truncate">
                      {handle}
                    </p>
                    <p className="text-[0.7rem] text-gray-400 group-hover:text-inherit/70 mt-0.5 hidden sm:block">
                      {desc}
                    </p>
                  </div>
                  <svg
                    className="ml-auto flex-shrink-0 w-4 h-4 text-gray-300 group-hover:text-inherit transition-transform group-hover:translate-x-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: WhatsApp message form ── */}
          <motion.div {...fadeUp(0.2)} className="lg:sticky lg:top-28 h-fit">
            <div className="bg-white/70 border border-black/[0.07] rounded-3xl p-7 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.07)]">

              {/* Form header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-green-500 text-white text-xl shadow-[0_4px_16px_rgba(34,197,94,0.35)]">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a2e]">Message via WhatsApp</p>
                  <p className="text-xs text-gray-400">Opens directly in WhatsApp</p>
                </div>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-xs font-bold tracking-[0.08em] uppercase text-gray-400 mb-2">
                  Your Name <span className="normal-case font-normal text-gray-300">(optional)</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul"
                  className="w-full bg-black/[0.04] border border-black/[0.09] rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="block text-xs font-bold tracking-[0.08em] uppercase text-gray-400 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Ayush, I'd like to talk about..."
                  className="w-full bg-black/[0.04] border border-black/[0.09] rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:border-indigo-400 focus:bg-white transition-all duration-200"
                />
              </div>

              {/* Send button */}
              <button
                onClick={handleWhatsApp}
                disabled={!message.trim()}
                className={`w-full flex items-center justify-center gap-2.5 font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 ${
                  sent
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : message.trim()
                    ? "bg-green-500 text-white hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {sent ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Opening WhatsApp…
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="text-lg" />
                    Send on WhatsApp
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-black/[0.06]" />
                <span className="text-xs text-gray-400">or reach me at</span>
                <div className="flex-1 h-px bg-black/[0.06]" />
              </div>

              {/* Email CTA */}
              <a
                href="mailto:ayushsonone27@gmail.com"
                className="flex items-center justify-center gap-2.5 w-full border border-black/[0.09] rounded-xl py-3 text-sm font-semibold text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200"
              >
                <SiGmail className="text-base" />
                ayushsonone27@gmail.com
              </a>

              <p className="text-center text-[0.68rem] text-gray-400 mt-4">
                Typically responds within 24 hours
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}