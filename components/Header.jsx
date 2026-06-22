"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
  { label: "Home",     href: "/",        num: "01" },
  { label: "About",    href: "/about",   num: "02" },
  { label: "Projects", href: "/projects",num: "03" },
  { label: "Contact",  href: "/contact", num: "04" },
];

const socials = [
  { icon: FaGithub,        href: "https://github.com/ayushsonone07",  label: "GitHub",    hoverClass: "hover:bg-gray-800 text-white" },
  { icon: FaLinkedinIn,    href: "https://linkedin.com",               label: "LinkedIn",  hoverClass: "hover:bg-blue-600 text-white" },
  { icon: FaWhatsapp,      href: "https://wa.me",                      label: "WhatsApp",  hoverClass: "hover:bg-green-500 text-white" },
  { icon: FaTelegramPlane, href: "https://t.me",                       label: "Telegram",  hoverClass: "hover:bg-sky-500 text-white" },
  { icon: FaFacebookF,     href: "https://facebook.com",               label: "Facebook",  hoverClass: "hover:bg-blue-700 text-white" },
  { icon: FaInstagram,     href: "https://instagram.com",              label: "Instagram", hoverClass: "hover:bg-pink-500 text-white" },
  { icon: FaYoutube,       href: "https://youtube.com",                label: "YouTube",   hoverClass: "hover:bg-red-600 text-white" },
];

const FAB_RIGHT  = 24;
const FAB_BOTTOM = 24;
const FAB_SIZE   = 56;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const pathname = usePathname();
  const [circleStyle, setCircleStyle] = useState({});

  const computeCircle = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = vw - FAB_RIGHT - FAB_SIZE / 2;
    const cy = vh - FAB_BOTTOM - FAB_SIZE / 2;
    const maxDist = Math.sqrt(
      Math.pow(Math.max(cx, vw - cx), 2) +
      Math.pow(Math.max(cy, vh - cy), 2)
    );
    const diameter = maxDist * 2.2;
    setCircleStyle({
      width:  diameter,
      height: diameter,
      left:   cx - diameter / 2,
      top:    cy - diameter / 2,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", computeCircle);
    return () => window.removeEventListener("resize", computeCircle);
  }, [computeCircle]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function openMenu() {
    computeCircle();
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* ── TOP ACCENT BAR ── */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* ── DESKTOP TOP NAV (thin bar for domain badge only) ── */}
      <nav
        className={`fixed top-1 left-0 right-0 z-40 bg-white/60 backdrop-blur-xl border-b border-black/[0.06] transition-shadow duration-300 md:flex
          ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : ""}
          ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        style={{ transition: "opacity 0.2s ease, box-shadow 0.3s ease" }}
      >
        <div className="flex items-center justify-between h-[66px] px-10 max-w-screen-xl mx-auto w-full">

          {/* Desktop nav links */}
          {/* <div className="flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <button
                  key={label}
                  onClick={openMenu}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                    active
                      ? "bg-[#1a1a2e] text-white"
                      : "text-gray-600 hover:bg-black/[0.06] hover:text-[#1a1a2e]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div> */}

          {/* Domain badge */}
          <Link
            href="/"
            className="flex items-center gap-0 font-mono text-sm font-semibold border-[1.5px] border-[#1a1a2e] rounded-lg overflow-hidden"
          >
            <span className="bg-[#1a1a2e] text-white px-3 py-1.5 tracking-wide">ayushsonone07</span>
            <span className="px-3 py-1.5 text-[#1a1a2e] tracking-wide">.dev</span>
          </Link>

          {/* Hamburger trigger (desktop) */}
          {/* <button
            aria-label="Open menu"
            onClick={openMenu}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-black/10 bg-black/[0.04] text-gray-700 hover:bg-black/[0.08] transition-all"
          >
            <CiMenuFries size={20} />
          </button> */}
        </div>
      </nav>

      {/* ════════════════════════════════════════════
          CIRCLE REVEAL OVERLAY — all devices
      ════════════════════════════════════════════ */}

      {/* Expanding circle */}
      <div
        style={circleStyle}
        className={`fixed z-[55] rounded-full bg-[#1a1a2e] pointer-events-none
          transition-transform duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          ${menuOpen ? "scale-100" : "scale-0"}`}
      />

      {/* Full-screen menu content */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ transitionDelay: menuOpen ? "0.35s" : "0s" }}
      >
        {/* ── INNER LAYOUT: splits into 2 cols on desktop ── */}
        <div className="flex flex-col md:flex-row h-full">

          {/* LEFT PANEL (desktop only) — big logo + tagline */}
          <div className="hidden md:flex flex-col justify-between w-[42%] border-r border-white/[0.07] px-14 py-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-mono text-base font-bold text-white/90 hover:text-white transition-colors"
            >
              ayushsonone07<span className="text-indigo-400">.dev</span>
            </Link>

            <div>
              <p className="text-[13px] text-white/30 leading-relaxed max-w-xs">
                Full-stack developer crafting thoughtful digital experiences. Open for collaborations & freelance work.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/25 mb-3">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-9 h-9 rounded-full
                      border border-white/12 bg-white/[0.06] text-white/55 text-sm
                      transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white ${hoverClass}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — nav links (full width on mobile, 58% on desktop) */}
          <div className="flex flex-col flex-1 px-7 md:px-16 pt-6 pb-7">

            {/* Header row */}
            <div className="flex items-center justify-between mb-8 md:mb-12">
              {/* Mobile: logo */}
              <Link
                href="/"
                onClick={closeMenu}
                className="font-mono text-sm font-bold text-white/90 md:hidden"
              >
                ayushsonone07<span className="text-indigo-400">.dev</span>
              </Link>
              {/* Desktop: empty spacer */}
              <span className="hidden md:block" />

              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 bg-white/[0.08] text-white hover:bg-white/15 transition-colors"
              >
                <RxCross2 size={18} />
              </button>
            </div>

            {/* Nav items */}
            <ul className="flex flex-col flex-1 justify-center gap-1">
              {navLinks.map(({ label, href, num }, i) => {
                const active = pathname === href;
                return (
                  <li key={label} className="overflow-hidden">
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`group flex items-center justify-between
                        px-4 py-[14px] md:py-[18px]
                        rounded-2xl
                        text-[22px] md:text-[36px] font-medium tracking-tight
                        transition-all duration-150 hover:bg-white/[0.08]
                        ${active ? "text-white" : "text-white/45 hover:text-white"}
                        ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                      style={{
                        transitionProperty: "transform, opacity, background, color",
                        transitionDuration: menuOpen ? "500ms, 400ms, 150ms, 150ms" : "300ms",
                        transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1), ease, ease, ease",
                        transitionDelay: menuOpen ? `${0.38 + i * 0.06}s` : "0s",
                      }}
                    >
                      <span className="flex items-baseline gap-3 text-white">
                        <span className="font-mono text-[11px] md:text-[13px] text-white/20">
                          {num}
                        </span>
                        {label}
                      </span>
                      <span
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm md:text-base"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile socials footer */}
            <div
              className={`md:hidden border-t border-white/[0.08] pt-5
                transition-[opacity,transform] duration-300
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              style={{ transitionDelay: menuOpen ? "0.62s" : "0s" }}
            >
              <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/25 mb-3">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-9 h-9 rounded-full
                      border border-white/12 bg-white/[0.06] text-white/55 text-sm
                      transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white ${hoverClass}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING FAB (mobile only) ── */}
      <button
        aria-label="Open menu"
        onClick={openMenu}
        className={`fixed bottom-6 right-6 z-[65]
          flex items-center justify-center w-14 h-14 rounded-2xl
          bg-[#1a1a2e] text-white shadow-lg shadow-black/30
          transition-all duration-200 active:scale-95 hover:scale-105
          ${menuOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"}`}
      >
        <CiMenuFries size={22} />
      </button>
    </>
  );
}