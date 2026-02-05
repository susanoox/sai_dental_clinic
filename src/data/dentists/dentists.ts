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
      image: "/images/IMG_5056.jpg",
      slug: "srinivas",
      bio: "Dr. Srinivas is a qualified Dental Surgeon (BDS, FDS in Endodontics - Hyderabad) with extensive experience in comprehensive dental care. He specializes in root canal treatments, oral prophylaxis (scaling and cleaning), and dental extractions, delivering precise and comfortable care to patients of all ages. With a strong focus on clinical excellence and patient comfort, Dr. Srinivas combines advanced techniques with a gentle approach to ensure long-lasting oral health and confident smiles. ",
      experience: "5+ Years",
      education: "Indira Gandhi Institute of Dental Science, Pondicherry, Senior Internship (Special training @TMC)",
      email: "saident@example.com",
      phone: "(91) 987-3210",
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
        "Sun–Sat, 10:00 AM – 4:00 PM",
        "Sun–Sat, 6:00 PM – 9:00 PM"
      ],

      specialties: [
        "Specialist in veneers, whitening, and smile makeovers",
        "Successfully completed over 1,200 cosmetic cases",
        "Certified in advanced dental aesthetics",
        "Regularly attends global conferences on cosmetic dentistry",
        "Featured in dental journals for innovative techniques"
      ],
      achievements: [
        "Best Cosmetic Dentist Award 2023",
        "Member of American Academy of Cosmetic Dentistry",
        "Published 5 research papers in dental journals"
      ],
      featured: true
    },
    {
      id: 2,
      name: "Noah Bennett",
      designation: "Endodontist",
      image: "/images/dentists/noah-bennett.jpg",
      slug: "noah-bennett",
      bio: "Dr. Noah Bennett specializes in endodontic treatments with a focus on pain-free root canal therapy. With 10 years of experience, he uses state-of-the-art technology to ensure comfortable and effective treatment. His gentle approach and expertise make him a favorite among patients with dental anxiety.",
      experience: "10+ Years",
      education: "DMD, Harvard School of Dental Medicine",
      email: "noah.bennett@example.com",
      phone: "(555) 123-4567",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      },
      {
        city: "Needur Branch, Mayiladuthurai, TN",
        address: "Near Indian Overseas Bank, Main Road, Needur - 609203",
        mapsLink: "https://maps.app.goo.gl/zE9LDUzpAcBU4KDY9",
        timing: "10:00 AM – 3:00 PM (Everyday)"
      }
    ],

      location: ["Brooklyn, NY"],
      availability: ["Mon-Thu, 9:00 AM - 5:00 PM"],
      specialties: [
        "Expert in root canal therapy and retreatment",
        "Utilizes digital imaging for precise diagnosis",
        "Specializes in treating dental trauma cases",
        "Trained in microscopic endodontics",
        "Focus on pain management and patient comfort"
      ],
      achievements: [
        "Board Certified Endodontist",
        "Fellow of American Association of Endodontists",
        "Lecturer at national dental conferences"
      ]
    },
    {
      id: 3,
      name: "Liam Brooks",
      designation: "Periodontist",
      image: "/images/dentists/liam-brooks.jpg",
      slug: "liam-brooks",
      bio: "Dr. Liam Brooks is a periodontist dedicated to preserving gum health and restoring smiles through advanced periodontal treatments. With 15 years of experience, he combines surgical expertise with regenerative techniques to treat complex gum diseases and place dental implants.",
      experience: "15+ Years",
      education: "MSD, University of Washington",
      email: "liam.brooks@example.com",
      phone: "(555) 234-5678",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      },
      {
        city: "Needur Branch, Mayiladuthurai, TN",
        address: "Near Indian Overseas Bank, Main Road, Needur - 609203",
        mapsLink: "https://maps.app.goo.gl/zE9LDUzpAcBU4KDY9",
        timing: "10:00 AM – 3:00 PM (Everyday)"
      }
    ],

      location: ["Manhattan, NY"],
      availability: ["Wed-Sat, 8:00 AM - 6:00 PM"],
      specialties: [
        "Expert in gum disease treatment and prevention",
        "Specializes in dental implant placement",
        "Trained in laser periodontal therapy",
        "Performs bone grafting and regeneration",
        "Focus on minimally invasive procedures"
      ],
      achievements: [
        "Diplomate of American Board of Periodontology",
        "Published researcher in periodontal regeneration",
        "Awarded for clinical excellence in periodontics"
      ],
      featured: true
    },
    {
      id: 4,
      name: "Michael Reed",
      designation: "Orthodontist",
      image: "/images/dentists/michael-reed.jpg",
      slug: "michael-reed",
      bio: "Dr. Michael Reed transforms smiles through orthodontic treatments for patients of all ages. With expertise in both traditional braces and clear aligners, he creates personalized treatment plans that achieve optimal results while ensuring patient comfort throughout the process.",
      experience: "8+ Years",
      education: "DDS, Columbia University",
      email: "michael.reed@example.com",
      phone: "(555) 345-6789",
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      },
      {
        city: "Needur Branch, Mayiladuthurai, TN",
        address: "Near Indian Overseas Bank, Main Road, Needur - 609203",
        mapsLink: "https://maps.app.goo.gl/zE9LDUzpAcBU4KDY9",
        timing: "10:00 AM – 3:00 PM (Everyday)"
      }
    ],

      location: ["Queens, NY"],
      availability: ["Mon-Fri, 8:30 AM - 4:30 PM"],
      specialties: [
        "Specialist in braces and Invisalign treatments",
        "Expert in treating complex malocclusions",
        "Focus on early intervention for children",
        "Utilizes 3D digital scanning technology",
        "Provides accelerated orthodontic options"
      ],
      achievements: [
        "Invisalign Diamond Provider",
        "Certified in lingual braces",
        "Member of American Association of Orthodontists"
      ]
    },
    {
      id: 5,
      name: "Ethan Wells",
      designation: "Pediatric Dentist",
      image: "/images/dentists/ethan-wells.jpg",
      slug: "ethan-wells",
      bio: "Dr. Ethan Wells creates positive dental experiences for children through gentle care and a child-friendly approach. With specialized training in pediatric dentistry, he focuses on preventive care, early intervention, and making dental visits enjoyable for young patients.",
      experience: "6+ Years",
      education: "DMD, University of Pennsylvania",
      email: "ethan.wells@example.com",
      phone: "(555) 456-7890",
      location: ["Bronx, NY"],
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      },
      {
        city: "Needur Branch, Mayiladuthurai, TN",
        address: "Near Indian Overseas Bank, Main Road, Needur - 609203",
        mapsLink: "https://maps.app.goo.gl/zE9LDUzpAcBU4KDY9",
        timing: "10:00 AM – 3:00 PM (Everyday)"
      }
    ],

      availability: ["Tue-Sat, 9:00 AM - 5:00 PM"],
      specialties: [
        "Specializes in children's dental care",
        "Expert in preventive dentistry and sealants",
        "Trained in sedation dentistry for children",
        "Focus on dental development monitoring",
        "Creates fun, engaging dental experiences"
      ],
      achievements: [
        "Board Certified Pediatric Dentist",
        "Fellow of American Academy of Pediatric Dentistry",
        "Certified in pediatric sedation"
      ]
    },
    {
      id: 6,
      name: "Amelia Carter",
      designation: "Chief Dental Surgeon",
      image: "/images/dentists/amelia-carter.jpg",
      slug: "amelia-carter",
      bio: "Dr. Amelia Carter leads our dental team with over 18 years of surgical experience. As Chief Dental Surgeon, she specializes in complex oral surgeries, dental implants, and full-mouth reconstructions. Her leadership and expertise ensure the highest standard of care for all patients.",
      experience: "18+ Years",
      education: "DDS, University of Michigan",
      email: "amelia.carter@example.com",
      phone: "(555) 567-8901",
      location: ["Manhattan, NY"],
      locations: [
      {
        city: "Mayiladuthurai, TN",
        address: "Kenikarai, Thiruvarur Main Road, Mayiladuthurai - 609001",
        mapsLink: "https://maps.app.goo.gl/CYMPMafdhsE3z7NZ9",
        timing: "5:00 PM – 9:30 PM (Everyday)"
      },
      {
        city: "Needur Branch, Mayiladuthurai, TN",
        address: "Near Indian Overseas Bank, Main Road, Needur - 609203",
        mapsLink: "https://maps.app.goo.gl/zE9LDUzpAcBU4KDY9",
        timing: "10:00 AM – 3:00 PM (Everyday)"
      }
    ],

      availability: ["Mon-Thu, 7:00 AM - 3:00 PM"],
      specialties: [
        "Expert in oral and maxillofacial surgery",
        "Specializes in complex dental implant cases",
        "Performs wisdom tooth extractions",
        "Trained in bone grafting and sinus lifts",
        "Focus on full-mouth rehabilitation"
      ],
      achievements: [
        "Fellow of American College of Oral and Maxillofacial Surgeons",
        "Clinical Professor at Dental School",
        "Author of textbook on dental implant surgery"
      ],
      featured: true
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