import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center  overflow-hidden text-center space-y-4 px-4 py-12">
        <h1 className="flex flex-col text-3xl sm:text-5xl sm:leading-13.5 lg:text-[90px] lg:leading-23.75 font-semibold">
          <span>Your Mobile Network</span>
          <span className="text-secondary"> Straight Out The Box</span>
        </h1>
        <p className="text-[18px] leading-4.5 lg:text-xl lg:leading-6.25 text-secondary">
          <span>
            Launch your own branded mobile network in minutes with everything you need to
          </span>
          <span>
            onboard customers, manage SIMs and grow under your own brand.
          </span>
        </p>
        <Button href="/contact" className="mt-2">Launch Your Network</Button>
      </div>
    </Container>

  );
}
