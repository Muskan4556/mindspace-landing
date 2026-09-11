"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { MapPin, Video, Home } from "lucide-react";
import { officeContent } from "../data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function OurOffice() {
  return (
    <section id="office" className="bg-offwhite py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-4"
        >
          {officeContent.tagline}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Gallery - 2 stacked images */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 h-[520px]"
          >
            <div className="relative rounded-2xl overflow-hidden col-span-2 h-64">
              <Image
                src="/images/office1.jpeg"
                alt="Interior of Dr. Reynolds' Santa Monica therapy office - calm, natural light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52">
              <Image
                src="/images/office2.jpeg"
                alt="Dr. Reynolds' therapy office - quiet private setting in Santa Monica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52 bg-sage flex items-center justify-center p-6">
              <div className="text-center">
                <Home size={32} strokeWidth={1.5} className="text-sand mx-auto mb-3" />
                <p className="font-heading text-sand text-xl leading-snug">
                  {officeContent.cardTitle}
                </p>
                <p className="font-body text-sand/70 text-xs mt-2 tracking-wide">
                  {officeContent.cardLocation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              variants={fadeUp}
              className="font-heading text-4xl lg:text-5xl text-charcoal leading-[1.2]"
            >
              {officeContent.titlePart1}
              <em className="text-terracotta not-italic">
                {officeContent.titleHighlight}
              </em>{officeContent.titlePart2}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
              className="font-body text-charcoal-light text-base leading-relaxed"
            >
              {officeContent.paragraphs[0]}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
              className="font-body text-charcoal-light text-base leading-relaxed"
            >
              {officeContent.paragraphs[1]}
            </motion.p>

            {/* Info blocks */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={4}
              variants={fadeUp}
              className="space-y-4 pt-4"
            >
              <div className="flex items-start gap-4 p-4 bg-sand rounded-xl">
                <MapPin size={20} strokeWidth={1.5} className="text-sage mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-semibold text-sm text-charcoal">
                    {officeContent.inPersonTitle}
                  </p>
                  <p className="font-body text-xs text-charcoal-light mt-0.5">
                    {officeContent.inPersonAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sand rounded-xl">
                <Video size={20} strokeWidth={1.5} className="text-sage mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-semibold text-sm text-charcoal">
                    {officeContent.telehealthTitle}
                  </p>
                  <p className="font-body text-xs text-charcoal-light mt-0.5">
                    {officeContent.telehealthAddress}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
