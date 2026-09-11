"use client";

import { motion, Variants } from "framer-motion";
import { services, servicesContent } from "../data/content";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="bg-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-4"
          >
            {servicesContent.tagline}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl lg:text-5xl text-charcoal max-w-xl leading-[1.2]"
          >
            {servicesContent.titlePart1}
            <em className="text-terracotta not-italic">{servicesContent.titleHighlight}</em>
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                id={`service-card-${service.id}`}
                variants={cardVariants}
                className="bg-offwhite rounded-2xl p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} className="text-sage" />
                </div>

                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-terracotta font-semibold mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl text-charcoal leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-sand flex flex-wrap gap-2">
                  {service.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-block px-3 py-1 bg-sage/08 text-sage text-[10px] tracking-wide rounded-full font-body font-medium border border-sage/20"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
