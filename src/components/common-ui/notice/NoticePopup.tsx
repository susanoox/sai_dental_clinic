"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type NoticePopupProps = {
  /** Image src — can be a local import (StaticImageData) or a URL string */
  imageSrc: string | StaticImageData;
  /** Alt text for the image (for accessibility) */
  imageAlt?: string;
  /**
   * Unique key used to remember if the user has dismissed this notice.
   * Change it whenever you post a new notice so it shows again.
   * Example: "notice-5th-anniversary-2025"
   */
  storageKey?: string;
  /** If true, the popup will always show, even if the user dismissed it before */
  alwaysShow?: boolean;
  /** Delay in ms before the popup appears. Default: 800 */
  delay?: number;
  /** Optional extra class names on the backdrop */
  backdropClassName?: string;
  /** Optional extra class names on the modal panel */
  panelClassName?: string;
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function NoticePopup({
  imageSrc,
  imageAlt = "Notice",
  storageKey = "notice-popup-dismissed",
  alwaysShow = false,
  delay = 800,
  backdropClassName,
  panelClassName,
}: NoticePopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!alwaysShow) {
      try {
        const dismissed = localStorage.getItem(storageKey);
        if (dismissed === "true") return;
      } catch {
        // localStorage not available (SSR / private browsing) — show anyway
      }
    }

    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [alwaysShow, delay, storageKey]);

  function close() {
    setVisible(false);
    try {
      localStorage.setItem(storageKey, "true");
    } catch {
      // ignore
    }
  }

  // Close on Escape key
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="notice-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            aria-hidden="true"
            className={cn(
              "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
              backdropClassName
            )}
          />

          {/* ── Panel ── */}
          <motion.div
            key="notice-panel"
            role="dialog"
            aria-modal="true"
            aria-label={imageAlt}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={cn(
              // Positioning
              "fixed inset-0 z-50 m-auto",
              // Size — fills most of the viewport on mobile, constrained on desktop
              "h-fit w-[calc(100vw-2rem)] max-w-2xl",
              // Card style
              "overflow-hidden rounded-2xl bg-white shadow-2xl",
              panelClassName
            )}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close notice"
              className={cn(
                "absolute right-3 top-3 z-10",
                "flex h-9 w-9 items-center justify-center rounded-full",
                "bg-black/50 text-white backdrop-blur-sm",
                "transition-all duration-150 hover:bg-black/75 hover:scale-110",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              )}
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Notice image */}
            <div className="relative w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}