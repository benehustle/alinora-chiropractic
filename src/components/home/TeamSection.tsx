import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Meet the team"
            title="Your Chiropractic Team"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <Link href="/our-team" className="group block text-center">
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-teal-light group-hover:ring-teal-primary transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="144px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl text-brand-dark mb-1">{member.name}</h3>
                <p className="text-teal-primary text-xs font-semibold uppercase tracking-widest mb-3">
                  {member.title}
                </p>
                <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
                  {member.bio[0]}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
