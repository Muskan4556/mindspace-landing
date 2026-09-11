"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "../data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-4"
        >
          {aboutContent.tagline}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              variants={fadeUp}
              className="font-heading text-4xl lg:text-5xl text-charcoal leading-[1.2] mb-8"
            >
              {aboutContent.title}
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
              className="space-y-5 font-body text-charcoal-light text-base leading-relaxed"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-terracotta">
                {aboutContent.subtitle}
              </p>
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
              className="mt-8 pt-8 border-t border-sand"
            >
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-sage font-semibold mb-3">
                {aboutContent.credentialsTitle}
              </p>
              <ul className="space-y-1 font-body text-sm text-charcoal-light">
                {aboutContent.credentials.map((cred, i) => (
                  <li key={i}>{cred}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/dr-maya-reynolds.png"
              alt={aboutContent.imageAlt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 bg-offwhite/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-md">
              <p className="font-heading text-charcoal text-lg font-semibold">
                {aboutContent.cardTitle}
              </p>
              <p className="font-body text-sage text-xs tracking-wide mt-0.5">
                {aboutContent.cardSubtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
