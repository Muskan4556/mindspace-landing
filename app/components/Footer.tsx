import { MapPin, Mail, Phone } from "lucide-react";

import { navLinks, footerContent } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-offwhite border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-heading text-charcoal text-2xl font-semibold tracking-tight mb-1">
              {footerContent.brandName}
            </p>
            <p className="text-sage text-[10px] tracking-[0.25em] uppercase font-body font-medium mb-5">
              {footerContent.brandTitle}
            </p>
            <p className="font-body text-sm text-charcoal-light leading-relaxed max-w-xs">
              {footerContent.brandDescription}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light font-semibold mb-5">
              {footerContent.navigateTitle}
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-terracotta hover:text-terracotta-dark transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light font-semibold mb-5">
              {footerContent.contactTitle}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="text-sage mt-0.5 shrink-0" />
                <span className="font-body text-sm text-charcoal-light">
                  {footerContent.addressLine1}<br />
                  {footerContent.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} strokeWidth={1.5} className="text-sage shrink-0" />
                <a
                  href={`mailto:${footerContent.email}`}
                  className="font-body text-sm text-terracotta hover:underline"
                >
                  {footerContent.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} strokeWidth={1.5} className="text-sage shrink-0" />
                <a
                  href={`tel:+1${footerContent.phone.replace(/\D/g, '')}`}
                  className="font-body text-sm text-terracotta hover:underline"
                >
                  {footerContent.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-sage py-4 px-6 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-[11.5px] text-sand/70">
            {footerContent.bottomLinks}
          </p>
          <p className="font-body text-[11.5px] text-sand/70 text-center ">
            {footerContent.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
