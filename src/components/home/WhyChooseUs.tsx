import Container from "@/components/ui/Container";
import Button from "../ui/Button";

const cards = [
  {
    heading: "Launch fast",
    body: "Go live with your own branded mobile network in days.",
  },
  {
    heading: "New recurring revenue",
    body: "Create a new subscription revenue stream directly from your audience.",
  },
  {
    heading: "Daily brand visibility",
    body: "Stay visible on your customers phones every single day.",
  },
  {
    heading: "Fully managed",
    body: "We handle the telecoms, billing and infrastructure for you.",
  },
  {
    heading: "Fully branded",
    body: "Custom SIMs, app experience and onboarding designed around your brand.",
  },
  {
    heading: "Built to scale",
    body: "Start small and grow into a fully established mobile network.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <Container className="bg-tertiary mt-2 lg:mt-6">
      <div className="flex w-full flex-col items-center justify-center space-y-2 py-12 md:py-16">
        <h2 className="text-center text-3xl font-semibold md:text-[46px]">
          Why Brands Choose Unboxed
        </h2>
        <p className="mb-6 px-3 text-[18px] text-center text-secondary">
         Built for creators, communities and modern brands looking to launch their own mobile network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {cards.map((card, index) => (
            <div key={index} className="rounded-lg p-6 bg-white">
              <h4 className="text-xl font-semibold mb-1">{card.heading}</h4>
              <p className="text-sm">{card.body}</p>
            </div>
          ))}
        </div>

        <Button>Launch Your Network</Button>
      </div>
    </Container>
  );
}
