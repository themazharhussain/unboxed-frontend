import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  return (
    <header className="w-full h-[72px] border-b border-primary/10 bg-body flex items-center">
      <div className="w-full flex items-center justify-between px-[322px]">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/logo.svg"
            alt="Unboxed logo"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Nav links — centered */}
        <Navbar />

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center justify-center h-[38px] px-5 rounded-[100px] border border-primary/20 text-sm font-medium text-primary cursor-pointer transition-opacity hover:opacity-70 active:opacity-50"
          >
            Login
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center h-[38px] px-5 rounded-[100px] bg-primary text-body text-sm font-medium cursor-pointer transition-opacity hover:opacity-80 active:opacity-60"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}
