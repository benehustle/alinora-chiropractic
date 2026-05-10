import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PRICING } from "@/lib/constants";

export function PricingSection() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-teal-dark">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Transparent Pricing"
            subtitle="No hidden fees. Know exactly what to expect."
            light
          />
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {PRICING.map((item, i) => (
            <AnimatedSection key={item.service} delay={i * 0.1} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
                <p className="text-4xl lg:text-5xl text-white font-serif mb-2">{item.price}</p>
                <p className="text-white/60 text-sm max-w-[140px] leading-snug">{item.service}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
