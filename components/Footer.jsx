"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaInstagram, FaFacebookF, FaGithub,
  FaLinkedin, FaYoutube, FaTelegramPlane, FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const socials = [
  { icon: FaGithub,        href: "https://github.com/ayushsonone07",                                              label: "GitHub",    hover: "hover:bg-gray-700 hover:border-gray-700 hover:text-white" },
  { icon: FaLinkedin,      href: "https://www.linkedin.com/in/ayush-sonone-4a3100220/",                           label: "LinkedIn",  hover: "hover:bg-blue-600 hover:border-blue-600 hover:text-white" },
  { icon: FaInstagram,     href: "https://www.instagram.com/ayushsonone07/",                                      label: "Instagram", hover: "hover:bg-pink-500 hover:border-pink-500 hover:text-white" },
  { icon: FaFacebookF,     href: "https://www.facebook.com/aayush.sonone.7",                                      label: "Facebook",  hover: "hover:bg-blue-700 hover:border-blue-700 hover:text-white" },
  { icon: BsTwitterX,      href: "https://twitter.com/sononeayush07",                                             label: "Twitter/X", hover: "hover:bg-black hover:border-black hover:text-white" },
  { icon: FaYoutube,       href: "https://www.youtube.com/@ayushsonone4772",                                      label: "YouTube",   hover: "hover:bg-red-600 hover:border-red-600 hover:text-white" },
  { icon: FaTelegramPlane, href: "https://t.me/Ayushsonone07",                                                    label: "Telegram",  hover: "hover:bg-sky-500 hover:border-sky-500 hover:text-white" },
  { icon: SiGmail,         href: "mailto:ayushsonone27@gmail.com",                                                label: "Gmail",     hover: "hover:bg-red-500 hover:border-red-500 hover:text-white" },
];

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
];

const contactCards = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 83493 07304",
    href: "https://api.whatsapp.com/send/?phone=%2B918349307304&text&type=phone_number&app_absent=0",
    color: "text-green-400",
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    value: "@Ayushsonone07",
    href: "https://t.me/Ayushsonone07",
    color: "text-sky-400",
  },
  {
    icon: SiGmail,
    label: "Email",
    value: "ayushsonone27@gmail.com",
    href: "mailto:ayushsonone27@gmail.com",
    color: "text-red-400",
  },
];

export default function Footer() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    const encoded = encodeURIComponent(trimmed);
    window.open(
      `https://api.whatsapp.com/send/?phone=%2B918349307304&text=${encoded}&type=phone_number&app_absent=0`,
      "_blank"
    );
    setMessage("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <footer className="bg-[#0d0d0d] text-white">

      {/* ── TOP GRADIENT RULE ── */}
      <div className="h-px w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ── COL 1: Brand ── */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block font-mono text-lg font-bold tracking-wide mb-4">
            ayushsonone07<span className="text-indigo-400">.dev</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Full-stack developer crafting clean, performant web experiences.
            Open to freelance projects and collaboration.
          </p>
          {/* Social icons */}
          <div className="flex flex-wrap gap-2">
            {socials.map(({ icon: Icon, href, label, hover }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-gray-400 text-sm transition-all duration-200 hover:-translate-y-0.5 ${hover}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── COL 2: Quick links ── */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-gray-700 group-hover:bg-indigo-400 group-hover:w-6 transition-all duration-200" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COL 3: Contact info ── */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-5">
            Get in Touch
          </h3>
          <ul className="space-y-4">
            {contactCards.map(({ icon: Icon, label, value, href, color }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Icon className={`mt-0.5 text-lg flex-shrink-0 ${color} transition-transform group-hover:scale-110`} />
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-widest uppercase text-gray-600 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COL 4: WhatsApp message bar ── */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gray-500 mb-5">
            Message Me Directly
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Drop a message via WhatsApp — no number saving needed.
          </p>

          <div className="flex flex-col gap-3">
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your message here..."
              className="w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 resize-none focus:outline-none focus:border-green-500/60 focus:bg-white/[0.08] transition-all duration-200"
            />
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-700 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)]"
            >
              <FaWhatsapp className="text-lg" />
              Send on WhatsApp
            </button>
            <p className="text-[0.7rem] text-gray-600 text-center">
              Opens WhatsApp with your message pre-filled
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Ayush Sonone. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-gray-500">Next.js · Tailwind CSS · ❤</span>
          </p>
        </div>
      </div>

    </footer>
  );
}