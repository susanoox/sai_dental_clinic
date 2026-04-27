"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import ContentText from '@/components/common-ui/contentText/ContentText';

interface AppointmentItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    features: string[];
  };
  reverse?: boolean;
}

const AppointmentItem = ({ item, reverse = false }: AppointmentItemProps) => {

  const imageAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const contentAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
  // AppointmentItem.tsx — Fixed

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    {/* 🖼️ Image Section */}
    {/* ✅ Plain div is the grid child — never gets transformed */}
    <div
      className={cn(
        "relative aspect-square w-full max-w-xl mx-auto",
        reverse ? "md:order-2" : "md:order-1"
      )}
    >
      {/* ✅ motion.div is now a non-grid child — safe to transform */}
      <motion.div
        className="w-full h-full"
        {...imageAnimation}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-2xl"
          priority={item.id === 1}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>

    {/* 📝 Content Section */}
    <div
      className={cn(
        "flex flex-col justify-center space-y-6 w-full max-w-xl mx-auto",
        reverse ? "md:order-1" : "md:order-2"
      )}
    >
      <motion.div
        className="flex flex-col space-y-6"
        {...contentAnimation}
      >
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          {item.title}
        </h3>

        <ContentText className="text-gray-600 text-lg md:text-xl leading-relaxed">
          {item.description}
        </ContentText>

        <ul className="space-y-3">
          {item.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0" />
              <span className="text-gray-700 text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

  </div>
);
};

export default AppointmentItem;