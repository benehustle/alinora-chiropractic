import { Button } from "./Button";
import { AnimatedSection } from "./AnimatedSection";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  heading,
  subtext,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-teal-dark py-20 px-6">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
          {heading}
        </h2>
        {subtext && (
          <p className="text-white/70 text-lg mb-8">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={buttonHref} size="lg">
            {buttonLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}
