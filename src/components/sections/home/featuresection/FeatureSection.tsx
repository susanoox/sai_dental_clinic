"use client"

import React from 'react'
import { features } from '@/data/home/featuresection'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Zap, Users, Smile, Heart } from 'lucide-react'

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconComponents = {
    Shield: Shield,
    Clock: Clock,
    Zap: Zap,
    Users: Users,
    Smile: Smile,
    Heart: Heart
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
              Features
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Deriving more than just dental care & ideas
          </h1>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents]
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-white/10 border border-white/20 mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection