"use client";

import { cn } from "@/lib/utils";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";
import { motion, type MotionProps } from "framer-motion";

interface StatsItem {
  number: string;
  label: string;
}

interface StatsData {
  stats: StatsItem[];
}

interface StatsSectionProps {
  data: StatsData;
  className?: string;
}

const statItemMotion: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function StatsSection({ data, className }: StatsSectionProps) {
  return (
    <div>
      <ContentContainer className='items-center justify-center space-y-8'>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {data.stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              {...statItemMotion}
              transition={{
                ...statItemMotion.transition,
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-6 rounded-xl transition-all duration-300 group-hover:bg-muted/50">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentContainer>
    </div>
  );
}