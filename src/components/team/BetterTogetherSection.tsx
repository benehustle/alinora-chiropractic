import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BetterTogetherSection() {
  return (
    <section className="bg-teal-dark py-20 px-6">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-teal-primary/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🤝</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-white leading-tight mb-6">
          Better Together
        </h2>
        <p className="text-white/70 text-lg leading-relaxed">
          Dr Kim and Jessica do not work in silos. Every treatment plan is discussed, refined and adjusted together. When your spine is aligned and your soft tissue is released in the same timeframe, recovery stops feeling like a guessing game and starts feeling like a clear path forward.
        </p>
      </AnimatedSection>
    </section>
  );
}
