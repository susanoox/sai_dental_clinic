"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MessageCircle, Video, Award, Smile, Clock, BadgeCheck, Star } from "lucide-react"
import ContentContainer from "@/components/common-ui/containers/ContentContainer"
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import { Button } from "@/components/ui/button"
import type { ConsultationData } from "@/data/consultation/consultation"

interface Props {
  data: ConsultationData
}

export default function ConsultationSection({ data }: Props) {
  const handleWhatsApp = (msg: string) => window.open(`https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")

  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-14 md:py-20">
      <ContentContainer>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
          <SectionTitleText wrapperClassName="items-center">
            <span className="text-blue-200">{data.sectionTitle}</span>
          </SectionTitleText>
          <PageHeading wrapperClassName="items-center" className="text-3xl md:text-5xl text-white text-center">
            {data.heading}
          </PageHeading>
          <p className="text-blue-100/80 mt-3 leading-relaxed">{data.description}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="bg-white/[0.07] rounded-xl p-3 text-center">
                <Icon className="w-5 h-5 text-yellow-300 mx-auto mb-0.5" />
                <div className="text-lg font-bold text-white">{s.number}</div>
                <div className="text-[11px] text-blue-100/70">{s.label}</div>
              </div>
            )
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.25 }} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="bg-white/[0.07] rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-semibold text-sm">{f.title}</h4>
                <p className="text-blue-100/70 text-xs mt-0.5">{f.description}</p>
              </div>
            )
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35 }} className="mt-6 bg-white/[0.07] rounded-xl p-5 max-w-lg mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-3">
            {data.trustBadges.map((b) => {
              const BI = b.icon
              return (
                <span key={b.text} className="inline-flex items-center gap-1 text-xs text-blue-100/80">
                  <BI className="w-3 h-3 text-green-300" />
                  {b.text}
                </span>
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4 text-xs text-blue-100/70">
            {data.benefits.slice(0, 3).map((b) => (
              <span key={b} className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-300" />
                {b}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button size="default" onClick={() => handleWhatsApp("Hi! I'd like to consult about my dental concern.")}
              className="bg-green-500 hover:bg-green-600 text-white gap-1.5 rounded-xl px-5 text-sm">
              <MessageCircle className="w-4 h-4" />
              {data.ctaChat}
            </Button>
            <Button size="default" onClick={() => handleWhatsApp("Hi! I'd like to book an online video consultation with Dr. Srinivas.")}
              className="bg-white hover:bg-blue-50 text-blue-700 gap-1.5 rounded-xl px-5 text-sm font-semibold">
              <Video className="w-4 h-4" />
              Book Video Call
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.45 }} className="mt-6 text-center">
          <p className="text-blue-100/60 text-xs mb-2">Trusted by thousands. Rated 4.9★ on Google.</p>
          <Button size="default" onClick={() => handleWhatsApp("Hi! I'd like to book an online video consultation with Dr. Srinivas.")}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 gap-1.5 rounded-xl px-6 text-sm font-bold">
            <Video className="w-4 h-4" />
            Book Consultation
          </Button>
        </motion.div>
      </ContentContainer>
    </section>
  )
}
