import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutTeaser() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <AnimatedSection direction="left" className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?auto=format&fit=crop&w=900&q=80"
              alt="Practitioner discussing a personalised care plan with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* floating badge */}
          <div className="absolute bottom-6 left-6 bg-teal-primary text-white px-5 py-3 rounded-xl shadow-lg max-w-[200px]">
            <p className="text-xs font-semibold uppercase tracking-wide leading-snug">
              ALINORA CHIROPRACTIC: compassionate, authentic and caring
            </p>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection direction="right" delay={0.1}>
          <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
            About us
          </p>
          <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-6">
            Precision & Clarity.{" "}
            <span className="text-teal-primary">Visualize your progress.</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-4">
            Welcome to Alinora Chiropractic, where advanced technology meets passionate care. Using 3D musculoskeletal and posture analysis systems, we give you clear, visual understanding of your body.
          </p>
          <p className="text-brand-muted leading-relaxed mb-8">
            This data-driven approach removes the guesswork, ensuring personalised treatments and measurable progress every step of the way.
          </p>
          <Button href="/about" size="md">
            About Us
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
