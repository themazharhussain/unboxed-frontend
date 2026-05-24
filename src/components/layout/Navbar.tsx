import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book Demo" },
];

export default function Navbar({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col items-center gap-7 text-primary"
          : "flex items-center gap-8 text-sm font-medium text-primary/80"
      }
    >
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={
            mobile
              ? "text-2xl font-bold uppercase tracking-widest transition-opacity hover:opacity-70 active:opacity-50"
              : "opacity-70 transition-opacity hover:opacity-100"
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
