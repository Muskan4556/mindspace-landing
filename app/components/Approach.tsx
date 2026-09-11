"use client";

import { motion } from "framer-motion";
import { modalities, approachContent } from "../data/content";

export default function Approach() {
  return (
    <section id="approach" className="bg-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-4"
            >
              {approachContent.tagline}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl text-charcoal leading-[1.2]"
            >
              {approachContent.titlePart1}
              <em className="text-terracotta not-italic">{approachContent.titleHighlight}</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex items-end"
          >
            <p className="font-body text-charcoal-light text-base leading-relaxed">
              {approachContent.description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modalities.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.id}
                id={`approach-${m.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-5 p-6 bg-offwhite rounded-2xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mt-0.5">
                  <Icon size={18} strokeWidth={1.5} className="text-sage" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-charcoal mb-2 leading-snug">
                    {m.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 border-l-4 border-terracotta pl-6 max-w-2xl"
        >
          <p className="font-heading text-2xl text-charcoal leading-relaxed italic">
            {approachContent.quote}
          </p>
          <footer className="mt-4 font-body text-xs tracking-[0.15em] uppercase text-sage font-semibold">
            {approachContent.quoteAuthor}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
