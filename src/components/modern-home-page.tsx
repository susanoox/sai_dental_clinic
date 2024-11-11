'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Star, Mail, Send } from 'lucide-react'

export function ModernHomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Image
          src="/placeholder.svg"
          alt="Dentist treating patient"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 mix-blend-overlay"
        />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Smile Confidently with SAI Dental
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay-1">
            Expert dental care in Mayiladuthurai and Nidur. Modern treatments with a personal touch.
          </p>
          <div className="flex space-x-4 animate-fade-in-delay-2">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book an Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About SAI Dental Clinic</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            At SAI Dental Clinic, we're not just about treatments; we're about creating beautiful, healthy smiles. 
            With a focus on patient comfort and the latest in dental technology, we're here to make every visit a positive experience.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <Tabs defaultValue="implants" className="w-full max-w-4xl mx-auto">
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
                  <p className="text-gray-600 mb-4">
                    Restore your smile and confidence with our advanced dental implant procedures. 
                    Designed to last, our implants look and feel like your natural teeth.
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
                  <p className="text-gray-600 mb-4">
                    Get rid of visible cavities with our seamless, natural-looking cosmetic fillings. 
                    Our expert dentists ensure a perfect match to your natural tooth color.
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
                  <p className="text-gray-600 mb-4">
                    Save your tooth and eliminate pain with precise root canal treatments performed by experts. 
                    We use the latest techniques to ensure a comfortable experience.
                  </p>
                  <Button>Learn More</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Branches & Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Branches</h2>
          <Tabs defaultValue="mayiladuthurai" className="w-full max-w-4xl mx-auto">
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
                  <div className="flex items-center mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    <span>123 Main St, Mayiladuthurai</span>
                  </div>
                  <div className="flex items-center mb-2">
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
                  <div className="flex items-center mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                    <span>456 Park Ave, Nidur</span>
                  </div>
                  <div className="flex items-center mb-2">
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

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "John D.", text: "The staff at SAI Dental Clinic are professional and caring. My experience was fantastic!" },
              { name: "Sarah M.", text: "Dr. SAI made my root canal treatment completely painless. I highly recommend their services." }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Special Offers</h2>
          <p className="text-xl mb-8">Enjoy free EMI options on select treatments!</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="tel" placeholder="Your Phone" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          {isContactOpen ? <Send className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
        </Button>
      </div>

      {/* Floating Contact Form */}
      {isContactOpen && (
        <div className="fixed bottom-28 right-8 bg-white p-6 rounded-lg shadow-xl z-40 w-80">
          <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="h-24" />
            <Button type="submit" className="w-full">Send</Button>
          </form>
        </div>
      )}
    </div>
  )
}