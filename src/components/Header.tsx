"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import ContentContainer from "./common-ui/containers/ContentContainer"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { FaTooth } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/servicePage", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/dentist", label: "Dentist" },
  ]

  // Use consistent blue color (adjust based on your theme)
  const primaryColor = "text-blue-600"
  const primaryBg = "bg-blue-600"
  const primaryHover = "hover:bg-blue-700"
  const primaryBgLight = "bg-blue-50"

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
      className="sticky top-0 z-50 bg-white shadow-none"
    >
      <ContentContainer className="py-3 md:py-4">
        <div className="container mx-auto flex items-center justify-between h-16">
         
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
              {/* Tooth Icon with consistent blue background */}
              <div className={`${primaryBg} p-2 rounded-lg`}>
                <FaTooth className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${primaryColor}`}>
                SAI Dental Clinic
              </span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-base transition-colors duration-200 rounded flex items-center h-10",
                  pathName.includes(item.href)
                    ? `${primaryColor} ${primaryBgLight}`
                    : "text-gray-600 hover:text-primary hover:bg-blue-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button 
              size="default"
              className={`${primaryBg} ${primaryHover} text-white text-base px-6 h-10 flex items-center justify-center`}
              onClick={handleContactClick}
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
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
            className="bg-white md:hidden overflow-hidden" // REMOVED border-t here
          >
            <div className="container mx-auto space-y-2 px-4 py-4">
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
                    className={`block px-4 py-3 text-base text-gray-700 hover:${primaryBgLight} hover:${primaryColor} rounded-lg transition-colors duration-200 font-medium`}
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
                className="pt-2"
              >
                <Button 
                  size="default"
                  className={`w-full ${primaryBg} ${primaryHover} text-white py-3 h-12 flex items-center justify-center`}
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