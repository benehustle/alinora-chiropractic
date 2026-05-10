import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export function PageHero({
  title,
  subtitle,
  bgImage = "https://images.unsplash.com/photo-1745327883290-1e9c6447b938?auto=format&fit=crop&w=1920&q=80",
}: PageHeroProps) {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-teal-dark/70" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
