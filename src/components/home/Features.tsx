"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Container from "@/components/ui/Container";
import Image from "next/image";

const features = [
  {
    image: { src: "/images/home/container.png", alt: "Unlock new revenue feature" },
    heading: "Unlock new revenue and stay connected to your customers",
    body: "Launch your own branded mobile network to create new recurring revenue streams, increase customer retention and stay visible on your customers phones every single day.",
    tags: ["Recurring Revenue", "Increase Retention", "Daily Brand Visibility"],
  },
  {
    image: { src: "/images/home/container.png", alt: "Designed to match your brand" },
    heading: "Designed to match your brand and mission",
    body: "From your logo and colours to your app and SIM experience, every part of your mobile network is designed to feel like your brand from day one.",
    tags: ["Fully Branded Experience", "Your Colours and Identity", "Built for Your Community"],
  },
  {
    image: { src: "/images/home/container.png", alt: "Fully managed infrastructure" },
    heading: "Fully managed infrastructure with shared revenue",
    body: "We handle the telecoms, support, billing and infrastructure while you focus on growing your brand, audience and recurring revenue.",
    tags: ["Fully Managed Service", "Shared Recurring Revenue", "No Telecom Experience Needed"],
  },
];

// Card height + gap in px — used to offset each card so they visually overlap
const CARD_OFFSET = 24;

function FeatureCard({
  feature,
  index,
  total,
  progress,
}: {
  feature: (typeof features)[0];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const isLast = index === total - 1;
  const targetScale = 1 - (total - index - 1) * 0.06;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const blur = useTransform(progress, [index / total, 1], [0, isLast ? 0 : 1.5]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    // sticky anchor — sticks at top of viewport, no height of its own
    <div
      className="sticky top-20 my-10"
      style={{ zIndex: index + 1 }}
    >
      {/* motion wrapper — offset downward per index so cards visually stack */}
      <motion.div
        style={{
          top: `${index * CARD_OFFSET}px`,
          ...(isLast ? {} : { scale, filter, willChange: "transform, filter", transformOrigin: "top center" }),
        }}
        className="relative"
      >
        <div className="grid w-full grid-cols-1 gap-6 mb-5 lg:grid-cols-2 bg-body">
          <div>
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              width={460}
              height={300}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-3">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-[36px]">
              {feature.heading}
            </h2>
            <p className="text-sm text-secondary">{feature.body}</p>
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
      </motion.div>
    </div>
  );
}

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="pb-[12vh]">
      <Container>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            index={index}
            total={features.length}
            progress={scrollYProgress}
          />
        ))}
      </Container>
    </div>
  );
}
