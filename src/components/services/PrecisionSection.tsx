import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PRECISION_ITEMS } from "@/lib/constants";

export function PrecisionSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Objective data, every visit"
            title="Precision & Clarity"
            subtitle="We don't guess; we measure. Objective data drives every treatment decision."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRECISION_ITEMS.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12}>
              <div className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/60 to-transparent" />
                </div>
                <h3 className="text-xl text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
