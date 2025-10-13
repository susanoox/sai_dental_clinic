"use client"

import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import ContentText from "@/components/common-ui/contentText/ContentText"
import { motion } from "framer-motion"

export type FeatureChecklistProps = {
  items: string[]
  className?: string
  size?: 3 | 4 | 5
}

export function FeatureChecklist({ items, className, size = 4 }: FeatureChecklistProps) {
  const iconSize = {
    3: "h-3.5 w-3.5",
    4: "h-4 w-4",
    5: "h-5 w-5",
  }[size]

  return (
    <ul className={cn("space-y-4", className)}>
      {items?.map((text, idx) => (
        <motion.li
          key={idx}
          className="flex gap-3 text-foreground items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
        >
          <CheckCircle2 className={cn(iconSize, "shrink-0 text-primary mt-1")} aria-hidden="true" />
          <ContentText className="text-lg">{text}</ContentText>
        </motion.li>
      ))}
    </ul>
  )
}

export default FeatureChecklist
