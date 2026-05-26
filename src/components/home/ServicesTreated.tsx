import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  SpineIcon,
  NeckIcon,
  HeadacheIcon,
  SciaticaIcon,
  PostureIcon,
  SportsIcon,
} from "@/components/ui/ConditionIcons";
import { CONDITIONS_TREATED } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  back: SpineIcon,
  neck: NeckIcon,
  head: HeadacheIcon,
  leg: SciaticaIcon,
  posture: PostureIcon,
  sport: SportsIcon,
};

export function ServicesTreated({ bg = "brand-offwhite" }: { bg?: string }) {
  return (
    <section className={`py-20 lg:py-28 px-6 bg-${bg}`}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Conditions we help"
            title="Services We Treat"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONDITIONS_TREATED.map((condition, i) => {
            const Icon = iconMap[condition.icon] ?? SpineIcon;
            return (
              <AnimatedSection key={condition.title} delay={i * 0.08}>
                <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4">
                    <Icon size={26} className="text-teal-primary" />
                  </div>
                  <h3 className="text-lg text-brand-dark mb-2">{condition.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
