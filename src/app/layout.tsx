"use client";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import GoogleReviews from "@/components/common-ui/google-reviews/GoogleReviews"
import ContactSection from '@/components/common-ui/contactForm/ContactSection'
//import { WhatsAppFloat} from '@/components/common-ui/whatsappfloat/WhatsappFloat'
import SubscribeSection from '@/components/sections/subscribe/SubscribeSection'
import GoogleBusinessQR from '@/components/common-ui/businessqr/GoogleBusinessQR'
import { contactLocations } from '@/data/contact/contact'
import { subscribeData } from '@/data/home/subscribe'
//import { ChatBotFloat } from "@/components/common-ui/chatbot/ChatBotFloat";
import dynamic from "next/dynamic"
// export const metadata: Metadata = {
//   title: "SAI Dental Clinic - Your Smile, Our Passion",
//   description: "Professional dental care with 70+ years of experience in Mayiladuthurai and Nidur",
// };
const ChatBotFloat = dynamic(
  () => import("@/components/common-ui/chatbot/ChatBotFloat").then(m => m.ChatBotFloat),
  { ssr: false }
)

const WhatsAppFloat = dynamic(
  () => import("@/components/common-ui/whatsappfloat/WhatsappFloat").then(m => m.WhatsAppFloat),
  { ssr: false }
)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={cn(
          "font-poppins min-h-screen bg-background antialiased",
          poppins,
        )}
        suppressHydrationWarning
      >
        <Header />
        <main className="px-4 sm:px-0 w-full">
        {children}
      </main>


  <ChatBotFloat />

            {/*<WhatsAppFloat />*/}

         <GoogleReviews />
         <ContactSection locations={contactLocations} />
      <GoogleBusinessQR />
        <Footer />
      </body>
    </html>
  );
}