import { ScanLine, BarChart2, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MEASURE_ITEMS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  scan: ScanLine,
  data: BarChart2,
  track: TrendingUp,
};

export function MeasureSection() {
  return (
    <section className="bg-teal-dark py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <div className="w-12 h-12 rounded-full bg-teal-primary/30 flex items-center justify-center mx-auto mb-6">
            <ScanLine size={24} className="text-teal-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl text-white leading-tight mb-4">
            We Measure. We Do Not Guess.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            3D posture scanning from day one means every adjustment is based on your real data, not generic routines.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEASURE_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ScanLine;
            return (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-teal-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} className="text-teal-primary" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
