"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ContentContainer from "./common-ui/containers/ContentContainer"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/servicePage", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/dentist", label: "Dentist" },
    // { href: "#contact", label: "Contact" },
  ]

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
  }

  const handleContactClick = () => {
    router.push("/contact")
    setIsMenuOpen(false)
  }

  return (
    <motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="sticky top-0 z-50 bg-white shadow-sm"
>
    <ContentContainer className="py-1 md:py-2">
  <div className="container mx-auto flex items-center justify-between h-12"> 
 
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      <Link href="/" className="text-lg font-bold text-blue-600">
        SAI Dental  Clinic
      </Link>
    </motion.div>


    <nav className="hidden md:flex items-center space-x-2">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "px-2 py-1 text-sm transition-colors duration-200 rounded", 
            pathName.includes(item.href)
              ? "text-primary bg-blue-50"
              : "text-gray-600 hover:text-primary hover:bg-blue-50"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>


    <Button 
      size="sm"
      className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm"
      onClick={handleContactClick}
    >
      Contact
    </Button>
  </div>
</ContentContainer>


  <AnimatePresence>
    {isMenuOpen && (
      <motion.nav
        key="mobile-nav"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white border-t md:hidden overflow-hidden"
      >
        <div className="container mx-auto space-y-1 px-4 py-2"> {/* Reduced spacing */}
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              custom={i}
              variants={mobileItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium" // Smaller text and padding
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="pt-1"
          >
            <Button 
              size="sm" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    )}
  </AnimatePresence>
</motion.header>
  )
}

export default Header
