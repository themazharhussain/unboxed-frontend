"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book Demo" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="w-full border-b border-primary/10 bg-body">
      <div className="mx-auto flex items-center justify-between h-18 w-full max-w-312  px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/logos/logo.svg" alt="Unboxed logo" width={141} height={27} priority />
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
          <Button href="/login" variant="outline" width={76} height={40}>
            Login
          </Button>
          <Button href="/get-started" variant="primary" width={145} height={40}>
            Get Started
          </Button>
        </div>

        {/* Hamburger - mobile */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-primary/10 text-primary transition-opacity active:opacity-60 lg:hidden"
        >
          <span className="flex flex-col gap-1.25">
            <span className="block h-0.5 w-5 rounded-full bg-primary" />
            <span className="block h-0.5 w-5 rounded-full bg-primary" />
            <span className="block h-0.5 w-5 rounded-full bg-primary" />
          </span>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-body text-primary"
          role="dialog"
          aria-modal="true"
        >
          {/* Top bar */}
          <div className="flex h-18 shrink-0 items-center justify-between px-4 sm:px-6">
            <Link href="/" onClick={close} className="shrink-0">
              <Image src="/logos/logo.svg" alt="Unboxed logo" width={141} height={27} priority />
            </Link>

            <button
              onClick={close}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 text-primary transition-opacity active:opacity-60"
            >
              ✕
            </button>
          </div>

          {/* CTA row */}
          <div className="shrink-0 flex items-center justify-center gap-3 border-y border-primary/10 py-3">
            <Button href="/get-started" variant="primary" width={160} height={40} onClick={close}>
              Get Started
            </Button>
            <Button href="/login" variant="outline" width={120} height={40} onClick={close}>
              Login
            </Button>
          </div>

          {/* Nav links - mobile */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-7">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="text-2xl font-bold uppercase tracking-widest transition-opacity hover:opacity-70 active:opacity-50"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
