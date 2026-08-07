import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ApproachSection } from "@/components/team/ApproachSection";
import { TrustPillarsSection } from "@/components/team/TrustPillarsSection";
import { BOOKING_URL } from "@/lib/constants";

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
        subtitle="A fresh, modern approach to musculoskeletal health in the heart of Canning Vale."
        bgImage="https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection direction="left" className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-page.png"
                alt="Chiropractor providing care in a treatment setting"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
              About us
            </p>
            <div className="space-y-8 text-brand-muted text-lg leading-relaxed">
              <p>
                Opening its doors in 2026, Alinora Chiropractic brings a fresh, modern approach to musculoskeletal health in the heart of Canning Vale. We believe that exceptional healthcare requires more than just guesswork, it demands a deep understanding of human biomechanics and a commitment to strictly evidence based practice. Our mission is to empower our community with a transparent, honest approach to pain relief, posture correction, and overall physical performance.
              </p>
              <div>
                <h2 className="text-2xl md:text-3xl text-brand-dark leading-tight mb-4">
                  Comprehensive, Modern Treatment
                </h2>
                <p>
                  Whether you are an office professional dealing with daily strain, an active individual looking to optimize athletic performance, or someone seeking lasting relief from chronic discomfort, our tailored management plans are designed to get real results. We move beyond outdated concepts, combining precise manual therapy with modern clinical modalities and active rehabilitation to ensure you recover faster and stay resilient.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-brand-dark leading-tight mb-4">
                  A Space Designed for Your Healing
                </h2>
                <p>
                  We wanted to break away from the traditional, sterile clinic environment to create a uniquely creative and welcoming space for your healing journey. At Alinora Chiropractic, we are deeply dedicated to educating our patients, providing you with the tools, knowledge, and confidence to take control of your well being. Welcome to a new standard of movement and care.
                </p>
              </div>
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
        buttonHref={BOOKING_URL}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
