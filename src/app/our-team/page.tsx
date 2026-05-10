import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { TeamMember } from "@/components/team/TeamMember";
import { BetterTogetherSection } from "@/components/team/BetterTogetherSection";
import { ApproachSection } from "@/components/team/ApproachSection";
import { TrustPillarsSection } from "@/components/team/TrustPillarsSection";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Dr Hyo Seok Kim and Jessica Park, the dedicated practitioners behind Alinora Chiropractic in Canning Vale, Perth.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="Dedicated professionals who put patients first, guiding you to a healthier, pain-free life."
        bgImage="https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&w=1920&q=80"
      />

      {TEAM_MEMBERS.map((member, i) => (
        <TeamMember
          key={member.name}
          {...member}
          reversed={i % 2 !== 0}
        />
      ))}

      <BetterTogetherSection />
      <ApproachSection />
      <TrustPillarsSection />

      <CTASection
        heading="Ready to meet us in person?"
        subtext="Book your initial consultation and experience the ALINORA difference."
        buttonLabel="Book Appointment"
        buttonHref="https://www.cliniko.com"
      />
    </>
  );
}
