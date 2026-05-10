import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { VisitCard } from "@/components/visits/VisitCard";
import { MeasureSection } from "@/components/visits/MeasureSection";
import { VISIT_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your Visits",
  description:
    "Three clear stages. No surprises. Know exactly what to expect at every step of your chiropractic journey at Alinora Chiropractic.",
};

export default function VisitsPage() {
  return (
    <>
      <PageHero
        title="Your Visits"
        subtitle="Three clear stages. No surprises. Know exactly what to expect at every step."
        bgImage="https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&w=1920&q=80"
      />

      {VISIT_STEPS.map((visit, i) => (
        <VisitCard
          key={visit.title}
          {...visit}
          reversed={i % 2 !== 0}
        />
      ))}

      <MeasureSection />

      <CTASection
        heading="Ready to begin?"
        subtext="Your first visit is the most important step. We will listen, assess and give you a clear understanding of what your body needs."
        buttonLabel="Book Your First Visit"
        buttonHref="https://www.cliniko.com"
      />
    </>
  );
}
