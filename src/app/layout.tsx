"use client";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import GoogleReviews from "@/components/common-ui/google-reviews/GoogleReviews";
import ContactSection from "@/components/common-ui/contactForm/ContactSection";
import SubscribeSection from "@/components/sections/subscribe/SubscribeSection";
import GoogleBusinessQR from "@/components/common-ui/businessqr/GoogleBusinessQR";
import { contactLocations } from "@/data/contact/contact";
import { subscribeData } from "@/data/home/subscribe";
import dynamic from "next/dynamic";
import NoticePopup from "@/components/common-ui/notice/NoticePopup";

// ── Lazy-loaded floats (no SSR) ──────────────────────────────────────────────
const ChatBotFloat = dynamic(
  () => import("@/components/common-ui/chatbot/ChatBotFloat").then((m) => m.ChatBotFloat),
  { ssr: false }
);

const WhatsAppFloat = dynamic(
  () => import("@/components/common-ui/whatsappfloat/WhatsappFloat").then((m) => m.WhatsAppFloat),
  { ssr: false }
);

// ── Active notice image ──────────────────────────────────────────────────────
// To post a new notice:
//   1. Replace the import below with your new image
//   2. Change ACTIVE_NOTICE_KEY to a new unique string
//   Users who dismissed the previous notice will see the new one automatically.

const noticeImage = "/images/Notice.webp";
const ACTIVE_NOTICE_KEY = "notice-5th-anniversary-2025";

// Set to `true` while designing/testing so the popup always shows
const NOTICE_PREVIEW_MODE = true;

// ── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

useEffect(() => {
  const t = setTimeout(() => window.scrollTo(0, 0), 50);
  return () => clearTimeout(t);
}, [pathname]);

  return (
    <html lang="en">
      <body
        className={cn(
          "font-poppins min-h-screen bg-background antialiased",
          poppins
        )}
        suppressHydrationWarning
      >
        <Header />

        <main className="px-4 sm:px-0 w-full">{children}</main>


        {/* <WhatsAppFloat /> */}

        <GoogleReviews />
        <ContactSection locations={contactLocations} />
        <GoogleBusinessQR />
        <Footer />

        {/* ── Notice Popup ─────────────────────────────────────────────────
            Rendered last so it sits above everything in the stacking context.
            Change `imageSrc` + `storageKey` for each new notice.          */}
        <NoticePopup
          imageSrc={noticeImage}
          imageAlt="Sai Dental Clinic – 5th Anniversary Notice"
          storageKey={ACTIVE_NOTICE_KEY}
          alwaysShow={NOTICE_PREVIEW_MODE}
          delay={1000}
        />
        <div className="fixed bottom-4 right-4 z-[9999] isolate">
          <ChatBotFloat />
        </div>
      </body>
    </html>
  );
}