"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-white/90 backdrop-blur-md shadow-sm";

  const linkColor = isHome && !scrolled ? "text-white/90 hover:text-white" : "text-brand-dark hover:text-teal-primary";
  const logoColor = isHome && !scrolled ? "text-white" : "text-teal-dark";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className={`flex items-center gap-2 font-semibold text-lg tracking-tight transition-colors duration-300 ${logoColor}`}>
            <span className="w-8 h-8 rounded-full bg-teal-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              A
            </span>
            ALINORA CHIROPRACTIC
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${linkColor} ${pathname === link.href ? "text-teal-primary" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="https://www.cliniko.com" size="sm">
              Book Appointment
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isHome && !scrolled ? "text-white" : "text-brand-dark"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-brand-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-brand-dark hover:bg-teal-light hover:text-teal-primary ${pathname === link.href ? "bg-teal-light text-teal-primary" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-brand-border">
                <Button href="https://www.cliniko.com" className="w-full justify-center">
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
