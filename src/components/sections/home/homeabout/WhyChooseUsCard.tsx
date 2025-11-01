import React from 'react';
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import PageHeading from "@/components/common-ui/headers/PageHeading"

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  index: number;
}

const defaultMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const WhyChooseUsCard = ({ title, description, index }: WhyChooseUsCardProps) => {
  return (
    <motion.div
      {...defaultMotion}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
    >
      {/* Checkbox/tick icon */}
      <div className="flex-shrink-0">
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex-1">
        <PageHeading className="text-lg text-left">
          {title}
        </PageHeading>
        {/* Description removed */}
      </div>
    </motion.div>
  );
};

export default WhyChooseUsCard;