import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { OPENING_HOURS, CLINIC_INFO } from "@/lib/constants";

const mapsQuery = encodeURIComponent(CLINIC_INFO.address);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Alinora Chiropractic in Canning Vale: phone, email, opening hours, address and enquiry form. Perth chiropractic care.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out by phone, email or the form below."
        bgImage="https://images.unsplash.com/photo-1745327883290-1e9c6447b938?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection direction="left">
            <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
              Clinic details
            </p>
            <h2 className="text-3xl md:text-4xl text-brand-dark leading-tight mb-8">
              Visit or get in touch
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-teal-primary" />
                  Address
                </h3>
                <p className="text-brand-dark leading-relaxed">{CLINIC_INFO.address}</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium text-teal-primary hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3 flex items-center gap-2">
                  <Phone size={14} className="text-teal-primary" />
                  Phone
                </h3>
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`} className="text-lg text-brand-dark hover:text-teal-primary transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3 flex items-center gap-2">
                  <Mail size={14} className="text-teal-primary" />
                  Email
                </h3>
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-lg text-brand-dark hover:text-teal-primary transition-colors break-all">
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3 flex items-center gap-2">
                  <Printer size={14} className="text-teal-primary" />
                  Fax
                </h3>
                <p className="text-brand-dark">{CLINIC_INFO.fax}</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3 flex items-center gap-2">
                  <Clock size={14} className="text-teal-primary" />
                  Opening hours
                </h3>
                <ul className="space-y-2">
                  {OPENING_HOURS.map((row) => (
                    <li key={row.day} className="flex justify-between gap-6 text-sm text-brand-muted max-w-xs">
                      <span className="font-medium text-brand-dark">{row.day}</span>
                      <span>{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
                  Areas we serve
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {CLINIC_INFO.locations.join(", ")} and surrounding suburbs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
              Send a message
            </p>
            <h2 className="text-2xl md:text-3xl text-brand-dark leading-tight mb-2">
              Enquiry form
            </h2>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed">
              For appointment changes or urgent matters, please call the clinic. We aim to reply to messages within one
              business day.
            </p>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Prefer to book online?"
        subtext="Use our secure booking link to choose a time that suits you."
        buttonLabel="Book Appointment"
        buttonHref="https://www.cliniko.com"
        secondaryLabel="Call Us"
        secondaryHref={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
      />
    </>
  );
}
