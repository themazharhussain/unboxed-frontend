import Container from "@/components/ui/Container";
import Button from "../ui/Button";

const cards = [
  {
    heading: "Launch Fast",
    body: "Go live with your own branded mobile network in days.",
  },
  {
    heading: "Launch Fast",
    body: "Go live with your own branded mobile network in days.",
  },
  {
    heading: "Launch Fast",
    body: "Go live with your own branded mobile network in days.",
  },
  {
    heading: "Launch Fast",
    body: "Go live with your own branded mobile network in days.",
  },
  {
    heading: "Launch Fast",
    body: "Go live with your own branded mobile network in days.",
  },
  {
    heading: "Launch Fast",
    body: "Go live with your own branded mobile network in days.",
  },
];

export default function ReadyToLaunchSection() {
  return (
    <Container className="bg-[#f7f6f5]">
      <div className="flex flex-col justify-center items-center w-full py-8 lg:py-12 space-y-2">
        <h3 className="text-2xl font-semibold sm:text-3xl lg:text-[46px]">
          Why Brands Choose Unboxed
        </h3>
        <p className="mb-6 text-secondary">
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
