"use client";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "SAI Dental Clinic - Your Smile, Our Passion",
//   description: "Professional dental care with 70+ years of experience in Mayiladuthurai and Nidur",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}