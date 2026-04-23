"use client"

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'

export interface TestimonialCardData {
  id: number
  beforeImage: string
  afterImage: string
  testimonial: string
  patientName: string
  patientTitle?: string
}

interface TestimonialCardProps {
  data: TestimonialCardData
  motionProps?: any
  className?: string
}

const TestimonialCard = ({ data, motionProps, className = "" }: TestimonialCardProps) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)

  const handleSliderMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const position = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }, [])

  // Update CSS variables when sliderPosition changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--slider-position', `${sliderPosition}%`)
      containerRef.current.style.setProperty('--after-width', `calc(100% - ${sliderPosition}%)`)
    }
  }, [sliderPosition])

  // Hint animation on mount — nudge slider slightly to show it's interactive
  useEffect(() => {
    if (hasInteracted) return
    const timer = setTimeout(() => {
      setSliderPosition(38)
      setTimeout(() => setSliderPosition(62), 400)
      setTimeout(() => setSliderPosition(50), 800)
    }, 800)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  // Global mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      handleSliderMove(e.clientX)
    }
    const handleMouseUp = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      setIsDragging(false)
    }
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleSliderMove])

  // Global touch events with passive: false to prevent scroll hijack
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return
      e.preventDefault()
      const touch = e.touches[0]
      handleSliderMove(touch.clientX)
    }
    const handleTouchEnd = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      setIsDragging(false)
    }
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)
    return () => {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleSliderMove])

  const startDrag = () => {
    isDraggingRef.current = true
    setIsDragging(true)
    setHasInteracted(true)
  }

  return (
    <motion.div
      {...motionProps}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Before/After Image Comparison */}
      <div
        ref={containerRef}
        className="relative h-64 bg-white overflow-hidden select-none [--slider-position:50%] [--after-width:50%]"
        // Allow clicking anywhere on the image to jump the slider there
        onMouseDown={(e) => { startDrag(); handleSliderMove(e.clientX) }}
        onTouchStart={(e) => { startDrag(); handleSliderMove(e.touches[0].clientX) }}
      >
        {/* Before Image */}
        <div className="absolute inset-0 w-full">
          <img
            src={data.beforeImage}
            alt="Before treatment"
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
            BEFORE
          </div>
        </div>

        {/* After Image */}
        <div className="absolute inset-y-0 right-0 overflow-hidden w-[var(--after-width,50%)]">
          <img
            src={data.afterImage}
            alt="After treatment"
            className="w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
            AFTER
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none left-[var(--slider-position,50%)]"
        >
          {/* Drag Handle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1
              w-10 h-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.3)] border-2 border-white
              cursor-col-resize transition-transform duration-150 pointer-events-auto
              ${isDragging ? 'scale-110' : 'scale-100'}`}
            onMouseDown={(e) => { e.stopPropagation(); startDrag() }}
            onTouchStart={(e) => { e.stopPropagation(); startDrag() }}
          >
            <ArrowLeftRight className="w-4 h-4 text-gray-700 stroke-[2.5]" />
          </div>
        </div>

        {/* "Slide to compare" hint — fades out after first interaction */}
        {!hasInteracted && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap backdrop-blur-sm animate-pulse">
              ← Slide to compare →
            </div>
          </div>
        )}
      </div>

      {/* Testimonial Text */}
      <div className="p-6 bg-white">
        <p className="text-gray-600 italic mb-4">"{data.testimonial}"</p>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-gray-900">{data.patientName}</h4>
          {data.patientTitle && (
            <p className="text-sm text-gray-500">{data.patientTitle}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard