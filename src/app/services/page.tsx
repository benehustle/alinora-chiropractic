import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { PrecisionSection } from "@/components/services/PrecisionSection";
import { PricingSection } from "@/components/services/PricingSection";
import { ServicesTreated } from "@/components/home/ServicesTreated";
import { SERVICES_MAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Treatments",
  description:
    "Chiropractic care, remedial massage, dry needling and postural correction in Canning Vale, Perth WA. View all our services and pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services & Treatments"
        subtitle="We are dedicated to helping you achieve optimal spinal health through compassionate, personalised care."
        bgImage="https://images.unsplash.com/photo-1745327883290-1e9c6447b938?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Main services */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {SERVICES_MAIN.map((service, i) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
            />
          ))}
        </div>
      </section>

      <PrecisionSection />

      <ServicesTreated bg="brand-offwhite" />

      <PricingSection />

      <CTASection
        heading="Is pain impacting your life?"
        subtext="Let us solve your problem."
        buttonLabel="Call Us"
        buttonHref={`tel:0894085724`}
        secondaryLabel="Email Us"
        secondaryHref="mailto:hello@alinorachiropractic.com.au"
      />
    </>
  );
}
