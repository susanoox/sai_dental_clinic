"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import PageHeading from "../headers/PageHeading";
import ContentText from "../contentText/ContentText";

export type ContactLocation = {
  city: string;
  address: string;
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
  return (
    <section className={cn("space-y-8", className)}>
      {/* Animated Title */}
     <PageHeading children={title} className="text-5xl" />

      {/* Animated List */}
      <ul role="list" className="space-y-6">
        {locations.map((loc, i) => (
          <li
           className="flex items-center gap-4"
           key={i}
          >
            <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <MapPin className="h-6 w-6" />
            </span>

            <div className="space-y-1">
              <PageHeading children={loc.city} className="text-lg"/>
              <ContentText children={loc.address} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
