// components/ui/BranchCard.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  onBookAppointment?: () => void;
  className?: string;
}

export const BranchCard = ({
  name,
  address,
  phone,
  hours,
  onBookAppointment,
  className = ""
}: BranchCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-blue-600">{name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start">
            <MapPin className="mr-3 h-5 w-5 text-blue-600 mt-0.5" />
            <span className="text-gray-700">{address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-3 h-5 w-5 text-blue-600" />
            <span className="text-gray-700">{phone}</span>
          </div>
          <div className="flex items-start">
            <Clock className="mr-3 h-5 w-5 text-blue-600 mt-0.5" />
            <span className="text-gray-700">{hours}</span>
          </div>
          <Button 
            onClick={onBookAppointment}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
          >
            Book Appointment
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BranchCard;