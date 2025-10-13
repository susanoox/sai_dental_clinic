import FeatureChecklist from "@/components/sections/service/FeatureChecklist";

export interface ServiceCard {
    icon: string;
    title: string;
    description: string;
    rating: number;
    imgSrc: string;
    id: number;
    detailsPageData?: {
        title: string;
        description: string[];
    }[];
    featureChecklist?: string[];
}

// Define the data for the introduction section

export interface ServiceData {
    sectionTitle: string;
    heading: string;
    cards: ServiceCard[];
}

export const serviceData = {
    sectionTitle: 'Services',
    heading: 'Expertise in preventive and restorative care',
    cards: [
        {
            id: 1,
            icon: "Star",
            title: "Pediatric Dentistry",
            description:
                "Gentle and specialized dental care for growing smiles with all.",
            rating: 4.5,
            imgSrc: "/images/service/Pediatric-Dentistry.webp",
            detailsPageData: [{
                title: "About Service",
                description: ["Pediatric dentistry focuses on nurturing healthy oral habits and providing specialized care for children from infancy through adolescence. A child’s first dental experiences play a crucial role in shaping their attitude toward oral health, which is why we prioritize a comfortable, friendly, and fun environment.",
                    "From routine checkups to preventive treatments, our goal is to ensure your child’s teeth and gums stay healthy as they grow. Early dental visits include cleanings, fluoride treatments, and guidance on proper brushing and flossing techniques. For children at higher risk of cavities, dental sealants provide an extra layer of protection against decay.",
                    "Beyond preventive care, we address common pediatric dental concerns, such as early tooth decay, teething discomfort, and misalignment. Our team is trained to make treatments as stress-free as possible, using child-friendly techniques and ensuring that both kids and parents feel informed and confident about every step."
                ]
            }, {
                title: "Building a foundation for lifelong oral health",
                description: ["Teaching children the importance of oral hygiene from a young age creates habits that last a lifetime. By making dental visits positive and engaging, we help build a foundation for confident, healthy smiles as your child grows.",
                ]
            }],
            featureChecklist: [
                "Friendly dental exams tailored for children",
                "Fluoride treatments to strengthen developing teeth",
                "Sealants for added cavity protection",
                "Gentle care for teething and early decay issues",
                "Guidance on lifelong oral hygiene habits",
            ]
        }

        ,
        {
            id: 2,
            icon: "Star",
            title: "Emergency Care",
            description: "Quick and reliable dental care for unexpected emergencies.",
            rating: 4.6,
            imgSrc: "/images/service/Emergency-Care.webp",
            detailsPageData: [{
                title: "About Service",
                description: ["Dental emergencies can happen at any time, causing pain, discomfort, or potential damage to your oral health. Our emergency care services are designed to provide immediate relief and effective solutions, ensuring your smile stays protected even in urgent situations.",
                    "Common emergencies, such as toothaches, chipped teeth, or knocked-out teeth, require prompt attention to prevent further complications. Our team is equipped to handle these situations with precision and care, addressing both the symptoms and the underlying issues. For severe tooth pain, we offer root canal therapy to relieve discomfort and save the affected tooth.",
                    "In cases of dental trauma, such as accidents or injuries, we focus on restoring both function and aesthetics. This may involve repairing fractures, replacing missing teeth, or managing soft tissue injuries. Our priority is to provide comprehensive care that alleviates pain and restores your oral health as quickly as possible."
                ]
            }, {
                title: "Why act fast in dental emergencies?",
                description: ["Ignoring a dental emergency can lead to more severe problems, including infections, tooth loss, or long-term damage. By seeking immediate care, you not only relieve discomfort but also protect your overall oral health and prevent costly procedures in the future.",
                ]
            }],
            featureChecklist: [
                "Rapid treatment for toothaches and infections",
                "Expert care for chipped or broken teeth",
                "Immediate solutions for knocked-out teeth",
                "Trauma management for injuries to teeth and gums",
                "Same-day appointments for urgent cases",
            ]

        },
        {
            id: 3,
            icon: "Star",
            title: "Orthodontic Solutions",
            description: "Achieve a straighter, healthier smile with modern treatments.",
            rating: 4.9,
            imgSrc: "/images/service/Orthodontic-Solutions.webp",
            detailsPageData: [{
                title: "About Service",
                description: ["Orthodontic solutions are designed to correct misaligned teeth and bite issues, ensuring both aesthetic and functional improvements. Crooked or crowded teeth are not just a cosmetic concern—they can lead to difficulties in cleaning, increasing the risk of cavities and gum disease. With our range of orthodontic treatments, you can achieve a straighter smile that promotes long-term oral health.",
                    "Traditional braces remain a trusted option for correcting severe misalignments and bite irregularities. These fixed appliances use brackets and wires to gradually shift teeth into proper alignment. For those seeking a more discreet solution, clear aligners offer a virtually invisible alternative. Custom-made to fit snugly over your teeth, these aligners are removable, making eating and oral hygiene more convenient.",
                    "Orthodontic treatments also address jaw alignment issues, such as overbites, underbites, and crossbites. By improving your bite, we enhance not only the appearance of your smile but also your ability to chew and speak effectively. Early intervention for children can prevent more complex orthodontic issues later in life, while adult treatments ensure that it’s never too late to perfect your smile."
                ]
            }, {
                title: "Transform your smile with precision",
                description: ["Orthodontics is about more than just aesthetics—it’s about creating harmony in your oral structure. With personalized treatment plans and advanced techniques, we ensure a comfortable and efficient journey to a beautifully aligned smile.",
                ]
            }],
            featureChecklist: [
                "Traditional braces for comprehensive alignment",
                "Clear aligners for discreet and flexible treatment",
                "Bite correction to improve jaw alignment",
                "Solutions for all ages, including children and adults",
                "Custom treatment plans tailored to individual needs",
            ]
        },
        {
            id: 4,
            icon: "Star",
            title: "Cosmetic Enhancements",
            description: "Enhance your smile’s appearance with personalized cosmetic dental treatments.",
            rating: 4.9,
            imgSrc: "/images/service/Cosmetic-Enhancements.webp",
            detailsPageData: [{
                title: "About Service",
                description: ["Cosmetic enhancements focus on perfecting the look of your smile while maintaining its health and functionality. Whether you’re looking to brighten discolored teeth, close gaps, or reshape imperfections, our treatments are tailored to your unique goals.",
                    "Teeth whitening is one of the most popular and effective ways to achieve a radiant smile. Using advanced bleaching techniques, we remove deep stains caused by food, beverages, and lifestyle habits, leaving your teeth several shades brighter in just one session.",
                    "For more comprehensive changes, veneers offer a versatile solution. These thin porcelain shells are custom-made to cover the front surface of teeth, correcting issues such as chips, cracks, and uneven shapes. Veneers are durable, stain-resistant, and provide a natural, polished finish that transforms your smile.",
                    "We also provide bonding treatments, which use tooth-colored resin to repair minor flaws like chips and gaps. This minimally invasive procedure is ideal for subtle improvements and blends seamlessly with your natural teeth. For patients seeking alignment without traditional braces, clear aligners offer a discreet and comfortable alternative to straighten teeth over time."
                ]
            }, {
                title: "Achieve the smile of your dreams",
                description: ["Cosmetic dentistry isn’t just about appearances—it’s about building confidence. A beautiful smile can open doors, enhance first impressions, and improve self-esteem, giving you the freedom to smile, laugh, and speak with ease.",
                ]
            }],
            featureChecklist: [
                "Professional teeth whitening for radiant results",
                "Custom veneers for a flawless finish",
                "Tooth-colored bonding for minor corrections",
                "Clear aligners for discreet straightening",
                "Personalized treatment plans for your ideal smile",
            ]
        },
        {
            id: 5,
            icon: "Star",
            title: "Restorative Dentistry",
            description: "Restore the function and beauty of your smile with advanced dental treatments.",
            rating: 4.8,
            imgSrc: "/images/service/Restorative-Dentistry.webp",
            detailsPageData: [{
                title: "About Service",
                description: ["Restorative dentistry focuses on repairing and replacing damaged or missing teeth, helping you regain full functionality and confidence in your smile. Whether it’s due to decay, trauma, or wear and tear, our expert team is here to bring your teeth back to their best form.",
                    "We offer a range of solutions, from simple fillings for cavities to complex treatments like crowns, bridges, and dental implants. Fillings, crafted from durable and natural-looking materials, seamlessly blend with your teeth while preventing further decay. For more extensive damage, dental crowns provide full coverage and protection, restoring both strength and aesthetics.",
                    "If you’re missing teeth, we provide custom solutions such as bridges and implants. Dental bridges fill gaps with artificial teeth, while implants offer a permanent and highly durable option by mimicking the natural tooth root. These options ensure you can eat, speak, and smile without hesitation.",
                    "Restorative dentistry also extends to addressing root canal infections, saving teeth that might otherwise require extraction. By cleaning and sealing the tooth, we eliminate pain and preserve your natural smile. No matter the issue, our treatments are designed to enhance comfort, improve function, and achieve long-lasting results."
                ]
            }, {
                title: "Why restorative dentistry matters",
                description: ["A healthy smile is more than just a cosmetic concern—it directly impacts your ability to chew, speak, and maintain overall oral health. Restorative care helps you avoid further complications, supports jaw health, and keeps your smile intact for years to come.",
                ]
            }],
            featureChecklist: [
                "Protective crowns for damaged teeth",
                "Durable fillings that match your natural teeth",
                "Custom bridges and implants for missing teeth",
                "Root canal therapy to save infected teeth",
                "Comprehensive solutions for long-lasting results",
            ]
        },
        {
            id: 6,
            icon: "Star",
            title: "Preventive Care",
            description: "Protect your oral health with routine checkups and preventive treatments carefully.",
            rating: 4.8,
            imgSrc: "/images/service/Preventive-Care.webp",
            detailsPageData: [{
                title: "About Service",
                description: ["Preventive care is the cornerstone of maintaining a healthy and confident smile. By focusing on early detection and proactive treatments, we ensure your oral health remains in top condition. Regular dental visits are not just about keeping your teeth clean but also about identifying potential problems before they become severe.",
                    "During a typical checkup, our dentists thoroughly examine your teeth, gums, and overall oral health. Professional cleanings remove plaque and tartar buildup, helping to prevent gum disease and cavities. We also recommend fluoride treatments to strengthen tooth enamel and safeguard against decay.",
                    "For children and adults alike, dental sealants offer added protection for molars and other hard-to-reach areas prone to cavities. Beyond treatments, we emphasize education, teaching you proper brushing and flossing techniques and offering advice on maintaining a tooth-friendly diet."
                ]
            }, {
                title: "Why preventive care matters",
                description: ["Preventive dentistry is not just about avoiding problems; it's about empowering you to take charge of your oral health. Small, consistent efforts can lead to significant long-term benefits, saving you time, money, and discomfort.",
                ]
            }],
            featureChecklist: [
                "Regular dental exams for early detection",
                "Thorough cleaning for plaque and tartar removal",
                "Fluoride treatments for cavity prevention",
                "Sealants to protect vulnerable teeth",
                "Education on personalized oral care",
            ]
        },
    ]
}