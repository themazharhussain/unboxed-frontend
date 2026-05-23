import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book Demo" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center gap-8 text-sm font-medium text-primary/80">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="transition-opacity hover:opacity-100 opacity-70"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
