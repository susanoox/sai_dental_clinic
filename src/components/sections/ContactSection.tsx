import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
        <div className="mx-auto max-w-2xl">
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="tel" placeholder="Your Phone" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" variant="default" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}