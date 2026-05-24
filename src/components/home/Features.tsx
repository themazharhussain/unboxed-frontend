import Container from "@/components/ui/Container";
import Image from "next/image";

const features = [
    {
    image: { src: "/images/hero/container.png", alt: "Unlock new revenue feature" },
    heading: "Unlock new revenue and stay connected to your customers",
    body: "Launch your own branded mobile network to create new recurring revenue streams, increase customer retention and stay visible on your customers phones every single day.",
    tags: ["Recurring Revenue", "Increase Retention", "Daily Brand Visibility"],
  },
  {
    image: { src: "/images/hero/container.png", alt: "Designed to match your brand" },
    heading: "Designed to match your brand and mission",
    body: "From your logo and colours to your app and SIM experience, every part of your mobile network is designed to feel like your brand from day one.",
    tags: ["Fully Branded Experience", "Your Colours and Identity", "Built for Your Community"],
  },
  {
    image: { src: "/images/hero/container.png", alt: "Fully managed infrastructure" },
    heading: "Fully managed infrastructure with shared revenue",
    body: "We handle the telecoms, support, billing and infrastructure while you focus on growing your brand, audience and recurring revenue.",
    tags: ["Fully Managed Service", "Shared Recurring Revenue", "No Telecom Experience Needed"],
  },
];

export default function FeatureSection() {
  return (
    <Container>
      {features.map((feature, index) => (
        <div
          key={index}
          className="grid w-full grid-cols-1 gap-6 py-8 lg:grid-cols-2 lg:py-12"
        >
          <div>
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              width={460}
              height={300}
              priority
            />
          </div>

          <div className="flex flex-col justify-center space-y-3">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-[36px]">
              {feature.heading}
            </h2>
            <p className="text-sm">{feature.body}</p>
            <div className="mt-2 flex w-full flex-wrap items-center gap-2 text-[12px]">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex h-8.25 shrink-0 items-center justify-center rounded-[100px] border border-black px-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
