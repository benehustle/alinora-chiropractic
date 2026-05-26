import type { Metadata } from "next";
import { ShieldCheck, Unlock, Handshake, CreditCard, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PRICING_DETAILED, PRICING_PROMISES, PAYMENT_METHODS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing Our Promise",
  description:
    "Honest, transparent pricing at Alinora Chiropractic. No hidden fees, no long-term contracts, on-the-spot HICAPS claims.",
};

const promiseIconMap: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  unlock: Unlock,
  handshake: Handshake,
  card: CreditCard,
};

export default function PricingOurPromisePage() {
  return (
    <>
      <PageHero
        title="Pricing Our Promise"
        subtitle="Honest, transparent pricing. No hidden fees, no pressure, no long-term contracts."
        bgImage="https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Promise intro */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
              Our commitment to you
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-dark leading-tight mb-6">
              Care you can trust. Pricing you can predict.
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              At Alinora Chiropractic we believe great care starts with honesty.
              Before any treatment begins, you will know exactly what is being
              recommended, why it is being recommended and what it will cost.
              No upsells, no surprises and no obligation to continue beyond
              what is clinically necessary.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The promises */}
      <section className="py-20 lg:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Four promises"
              title="What you can expect from us"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRICING_PROMISES.map((promise, i) => {
              const Icon = promiseIconMap[promise.icon] ?? ShieldCheck;
              return (
                <AnimatedSection key={promise.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 h-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5">
                      <Icon size={24} className="text-teal-primary" />
                    </div>
                    <h3 className="text-xl text-brand-dark mb-3">{promise.title}</h3>
                    <p className="text-brand-muted leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed pricing list */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Our fees"
              title="Transparent Pricing"
              subtitle="Every fee in one place. The same prices whether you are new or returning."
            />
          </AnimatedSection>

          <div className="bg-brand-offwhite rounded-2xl overflow-hidden border border-brand-border">
            {PRICING_DETAILED.map((item, i) => (
              <AnimatedSection
                key={`${item.service}-${item.duration}`}
                delay={i * 0.04}
              >
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 ${
                    i !== PRICING_DETAILED.length - 1
                      ? "border-b border-brand-border"
                      : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-lg sm:text-xl text-brand-dark">
                        {item.service}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-teal-primary">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-brand-muted text-sm mt-2 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif text-brand-dark sm:text-right sm:ml-6 sm:min-w-[120px]">
                    {item.price}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <p className="text-sm text-brand-muted text-center mt-6">
              Prices are inclusive of GST. Private health rebates apply where
              your fund covers chiropractic or remedial massage extras.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Health funds & payments */}
      <section className="py-20 lg:py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection direction="left">
            <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-3">
              Health funds
            </p>
            <h2 className="text-3xl md:text-4xl text-brand-dark leading-tight mb-5">
              On-the-spot HICAPS claiming
            </h2>
            <p className="text-brand-muted leading-relaxed mb-5">
              We are registered providers with all major Australian private
              health funds. Bring your health fund card and we will process
              your rebate at the counter; you only pay the gap.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Cover varies by fund and level of extras. If you are unsure
              whether chiropractic or remedial massage is included in your
              policy, give us a call before your first visit and we will help
              you check.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl text-brand-dark mb-5">
                Payment methods accepted
              </h3>
              <ul className="space-y-3">
                {PAYMENT_METHODS.map((method) => (
                  <li key={method} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-teal-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-brand-dark">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        heading="Have a question about pricing?"
        subtext="Reach out before your first visit. We are happy to walk you through anything that is not clear."
        buttonLabel="Call Us"
        buttonHref="tel:0894085724"
        secondaryLabel="Email Us"
        secondaryHref="mailto:hello@alinorachiropractic.com.au"
      />
    </>
  );
}
