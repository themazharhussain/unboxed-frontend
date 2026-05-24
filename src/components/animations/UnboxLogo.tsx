"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const diamonds = [
  { finalX: -12, finalY: -12 },
  { finalX: 12, finalY: -12 },
  { finalX: -12, finalY: 12 },
  { finalX: 12, finalY: 12 },
];

function Diamond({ finalX, finalY, index }: {
  finalX: number;
  finalY: number;
  index: number;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    async function run() {
      // Phase 1: spin to 45° (diamond)
      await controls.start({
        rotate: 45,
        transition: { delay: 0.3, duration: 0.8, ease: EASE },
      });
      // Phase 2: split outward
      await controls.start({
        x: finalX,
        y: finalY,
        transition: { delay: index * 0.07, duration: 0.7, ease: EASE },
      });
      // Phase 3: rotate back to square
      await controls.start({
        rotate: 0,
        transition: { delay: index * 0.05, duration: 0.6, ease: EASE },
      });
    }
    run();
  }, [controls, finalX, finalY, index]);

  return (
    <motion.span
      animate={controls}
      className="absolute left-1/2 top-1/2 block size-4 origin-center bg-primary"
      style={{ marginLeft: -8, marginTop: -8 }}
      initial={{ x: 0, y: 0, rotate: 0 }}
    />
  );
}

export default function UnboxedLogoAnimation() {
  const [showLogo, setShowLogo] = useState(false);
  const iconControls = useAnimationControls();

  useEffect(() => {
    // spin(0.3+0.8) + split(0.7+0.28 stagger) + square(0.6+0.15 stagger) ≈ 2.85s
    const t = setTimeout(async () => {
      // Slide squares off to the right
      await iconControls.start({
        x: 40,
        transition: { duration: 0.8, ease: EASE },
      });
      setShowLogo(true);
    }, 2850);
    return () => clearTimeout(t);
  }, [iconControls]);

  return (
    <div className="relative flex h-6.75 w-35.25 items-center">
      {/* Animated diamonds */}
      {!showLogo && (
        <motion.div
          animate={iconControls}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative size-10">
            {diamonds.map((d, i) => (
              <Diamond key={i} finalX={d.finalX} finalY={d.finalY} index={i} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Final logo — slides in from top */}
     {showLogo && (
  <motion.div
    initial={{ y: -20 }}
    animate={{ y: 0 }}
    transition={{
      duration: 1,
      ease: EASE,
    }}
    className="absolute inset-0 flex items-center"
  >
    <Image
      src="/logos/logo.svg"
      alt="Unboxed logo"
      width={141}
      height={27}
      priority
      className="h-auto w-auto"
    />
  </motion.div>
)}
    </div>
  );
}
