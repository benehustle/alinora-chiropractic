import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ServicesTeaser() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <AnimatedSection direction="left">
          <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-6">
            Perth Chiropractor Services
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-4">
            We go beyond simply treating back, neck pain and headaches. We focus on restoring proper spinal mechanics to optimise your nervous system, allowing your body to heal and function at its best.
          </p>
          <p className="text-brand-muted leading-relaxed mb-8">
            Through precise care, tailored exercise and lifestyle guidance, we are committed to helping you reduce pain, improve mobility, increase function and maintain a healthy active life.
          </p>
          <Button href="/services" size="md">
            View Services
          </Button>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection direction="right" delay={0.1} className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1768507423533-b87b62769758?auto=format&fit=crop&w=1000&q=80"
              alt="Chiropractor providing a spinal adjustment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
