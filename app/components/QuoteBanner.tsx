"use client";

import { motion } from "framer-motion";
import { quoteBannerContent } from "../data/content";

export default function QuoteBanner() {
  return (
    <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-sage/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-heading text-3xl lg:text-4xl text-offwhite leading-[1.35]">
            {quoteBannerContent.quotePart1}
            <em className="text-terracotta">
              {quoteBannerContent.quoteHighlight}
            </em>
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
