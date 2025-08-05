"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useClickOutside } from "@/hooks/useClickOutside";
import { NAVIGATION_LINKS, ANCHOR_LINKS } from "@/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isScrolled = useScrollPosition({ threshold: 10 });

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsDropdownVisible(false), 150);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useClickOutside(menuRef, handleMenuClose);
  useClickOutside(dropdownRef, () => setIsDropdownVisible(false));

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setIsDropdownVisible(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 z-40 bg-[#121214] px-4 py-6 flex items-start justify-center transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="w-full max-w-[80%] bg-[#181818] border border-white/10 rounded-2xl py-8 px-6 flex flex-col items-center gap-6 text-white text-lg font-medium shadow-xl mt-[64px]">
            <a href={ANCHOR_LINKS.WHY_US} className="hover:text-orange-400 transition" onClick={handleMenuClose}>Why Us</a>
            <a href={ANCHOR_LINKS.MISSION} className="hover:text-orange-400 transition" onClick={handleMenuClose}>Mission</a>
            <a href={ANCHOR_LINKS.WORKS} className="hover:text-orange-400 transition" onClick={handleMenuClose}>Works</a>
            <a href={ANCHOR_LINKS.SERVICES} className="hover:text-orange-400 transition" onClick={handleMenuClose}>Services</a>
            <Link href={NAVIGATION_LINKS.CONTACT} className="hover:text-orange-400 transition" onClick={handleMenuClose}>Contact</Link>
            <Link href={NAVIGATION_LINKS.TERMS} className="hover:text-orange-400 transition" onClick={handleMenuClose}>Term & Conditions</Link>
            <Link href={NAVIGATION_LINKS.NOT_FOUND} className="hover:text-orange-400 transition" onClick={handleMenuClose}>404 Page</Link>

            <Link
              href={NAVIGATION_LINKS.CONTACT}
              onClick={handleMenuClose}
              className="mt-6 w-full relative inline-flex justify-center items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#0E0E10] border border-white/10 rounded-xl transition overflow-hidden animate-border-glow"
            >
              <span className="absolute inset-0 z-0 rounded-xl bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.1)_0%,_transparent_100%)] pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Talk
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      )}

      <nav
        className={clsx(
          "fixed top-0 w-full z-[9999] flex justify-center transition-all duration-300 relative",
          isScrolled ? "bg-black/80 backdrop-blur-xl shadow-md" : "bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full max-w-5xl px-6 pt-4 relative z-10">
          <div className="flex items-center justify-between bg-[#0A0A0A]/90 backdrop-blur-lg text-white rounded-full px-[46px] py-[13px] border border-[#2a2a2a] shadow-lg overflow-visible">
            <Link
              href={NAVIGATION_LINKS.HOME}
              className="flex items-center gap-2 font-medium font-hero text-[#E87811] text-lg"
              aria-label="Automatix - Home"
            >
              <span className="text-orange-300 pl-3">Automatix</span>
            </Link>

            <div className="hidden md:flex items-center gap-[18px] font-medium text-base text-white/70 overflow-visible">
              <a href={ANCHOR_LINKS.WHY_US} className="hover:text-white transition">Why Us</a>
              <a href={ANCHOR_LINKS.MISSION} className="hover:text-white transition">Mission</a>
              <a href={ANCHOR_LINKS.WORKS} className="hover:text-white transition">Works</a>
              <a href={ANCHOR_LINKS.SERVICES} className="hover:text-white transition">Services</a>

              <div
                ref={dropdownRef}
                className="relative overflow-visible"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="hover:text-white transition"
                  aria-expanded={isDropdownVisible}
                  aria-haspopup="true"
                >
                  Pages ▾
                </button>
                {isDropdownVisible && (
                  <div
                    className="absolute left-0 top-full mt-2 flex flex-col bg-black text-white border border-[#2a2a2a] shadow-lg rounded-md z-[60] min-w-[220px]"
                    role="menu"
                    aria-label="Additional pages"
                  >
                    <Link href={NAVIGATION_LINKS.CONTACT} className="px-4 py-2 text-white/70 hover:text-white" role="menuitem">Contact</Link>
                    <Link href={NAVIGATION_LINKS.TERMS} className="px-4 py-2 text-white/70 hover:text-white" role="menuitem">Term & Conditions</Link>
                    <Link href={NAVIGATION_LINKS.NOT_FOUND} className="px-4 py-2 text-white/70 hover:text-white" role="menuitem">404</Link>
                  </div>
                )}
              </div>
            </div>

            <Link href={NAVIGATION_LINKS.CONTACT} className="hidden md:block relative group">
              <div className="absolute -inset-0.5 rounded-lg overflow-hidden" aria-hidden="true">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgb(232, 120, 17) 90deg, transparent 180deg, transparent 360deg)',
                    animation: 'rotate 4s linear infinite'
                  }}
                />
              </div>

              <span className="relative inline-flex items-center gap-2 px-6 py-2 rounded-md text-lg font-medium text-white bg-[#0E0E10] border border-white/10 transition-all overflow-hidden z-10">
                <span className="absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(255,115,51,0.2)_0%,_transparent_100%)]" />
                <span className="absolute inset-0 border border-orange-400 transition-all z-0" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#111] opacity-90 z-0" />
                <span className="relative z-10 flex items-center gap-2 pr-5">
                  Let&apos;s Talk
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-rotate-45" size={16} aria-hidden="true" />
                </span>
              </span>
              <span className="absolute inset-0 rounded-full pointer-events-none animate-border-glow border border-orange-500/20" />
            </Link>

            <div className="md:hidden z-50 relative">
              <button
                onClick={handleMenuToggle}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
              >
                {menuOpen ? (
                  <X size={28} color="white" className="transition-transform duration-300" aria-hidden="true" />
                ) : (
                  <Menu size={28} color="white" className="transition-transform duration-300" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 