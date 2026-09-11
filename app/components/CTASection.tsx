"use client";

import { motion } from "framer-motion";
import { ctaContent } from "../data/content";

export default function CTASection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-sage py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sage-dark opacity-50" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-sage-dark opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-terracotta text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-6"
          >
            {ctaContent.tagline}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl text-offwhite leading-[1.2] mb-6"
          >
            {ctaContent.titlePart1}
            <em className="text-terracotta not-italic">{ctaContent.titleHighlight}</em>{ctaContent.titlePart2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sand/90 text-base leading-relaxed mb-8 max-w-xl"
          >
            {ctaContent.paragraph1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-sand/70 text-sm leading-relaxed mb-10"
          >
            {ctaContent.paragraph2}
          </motion.p>

          <motion.button
            id="cta-book-now"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="px-10 py-4 border border-sand text-sand rounded-full text-[12px] tracking-[0.2em] uppercase font-body font-semibold hover:bg-sand hover:text-sage transition-all duration-300"
          >
            {ctaContent.buttonText}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
