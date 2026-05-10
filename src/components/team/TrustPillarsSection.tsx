import { Heart, BarChart2, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TRUST_PILLARS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  heart: Heart,
  chart: BarChart2,
  people: Users,
};

export function TrustPillarsSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our principles"
            title="Why Patients Trust Us"
            subtitle="The principles that guide every interaction in our clinic."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] ?? Heart;
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.12}>
                <div className="text-center p-8 rounded-2xl bg-brand-offwhite hover:bg-teal-light/50 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-teal-primary" />
                  </div>
                  <h3 className="text-xl text-brand-dark mb-3">{pillar.title}</h3>
                  <p className="text-brand-muted leading-relaxed text-sm">{pillar.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
