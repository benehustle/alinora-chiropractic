import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ApproachSection } from "@/components/team/ApproachSection";
import { TrustPillarsSection } from "@/components/team/TrustPillarsSection";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Alinora Chiropractic in Canning Vale: our mission, evidence-based approach and patient-first care for Perth families.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Alinora Chiropractic"
        subtitle="Advanced diagnostics, compassionate hands-on care and a clear path from pain to lasting wellbeing."
        bgImage="https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1768507423533-b87b62769758?auto=format&fit=crop&w=900&q=80"
                alt="Chiropractor providing care in a treatment setting"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
              Our story
            </p>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-6">
              Precision, clarity and genuine care
            </h2>
            <div className="space-y-4 text-brand-muted text-lg leading-relaxed">
              <p>
                Alinora Chiropractic exists to move spinal care beyond quick fixes. We combine 3D posture and
                musculoskeletal analysis with skilled adjustments and soft tissue therapy so you understand your
                body, not just mask symptoms.
              </p>
              <p>
                Our team in {CLINIC_INFO.locations[0]} serves families across Perth with evidence-based techniques,
                transparent care plans and the time to listen. Whether you are dealing with chronic back pain, headaches
                or postural strain from daily life, we map a path that fits you.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/our-team" size="md">
                Meet our team
              </Button>
              <Button href="/services" variant="outline" size="md">
                View services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ApproachSection />

      <TrustPillarsSection />

      <section className="py-16 lg:py-20 px-6 bg-white border-t border-brand-border">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-brand-muted leading-relaxed mb-6">
              Ready to see how we work in person? Read our{" "}
              <Link href="/visits" className="text-teal-primary font-medium hover:underline">
                visit guide
              </Link>{" "}
              or explore common questions on the{" "}
              <Link href="/faq" className="text-teal-primary font-medium hover:underline">
                FAQ
              </Link>
              .
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Start your journey with us"
        subtext="Book an initial consultation and experience care that is measured, explained and tailored to you."
        buttonLabel="Book Appointment"
        buttonHref="https://www.cliniko.com"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
