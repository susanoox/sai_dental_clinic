"use client";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import GoogleReviews from "@/components/common-ui/google-reviews/GoogleReviews";
import ContactSection from "@/components/common-ui/contactForm/ContactSection";
import SubscribeSection from "@/components/sections/subscribe/SubscribeSection";
import GoogleBusinessQR from "@/components/common-ui/businessqr/GoogleBusinessQR";
import { contactLocations } from "@/data/contact/contact";
import { subscribeData } from "@/data/home/subscribe";
import dynamic from "next/dynamic";
import NoticePopup from "@/components/common-ui/notice/NoticePopup";
import CelebrationOverlay from "@/components/common-ui/celebration/CelebrationOverlay";

const ChatBotFloat = dynamic(
  () => import("@/components/common-ui/chatbot/ChatBotFloat").then((m) => m.ChatBotFloat),
  { ssr: false }
);

const WhatsAppFloat = dynamic(
  () => import("@/components/common-ui/whatsappfloat/WhatsappFloat").then((m) => m.WhatsAppFloat),
  { ssr: false }
);

const noticeImage = "/images/Notice.webp";
const ACTIVE_NOTICE_KEY = "notice-5th-anniversary-2025";
const NOTICE_PREVIEW_MODE = true;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [celebrateTrigger, setCelebrateTrigger] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => window.scrollTo(0, 0), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  // Called by NoticePopup when the user closes/dismisses the notice
  const handleNoticeClose = () => {
    // Small delay so the modal exit animation finishes first
    setTimeout(() => setCelebrateTrigger(true), 400);
  };

  const handleCelebrationClose = () => {
    setCelebrateTrigger(false);
  };

  return (
    <html lang="en">
      <body
        className={cn(
          "font-poppins min-h-screen antialiased",
          poppins
        )}
        suppressHydrationWarning
      >
        <Header />

        <main className="px-4 sm:px-0 w-full">{children}</main>

        <GoogleReviews />
        <ContactSection locations={contactLocations} />
        <GoogleBusinessQR />
        <Footer />

        <NoticePopup
          imageSrc={noticeImage}
          imageAlt="Sai Dental Clinic – 5th Anniversary Notice"
          storageKey={ACTIVE_NOTICE_KEY}
          alwaysShow={NOTICE_PREVIEW_MODE}
          delay={1000}
          onClose={handleNoticeClose}   // ← add this prop
        />

        {/* 🎉 Celebration fires after notice is dismissed */}
        <CelebrationOverlay
          trigger={celebrateTrigger}
          duration={10000}
          onClose={handleCelebrationClose}
        />

        <div className="fixed bottom-4 right-4 z-[9999] isolate">
          <ChatBotFloat />
        </div>
      </body>
    </html>
  );
}