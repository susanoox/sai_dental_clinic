"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MessageCircle, Video, Award, Smile, Clock, Star, BadgeCheck, Phone, Shield, IndianRupee, ChevronRight } from "lucide-react"
import ContentContainer from "@/components/common-ui/containers/ContentContainer"
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import { Button } from "@/components/ui/button"
import type { ConsultationData } from "@/data/consultation/consultation"

interface Props {
  data: ConsultationData
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
}

const cardFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function ConsultationSection({ data }: Props) {
  const handleWhatsApp = (msg: string) => window.open(`https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 py-16 md:py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <ContentContainer>
        {/* Header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-4 border border-white/10">
            {data.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {data.heading}
          </h2>
          <p className="text-blue-200/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="group relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 text-center border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.number}</div>
                <div className="text-xs md:text-sm text-blue-200/60">{s.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Features */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="group relative bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-blue-300" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{f.title}</h4>
                <p className="text-blue-200/70 text-sm leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Doctor Trust + CTA Card */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mt-12">
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.04] backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/[0.08] overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left - Doctor info + Trust badges */}
              <div className="space-y-5">
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">{data.doctorName}</h4>
                  <p className="text-blue-200/70 text-sm">{data.doctorCredentials}</p>
                </div>
                <p className="text-blue-100/60 text-sm leading-relaxed">{data.doctorDescription}</p>
                
                <div className="flex flex-wrap gap-2">
                  {data.trustBadges.map((b) => {
                    const BI = b.icon
                    return (
                      <span key={b.text} className="inline-flex items-center gap-1.5 bg-white/[0.06] rounded-full px-3 py-1.5 text-xs text-blue-200/80">
                        <BI className="w-3.5 h-3.5 text-green-300" />
                        {b.text}
                      </span>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {data.benefits.slice(0, 4).map((b) => (
                    <span key={b} className="flex items-center gap-1.5 text-xs text-blue-200/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - CTA buttons */}
              <div className="flex flex-col gap-3 lg:border-l border-white/[0.08] lg:pl-8">
                <p className="text-white/80 text-sm font-medium text-center lg:text-left">
                  Get started in under 2 minutes
                </p>
                <Button
                  size="lg"
                  onClick={() => handleWhatsApp("Hi! I'd like to consult about my dental concern.")}
                  className="bg-green-500 hover:bg-green-400 text-white gap-2 rounded-xl py-6 text-base font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-400/30 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  {data.ctaChat}
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => handleWhatsApp("Hi! I'd like to book an online video consultation with Dr. Srinivas.")}
                  className="bg-white/10 hover:bg-white/20 text-white gap-2 rounded-xl py-6 text-base font-semibold border border-white/[0.15] backdrop-blur-sm transition-all duration-300"
                >
                  <Video className="w-5 h-5" />
                  Book Video Call
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <p className="text-blue-200/50 text-xs text-center lg:text-left">
                  <IndianRupee className="w-3 h-3 inline" /> {data.price} consultation fee • No clinic visit needed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </ContentContainer>
    </section>
  )
}
