"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
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

  if (state === "success") {
    return (
      <div className="bg-teal-light border border-teal-primary/30 rounded-2xl p-8 text-center">
        <p className="text-teal-dark text-lg font-medium">Message sent!</p>
        <p className="text-brand-muted mt-2">We will be in touch shortly.</p>
      </div>
    );
  }

  return (
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
        <p className="text-red-500 text-sm">Something went wrong. Please try again or call us.</p>
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
  );
}
