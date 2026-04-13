"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, ChevronDown } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createPortal } from "react-dom"
// ─── WhatsApp config ───────────────────────────────────────────
const WHATSAPP_NUMBER = "8122835737"

// ─── FAQ data ──────────────────────────────────────────────────
const FAQ_CHIPS = [
  "What treatments do you offer?",
  "How do I book an appointment?",
  "What are your clinic hours?",
  "Where are you located?",
  "Do you accept insurance?",
  "How much does a consultation cost?",
]

const FAQ_ANSWERS: Record<string, string> = {
  "What treatments do you offer?":
    "At Sai Dental Clinic, Mayiladuthurai, we offer dental checkups, teeth cleaning, fillings, root canal treatment, crowns, bridges, and cosmetic dentistry. For detailed advice, feel free to WhatsApp us! 😊",

  "How do I book an appointment?":
    "You can easily book an appointment by messaging us on WhatsApp or calling our clinic. Tap below to chat with us instantly!",

  "What are your clinic hours?":
    "Our clinic is open Monday–Saturday from 9 AM to 8 PM and Sunday by appointment. Message us on WhatsApp to confirm availability.",

  "Where are you located?":
    "Sai Dental Clinic is located in Mayiladuthurai, Tamil Nadu. Click below to message us on WhatsApp and we’ll share the exact location.",

  "Do you accept insurance?":
    "We can guide you regarding insurance claims. Please contact us on WhatsApp and we’ll assist you with the process.",

  "How much does a consultation cost?":
    "Consultation at Sai Dental Clinic starts from ₹200–₹500 depending on the treatment. Message us on WhatsApp for exact details.",
}

// ─── Types ─────────────────────────────────────────────────────
type Message = {
  id: number
  from: "bot" | "user"
  text: string
}

let msgId = 0

// ─── ChatBot ───────────────────────────────────────────────────
export function ChatBotFloat() {
  const [chatOpen, setChatOpen] = useState(false)
  const [waOpen, setWaOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: msgId++,
      from: "bot",
      text: "👋 Hi there! I'm here to help. Pick a question below or type your own.",
    },
  ])
  const [input, setInput] = useState("")
  const [usedChips, setUsedChips] = useState<Set<string>>(new Set())
  const [waMessage, setWaMessage] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, chatOpen])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  function pushMessage(from: "bot" | "user", text: string) {
    if (from === "bot") {
      const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I have a question about Sai Dental Clinic")}`

      text += `\n\n👉 Chat with us on WhatsApp: ${waLink}`
    }

    setMessages((prev) => [...prev, { id: msgId++, from, text }])
  }

  function handleChip(chip: string) {
    setUsedChips((prev) => new Set(prev).add(chip))
    pushMessage("user", chip)
    setTimeout(() => {
      pushMessage("bot", FAQ_ANSWERS[chip])
    }, 350)
  }

  function handleUserSend() {
    const trimmed = input.trim()
    if (!trimmed) return
    pushMessage("user", trimmed)
    setInput("")

    // Simple keyword matching fallback
    const matched = Object.keys(FAQ_ANSWERS).find((key) =>
      key.toLowerCase().split(" ").some((word) => trimmed.toLowerCase().includes(word))
    )

    setTimeout(() => {
      pushMessage(
        "bot",
        matched
          ? FAQ_ANSWERS[matched]
          : "Great question! For the most accurate answer, please reach out to us directly on WhatsApp — we typically reply within minutes. 💬"
      )
    }, 400)
  }

  function handleWaSend() {
    if (!waMessage.trim()) return
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage.trim())}`
    window.open(url, "_blank")
    setWaMessage("")
    setWaOpen(false)
  }

  const remainingChips = FAQ_CHIPS.filter((c) => !usedChips.has(c))

  return createPortal(
    <>
      {/* ── Chatbot Panel ── */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-[9.5rem] right-4 md:right-6 z-50 w-[92vw] max-w-sm flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
            style={{ maxHeight: "70vh", transform: 'translateZ(0)', willChange: 'transform' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-green-500 px-4 py-3 shrink-0">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="h-5 w-5 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-300 rounded-full border border-green-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">Clinic Assistant</p>
                  <p className="text-[10px] text-green-100">Online • Replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                      msg.from === "user"
                        ? "bg-green-500 text-white rounded-br-sm"
                        : "bg-white text-gray-700 border border-gray-200 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line">
                      {msg.text.split(" ").map((word, i) =>
                        word.startsWith("http") ? (
                          <a key={i} href={word} target="_blank" className="text-blue-600 underline">
                            WhatsApp
                          </a>
                        ) : (
                          word + " "
                        )
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* FAQ chips — only show unused ones */}
              {remainingChips.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {remainingChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleChip(chip)}
                      className="text-xs bg-white border border-green-300 text-green-700 hover:bg-green-50 hover:border-green-500 transition-colors px-3 py-1.5 rounded-full shadow-sm"
                    >
                      {chip}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-gray-200 bg-white px-3 py-2 flex items-end gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="min-h-[38px] max-h-[90px] resize-none text-sm rounded-xl border-gray-200 flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleUserSend()
                  }
                }}
                rows={1}
              />
              <Button
                size="icon"
                onClick={handleUserSend}
                disabled={!input.trim()}
                className="rounded-xl bg-green-500 hover:bg-green-600 text-white h-9 w-9 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── WhatsApp Panel ── */}
      <AnimatePresence>
        {waOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-4 md:right-6 w-[90vw] max-w-xs z-50 rounded-2xl overflow-hidden shadow-2xl border border-border bg-background"
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            <div className="flex items-center justify-between bg-green-500 px-4 py-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">Chat with us</span>
              </div>
              <button onClick={() => setWaOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground">
                Type your message and we'll open WhatsApp for you.
              </p>
              <Textarea
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                placeholder="Hi, I'd like to know more about..."
                className="min-h-[90px] resize-none text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleWaSend()
                  }
                }}
                autoFocus
              />
              <Button
                onClick={handleWaSend}
                disabled={!waMessage.trim()}
                className="w-full rounded-xl bg-green-500 hover:bg-green-600 text-white gap-2"
              >
                <Send className="h-4 w-4" />
                Open WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Buttons ── */}
<div
  className="fixed bottom-6 right-4 md:right-6 flex flex-col items-end gap-3"
  style={{ zIndex: 2147483647, transform: 'translateZ(0)', willChange: 'transform' }}
>

        {/* Chatbot button */}
        <div className="relative">
          <AnimatePresence>
            {!chatOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                
                className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2.5 py-1 rounded-lg pointer-events-none"
              >
                Ask us anything
                <span className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => { setChatOpen((p) => !p); setWaOpen(false) }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg text-white transition-colors ${
              chatOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-gray-800 hover:bg-gray-900"
            }`}
            aria-label="Open chat assistant"
          >
            <AnimatePresence mode="wait">
              {chatOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Bot className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* WhatsApp button */}
        <motion.button
          onClick={() => { setWaOpen((p) => !p); setChatOpen(false) }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg text-white hover:bg-green-600 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <AnimatePresence mode="wait">
            {waOpen ? (
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
    </>,
    document.body
  )
}