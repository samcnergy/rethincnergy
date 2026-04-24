"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
