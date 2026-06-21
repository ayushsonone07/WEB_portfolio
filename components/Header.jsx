"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaGithub,        href: "https://github.com/ayushsonone07",  label: "GitHub",    color: "hover:bg-gray-800 hover:text-white" },
  { icon: FaLinkedinIn,    href: "https://linkedin.com",               label: "LinkedIn",  color: "hover:bg-blue-600 hover:text-white" },
  { icon: FaWhatsapp,      href: "https://wa.me",                      label: "WhatsApp",  color: "hover:bg-green-500 hover:text-white" },
  { icon: FaTelegramPlane, href: "https://t.me",                       label: "Telegram",  color: "hover:bg-sky-500 hover:text-white" },
  { icon: FaFacebookF,     href: "https://facebook.com",               label: "Facebook",  color: "hover:bg-blue-700 hover:text-white" },
  { icon: FaInstagram,     href: "https://instagram.com",              label: "Instagram", color: "hover:bg-pink-500 hover:text-white" },
  { icon: FaYoutube,       href: "https://youtube.com",                label: "YouTube",   color: "hover:bg-red-600 hover:text-white" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add subtle shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── TOP ACCENT BAR ── */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* ── MAIN NAV ── */}
      <nav
        className={`fixed top-1 left-0 right-0 z-40 bg-white/60 backdrop-blur-xl border-b border-black/[0.06] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="flex items-center justify-between h-[66px] px-6 md:px-10 max-w-screen-xl mx-auto">

          {/* ── LEFT: Nav links ── */}
          <div className="flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-150 ${
                    active
                      ? "bg-[#1a1a2e] text-white"
                      : "text-gray-600 hover:bg-black/[0.06] hover:text-[#1a1a2e]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* ── CENTER: Domain badge ── */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-0 font-mono text-sm font-semibold border-[1.5px] border-[#1a1a2e] rounded-lg overflow-hidden"
          >
            <span className="bg-[#1a1a2e] text-white px-3 py-1.5 tracking-wide">
              ayushsonone07
            </span>
            <span className="px-3 py-1.5 text-[#1a1a2e] tracking-wide">.dev</span>
          </Link>

          {/* ── RIGHT: Social icons (desktop) ── */}
          <div className="hidden md:flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-8 h-8 rounded-full border border-black/10 bg-white/70 text-gray-600 text-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md ${color}`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* ── MOBILE: Hamburger ── */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-black/10 bg-white/70 text-gray-700 transition-all hover:bg-black/[0.06]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <CiMenuFries size={20} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white/90 backdrop-blur-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.07]">
          <span className="font-mono text-sm font-bold text-[#1a1a2e]">
            ayushsonone07<span className="text-indigo-500">.dev</span>
          </span>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-xl border border-black/10 bg-black/[0.04] text-gray-700 hover:bg-black/[0.08] transition-all"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <RxCross2 size={18} />
          </button>
        </div>

        {/* Drawer nav links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all ${
                    active
                      ? "bg-[#1a1a2e] text-white"
                      : "text-gray-700 hover:bg-black/[0.05]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Drawer socials */}
        <div className="px-6 py-6 border-t border-black/[0.07]">
          <p className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-gray-400 mb-3">
            Find me on
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-9 h-9 rounded-full border border-black/10 bg-white text-gray-600 text-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${color}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}