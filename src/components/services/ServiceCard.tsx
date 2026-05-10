import { Activity, Hand, Zap, AlignCenter } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  spine: Activity,
  hands: Hand,
  needle: Zap,
  posture: AlignCenter,
};

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Activity;
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection delay={index * 0.1} className={`flex flex-col sm:flex-row gap-6 items-start p-8 rounded-2xl ${isEven ? "bg-white" : "bg-brand-offwhite"}`}>
      <div className="w-14 h-14 rounded-2xl bg-teal-light flex items-center justify-center flex-shrink-0">
        <Icon size={26} className="text-teal-primary" />
      </div>
      <div>
        <h3 className="text-2xl text-brand-dark mb-3">{title}</h3>
        <p className="text-brand-muted leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
}
