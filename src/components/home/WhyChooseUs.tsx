"use client";

import { motion } from "motion/react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUsSection() {
  return (
    <Container className="bg-tertiary mt-2 lg:mt-6">
      <div className="flex w-full flex-col items-center justify-center space-y-2 py-12 md:py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center text-3xl font-semibold md:text-[46px]"
        >
          Why Brands Choose Unboxed
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="mb-6 px-3 text-[18px] text-center text-secondary"
        >
          Built for creators, communities and modern brands looking to launch their own mobile network.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.07 }}
              className="rounded-lg p-6 bg-white"
            >
              <h4 className="text-xl font-semibold mb-1">{card.heading}</h4>
              <p className="text-sm">{card.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <Button>Launch Your Network</Button>
        </motion.div>
      </div>
    </Container>
  );
}
