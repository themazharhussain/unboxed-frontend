"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // If already loaded (e.g. fast cache), skip immediately
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    const handler = () => setLoaded(true);
    window.addEventListener("load", handler);
    return () => window.removeEventListener("load", handler);
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-body"
        >
          <div className="loader">
            <div className="box" />
            <div className="box" />
            <div className="box" />
            <div className="box" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
