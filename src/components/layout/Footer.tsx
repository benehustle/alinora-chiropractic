import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { OPENING_HOURS, CLINIC_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative w-12 h-12 block flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Alinora Chiropractic"
                  fill
                  sizes="48px"
                  className="object-contain brightness-0 invert"
                />
              </span>
              <span className="font-semibold text-sm tracking-tight">ALINORA CHIROPRACTIC</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Compassionate, authentic and caring chiropractic care in Canning Vale, Perth.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
              Opening Hours
            </h3>
            <div className="flex items-start gap-2 mb-3">
              <Clock size={14} className="text-teal-primary mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                {OPENING_HOURS.map((h) => (
                  <div key={h.day}>
                    <span className="text-sm text-white/80 font-medium">{h.day}</span>
                    <br />
                    <span className="text-sm text-white/60">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={14} className="text-teal-primary flex-shrink-0" />
                {CLINIC_INFO.phone}
              </a>
              <a href={`mailto:${CLINIC_INFO.email}`} className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={14} className="text-teal-primary mt-0.5 flex-shrink-0" />
                {CLINIC_INFO.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-teal-primary mt-0.5 flex-shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links + Locations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2 mb-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Locations
            </h3>
            <div className="space-y-1">
              {CLINIC_INFO.locations.map((loc) => (
                <p key={loc} className="text-sm text-white/60">{loc}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Alinora Chiropractic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
