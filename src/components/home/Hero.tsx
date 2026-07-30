import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1768507423533-b87b62769758?auto=format&fit=crop&w=2400&q=80"
        alt="Chiropractor adjusting a patient in a treatment room"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* gradient overlay: darker bottom-left, lighter top-right */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/85 via-teal-dark/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="max-w-xl">
          <p className="text-teal-primary text-sm font-medium uppercase tracking-widest mb-4">
            Alinora Chiropractic
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Your Alignment, Your Aura
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-md">
            Alinora Chiropractic provides expert, family friendly chiropractic care to help you relieve back pain, improve posture and restore your spinal health naturally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={BOOKING_URL} size="lg">
              Book An Appointment
            </Button>
            <Button href="/visits" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              What to Expect
            </Button>
          </div>
        </div>
      </div>

      {/* bottom fade into background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-offwhite to-transparent" />
    </section>
  );
}
