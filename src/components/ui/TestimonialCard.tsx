// components/ui/TestimonialCard.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
  className?: string;
}

export const TestimonialCard = ({ 
  name, 
  text, 
  rating = 5,
  className = ""
}: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="h-full bg-white transition-shadow duration-300 hover:shadow-lg border-l-4 border-l-blue-500">
        <CardContent className="pt-6">
          <div className="mb-4 flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-current text-yellow-400"
              />
            ))}
          </div>
          <p className="mb-4 italic text-gray-600 leading-relaxed">
            &quot;{text}&quot;
          </p>
          <p className="font-semibold text-gray-800">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;