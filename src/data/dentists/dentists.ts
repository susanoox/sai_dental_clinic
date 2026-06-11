// data/dentists/dentists.ts

export interface DentistData {
  id: number
  name: string
  designation: string
  image: string
  slug: string
  bio: string
  experience: string
  education: string
  email: string
  phone: string
  locations: DentistLocation[]
  location: string[]
  availability: string[]
  specialties: string[]
  achievements: string[]
  featured?: boolean
}

export interface DentistsSectionData {
  sectionTitle: string
  heading: string
  description: string
  dentists: DentistData[]
}

export interface DentistLocation {
  city: string
  address: string
  mapsLink?: string
  timing: string
}

interface DentistProfileProps {
  dentist: {
    locations: DentistLocation[]   // 👈 REQUIRED
  }
}


export const dentistsData: DentistsSectionData = {
  sectionTitle: 'Our Team',
  heading: 'Meet our team',
  description: 'Professionals committed to exceptional care',
  dentists: [
    {
      id: 1,
      name: "Dr. Srinivas S K",
      designation: "Dental Surgeon",
      image: "/images/dentist/dentist4.webp",
      slug: "srinivas",
      bio: "Dr. Srinivas is a qualified Dental Surgeon (BDS, FDS in Endodontics - Hyderabad) with extensive experience in comprehensive dental care. He specializes in root canal treatments, oral prophylaxis (scaling and cleaning), and dental extractions, delivering precise and comfortable care to patients of all ages. With a strong focus on clinical excellence and patient comfort, Dr. Srinivas combines advanced techniques with a gentle approach to ensure long-lasting oral health and confident smiles. ",
      experience: "7+ Years",
      education: "Indira Gandhi Institute of Dental Science, Pondicherry, Senior Internship (Special training @TMC)",
      email: "saisri.dentalcare@gmai;.com",
      phone: "+91 8122835737, +91 8903157201",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        mapsLink: "https://maps.app.goo.gl/2jpLzEqH6Gu5XPtk7",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      },
      {
        city: "Needur Branch, Mayiladuthurai, TN",
        address: "Near Indian Overseas Bank, Main Road, Needur - 609203",
        mapsLink: "https://maps.app.goo.gl/zE9LDUzpAcBU4KDY9",
        timing: "10:00 AM – 3:00 PM (Everyday)"
      }
    ],

      location: [
        "Kenikarai, Thiruvarur Main Road, Near Periyar Statue, Mayiladuthurai, TN",
        "Another Branch Location, Mayiladuthurai, TN"
      ],

      availability: [
        "Sun–Sat, 10:00 AM – 3:00 PM",
        "Sun–Sat, 5:00 PM – 09:30 PM"
      ],

      specialties: [
        "Specialist in root canal treatments and endodontic procedures",
        "Expert in oral prophylaxis (scaling and cleaning)",
        "Skilled in painless dental extractions",
        "Focused on patient comfort with gentle treatment approaches",
        "Committed to long-term oral health and preventive care"
      ],
      achievements: [
        "Active member of the Indian Dental Association (IDA)",
        "Trusted by a growing base of satisfied patients for quality dental care",
        "Recognized for delivering consistent, patient-focused treatment outcomes",
        "Known for maintaining high standards in hygiene and clinical excellence"
      ],
      featured: true
    },
    {
      id: 2,
      name: "Arun",
      designation: "Orthodontist",
      image: "/images/dentists/default.jpg",
      slug: "arun",
      bio: "Orthodontist specializing in braces and aligners.",
      experience: "",
      education: "",
      email: "",
      phone: "",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      }
    ],
      location: [],
      availability: [],
      specialties: [],
      achievements: []
    },
    {
      id: 3,
      name: "Dr. Pugazh",
      designation: "Periodontist (Laser Gum Surgery)",
      image: "/images/dentists/default.jpg",
      slug: "pugazh",
      bio: "Periodontist specializing in laser gum surgery.",
      experience: "",
      education: "",
      email: "",
      phone: "",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      }
    ],
      location: [],
      availability: [],
      specialties: [],
      achievements: []
    },
    {
      id: 4,
      name: "Dr. Vigneshwari",
      designation: "Oral and Maxillofacial Surgeon (Wisdom Tooth Removal Specialist)",
      image: "/images/dentists/default.jpg",
      slug: "vigneshwari",
      bio: "Oral and maxillofacial surgeon specializing in wisdom tooth removal.",
      experience: "",
      education: "",
      email: "",
      phone: "",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      }
    ],
      location: [],
      availability: [],
      specialties: [],
      achievements: []
    },
    {
      id: 5,
      name: "Dr. Patrick",
      designation: "Dental Implants Specialist - Full Mouth Implants",
      image: "/images/dentists/default.jpg",
      slug: "patrick",
      bio: "Dental implants specialist focusing on full mouth implants.",
      experience: "",
      education: "",
      email: "",
      phone: "",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      }
    ],
      location: [],
      availability: [],
      specialties: [],
      achievements: []
    }
  ]
}

// Helper functions
export function getDentistById(id: string | number): DentistData | undefined {
  return dentistsData.dentists.find(dentist => dentist.id.toString() === id.toString())
}

export function getDentistBySlug(slug: string): DentistData | undefined {
  return dentistsData.dentists.find(dentist => dentist.slug === slug)
}

export function getFeaturedDentists(): DentistData[] {
  return dentistsData.dentists.filter(dentist => dentist.featured)
}

export function getDentistsBySpecialty(specialty: string): DentistData[] {
  return dentistsData.dentists.filter(dentist => 
    dentist.designation.toLowerCase().includes(specialty.toLowerCase())
  )
}