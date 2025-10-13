"use client";

import Image from "next/image";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type CardImageProps = {
  className?: string;
  imageClassName?: string;
  src?: string;
  alt?: string;
  motionProps?: MotionProps;
};

const defaultMotion: MotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function CardImage({
  className,
  imageClassName,
  src = "/images/default-card.jpg",
  alt = "Service image",
  motionProps,
}: CardImageProps) {
  return (
    <motion.div
      {...defaultMotion}
      {...motionProps}
      className={cn(
        "relative w-full h-56 md:h-72 rounded-xl overflow-hidden",
        className
      )}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn("object-cover rounded-xl", imageClassName)}
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
    </motion.div>
  );
}
