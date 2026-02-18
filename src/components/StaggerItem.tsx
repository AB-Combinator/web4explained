"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerItem } from "./StaggerReveal";

export default function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
