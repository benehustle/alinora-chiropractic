import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section className="py-20 lg:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left text */}
        <AnimatedSection direction="left" className="lg:pt-4">
          <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Have a question or ready to start your care journey? Send us a message and we will get back to you promptly.
          </p>
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection direction="right" delay={0.1}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
