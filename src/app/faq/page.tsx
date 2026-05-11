import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about chiropractic care, first visits, insurance, safety and appointments at Alinora Chiropractic in Canning Vale, Perth WA.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Straight answers about chiropractic care, your first visit, insurance and what to expect at our clinic."
        bgImage="https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 lg:py-28 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Help centre"
              title="Questions we hear often"
              subtitle="If you do not see your question here, contact us and we will be happy to help."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <FAQAccordion />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Still have questions?"
        subtext={`Call us on ${CLINIC_INFO.phone} or send a message and we will get back to you.`}
        buttonLabel="Contact Us"
        buttonHref="/contact"
        secondaryLabel="Book Appointment"
        secondaryHref="https://www.cliniko.com"
      />
    </>
  );
}
