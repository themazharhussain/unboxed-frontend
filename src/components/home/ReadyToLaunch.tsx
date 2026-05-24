"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ReadyToLaunchSection() {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden space-y-4 py-12 text-center md:py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center text-4xl font-semibold md:text-6xl lg:text-[90px]"
        >
          <span className="block">Ready To Launch</span>
          <span className="block text-secondary">Your Mobile Network?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="px-3 text-center text-[18px] text-secondary lg:text-[22px]"
        >
          <span className="md:block">
            Launch a fully branded mobile network with everything you need to onboard customers,
          </span>
          <span className="md:block">
            manage SIMs and grow recurring revenue under your own brand.
          </span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <Button href="/contact" className="mt-2">Launch Your Network</Button>
        </motion.div>
      </div>
    </Container>
  );
}
