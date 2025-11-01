"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import ContentContainer from "@/components/common-ui/containers/ContentContainer";
import { useState, useRef } from "react";

type VideoSectionProps = {
  className?: string;
  videoClassName?: string;
  src?: string;
  poster?: string;
  motionProps?: MotionProps;
}

const defaultMotion: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function VideoSection({
  className,
  videoClassName,
  src = "/images/samplevideo.mp4",
  poster,
  motionProps,
}: VideoSectionProps) {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <ContentContainer className='items-center justify-center space-y-8'>
        <motion.div
          {...defaultMotion}
          {...motionProps}
          className={cn("relative w-full rounded-lg overflow-hidden shadow-lg bg-muted")} 
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        >
          {src && !videoError ? (
            <div className="relative">
              {/* Larger video - removed max-w-4xl constraint */}
              <video
                ref={videoRef}
                className={cn("w-full h-auto aspect-video object-cover", videoClassName)}
                poster={poster}
                muted
                loop
                playsInline
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setVideoError(true)}
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                onClick={togglePlay}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/0 hover:bg-black/15 transition-all duration-200"
                />
                
                {/* Larger play button for bigger video */}
                <motion.div
                  className="relative w-16 h-16 bg-white/85 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                  }}
                  whileTap={{ scale: 0.92 }}
                >
                  {isPlaying ? (
                    <svg 
                      className="w-6 h-6 text-black" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                    </svg>
                  ) : (
                    <svg 
                      className="w-6 h-6 text-black ml-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </motion.div>
              </motion.div>

              <motion.div 
                className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white text-sm">
                  {isPlaying ? "▶" : "⏸"}
                </span>
              </motion.div>
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/5 to-muted">
              <motion.div 
                className="text-center text-muted-foreground"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-5xl mb-2">🎬</div>
                <p className="text-lg font-medium">Clinic Tour Video</p>
                <p className="text-sm mt-1">
                  {videoError ? "Video failed to load" : "Add video to public/images/"}
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="text-center max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm">
            Click to control playback
          </p>
        </motion.div>
      </ContentContainer>
    </div>
  );
}