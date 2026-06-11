"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Video, MessageCircle, X, Phone, Star,
  BadgeCheck, Stethoscope,
} from "lucide-react"

const WHATSAPP_NUMBER = "8122835737"

const reviews = [
  { name: "Rathna Sankar", text: "Completely painless root canal. Doctor is humble and skilled." },
  { name: "Selvakumar P.", text: "Very patient, spent enough time explaining everything." },
]

export function ConsultationFloat() {
  const [open, setOpen] = useState(false)

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
    setOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 left-4 md:left-6 w-[90vw] max-w-xs z-50 rounded-2xl overflow-hidden shadow-2xl border border-border bg-background"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-white" />
                  <span className="text-sm font-semibold text-white">Online Consultation</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-1 mt-1 text-white/80 text-xs">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>4.9★ Rated • 3000+ Happy Patients</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              {/* Doctor credentials */}
              <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-2.5 border border-blue-100">
                <Stethoscope className="w-8 h-8 text-blue-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-blue-800">Dr. Srinivas S K</p>
                  <p className="text-[10px] text-blue-600">BDS, FDS (Endodontics) • 5+ yrs</p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-1.5">
                {["IDA Member", "3000+ Patients", "100% Satisfaction"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-0.5 text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
                    <BadgeCheck className="w-2.5 h-2.5" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Review snippet */}
              <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="text-[10px] text-gray-500">Google Reviews</span>
                </div>
                <p className="text-[10px] text-gray-600 italic">"{reviews[0].text}"</p>
                <p className="text-[10px] text-gray-400 mt-0.5">— {reviews[0].name}</p>
              </div>

              {/* Action buttons */}
              <button
                onClick={() => handleWhatsApp("Hi! I'd like to consult about my dental concern.")}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 border border-green-200 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Chat on WhatsApp</div>
                  <div className="text-xs text-gray-500">Quick text consultation</div>
                </div>
              </button>

              <button
                onClick={() => handleWhatsApp("Hi! I'd like to book an online video/voice consultation with Dr. Srinivas.")}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Book Video/Voice Call</div>
                  <div className="text-xs text-gray-500">Full consultation with Dr. Srinivas</div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.div
        className="fixed bottom-6 left-4 md:left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg text-white bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-colors"
          aria-label="Online Consultation"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
          <motion.span
            className="absolute inset-0 rounded-full bg-blue-500/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Label */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-16 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-blue-100"
            >
              Consult Online
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
