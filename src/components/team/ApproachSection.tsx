import { Search, Stethoscope, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { APPROACH_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  assess: Search,
  treat: Stethoscope,
  sustain: TrendingUp,
};

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How we work"
            title="Our Approach"
            subtitle="We believe the best outcomes happen when precise diagnostics meet compassionate hands-on care."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APPROACH_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Search;
            return (
              <AnimatedSection key={step.title} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-teal-light flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-teal-primary" />
                  </div>
                  <h3 className="text-2xl text-brand-dark mb-3">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
