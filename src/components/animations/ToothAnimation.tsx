"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/Clean tooth.json";

type Props = {
  className?: string;
};

export default function ToothAnimation({ className }: Props) {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}