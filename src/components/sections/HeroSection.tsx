"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Image
        src="/placeholder.svg"
        alt="Dentist treating patient"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 mix-blend-overlay"
      />
      <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-white">
        <motion.h1
          className="mb-4 text-5xl font-bold md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Smile Confidently with SAI Dental
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert dental care in Mayiladuthurai and Nidur. Modern treatments
          with a personal touch.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="">
            Book an Appointment
          </Button>
          <Button size="lg" variant="secondary" className="">
            View Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}