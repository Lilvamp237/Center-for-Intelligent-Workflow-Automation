"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
}

export default function Card({ children, className = "", index = 0, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass glow-border rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
