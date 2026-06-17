"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  IndianRupee, CheckCircle2, MessageCircle, Phone, Video,
  ArrowRight, Clock, Shield, Stethoscope, Star, Award,
  Smile, Users, BadgeCheck, ArrowLeftRight, Quote,
} from "lucide-react"
import ContentContainer from "@/components/common-ui/containers/ContentContainer"
import SectionTitleText from "@/components/common-ui/contentText/SectionTitleText"
import PageHeading from "@/components/common-ui/headers/PageHeading"
import { Button } from "@/components/ui/button"
import { consultationData } from "@/data/consultation/consultation"

const testimonials = [
  {
    id: 1, beforeImage: "/images/treatments/before-1.jpeg", afterImage: "/images/treatments/after-1.jpeg",
    text: "என் முழு பற்களையும் புதிதாக செய்து கொடுத்தார்கள். இப்போது சிரிக்கவே நம்பிக்கை வந்திருக்கிறது. மிகவும் திருப்தி!",
    name: "Farida Begum (Needur)",
  },
  {
    id: 2, beforeImage: "/images/treatments/before-2.jpeg", afterImage: "/images/treatments/after-2.jpeg",
    text: "Full mouth treatment romba nalla pannanga. Ippo sapida, pesa romba comfortable ah irukku.",
    name: "Avayambigai (Manalmedu)",
  },
  {
    id: 3, beforeImage: "/images/treatments/before-3.jpeg", afterImage: "/images/treatments/after-3.jpeg",
    text: "பல் இடைவெளிக்கான பிரிட்ஜ் சிகிச்சை மிகச்சிறப்பாக செய்யப்பட்டது.",
    name: "Shanthi (Moovalur)",
  },
]

function BeforeAfterSlider({ t }: { t: typeof testimonials[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)

  const handleSliderMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setSliderPosition(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)))
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--slider-position", `${sliderPosition}%`)
      containerRef.current.style.setProperty("--after-width", `${100 - sliderPosition}%`)
    }
  }, [sliderPosition])

  useEffect(() => {
    if (hasInteracted) return
    const t1 = setTimeout(() => { setSliderPosition(38); setTimeout(() => setSliderPosition(62), 400); setTimeout(() => setSliderPosition(50), 800) }, 800)
    return () => clearTimeout(t1)
  }, [hasInteracted])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDraggingRef.current) handleSliderMove(e.clientX) }
    const onMouseUp = () => { isDraggingRef.current = false; setIsDragging(false) }
    const onTouchMove = (e: TouchEvent) => { if (isDraggingRef.current) { e.preventDefault(); handleSliderMove(e.touches[0].clientX) } }
    const onTouchEnd = () => { isDraggingRef.current = false; setIsDragging(false) }
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
    document.addEventListener("touchmove", onTouchMove, { passive: false })
    document.addEventListener("touchend", onTouchEnd)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("touchmove", onTouchMove)
      document.removeEventListener("touchend", onTouchEnd)
    }
  }, [handleSliderMove])

  const startDrag = useCallback(() => { isDraggingRef.current = true; setIsDragging(true); setHasInteracted(true) }, [])

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div ref={containerRef} className="relative h-64 bg-white overflow-hidden select-none"
        onMouseDown={(e) => { startDrag(); handleSliderMove(e.clientX) }}
        onTouchStart={(e) => { startDrag(); handleSliderMove(e.touches[0].clientX) }}
      >
        <div className="absolute inset-0 w-full">
          <img src={t.beforeImage} alt="Before" className="w-full h-full object-cover pointer-events-none" draggable={false} />
          <div className="absolute top-3 left-3 bg-black/70 text-white px-2.5 py-1 rounded text-xs font-bold">BEFORE</div>
        </div>
        <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: "var(--after-width, 50%)" }}>
          <img src={t.afterImage} alt="After" className="w-full h-full object-cover pointer-events-none" draggable={false} />
          <div className="absolute top-3 right-3 bg-green-600 text-white px-2.5 py-1 rounded text-xs font-bold">AFTER</div>
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none" style={{ left: "var(--slider-position, 50%)" }}>
          <div className={cn("absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-white cursor-col-resize flex items-center justify-center transition-transform", isDragging && "scale-110")}
            onMouseDown={(e) => { e.stopPropagation(); startDrag() }} onTouchStart={(e) => { e.stopPropagation(); startDrag() }}>
            <ArrowLeftRight className="w-4 h-4 text-gray-700" />
          </div>
        </div>
        {!hasInteracted && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/60 text-white text-xs px-3 py-1.5 rounded-full animate-pulse">← Slide to compare →</div>
        )}
      </div>
      <div className="p-5">
        <p className="text-gray-600 italic">"{t.text}"</p>
        <p className="text-gray-900 font-semibold mt-3">— {t.name}</p>
      </div>
    </div>
  )
}

export default function ConsultationPage() {
  const handleWhatsApp = (msg: string) => window.open(`https://wa.me/${consultationData.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <ContentContainer className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-4 max-w-3xl mx-auto">
            <SectionTitleText wrapperClassName="items-center"><span className="text-blue-200">Online Consultation</span></SectionTitleText>
            <PageHeading wrapperClassName="items-center" className="text-4xl md:text-6xl text-white text-center">
              Consult from the <span className="text-yellow-300">Comfort of Your Home</span>
            </PageHeading>
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">{consultationData.description}</p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto mt-6">
              {consultationData.stats.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10">
                    <Icon className="w-5 h-5 text-yellow-300 mx-auto mb-0.5" />
                    <div className="text-lg font-bold text-white">{s.number}</div>
                    <div className="text-[10px] text-blue-100/70">{s.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => handleWhatsApp("Hi! I'd like to consult about my dental concern.")}
                className="bg-green-500 hover:bg-green-600 text-white gap-2 rounded-xl px-8 py-6 text-base">
                <MessageCircle className="w-5 h-5" />{consultationData.ctaChat}
              </Button>
              <Button size="lg" onClick={() => handleWhatsApp(`Hi! I'd like to book an online video consultation. Please provide the payment details for the ₹${consultationData.price} consultation fee.`)}
                className="bg-white hover:bg-blue-50 text-blue-700 gap-2 rounded-xl px-8 py-6 text-base font-semibold">
                <Video className="w-5 h-5" />{consultationData.ctaBook}
              </Button>
            </div>
          </motion.div>
        </ContentContainer>
      </section>

      {/* ── DOCTOR CREDENTIALS ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">{consultationData.doctorName}</h3>
                <p className="text-blue-600 font-medium text-sm">{consultationData.doctorCredentials}</p>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{consultationData.doctorDescription}</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  {consultationData.trustBadges.map((b) => {
                    const BI = b.icon
                    return (
                      <span key={b.text} className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full border border-green-200">
                        <BI className="w-3 h-3" />{b.text}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </ContentContainer>
      </section>

      {/* ── BEFORE/AFTER RESULTS ── */}
      <section className="py-16 bg-gray-50">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-10">
            <SectionTitleText wrapperClassName="items-center"><span className="text-blue-600">Real Results</span></SectionTitleText>
            <PageHeading wrapperClassName="items-center" className="text-4xl md:text-5xl text-center">See Real Patient Transformations</PageHeading>
            <p className="text-gray-500">Slide to compare before and after treatment results</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: t.id * 0.1 }}>
                <BeforeAfterSlider t={t} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
            <p className="text-gray-500 text-sm">2000+ smiles transformed • 3000+ happy patients • 5.0★ rated</p>
          </motion.div>
        </ContentContainer>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-white">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12">
            <SectionTitleText wrapperClassName="items-center"><span className="text-blue-600">Simple 3-Step Process</span></SectionTitleText>
            <PageHeading wrapperClassName="items-center" className="text-4xl md:text-5xl text-center">How It Works</PageHeading>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MessageCircle, title: "Send a Message", desc: "Describe your dental concern briefly on WhatsApp. Our team will respond promptly." },
              { icon: IndianRupee, title: "Pay Consultation Fee", desc: "Pay the consultation fee via UPI. We'll confirm your appointment time." },
              { icon: Video, title: "Consult Doctor", desc: "Get a voice/video call with Dr. Srinivas. He explains everything in detail." },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="relative text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 right-1/2 translate-x-8 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">{i + 1}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </ContentContainer>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 bg-blue-50">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-10">
            <SectionTitleText wrapperClassName="items-center"><span className="text-blue-600">Patient Reviews</span></SectionTitleText>
            <PageHeading wrapperClassName="items-center" className="text-4xl md:text-5xl text-center">What Patients Say About Dr. Srinivas</PageHeading>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
              <span className="text-gray-600 font-semibold">5.0★ from 80+ Google Reviews</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {consultationData.reviewSnippets.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">{r.name[0]}</div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">{r.name}</p>
                    <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, si) => <Star key={si} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">"{r.text}"</p>
              </motion.div>
            ))}
          </div>
        </ContentContainer>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 bg-white">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-10">
            <SectionTitleText wrapperClassName="items-center"><span className="text-blue-600">Why Online Consultation</span></SectionTitleText>
            <PageHeading wrapperClassName="items-center" className="text-4xl md:text-5xl text-center">Benefits of Consulting Online</PageHeading>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {consultationData.benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <span className="text-gray-700">{b}</span>
              </motion.div>
            ))}
          </div>
        </ContentContainer>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="py-16 bg-gray-50">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-10">
            <SectionTitleText wrapperClassName="items-center"><span className="text-blue-600">What You Get</span></SectionTitleText>
            <PageHeading wrapperClassName="items-center" className="text-4xl md:text-5xl text-center">Complete Dental Consultation</PageHeading>
            <p className="text-gray-500 max-w-xl mx-auto">Get expert dental advice from Dr. Srinivas without stepping out of your home.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-md mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-xl">
            <Stethoscope className="w-16 h-16 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-2">Expert Consultation</h3>
            <p className="text-blue-100/80 mb-6">with Dr. Srinivas S K</p>
            <ul className="text-left space-y-2 mb-6">
              {[
                "Thorough discussion about your concern",
                "Treatment plan explained in detail",
                "All your questions answered clearly",
                "Personalized advice for your dental health",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" onClick={() => handleWhatsApp("Hi! I'd like to book an online consultation with Dr. Srinivas.")}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 gap-2 rounded-xl py-6 text-base font-bold">
              <Video className="w-5 h-5" />
              Book Consultation Now
            </Button>
          </motion.div>
        </ContentContainer>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-800">
        <ContentContainer>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Consult?</h2>
            <p className="text-lg text-blue-100/80">3000+ patients trust us. Start your online consultation today with Dr. Srinivas.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-blue-100/60">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" />IDA Member</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4" />7+ Years</span>
              <span className="flex items-center gap-1"><Smile className="w-4 h-4" />3000+ Patients</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4" />5.0★ Rated</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button size="lg" onClick={() => handleWhatsApp("Hi! I'd like to consult about my dental concern.")}
                className="bg-green-500 hover:bg-green-600 text-white gap-2 rounded-xl px-8 py-6 text-base">
                <MessageCircle className="w-5 h-5" />Start Chat
              </Button>
              <Button size="lg" onClick={() => handleWhatsApp(`Hi! I'd like to book an online video consultation with Dr. Srinivas.`)}
                className="bg-white hover:bg-blue-50 text-blue-700 gap-2 rounded-xl px-8 py-6 text-base font-semibold">
                <Video className="w-5 h-5" />Book Video Consultation
              </Button>
            </div>
          </motion.div>
        </ContentContainer>
      </section>
    </main>
  )
}
