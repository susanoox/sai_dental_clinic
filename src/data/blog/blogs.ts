import { BlogCardData } from '@/components/sections/blogs/BlogCard'

export interface BlogDetailData extends BlogCardData {
  fullContent?: string[]
  author?: string
  tags?: string[]
  featured?: boolean
  detailsPageData?: {
    title: string
    description: string[]
  }[]
  featureChecklist?: string[]
}

export interface BlogSectionData {
  sectionTitle: string
  heading: string
  description: string
  blogs: BlogDetailData[]
}

export const blogsData: BlogSectionData = {
  sectionTitle: 'Blogs',
  heading: 'Stay updated with dental wellness tips',
  description: 'Discover the latest insights, tips, and news about dental health and wellness.',
  blogs: [
    {
      id: 1,
      title: "How to prevent cavities with simple daily habits",
      excerpt: "Learn effective daily routines and habits that can significantly reduce your risk of developing cavities and maintain optimal oral health.",
      date: "Dec 18, 2024",
      readTime: "3 min",
      image: "/images/blog-cavities.jpg",
      category: "Prevention",
      slug: "prevent-cavities-daily-habits",
      author: "Dr. Sai Kumar",
      tags: ["Cavities", "Prevention", "Oral Hygiene", "Daily Habits"],
      featured: true,
      detailsPageData: [
        {
          title: "Understanding Dental Cavities",
          description: [
            "Dental cavities, also known as caries or tooth decay, are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. Cavities are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks, and not cleaning your teeth well.",
            "When plaque (a sticky film of bacteria) forms on your teeth, it uses the sugars in the foods and drinks you consume to produce acids that can gradually destroy the tooth enamel. Over time, these acids create cavities in the teeth. Cavities are among the world's most common health problems, especially in children, teenagers, and older adults."
          ]
        },
        {
          title: "Daily Habits to Prevent Cavities",
          description: [
            "1. Brush your teeth properly twice a day with fluoride toothpaste. Use a soft-bristled toothbrush and make sure to brush for at least two minutes, covering all surfaces of your teeth.",
            "2. Floss daily to remove plaque and food particles from between your teeth where your toothbrush can't reach.",
            "3. Limit sugary and acidic foods and drinks. If you do consume them, try to do so during meal times rather than snacking throughout the day.",
            "4. Drink plenty of water throughout the day, especially after meals, to help wash away food particles and bacteria.",
            "5. Consider using an antibacterial mouthwash to help reduce plaque and fight bacteria that cause cavities."
          ]
        }
      ],
      featureChecklist: [
        "Brush with fluoride toothpaste twice daily",
        "Floss between teeth every day",
        "Limit sugary snacks and drinks",
        "Drink plenty of water",
        "Visit your dentist regularly for checkups"
      ]
    },
    {
      id: 2,
      title: "Top reasons to replace missing teeth promptly",
      excerpt: "Discover why timely replacement of missing teeth is crucial for your oral health, facial structure, and overall well-being.",
      date: "Jan 15, 2025",
      readTime: "6 min",
      image: "/images/blog-missing-teeth.jpg",
      category: "Treatment",
      slug: "replace-missing-teeth-reasons",
      author: "Dr. Priya Sharma",
      tags: ["Missing Teeth", "Dental Implants", "Oral Health", "Restorative Dentistry"],
      detailsPageData: [
        {
          title: "The Consequences of Missing Teeth",
          description: [
            "When a tooth is lost, it's not just a gap in your smile. The consequences can affect your entire oral health system. Adjacent teeth may begin to shift into the empty space, causing misalignment and bite problems. This shifting can make teeth harder to clean, increasing the risk of gum disease and tooth decay in the remaining teeth.",
            "The bone that once supported the tooth begins to deteriorate without the stimulation from chewing. This bone loss can change the shape of your face, making you look older than you are. Additionally, missing teeth can affect your ability to chew properly, which may lead to digestive problems if you're unable to break down food adequately."
          ]
        },
        {
          title: "Benefits of Timely Tooth Replacement",
          description: [
            "1. Preserves jawbone health by providing stimulation to the bone",
            "2. Prevents adjacent teeth from shifting and becoming misaligned",
            "3. Maintains proper facial structure and prevents premature aging",
            "4. Restores proper chewing function and speech",
            "5. Boosts self-confidence and improves quality of life",
            "6. Distributes biting forces evenly across all teeth",
            "7. Makes oral hygiene easier to maintain"
          ]
        }
      ],
      featureChecklist: [
        "Prevents bone loss in the jaw",
        "Maintains proper tooth alignment",
        "Preserves facial structure",
        "Restores chewing efficiency",
        "Improves speech clarity"
      ]
    },
    {
      id: 3,
      title: "The connection between gum health and overall wellness",
      excerpt: "Explore the surprising links between periodontal health and your body's overall health, including heart disease and diabetes.",
      date: "Jan 13, 2025",
      readTime: "6 min",
      image: "/images/blog-gum-health.jpg",
      category: "Wellness",
      slug: "gum-health-overall-wellness",
      author: "Dr. Arjun Patel",
      tags: ["Gum Health", "Overall Wellness", "Heart Health", "Diabetes", "Oral-Systemic Health"],
      featured: true,
      detailsPageData: [
        {
          title: "Understanding Periodontal Disease",
          description: [
            "Periodontal (gum) disease is an infection of the tissues that hold your teeth in place. It's typically caused by poor brushing and flossing habits that allow plaque—a sticky film of bacteria—to build up on the teeth and harden. In advanced stages, gum disease can lead to sore, bleeding gums; painful chewing problems; and even tooth loss.",
            "What many people don't realize is that the inflammation associated with gum disease doesn't stay confined to the mouth. The bacteria from infected gums can enter the bloodstream and travel to other parts of the body, potentially contributing to or worsening other health conditions."
          ]
        },
        {
          title: "Oral-Systemic Health Connections",
          description: [
            "**Heart Disease**: Research shows that people with gum disease are two to three times more likely to have a heart attack, stroke, or other serious cardiovascular event. The inflammation from gum disease may increase inflammation throughout the body, including in the arteries.",
            "**Diabetes**: Gum disease makes it harder to control blood sugar levels, and high blood sugar provides ideal conditions for gum infections to develop. It's a two-way relationship that requires careful management of both conditions.",
            "**Respiratory Issues**: Bacteria from gum disease can be inhaled into the lungs, potentially causing respiratory diseases like pneumonia, especially in older adults or those with compromised immune systems.",
            "**Pregnancy Complications**: Pregnant women with gum disease may be more likely to have a baby born too early or too small. The inflammation and bacteria could interfere with fetal development."
          ]
        }
      ],
      featureChecklist: [
        "Gum health affects heart disease risk",
        "Diabetes and gum disease are closely linked",
        "Oral bacteria can impact respiratory health",
        "Gum disease may affect pregnancy outcomes",
        "Regular dental checkups support overall wellness"
      ]
    },
    {
      id: 4,
      title: "The benefits of regular dental cleanings",
      excerpt: "Learn why professional dental cleanings every six months are essential for maintaining optimal oral health and preventing serious dental problems.",
      date: "Feb 5, 2025",
      readTime: "4 min",
      image: "/images/blog-dental-cleaning.jpg",
      category: "Preventive Care",
      slug: "benefits-regular-dental-cleanings",
      author: "Dr. Anjali Verma",
      tags: ["Dental Cleaning", "Preventive Care", "Oral Health", "Professional Care", "Hygiene"],
      detailsPageData: [
        {
          title: "Beyond Brushing and Flossing",
          description: [
            "While daily brushing and flossing are essential for maintaining oral hygiene, professional dental cleanings offer benefits that go beyond what you can achieve at home. Dental professionals use specialized tools to remove plaque and tartar buildup that regular brushing cannot eliminate.",
            "Tartar, also known as calculus, forms when plaque hardens on your teeth. Once tartar develops, it can only be removed by a dental professional. Left untreated, tartar buildup can lead to gum inflammation, cavities, and more severe periodontal disease."
          ]
        },
        {
          title: "Key Benefits of Professional Cleanings",
          description: [
            "**Prevention of Gum Disease**: Regular cleanings remove plaque and tartar that cause gingivitis and periodontitis, protecting your gums and supporting bone structure.",
            "**Early Detection of Dental Issues**: During cleanings, dentists can spot early signs of problems like cavities, gum disease, oral cancer, and other conditions that you might not notice.",
            "**Brighter Smile**: Professional cleanings remove surface stains from coffee, tea, wine, and tobacco, helping to keep your smile bright and clean.",
            "**Fresh Breath**: Persistent bad breath is often caused by food particles and bacteria that regular cleaning removes.",
            "**Overall Health Connection**: Maintaining good oral health through regular cleanings may reduce the risk of certain health conditions like heart disease and stroke."
          ]
        }
      ],
      featureChecklist: [
        "Removes plaque and tartar buildup",
        "Prevents gum disease progression",
        "Early detection of oral health issues",
        "Brightens and polishes teeth",
        "Contributes to overall health maintenance"
      ]
    },
    {
      id: 5,
      title: "Understanding different types of dental implants",
      excerpt: "A comprehensive guide to dental implant options and what might be best for your specific needs, lifestyle, and budget.",
      date: "Feb 12, 2025",
      readTime: "8 min",
      image: "/images/blog-dental-implants.jpg",
      category: "Restorative Dentistry",
      slug: "understanding-dental-implants",
      author: "Dr. Rajesh Malhotra",
      tags: ["Dental Implants", "Restorative Dentistry", "Tooth Replacement", "Oral Surgery", "Prosthodontics"],
      detailsPageData: [
        {
          title: "What Are Dental Implants?",
          description: [
            "Dental implants are artificial tooth roots made of titanium that are surgically placed into your jawbone. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth. Unlike dentures or bridges, implants fuse with your jawbone, offering stability and preventing bone loss.",
            "Implants have revolutionized tooth replacement by offering a permanent solution that looks, feels, and functions like natural teeth. They can replace a single tooth, multiple teeth, or even support full dentures for complete tooth loss."
          ]
        },
        {
          title: "Types of Dental Implants",
          description: [
            "**Endosteal Implants**: The most common type, these are placed directly into the jawbone. They typically look like small screws, cylinders, or plates and are suitable for most patients with adequate jawbone density.",
            "**Subperiosteal Implants**: These are placed under the gum but above the jawbone. They're ideal for patients who don't have enough healthy jawbone and cannot or do not want to undergo bone augmentation procedures.",
            "**All-on-4/All-on-6**: These are full-arch restoration techniques where four or six implants support an entire arch of teeth. This is an efficient solution for patients who need to replace all teeth in an arch.",
            "**Mini Dental Implants (MDIs)**: Smaller in diameter than traditional implants, MDIs are less invasive and often used to stabilize lower dentures or in areas with limited bone width.",
            "**Zygomatic Implants**: These are the longest implants available and are anchored in the cheekbone (zygoma) rather than the jawbone, used for patients with severe upper jaw bone loss."
          ]
        }
      ],
      featureChecklist: [
        "Endosteal implants for most common cases",
        "Subperiosteal for limited jawbone situations",
        "All-on-4/6 for full arch replacements",
        "Mini implants for less invasive options",
        "Zygomatic implants for severe bone loss"
      ]
    },
    {
      id: 6,
      title: "Teeth whitening: Professional vs. at-home treatments",
      excerpt: "Compare the effectiveness, safety, and results of professional teeth whitening versus over-the-counter products to make an informed decision.",
      date: "Feb 20, 2025",
      readTime: "5 min",
      image: "/images/blog-teeth-whitening.jpg",
      category: "Cosmetic Dentistry",
      slug: "teeth-whitening-comparison",
      author: "Dr. Sneha Kapoor",
      tags: ["Teeth Whitening", "Cosmetic Dentistry", "Smile Enhancement", "Dental Aesthetics", "Whitening Treatments"],
      featured: true,
      detailsPageData: [
        {
          title: "Professional Teeth Whitening",
          description: [
            "Professional teeth whitening is performed by dental professionals using higher concentrations of whitening agents than what's available in over-the-counter products. The process typically involves applying a protective gel to your gums, then applying the whitening agent to your teeth, which may be activated by a special light or laser.",
            "**Advantages**: Faster results (often in one session), more dramatic whitening, customized treatment plans, reduced risk of gum irritation, and professional monitoring of the process.",
            "**Disadvantages**: Higher cost, requires dental appointments, and may cause temporary tooth sensitivity in some individuals."
          ]
        },
        {
          title: "At-Home Whitening Options",
          description: [
            "**Whitening Toothpastes**: Contain mild abrasives and low concentrations of whitening agents. Best for surface stains but limited for deeper discoloration.",
            "**Whitening Strips**: Thin, flexible plastic strips coated with a peroxide-based gel. Easy to use but may not reach all tooth surfaces evenly.",
            "**Whitening Gels and Trays**: Similar to professional take-home kits but with lower concentrations. Custom trays from your dentist provide better coverage than store-bought versions.",
            "**Whitening Rinses**: Contain oxygen sources like hydrogen peroxide. Easy to incorporate into daily routine but require longer use for noticeable results.",
            "**Charcoal and Natural Remedies**: Popular but not scientifically proven effective and may be abrasive to tooth enamel."
          ]
        },
        {
          title: "Making the Right Choice",
          description: [
            "**For Severe Stains**: Professional whitening is recommended for deep-set stains from medications, trauma, or years of coffee/tea consumption.",
            "**For Maintenance**: At-home products work well for maintaining professional results or addressing mild surface stains.",
            "**For Sensitive Teeth**: Professional supervision ensures proper technique and can address sensitivity issues immediately.",
            "**Budget Considerations**: At-home options are more affordable but may require multiple applications over time.",
            "Always consult with your dentist before starting any whitening treatment to ensure it's safe for your specific dental condition."
          ]
        }
      ],
      featureChecklist: [
        "Professional treatment for faster, dramatic results",
        "Custom take-home kits from your dentist",
        "Over-the-counter strips and gels for mild staining",
        "Whitening toothpastes for daily maintenance",
        "Proper consultation for sensitive teeth cases"
      ]
    }
  ]
}

// Helper to convert to BlogsSectionData format
export function toBlogsSectionData(): { blogs: BlogCardData[] } {
  return {
    blogs: blogsData.blogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      excerpt: blog.excerpt,
      date: blog.date,
      readTime: blog.readTime,
      image: blog.image,
      category: blog.category,
      slug: blog.slug
    }))
  }
}

// Get individual blog by ID
export function getBlogById(id: string | number): BlogDetailData | undefined {
  return blogsData.blogs.find(blog => blog.id.toString() === id.toString())
}

// Get blog by slug
export function getBlogBySlug(slug: string): BlogDetailData | undefined {
  return blogsData.blogs.find(blog => blog.slug === slug)
}

// Get featured blogs
export function getFeaturedBlogs(): BlogDetailData[] {
  return blogsData.blogs.filter(blog => blog.featured)
}

// Get blogs by category
export function getBlogsByCategory(category: string): BlogDetailData[] {
  return blogsData.blogs.filter(blog => blog.category === category)
}

// Get latest blogs (limit number)
export function getLatestBlogs(limit: number = 3): BlogDetailData[] {
  return blogsData.blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}