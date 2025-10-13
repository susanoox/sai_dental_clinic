// components/ui/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onLearnMore?: () => void;
  className?: string;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon,
  onLearnMore,
  className = ""
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl border-blue-100">
        <CardHeader>
          {icon && <div className="mb-2 text-blue-600">{icon}</div>}
          <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between">
          <p className="mb-4 text-gray-600 flex-grow">{description}</p>
          <Button 
            onClick={onLearnMore} 
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;