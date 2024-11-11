'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Star } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
            Smile Confidently with SAI Dental Clinic
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-delay-1">
            Expert dental care in Mayiladuthurai and Nidur. Modern treatments with a personal touch.
          </p>
          <div className="flex space-x-4 animate-fade-in-delay-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book an Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              View Services
            </Button>
          </div>
        </div>
        <Image
          src="/placeholder.svg"
          alt="Dentist treating patient"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 mix-blend-overlay opacity-20"
        />
      </section>

      {/* About Us Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About SAI Dental Clinic</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At SAI Dental Clinic, we're not just about treatments; we're about creating beautiful, healthy smiles. 
            With a focus on patient comfort and the latest in dental technology, we're here to make every visit a positive experience.
          </p>
        </div>
      </section>

      {/* Branches & Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Dental Implants', 'Cosmetic Fillings', 'Root Canal Treatment'].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {service === 'Dental Implants' && "Restore your smile and confidence with our advanced dental implant procedures."}
                    {service === 'Cosmetic Fillings' && "Get rid of visible cavities with our seamless, natural-looking cosmetic fillings."}
                    {service === 'Root Canal Treatment' && "Save your tooth and eliminate pain with precise root canal treatments performed by experts."}
                  </p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "John D.", text: "The staff at SAI Dental Clinic are professional and caring. My experience was fantastic!" },
              { name: "Sarah M.", text: "Dr. SAI made my root canal treatment completely painless. I highly recommend their services." }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
          <p className="text-xl mb-8">Enjoy free EMI options on select treatments!</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  )
}