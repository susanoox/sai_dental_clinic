"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const WHATSAPP_NUMBER = "8122835737"
export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  function handleSend() {
    if (!message.trim()) return
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`
    window.open(url, "_blank")
    setMessage("")
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50">

      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[90vw] max-w-xs"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-green-500 px-4 py-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">Chat with us</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground">
                Type your message and we'll open WhatsApp for you.
              </p>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi, I'd like to know more about..."
                className="min-h-[90px] resize-none text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                autoFocus
              />
              <Button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-full rounded-xl bg-green-500 hover:bg-green-600 text-white gap-2"
              >
                <Send className="h-4 w-4" />
                Open WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg text-white hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  )
}