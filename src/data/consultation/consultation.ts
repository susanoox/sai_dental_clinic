import { Video, MessageCircle, Phone, Shield, Clock, IndianRupee, Star, Smile, Award, Users, Stethoscope, BadgeCheck } from "lucide-react"

export interface ConsultationFeature {
  icon: typeof Video
  title: string
  description: string
}

export interface ReviewSnippet {
  name: string
  text: string
  rating: number
}

export interface ConsultationData {
  sectionTitle: string
  heading: string
  description: string
  features: ConsultationFeature[]
  price: number
  whatsappNumber: string
  ctaChat: string
  ctaBook: string
  benefits: string[]
  stats: { number: string; label: string; icon: typeof Smile }[]
  doctorName: string
  doctorCredentials: string
  doctorDescription: string
  reviewSnippets: ReviewSnippet[]
  trustBadges: { icon: typeof BadgeCheck; text: string }[]
}

export const consultationData: ConsultationData = {
  sectionTitle: "Online Consultation",
  heading: "Consult with Expert Dentist from Home",
  description:
    "Get professional dental advice without leaving your home. Chat on WhatsApp or schedule a voice/video call with our expert doctor.",
  features: [
    {
      icon: MessageCircle,
      title: "Chat on WhatsApp",
      description: "Send a message anytime. Our team will respond promptly with initial guidance.",
    },
    {
      icon: Phone,
      title: "Voice Call Consultation",
      description: "Talk directly with Dr. Srinivas S K. Describe your concerns and get expert advice.",
    },
    {
      icon: Video,
      title: "Video Call Consultation",
      description: "Face-to-face video consultation for thorough examination of your dental concern.",
    },
  ],
  price: 250,
  whatsappNumber: "8122835737",
  ctaChat: "Chat on WhatsApp",
  ctaBook: "Book Video Call",
  doctorName: "Dr. Srinivas S K",
  doctorCredentials: "BDS, FDS (Endodontics) • RCT Specialist • 5+ Years Experience",
  doctorDescription:
    "Active member of the Indian Dental Association (IDA). Specializes in root canal treatments, oral prophylaxis, and painless dental extractions. Trusted by thousands of patients for gentle, personalized care.",
  benefits: [
    "Doctor explains everything in detail",
    "No clinic visits needed",
    "Flexible timing that suits you",
    "Affordable ₹250 consultation fee",
    "Prescription and treatment plan shared",
  ],
  stats: [
    { number: "3000+", label: "Happy Patients", icon: Smile },
    { number: "2000+", label: "Smiles Transformed", icon: Award },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "4.9★", label: "Google Rating", icon: Star },
  ],
  reviewSnippets: [
    {
      name: "Rathna Sankar",
      rating: 5,
      text: "I had a root canal treatment here, and it was completely painless. The doctor is humble, skilled, and handles everything personally with great care.",
    },
    {
      name: "Selvakumar Pannerselvam",
      rating: 5,
      text: "Very pleasant experience with Dr. Srinivas. I was anxious initially, but he was very patient and spent enough time across multiple sittings.",
    },
    {
      name: "Amertharam Varadarajan",
      rating: 5,
      text: "Consulted Dr. Srinivas and was treated in a friendly manner. He spent time explaining everything and I was fully satisfied with the treatment.",
    },
    {
      name: "Anu Gnanasekaran",
      rating: 5,
      text: "Dr. Srinivas is extremely professional and caring. He explained all procedures clearly and answered all my questions patiently.",
    },
  ],
  trustBadges: [
    { icon: BadgeCheck, text: "IDA Member (Indian Dental Association)" },
    { icon: BadgeCheck, text: "BDS & FDS in Endodontics" },
    { icon: BadgeCheck, text: "100% Patient Satisfaction" },
    { icon: BadgeCheck, text: "20+ Five-Star Google Reviews" },
  ],
}
