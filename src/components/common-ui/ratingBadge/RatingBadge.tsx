"use client";

import { animate, motion, MotionProps } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type RatingBadgeProps = {
    value: number;
    className?: string;
    motionProps?: MotionProps
};

const defaultMotion = {
    initial: { opacity: 0, y: 20, scale: 0.8 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.4, ease: "easeOut" },
};

export function RatingBadge({ value, className ,motionProps}: RatingBadgeProps) {
    return (
        <motion.div
            {...defaultMotion}
            {...motionProps}
            className={cn(
                "flex items-center gap-2 text-sm text-muted-foreground",
                className
            )}
        >
            <motion.div
                initial={{ rotate: -20, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <Star
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                />
            </motion.div>
            <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                {value.toFixed(1)}
            </motion.span>
            <span className="sr-only">{`Rating ${value.toFixed(1)} out of 5`}</span>
        </motion.div>
    );
}

export default RatingBadge;

