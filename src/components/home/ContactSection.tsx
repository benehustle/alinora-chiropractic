"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-offwhite text-brand-dark placeholder-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-teal-primary/40 focus:border-teal-primary transition-colors text-sm";

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
          {state === "success" ? (
            <div className="bg-teal-light border border-teal-primary/30 rounded-2xl p-8 text-center">
              <p className="text-teal-dark text-lg font-medium">Message sent!</p>
              <p className="text-brand-muted mt-2">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputCls}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputCls} resize-none`}
              />
              {state === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full flex items-center justify-center gap-2 bg-teal-primary text-white py-4 rounded-xl font-medium hover:bg-teal-hover transition-colors disabled:opacity-60 cursor-pointer"
              >
                <Send size={16} />
                {state === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
