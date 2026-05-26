import { Activity, Hand, Zap, AlignCenter, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  referenceUrl?: string;
  referenceLabel?: string;
}

const iconMap: Record<string, React.ElementType> = {
  spine: Activity,
  hands: Hand,
  needle: Zap,
  posture: AlignCenter,
};

export function ServiceCard({
  title,
  description,
  icon,
  index,
  referenceUrl,
  referenceLabel,
}: ServiceCardProps) {
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
        {referenceUrl && referenceLabel && (
          <a
            href={referenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-teal-primary hover:text-teal-hover transition-colors"
          >
            Learn more about the {referenceLabel}
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </AnimatedSection>
  );
}
