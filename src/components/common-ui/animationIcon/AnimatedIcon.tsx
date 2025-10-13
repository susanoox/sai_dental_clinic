"use client";

import { motion, type MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getLucideIcon } from "@/data/home/introduction";

type AnimatedIconProps = {
  icon: string; // now a string
  wrapperClassName?: string;
  iconClassName?: string;
  motionProps?: MotionProps;
};

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y:50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export default function AnimatedIcon({
  icon,
  wrapperClassName,
  iconClassName,
  motionProps,
}: AnimatedIconProps) {
  const [IconComponent, setIconComponent] = useState<any>(null);

  useEffect(() => {
    getLucideIcon(icon).then((icon) => setIconComponent(() => icon));
  }, [icon]);

  if (!IconComponent) return null;

  return (
    <motion.div
      {...defaultMotion}
      {...motionProps}
      className={cn("bg-blue-50 p-3 rounded-xl inline-flex", wrapperClassName)}
    >
      <IconComponent className={cn("w-6 h-6 text-blue-600", iconClassName)} />
    </motion.div>
  );
}
