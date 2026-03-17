"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(230, 57, 70, 0.045), transparent 42%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ background }}
      aria-hidden="true"
    />
  );
}
