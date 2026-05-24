"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button";
import MenuIcon from "@/components/icons/MenuIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import UnboxedLogoAnimation from "@/components/animations/UnboxLogo";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book Demo" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu when resized to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) close(); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header className="relative z-50 w-full lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:backdrop-blur-sm">
      <div className="mx-auto flex h-18 w-full max-w-330 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <UnboxedLogoAnimation />
        </Link>

        {/* Nav links - desktop */}
        <nav className="hidden items-center gap-8 text-base font-medium text-primary lg:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="opacity-70 transition-opacity hover:opacity-100">
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons - desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/login" variant="outline" width={76} height={40}>Login</Button>
          <Button href="/get-started" variant="primary" width={130} height={40}>Get Started</Button>
        </div>

        {/* Hamburger - mobile */}
        <motion.button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.9 }}
          className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-primary lg:hidden"
        >
          <MenuIcon size={18} />
        </motion.button>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-body text-primary lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Top bar */}
            <div className="flex h-18 shrink-0 items-center justify-between border-b border-black/10 px-4 sm:px-6">
              <Link href="/" onClick={close} className="shrink-0">
                <Image src="/logos/logo.svg" alt="Unboxed logo" width={141} height={27} priority className="h-auto w-auto" />
              </Link>
              <button
                onClick={close}
                aria-label="Close menu"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-primary transition-opacity active:opacity-60"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col px-4 pt-2 sm:px-6">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className="flex w-full items-center border-b border-black/10 py-4 text-lg font-medium transition-opacity hover:opacity-60 active:opacity-40"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="flex shrink-0 flex-col gap-3 px-4 pb-8 pt-4 sm:px-6">
              <Button href="/login" variant="outline" width="100%" height={48} onClick={close}>
                Login
              </Button>
              <Button href="/get-started" variant="primary" width="100%" height={48} onClick={close}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
