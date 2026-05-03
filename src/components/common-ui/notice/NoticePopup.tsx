"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export type NoticePopupProps = {
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  storageKey?: string;
  alwaysShow?: boolean;
  delay?: number;
  backdropClassName?: string;
  panelClassName?: string;
  onClose?: () => void;   // ← already in your type, good
};

export default function NoticePopup({
  imageSrc,
  imageAlt = "Notice",
  storageKey = "notice-popup-dismissed",
  alwaysShow = false,
  delay = 800,
  backdropClassName,
  panelClassName,
  onClose,               // ← destructure it
}: NoticePopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!alwaysShow) {
      try {
        const dismissed = localStorage.getItem(storageKey);
        if (dismissed === "true") return;
      } catch {}
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
  onClose?.();      // ← ADD THIS
}

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
              "fixed inset-0 z-50 m-auto",
              "h-fit w-[calc(100vw-2rem)] max-w-2xl",
              "overflow-hidden rounded-2xl bg-white shadow-2xl",
              panelClassName
            )}
          >
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