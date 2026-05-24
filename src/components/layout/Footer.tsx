"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const nav = [
  {
    heading: "Product",
    links: [
      { label: "Customer Journey", href: "/product/customer-journey" },
      { label: "Branded SIM", href: "/product/branded-sim" },
      { label: "Revenue", href: "/product/revenue" },
      { label: "Dashboard", href: "/product/dashboard" },
    ],
  },
  {
    heading: "Use Cases",
    links: [
      { label: "Web-designers", href: "/use-cases/web-designers" },
      { label: "Marketers", href: "/use-cases/marketers" },
      { label: "Small Business", href: "/use-cases/small-business" },
      { label: "Website Builder", href: "/use-cases/website-builder" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Academy", href: "/resources/academy" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Themes", href: "/resources/themes" },
      { label: "Support", href: "/resources/support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faqs" },
      { label: "Team", href: "/team" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedInIcon },
];

const legal = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
];

function SocialLink({
  label,
  href,
  Icon,
}: {
  label: string;
  href: string;
  Icon: React.ComponentType<{ size?: number }>;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center perspective-[700px]">
      {/* <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary px-2 py-1 text-[11px] font-medium shadow-sm"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence> */}

      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{
          y: -8,
          scale: 1.10,
          rotateX: 10,
          rotateY: -10,
          z: 40,
        }}
        whileTap={{
          scale: 0.95,
          y: -4,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 18,
        }}
        className="relative rounded-full transform-3d"
      >
        <motion.div
          animate={
            hovered
              ? {
                  boxShadow:
                    "0 18px 35px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.35)",
                }
              : {
                  
                }
          }
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex size-11 items-center justify-center rounded-full text-secondary transition-opacity"
        >
          <Link
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Icon size={30} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 md:py-16 lg:grid-cols-5">

          {/* Logo column */}
          <div className="flex justify-center lg:items-start">
            <Image src="/logos/logo-square.svg" alt="Unboxed" width={61} height={61} style={{ width: 61, height: 61 }} />
          </div>

          {/* Nav columns */}
          {nav.map(({ heading, links }) => (
            <div key={heading} className="text-center">
              <p className="mb-4 text-base font-semibold text-primary">{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-primary transition-opacity hover:opacity-70"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 border-t border-black/10 py-8">

          {/* Socials */}
          <div className="flex items-center justify-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <SocialLink key={label} label={label} href={href} Icon={Icon} />
            ))}
          </div>

          {/* Legal + copyright */}
          <div className="flex flex-col gap-6 lg:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {legal.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-primary transition-opacity hover:opacity-70"
                >
                  {label}
                </Link>
              ))}
            </div>
            <p className="text-center text-sm text-primary">
              © {new Date().getFullYear()} Unboxed
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
