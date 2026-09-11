"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks, navbarContent } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-offwhite/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            id="nav-logo"
            className="text-left group"
          >
            <p className="font-heading text-charcoal text-2xl font-semibold tracking-tight leading-tight group-hover:text-sage transition-colors duration-200">
              {navbarContent.brandName}
            </p>
            <p className="text-sage text-[10px] tracking-[0.25em] uppercase font-body font-medium">
              {navbarContent.brandTitle}
            </p>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => handleNav(link.href)}
                className="text-[11px] tracking-[0.18em] uppercase font-body font-medium text-charcoal-light hover:text-sage transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <motion.button
              id="nav-cta-book"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav("#contact")}
              className="px-6 py-2.5 border border-charcoal rounded-full text-[11px] tracking-[0.18em] uppercase font-body font-medium text-charcoal hover:bg-charcoal hover:text-offwhite transition-all duration-200"
            >
              {navbarContent.bookingCtaDesktop}
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-offwhite pt-20 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-[13px] tracking-[0.2em] uppercase font-body font-medium text-charcoal border-b border-sand pb-6 hover:text-sage transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                id="nav-mobile-cta"
                onClick={() => handleNav("#contact")}
                className="mt-4 px-8 py-4 border border-charcoal rounded-full text-[11px] tracking-[0.2em] uppercase font-body font-medium text-charcoal hover:bg-charcoal hover:text-offwhite transition-all duration-200 text-center"
              >
                {navbarContent.bookingCtaMobile}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
