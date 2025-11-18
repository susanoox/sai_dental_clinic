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
  // Animation variants
  const imageAnimation = {
    initial: { opacity: 0, x: reverse ? 100 : -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const contentAnimation = {
    initial: { opacity: 0, x: reverse ? -100 : 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const titleAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 }
  };

  const descriptionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.3 }
  };

  const listContainerAnimation = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  const listItemAnimation = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
      reverse ? 'md:flex-row-reverse' : ''
    )}>
      {/* Image Section with Animation */}
      <motion.div 
        className={cn(
          "relative aspect-square w-full max-w-xl mx-auto",
          reverse ? 'md:order-2' : 'md:order-1'
        )}
        {...imageAnimation}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
          <Image 
            src={item.image} 
            alt={item.title}
            fill
            className="object-cover"
            priority={item.id === 1}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Content Section with Animations */}
      <div className={cn(
        "flex flex-col justify-center space-y-8",
        reverse ? 'md:order-1' : 'md:order-2'
      )}>
        <motion.h3 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          {...titleAnimation}
        >
          {item.title}
        </motion.h3>
        
        <motion.div {...descriptionAnimation}>
          <ContentText className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {item.description}
          </ContentText>
        </motion.div>

        {/* Features List with Staggered Animations */}
        <motion.ul 
          className="space-y-4"
          {...listContainerAnimation}
        >
          {item.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center gap-4"
              {...listItemAnimation}
            >
              <motion.div 
                className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <span className="text-gray-700 text-lg">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default AppointmentItem;