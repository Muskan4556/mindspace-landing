"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs, faqContent } from "../data/content";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-offwhite py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left sticky heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-4"
            >
              {faqContent.tagline}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl text-charcoal leading-[1.2]"
            >
              {faqContent.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-charcoal-light text-sm leading-relaxed mt-4"
            >
              {faqContent.description}
            </motion.p>
          </div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-3"
          >
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className="border border-sand rounded-2xl overflow-hidden bg-offwhite hover:border-sage/30 transition-colors duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg text-charcoal leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-sand flex items-center justify-center text-sage transition-colors duration-200">
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2} />
                      ) : (
                        <Plus size={16} strokeWidth={2} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="font-body text-sm text-charcoal-light leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
