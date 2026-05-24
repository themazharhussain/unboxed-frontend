"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import PlusIcon from "@/components/icons/PlusIcon";

const faq = [
  {
    question: "How quickly can we launch?",
    answer:
      "You can launch your branded mobile network in days, depending on your branding, setup requirements, and final approvals.",
  },
  {
    question: "Do you provide eSIMs?",
    answer:
      "Yes. We support eSIMs, so your customers can get connected quickly without waiting for a physical SIM card.",
  },
  {
    question: "Do we need telecom experience?",
    answer:
      "No. We handle the technical telecom setup, so you can focus on your brand, customers, and growth.",
  },
  {
    question: "Who handles customer support?",
    answer:
      "Support can be handled by your team, our team, or a shared setup depending on how you want to run your network.",
  },
  {
    question: "Can everything be branded?",
    answer:
      "Yes. Your mobile network can be customised with your own brand name, colours, plans, and customer experience.",
  },
  {
    question: "What types of brands use Unboxed?",
    answer:
      "Unboxed is ideal for creators, communities, businesses, agencies, charities, and organisations that want to offer mobile services under their own brand.",
  },
  {
    question: "How do we make money?",
    answer:
      "You earn revenue by selling mobile plans to your customers under your own brand, with flexible pricing and plan options.",
  },
  {
    question: "Is there a minimum audience size?",
    answer:
      "There is no large audience requirement. Unboxed is built to help brands start small and grow over time.",
  },
  {
    question: "Can customers keep their number?",
    answer:
      "Yes. Customers can usually transfer their existing mobile number using the standard PAC process.",
  },
  {
    question: "Can we customise pricing and plans?",
    answer:
      "Yes. You can create pricing and plans that match your audience, business model, and brand strategy.",
  },
  {
    question: "Is this available internationally?",
    answer:
      "Availability depends on the market and network coverage. We can discuss your target region and confirm the best launch options.",
  },
  {
    question: "How do we get started?",
    answer:
      "Get in touch with us, and we will guide you through branding, plans, setup, and launch requirements.",
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faq)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between py-4 text-left"
      >
        <p className="text-base">{item.question}</p>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-primary/50"
        >
          <PlusIcon size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? contentRef.current?.scrollHeight ?? "auto" : 0 }}
        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
        style={{ overflow: "hidden" }}
      >
        <div ref={contentRef}>
          <p className="pb-4 text-sm text-secondary">{item.answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const left = faq.filter((_, i) => i % 2 === 0);
  const right = faq.filter((_, i) => i % 2 !== 0);

  return (
    <Container className="bg-tertiary">
      <div className="flex w-full flex-col py-12 space-y-8 md:py-16">
        <h2 className="text-center text-3xl font-semibold md:text-[46px]">
          Things People Ask
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          <div>
            {left.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openIndex === i * 2}
                onToggle={() => toggle(i * 2)}
              />
            ))}
          </div>
          <div>
            {right.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openIndex === i * 2 + 1}
                onToggle={() => toggle(i * 2 + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
