import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  bio: string[];
  quote: string;
  focusAreas: string[];
  reversed?: boolean;
}

export function TeamMember({
  name,
  title,
  image,
  imageAlt,
  bio,
  quote,
  focusAreas,
  reversed = false,
}: TeamMemberProps) {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${reversed ? "lg:[direction:rtl]" : ""}`}>
        {/* Image */}
        <AnimatedSection direction={reversed ? "right" : "left"} className="lg:[direction:ltr]">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection direction={reversed ? "left" : "right"} delay={0.1} className="lg:[direction:ltr]">
          <p className="text-teal-primary text-xs font-semibold uppercase tracking-widest mb-2">
            {title}
          </p>
          <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-6">{name}</h2>
          <div className="space-y-4 mb-6">
            {bio.map((para, i) => (
              <p key={i} className="text-brand-muted leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="border-l-4 border-teal-primary pl-5 my-6">
            <p className="text-brand-dark text-lg italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
          </blockquote>

          {/* Focus areas */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-3">
              Areas of Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 bg-teal-light text-teal-primary text-xs font-medium rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
