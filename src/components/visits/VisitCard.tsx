import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Step {
  title: string;
  desc: string;
}

interface VisitCardProps {
  title: string;
  label: string;
  duration: string;
  description: string;
  steps: Step[];
  image: string;
  cta: string | null;
  reversed?: boolean;
}

export function VisitCard({
  title,
  label,
  duration,
  description,
  steps,
  image,
  cta,
  reversed = false,
}: VisitCardProps) {
  return (
    <section className="py-20 lg:py-24 px-6 bg-white odd:bg-brand-offwhite">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:[direction:rtl]" : ""}`}>
        {/* Image */}
        <AnimatedSection direction={reversed ? "right" : "left"} className="lg:[direction:ltr]">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-4 left-4 z-10 bg-teal-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              {duration}
            </div>
            <div className="aspect-[4/3]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection direction={reversed ? "left" : "right"} delay={0.1} className="lg:[direction:ltr]">
          <p className="text-teal-primary text-xs font-semibold uppercase tracking-widest mb-2">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl text-brand-dark leading-tight mb-4">
            {title}
          </h2>
          <p className="text-brand-muted leading-relaxed mb-6">{description}</p>

          <ul className="space-y-3 mb-8">
            {steps.map((step) => (
              <li key={step.title} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-teal-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-brand-dark">{step.title}</span>
                  <span className="text-brand-muted text-sm">: {step.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {cta && (
            <Button href="https://www.cliniko.com" size="md">
              {cta}
            </Button>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
