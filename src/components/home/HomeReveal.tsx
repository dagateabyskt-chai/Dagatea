"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type HomeRevealProps = {
  children: ReactNode;
  className?: string;
  enabled: boolean;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  margin?: `${number}px`;
};

export default function HomeReveal({ children, className, enabled, delay = 0, duration = 0.8, x = 0, y = 40, scale = 1, margin }: HomeRevealProps) {
  return (
    <motion.div
      className={className}
      initial={enabled ? { opacity: 0, x, y, scale } : false}
      animate={enabled ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin }}
      transition={{ duration: enabled ? duration : 0, delay: enabled ? delay : 0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
