"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import PageHeading from "../headers/PageHeading";
import ContentText from "../contentText/ContentText";

export type ContactLocation = {
  city: string;
  address: string;
  mapsLink?: string; // Optional: Custom Google Maps link
};

export function ContactInfoList({
  title = "Talk to us about your dental concerns",
  locations,
  className,
}: {
  title?: string;
  locations: ContactLocation[];
  className?: string;
}) {
  // Function to generate Google Maps link from address
  const getMapsLink = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <section className={cn("space-y-8", className)}>
      {/* Animated Title */}
      <PageHeading children={title} className="text-5xl" />

      {/* Animated List */}
      <ul role="list" className="space-y-6">
        {locations.map((loc, i) => {
          const mapsUrl = loc.mapsLink || getMapsLink(loc.address);
          const accessibleLabel = `Open ${loc.city} location in Google Maps: ${loc.address}`;
          
          return (
            <li key={i}>
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${loc.city} office location on Google Maps`}
      title={`Open ${loc.city} location in Google Maps`}
      className="flex items-center gap-4 group cursor-pointer transition-all duration-200 hover:bg-primary/5 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span 
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-200"
        aria-hidden="true"
      >
        <MapPin className="h-6 w-6" />
      </span>

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <PageHeading 
            children={loc.city} 
            className="text-lg group-hover:text-primary transition-colors duration-200"
          />
          <span className="text-xs text-gray-500 group-hover:text-primary transition-colors duration-200">
            (View on Map)
          </span>
        </div>
        <ContentText 
          children={loc.address} 
          className="group-hover:text-primary transition-colors duration-200"
        />
      </div>
    </a>
  </li>
          );
        })}
      </ul>
    </section>
  );
}