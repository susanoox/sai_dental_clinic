"use client";

import { cn } from "@/lib/utils";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";
import { motion, type MotionProps } from "framer-motion";
import { Smile, Award, Clock, Star, TrendingUp, Users, ShieldCheck, Zap } from "lucide-react";

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

const statIconMap: Record<string, typeof Smile> = {
  "Happy Patients": Smile,
  "Smiles Transformed": Award,
  "Years Experience": Clock,
  "Google Rating": Star,
  "Patients": Users,
  "Rating": Star,
}

const defaultIcons = [Smile, Award, Clock, Star]

export default function StatsSection({ data, className }: StatsSectionProps) {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-blue-500/[0.02] -z-0" />
      
      <ContentContainer className="relative z-10 items-center justify-center space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {data.stats.map((stat, index) => {
            const Icon = statIconMap[stat.label] || defaultIcons[index] || Smile
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-6 md:p-7 text-center shadow-sm border border-blue-100/50 hover:shadow-xl hover:border-blue-200/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>

                  {/* Decorative accent line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 mx-auto mt-4 group-hover:via-blue-500/60 transition-all duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </ContentContainer>
    </section>
  );
}