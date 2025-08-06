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

  useClickOutside(dropdownRef, () => setIsDropdownVisible(false));

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

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
    <nav
      className={clsx(
        "fixed top-0 w-full z-[99999] flex justify-center transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-xl shadow-md" : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-4xl px-6 pt-4 relative z-10">
        <div 
          className={`flex flex-col backdrop-blur-lg text-white border border-[#2a2a2a] shadow-lg overflow-visible transition-all duration-500 ease-in-out ${
            menuOpen ? 'rounded-[23px] min-h-[400px]' : 'rounded-[40px]'
          }`}
          style={{
            backgroundColor: 'var(--token-c311f7eb-2396-4f7f-8edd-f790b3c42ec3, rgb(5, 5, 5))',
            borderRadius: menuOpen ? '23px' : '40px',
            transform: 'none',
            transformOrigin: '50% 50% 0px'
          }}
        >
          {/* Header section - always visible */}
          <div className="flex items-center justify-between px-[30px] py-[8px] md:px-[48px] md:py-[14px]">
            <Link
              href={NAVIGATION_LINKS.HOME}
              className="flex items-center gap-2 font-medium font-hero text-[#E87811] text-lg"
              aria-label="Automatix - Home"
            >
              <span className="text-orange-300 pl-3">Automatix</span>
            </Link>

            {/* Desktop navigation */}
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
                    className="absolute left-0 top-full mt-2 flex flex-col bg-black text-white border border-[#2a2a2a] shadow-lg rounded-md z-[999999] min-w-[220px]"
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

            {/* Desktop CTA button */}
            <div className="hidden md:block">
              <Link href={NAVIGATION_LINKS.CONTACT} className="playbtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Let's Talk
                <ArrowUpRight size={16} className="transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile burger menu button */}
            <div className="md:hidden z-[60] relative">
              <button
                onClick={handleMenuToggle}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
                className="relative z-[60] p-2 touch-manipulation"
                type="button"
              >
                {menuOpen ? (
                  <X size={28} color="white" className="transition-transform duration-300 pointer-events-none" aria-hidden="true" />
                ) : (
                  <Menu size={28} color="white" className="transition-transform duration-300 pointer-events-none" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu content - smooth transitions */}
          <div 
            className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div 
              className="w-full h-px mb-6 mx-[46px]"
              style={{
                background: 'linear-gradient(90deg, rgba(61, 61, 61, 0) 0%, rgb(33, 33, 33) 25%, rgb(33, 33, 33) 75%, rgba(0, 80, 138, 0) 100%)'
              }}
            ></div>

            <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8 text-center px-[30px]">
              <div className="text-white">
                <a href={ANCHOR_LINKS.WHY_US} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>Why Us</a>
              </div>
              <div className="text-white">
                <a href={ANCHOR_LINKS.MISSION} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>Mission</a>
              </div>
              <div className="text-white">
                <a href={ANCHOR_LINKS.WORKS} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>Works</a>
              </div>
              <div className="text-white">
                <a href={ANCHOR_LINKS.SERVICES} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>Services</a>
              </div>
              <div className="text-white">
                <Link href={NAVIGATION_LINKS.CONTACT} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>Contact</Link>
              </div>
              <div className="text-white">
                <Link href={NAVIGATION_LINKS.TERMS} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>Term & Conditions</Link>
              </div>
              <div className="text-white">
                <Link href={NAVIGATION_LINKS.NOT_FOUND} className="block hover:text-orange-400 transition py-1 sm:py-2 text-sm sm:text-base font-medium" onClick={handleMenuClose}>404</Link>
              </div>
            </div>

            {/* Mobile CTA button */}
            <div className="px-[30px] pb-6 text-center">
              <Link href={NAVIGATION_LINKS.CONTACT} onClick={handleMenuClose} className="playbtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Let's Talk
                <ArrowUpRight size={16} className="transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 