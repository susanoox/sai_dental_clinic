// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { poppins } from "@/utils/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SAI Dental Clinic - Your Smile, Our Passion",
  description: "Professional dental care with 70+ years of experience in Mayiladuthurai and Nidur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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