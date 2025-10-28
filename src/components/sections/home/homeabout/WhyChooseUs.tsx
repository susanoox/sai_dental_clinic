"use client"

import React from 'react';
import { features } from "@/data/home/WhyChooseUsData"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.55, ease: "easeOut" },
}

const itemMotion: MotionProps = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.4, ease: "easeOut" },
}

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <motion.div 
            {...defaultMotion}
            className="relative"
          >
            <img
              src="\images\teeth.jpg" // Update with your image path
              alt="Dental care"
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </motion.div>

          {/* Content on the right */}
          <div className="space-y-8">
            <motion.div 
              {...defaultMotion}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Why choose us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are dedicated to providing exceptional dental care that prioritizes your comfort, 
                convenience, and lasting results. Here's what makes us stand out:
              </p>
            </motion.div>

            {/* Features list */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  {...itemMotion}
                  transition={{ ...itemMotion.transition, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  {/* Checkbox/tick icon */}
                   <div className="flex-shrink-0 mt-1">
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {feature.title}
        </h3>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
              ))}
            </div>

            {/* About us button and footer */}
            <motion.div 
              {...defaultMotion}
              transition={{ ...defaultMotion.transition, delay: 0.3 }}
              className="space-y-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
                About us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;