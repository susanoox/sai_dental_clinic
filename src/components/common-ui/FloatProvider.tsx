"use client"

// FloatProvider.tsx
// Drop this ONCE inside <body> in your layout (no dynamic() needed).
// It mounts after hydration and portals everything into document.body,
// so `fixed` positioning always anchors to the true viewport — no parent
// padding, transform, or overflow can shift it.

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ChatBotFloat } from "@/components/common-ui/chatbot/ChatBotFloat"
// import { WhatsAppFloat } from "@/components/common-ui/whatsappfloat/WhatsappFloat"

export default function FloatProvider() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <>
      <ChatBotFloat />
      {/* <WhatsAppFloat /> */}
    </>,
    document.body
  )
}