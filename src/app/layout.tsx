import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocatorSetup from "@/components/ui/LocatorSetup";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Unboxed — Launch Your Branded Mobile Network",
    template: "%s | Unboxed",
  },
  description:
    "Launch your own branded mobile network in minutes. Onboard customers, manage SIMs and grow under your own brand — straight out the box.",
  metadataBase: new URL("https://unboxed.com"),
  openGraph: {
    type: "website",
    siteName: "Unboxed",
    title: "Unboxed — Launch Your Branded Mobile Network",
    description:
      "Launch your own branded mobile network in minutes. Onboard customers, manage SIMs and grow under your own brand.",
    url: "https://unboxed.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Unboxed" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unboxed — Launch Your Branded Mobile Network",
    description:
      "Launch your own branded mobile network in minutes. Onboard customers, manage SIMs and grow under your own brand.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LocatorSetup />
        <Header />
        <main className="flex-1 lg:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
