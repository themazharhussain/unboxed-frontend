import { FeatureSection, HeroSection, ReadyToLaunchSection } from "@/components/home";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Unboxed — Launch Your Branded Mobile Network",
  description:
    "Launch your own branded mobile network in minutes. Onboard customers, manage SIMs and grow under your own brand — straight out the box.",
  alternates: { canonical: "https://unboxed.com" },
};

export default function Home() {
  return (
    <>
    <HeroSection />
    <FeatureSection />
    <ReadyToLaunchSection />
     
    </>
  );
}
