import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { TeamSection } from "@/components/home/TeamSection";
import { ServicesTreated } from "@/components/home/ServicesTreated";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Alinora Chiropractic | Your Trusted Chiropractors in Perth",
  description:
    "Expert chiropractic care, remedial massage, dry needling and postural correction in Canning Vale, Perth WA. Book your appointment today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <TeamSection />
      <ServicesTreated />
      <ContactSection />
    </>
  );
}
