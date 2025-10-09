"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

interface FloatingContactProps {
  isContactOpen: boolean;
  setIsContactOpen: (isOpen: boolean) => void;
}

export function FloatingContact({ isContactOpen, setIsContactOpen }: FloatingContactProps) {
  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="h-16 w-16 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          {isContactOpen ? (
            <Send className="h-6 w-6" />
          ) : (
            <Mail className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Floating Contact Form */}
      {isContactOpen && (
        <div className="fixed bottom-28 right-8 z-40 w-80 rounded-lg bg-white p-6 shadow-xl">
          <h3 className="mb-4 text-xl font-bold">Quick Contact</h3>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="h-24" />
            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
      )}
    </>
  );
}