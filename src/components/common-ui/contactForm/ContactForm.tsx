"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function ContactForm({ className }: { className?: string }) {
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      const name    = data.get("name") as string
      const phone   = data.get("phone") as string
      const email   = data.get("email") as string
      const date    = data.get("date") as string
      const message = data.get("message") as string

      const text = `
*New Contact Form Submission*
----------------------------
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Date:* ${date}
*Message:* ${message}
      `.trim()

      const YOUR_WHATSAPP_NUMBER = "8122835737" // ← replace with your number
      const url = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

      window.open(url, "_blank")
      form.reset()
    } finally {
      setSubmitting(false)
    }
  }

  // Base animation for all form fields
  const fieldMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      {...fieldMotion}
      className={cn("rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8", className)}
      aria-labelledby="contact-form-title"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { id: "name", label: "Name", type: "text", placeholder: "Enter your name here" },
          { id: "phone", label: "Phone number", type: "tel", placeholder: "Enter your Phone Number" },
          { id: "email", label: "Email address", type: "email", placeholder: "test@gmail.com" },
          { id: "date", label: "Select date", type: "date", placeholder: "dd-mm-yyyy" },
        ].map((field, index) => (
          <motion.div
            key={field.id}
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required />
          </motion.div>
        ))}

        <motion.div
          className="space-y-2 md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="What is your concern?" className="min-h-[120px]" />
        </motion.div>
      </div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <Button type="submit" size="lg" className="w-full rounded-2xl" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </motion.div>
    </motion.form>
  )
}