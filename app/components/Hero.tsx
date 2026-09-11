"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroContent } from "../data/content";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-offwhite overflow-hidden pt-20"
    >
      {/* Background decorative shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/60 clip-hero hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-20">
          {/* Image - left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1 w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/dr-maya-reynolds.png"
              alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto block"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </motion.div>

          {/* Text - right on desktop */}
          <div className="order-1 lg:order-2 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-6"
            >
              {heroContent.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.15] mb-6"
            >
              {heroContent.titlePart1}
              <em className="text-terracotta not-italic">{heroContent.titleHighlight}</em>{heroContent.titlePart2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-base lg:text-lg text-charcoal-light leading-relaxed mb-10 max-w-lg"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                id="hero-cta-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-sage text-offwhite rounded-full text-[12px] tracking-[0.18em] uppercase font-body font-semibold hover:bg-sage-dark transition-all duration-300 shadow-md"
              >
                {heroContent.primaryCta}
              </motion.button>
              <motion.button
                id="hero-cta-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToAbout}
                className="px-8 py-4 border border-charcoal text-charcoal rounded-full text-[12px] tracking-[0.18em] uppercase font-body font-semibold hover:bg-charcoal hover:text-offwhite transition-all duration-300"
              >
                {heroContent.secondaryCta}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
