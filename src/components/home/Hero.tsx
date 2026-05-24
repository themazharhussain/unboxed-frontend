import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center  overflow-hidden text-center space-y-4 py-12 md:py-28">
        <h1 className="text-center text-4xl md:text-6xl lg:text-[90px] font-semibold">
          <span className="block">Your Mobile Network</span>
          <span className="block text-secondary"> Straight Out The Box</span>
        </h1>
        <p className="px-3 text-center text-[18px] lg:text-[22px] text-secondary">
          <span className="md:block">
            Launch your own branded mobile network in minutes with everything you need to
          </span>
          <span className="md:block">
            onboard customers, manage SIMs and grow under your own brand.
          </span>
        </p>
        <Button href="/contact" className="mt-2">Launch Your Network</Button>
      </div>
    </Container>

  );
}
