"use client"

// FloatPortal.tsx
//
// WHY THIS EXISTS:
// Framer Motion adds CSS `transform` to every animated element it controls.
// A `position: fixed` element inside ANY ancestor with `transform` gets clipped
// to that ancestor — it stops being viewport-fixed and becomes ancestor-fixed.
// Since almost every section on the homepage has Framer Motion animations,
// the chatbot float was anchoring to whichever section it happened to be inside.
//
// THE SOLUTION:
// Instead of createPortal(…, document.body) — which still renders inside the
// React root div (#__next) that itself can have transforms — we manually create
// a brand new DOM node, append it directly to <body> BEFORE the React root,
// and portal into that. This node is 100% outside the React tree, outside any
// transformed ancestor, and `fixed` truly means the viewport.

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { ChatBotFloat } from "@/components/common-ui/chatbot/ChatBotFloat"

export default function FloatPortal() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Create a dedicated mount point outside #__next
    const el = document.createElement("div")
    el.id = "float-portal-root"
    // Insert before the Next.js root so it's never inside a transformed tree
    document.body.insertBefore(el, document.body.firstChild)
    containerRef.current = el
    setMounted(true)

    return () => {
      document.body.removeChild(el)
    }
  }, [])

  if (!mounted || !containerRef.current) return null

  return createPortal(<ChatBotFloat />, containerRef.current)
}