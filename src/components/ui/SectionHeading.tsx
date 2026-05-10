interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-white" : "text-brand-dark";
  const subtitleColor = light ? "text-white/70" : "text-brand-muted";

  return (
    <div className={`${textAlign} mb-12`}>
      {eyebrow && (
        <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl ${titleColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${subtitleColor} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
