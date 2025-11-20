"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      className={clsx("relative", className)}
    >
      {children}
    </motion.section>
  );
}
