"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactContent } from "../data/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-sand py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-sage text-[11px] tracking-[0.25em] uppercase font-body font-semibold mb-4"
            >
              {contactContent.tagline}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl text-charcoal leading-[1.2] mb-6"
            >
              {contactContent.titlePart1}
              <em className="text-terracotta not-italic">
                {contactContent.titleHighlight}
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-charcoal-light text-base leading-relaxed mb-10"
            >
              {contactContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="text-sage mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-charcoal">
                    {contactContent.officeTitle}
                  </p>
                  <p className="font-body text-sm text-charcoal-light">
                    {contactContent.officeAddress}
                  </p>
                  <p className="font-body text-xs text-charcoal-light mt-0.5">
                    {contactContent.officeSecondary}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="text-sage mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-charcoal">
                    {contactContent.emailTitle}
                  </p>
                  <a
                    href={`mailto:${contactContent.emailAddress}`}
                    className="font-body text-sm text-terracotta hover:underline"
                  >
                    {contactContent.emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="text-sage mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-charcoal">
                    {contactContent.phoneTitle}
                  </p>
                  <a
                    href={`tel:+1${contactContent.phoneNumber.replace(/\D/g, "")}`}
                    className="font-body text-sm text-terracotta hover:underline"
                  >
                    {contactContent.phoneNumber}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-offwhite rounded-2xl p-10 text-center">
                <div>
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-sage text-3xl">✓</span>
                  </div>
                  <h3 className="font-heading text-2xl text-charcoal mb-3">
                    Thank you, {form.name}!
                  </h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">
                    {contactContent.successMessage}
                  </p>
                </div>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="bg-offwhite rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-body text-xs tracking-[0.15em] uppercase text-charcoal-light font-semibold mb-2"
                  >
                    {contactContent.formNameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={contactContent.formNamePlaceholder}
                    className="w-full px-4 py-3 border border-sand rounded-xl font-body text-sm text-charcoal bg-offwhite focus:outline-none focus:border-sage transition-colors placeholder-charcoal-light/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-body text-xs tracking-[0.15em] uppercase text-charcoal-light font-semibold mb-2"
                  >
                    {contactContent.formEmailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder={contactContent.formEmailPlaceholder}
                    className="w-full px-4 py-3 border border-sand rounded-xl font-body text-sm text-charcoal bg-offwhite focus:outline-none focus:border-sage transition-colors placeholder-charcoal-light/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-body text-xs tracking-[0.15em] uppercase text-charcoal-light font-semibold mb-2"
                  >
                    {contactContent.formMessageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder={contactContent.formMessagePlaceholder}
                    className="w-full px-4 py-3 border border-sand rounded-xl font-body text-sm text-charcoal bg-offwhite focus:outline-none focus:border-sage transition-colors resize-none placeholder-charcoal-light/40"
                  />
                </div>

                <motion.button
                  id="contact-submit"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-sage text-offwhite rounded-xl font-body font-semibold text-[12px] tracking-[0.18em] uppercase hover:bg-sage-dark transition-colors duration-300"
                >
                  {contactContent.formButtonText}
                </motion.button>

                <p className="font-body text-[10px] text-charcoal-light/60 text-center leading-relaxed">
                  {contactContent.formDisclaimer}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
