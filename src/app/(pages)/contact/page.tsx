"use client"

import React, { useState } from 'react'
import ContentContainer from "@/components/common-ui/containers/ContentContainer"
import FAQSection from '@/components/sections/home/faq/FAQSection'
import SubscribeSection from '@/components/sections/home/subscribe/SubscribeSection'

import { faqData } from '@/data/home/faq'

import { subscribeData } from '@/data/home/subscribe'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaTooth } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Message sent successfully! We\'ll contact you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <ContentContainer className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <FaTooth className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact SAI Dental Clinic
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Schedule your appointment or get in touch with our dental experts today
            </p>
          </motion.div>
        </ContentContainer>
      </div>

      <ContentContainer className="py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <FaPhone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                    <p className="text-sm text-gray-500 mt-2">Mon-Sat, 8AM-8PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Clinic Address</h3>
                    <address className="text-gray-600 mt-1 not-italic">
                      123 Dental Avenue<br />
                      Health District<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <p className="text-gray-600 mt-1">contact@saidental.com</p>
                    <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <FaClock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <div className="text-gray-600 mt-1 space-y-1">
                      <p className="flex justify-between">
                        <span>Mon - Fri:</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Emergency Only</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">Dental Emergency?</h3>
              <p className="opacity-90 mb-4">
                For urgent dental emergencies after hours
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Emergency Hotline</p>
                  <p className="text-2xl font-bold">+1 (555) 911-DENT</p>
                </div>
              </div>
            </motion.div>*/}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600 mt-2">
                  Fill out the form below and our team will get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your dental concerns or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </ContentContainer>
      <FAQSection data={faqData} />
      <SubscribeSection data={subscribeData} />
    </motion.div>
  )
}