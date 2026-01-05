"use client"

import ContentContainer from '@/components/common-ui/containers/ContentContainer'
import ContentText from '@/components/common-ui/contentText/ContentText'
import { useState } from 'react'
import { Play } from 'lucide-react'
import { type StatsData } from '@/data/home/Stats'
import { motion } from 'framer-motion'

// Video modal component
const VideoModal = ({ isOpen, onClose, videoSrc }: { 
  isOpen: boolean, 
  onClose: () => void, 
  videoSrc: string 
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          title="Close video modal"
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="aspect-video">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

interface StatsAboutProps {
  statsData: StatsData;
  videoSrc?: string; // Add videoSrc as optional prop
}

// Stats item with built-in animation
const StatsItem = ({ number, label, index }: { 
  number: string; 
  label: string; 
  index: number 
}) => {
  return (
    <motion.div 
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="p-2 transition-all duration-300 group-hover:bg-blue-50/50 rounded-lg">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">
          {number}
        </div>
        <div className="text-sm md:text-base text-gray-600 leading-tight transition-colors duration-300 group-hover:text-gray-800">
          {label}
        </div>
      </div>
    </motion.div>
  )
}

const StatsSection = ({ statsData, videoSrc }: StatsAboutProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  
  // Use the provided videoSrc or default to aboutVideoData
  const videoPath = videoSrc || "/images/samplevideo.mp4"; // Assuming it's .mp4

  // All 6 stats
  const allStats = [
    ...statsData.stats,
    { number: "250+", label: "Successful treatments" },
    { number: "20+", label: "Dedicated professionals" }
  ]

  return (
    <>
      <ContentContainer className="py-0">
        <div className="max-w-7xl mx-auto">
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-start">
            
            {/* LEFT SIDE - Stats */}
            <div className="pt-0">
              <div className="space-y-2">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  {allStats.slice(0, 2).map((stat, index) => (
                    <StatsItem 
                      key={index}
                      number={stat.number}
                      label={stat.label}
                      index={index}
                    />
                  ))}
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  {allStats.slice(2, 4).map((stat, index) => (
                    <StatsItem 
                      key={index + 2}
                      number={stat.number}
                      label={stat.label}
                      index={index + 2}
                    />
                  ))}
                </div>
                
                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4">
                  {allStats.slice(4, 6).map((stat, index) => (
                    <StatsItem 
                      key={index + 4}
                      number={stat.number}
                      label={stat.label}
                      index={index + 4}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Content & Video */}
            <div className="pt-0 pl-0 lg:pl-12 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Caring for your family's oral health needs
                </h3>
                <ContentText className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We are committed to delivering exceptional dental care with precision and compassion. 
                  Our goal is to ensure your oral health while creating beautiful, confident smiles.
                </ContentText>
              </motion.div>

              {/* Video Button */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30">
                    <Play className="w-6 h-6 text-white ml-0.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-base font-semibold">Watch video</span>
                  <p className="text-xs text-blue-100">See our clinic in action</p>
                </div>
              </motion.button>

            </div>

          </div>
        </div>
      </ContentContainer>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoSrc={videoPath}
      />
    </>
  )
}

export default StatsSection