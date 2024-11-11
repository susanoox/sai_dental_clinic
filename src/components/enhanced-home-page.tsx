"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Clock, Star, Mail, Send, Menu } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export function EnhancedHomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SAI Dental
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="#branches"
              className="text-gray-600 hover:text-blue-600"
            >
              Branches
            </Link>
            <Link href="#gallery" className="text-gray-600 hover:text-blue-600">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <Button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="bg-white py-4 md:hidden">
            <Link
              href="#about"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="#services"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="#branches"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Branches
            </Link>
            <Link
              href="#gallery"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Contact
            </Link>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Image
          src="/placeholder.svg"
          alt="Dentist treating patient"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 mix-blend-overlay"
        />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-center px-4 text-white">
          <motion.h1
            className="mb-4 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smile Confidently with SAI Dental
          </motion.h1>
          <motion.p
            className="mb-8 max-w-2xl text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert dental care in Mayiladuthurai and Nidur. Modern treatments
            with a personal touch.
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="">
              Book an Appointment
            </Button>
            <Button size="lg" variant="secondary" className="">
              View Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Summary */}
      <AnimatedSection>
        <section id="about" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
              About SAI Dental Clinic
            </h2>
            <p className="mx-auto max-w-3xl text-center text-xl text-gray-600">
              At SAI Dental Clinic, we&apos;re not just about treatments;
              we&apos;re about creating beautiful, healthy smiles. With a focus
              on patient comfort and the latest in dental technology, we&apos;re
              here to make every visit a positive experience.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection>
        <section id="services" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Our Services
            </h2>
            <Tabs defaultValue="implants" className="mx-auto w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="implants">Dental Implants</TabsTrigger>
                <TabsTrigger value="fillings">Cosmetic Fillings</TabsTrigger>
                <TabsTrigger value="rootcanal">Root Canal</TabsTrigger>
              </TabsList>
              <TabsContent value="implants">
                <Card>
                  <CardHeader>
                    <CardTitle>Dental Implants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">
                      Restore your smile and confidence with our advanced dental
                      implant procedures. Designed to last, our implants look
                      and feel like your natural teeth.
                    </p>
                    <Button>Learn More</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="fillings">
                <Card>
                  <CardHeader>
                    <CardTitle>Cosmetic Fillings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">
                      Get rid of visible cavities with our seamless,
                      natural-looking cosmetic fillings. Our expert dentists
                      ensure a perfect match to your natural tooth color.
                    </p>
                    <Button>Learn More</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rootcanal">
                <Card>
                  <CardHeader>
                    <CardTitle>Root Canal Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-600">
                      Save your tooth and eliminate pain with precise root canal
                      treatments performed by experts. We use the latest
                      techniques to ensure a comfortable experience.
                    </p>
                    <Button>Learn More</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AnimatedSection>

      {/* Branches & Contact Info */}
      <AnimatedSection>
        <section id="branches" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Our Branches
            </h2>
            <Tabs
              defaultValue="mayiladuthurai"
              className="mx-auto w-full max-w-4xl"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mayiladuthurai">Mayiladuthurai</TabsTrigger>
                <TabsTrigger value="nidur">Nidur</TabsTrigger>
              </TabsList>
              <TabsContent value="mayiladuthurai">
                <Card>
                  <CardHeader>
                    <CardTitle>Mayiladuthurai Branch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                      <span>123 Main St, Mayiladuthurai</span>
                    </div>
                    <div className="mb-2 flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-blue-600" />
                      <span>+91 1234567890</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Mon-Sat: 9AM-7PM</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nidur">
                <Card>
                  <CardHeader>
                    <CardTitle>Nidur Branch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                      <span>456 Park Ave, Nidur</span>
                    </div>
                    <div className="mb-2 flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-blue-600" />
                      <span>+91 9876543210</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-600" />
                      <span>Mon-Sat: 10AM-8PM</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection>
        <section id="gallery" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Before & After Gallery
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?text=Before+${item}`}
                      alt={`Before treatment ${item}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <Image
                        src={`/placeholder.svg?text=After+${item}`}
                        alt={`After treatment ${item}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <CardContent>
                    <p className="text-center text-gray-600">
                      Hover to see the result
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Preview */}
      <AnimatedSection>
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              What Our Patients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "John D.",
                  text: "The staff at SAI Dental Clinic are professional and caring. My experience was fantastic!",
                },
                {
                  name: "Sarah M.",
                  text: "Dr. SAI made my root canal treatment completely painless. I highly recommend their services.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mb-4 italic text-gray-600">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="mx-auto w-full max-w-3xl"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Is the treatment painful?</AccordionTrigger>
                <AccordionContent>
                  We use modern techniques and anesthetics to ensure your
                  comfort during all procedures. Most patients report minimal to
                  no pain during treatment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does a dental implant procedure take?
                </AccordionTrigger>
                <AccordionContent>
                  The entire process, including healing, can take 3-6 months.
                  The actual implant placement usually takes 1-2 hours per
                  implant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer various payment plans and financing options to
                  make your dental care more affordable. Please ask our staff
                  for more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </AnimatedSection>

      {/* Special Offers */}
      <AnimatedSection>
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-4xl font-bold">Special Offers</h2>
            <p className="mb-8 text-xl">
              Enjoy free EMI options on select treatments!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Learn More
            </Button>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Us Section */}
      <AnimatedSection>
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
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedSection>

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
    </div>
  );
}
