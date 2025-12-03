"use client"

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

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
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSliderMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const position = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }, [])

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleSliderMove(e.clientX)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const touch = e.touches[0]
    handleSliderMove(touch.clientX)
  }

  // Update CSS variables when sliderPosition changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--slider-position', `${sliderPosition}%`)
      containerRef.current.style.setProperty('--after-width', `calc(100% - ${sliderPosition}%)`)
    }
  }, [sliderPosition])

  // Add global mouse up listener to stop dragging
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mouseup', handleGlobalMouseUp)
    document.addEventListener('touchend', handleGlobalMouseUp)

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('touchend', handleGlobalMouseUp)
    }
  }, [])

  return (
    <motion.div
      {...motionProps}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Before/After Image Comparison */}
      <div 
        ref={containerRef}
        className="relative h-64 bg-white overflow-hidden select-none [--slider-position:50%] [--after-width:50%]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image - Full Width */}
        <div className="absolute inset-0 w-full">
          <img 
            src={data.beforeImage} 
            alt="Before treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
            BEFORE
          </div>
        </div>

        {/* After Image - Dynamic Width using CSS variable */}
        <div 
          className="absolute inset-y-0 right-0 overflow-hidden w-[var(--after-width,50%)]"
        >
          <img 
            src={data.afterImage} 
            alt="After treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
            AFTER
          </div>
        </div>

        {/* Slider Line - Only this is draggable */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize flex items-center justify-center z-10 left-[var(--slider-position,50%)]"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className={`w-3 h-8 bg-white rounded-full shadow-lg transition-transform duration-200 ${
            isDragging ? 'scale-110' : 'scale-100'
          }`}></div>
        </div>
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