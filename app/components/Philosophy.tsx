"use client";

import { motion } from "framer-motion";
import { introContent } from "../data/content";

export default function Philosophy() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-charcoal leading-[1.2] mb-8">
              {introContent.title}
            </h2>

            <div className="space-y-4">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-terracotta">
                {introContent.subtitle}
              </p>
              <p className="font-body text-charcoal-light text-base leading-relaxed">
                {introContent.description}
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="font-body text-charcoal-light text-base leading-relaxed">
              {introContent.paragraph1}
            </p>
            <p className="font-body text-charcoal-light text-base leading-relaxed">
              {introContent.paragraph2}
            </p>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-charcoal font-semibold border-b border-charcoal pb-0.5 mt-4 hover:text-sage hover:border-sage transition-colors"
            >
              {introContent.ctaText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
