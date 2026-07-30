import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BetterTogetherSection() {
  return (
    <section className="bg-teal-dark py-20 px-6">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-teal-primary/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🤝</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-white leading-tight mb-6">
          Personalised Care
        </h2>
        <p className="text-white/70 text-lg leading-relaxed">
          Every treatment plan is carefully assessed, refined and adjusted to suit your needs. By combining spinal alignment with soft tissue treatment when needed, your care follows a structured, personalised approach. This creates a clear path to recovery, helping you move better, reduce pain and achieve lasting results.
        </p>
      </AnimatedSection>
    </section>
  );
}
