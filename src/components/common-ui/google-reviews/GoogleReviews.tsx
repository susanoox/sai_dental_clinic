"use client";

import ReviewCard from "./ReviewCard";
import { reviews } from "@/data/reviews/reviews";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";

export default function GoogleReviews() {
  return (
    <section className="bg-muted/30 py-12 overflow-hidden">
      {/* ✅ SAME WIDTH AS CONTACT SECTION */}
      <ContentContainer>
        <h2 className="mb-6 text-xl font-semibold">
          ⭐ 5.0 · 60 Google Reviews
        </h2>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted/30 to-transparent" />

          {/* Animated track */}
          <div className="flex w-max gap-4 animate-reviews-scroll hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
