"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-brand-border bg-white overflow-hidden shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5 hover:bg-brand-offwhite/80 transition-colors"
              aria-expanded={open}
            >
              <span className="font-medium text-brand-dark pr-2">{item.question}</span>
              <ChevronDown
                size={22}
                className={`text-teal-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-brand-border/60">
                    <p className="text-brand-muted leading-relaxed text-sm md:text-base pt-4">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
