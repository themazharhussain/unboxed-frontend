import Link from "next/link";
import Image from "next/image";
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

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-330 px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 md:py-16 lg:grid-cols-5">

          {/* Logo column */}
          <div className="flex items-start">
            <Image src="/logos/logo-square.svg" alt="Unboxed" width={61} height={61} className="h-auto w-auto" />
          </div>

          {/* Nav columns */}
          {nav.map(({ heading, links }) => (
            <div key={heading}>
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
        <div className="flex flex-col gap-4 border-t border-black/10 py-6">

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary opacity-50 transition-opacity hover:opacity-100"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

          {/* Legal + copyright */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
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
            <p className="text-center text-sm text-secondary">
              © {new Date().getFullYear()} Unboxed
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
