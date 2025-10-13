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
      <ContentContainer className="md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SAI Dental Clinic
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative gap-3 px-4 pb-2 pt-1 transition-colors duration-300",
                    pathName.includes(item.href)
                      ? "text-primary"
                      : "text-black hover:text-primary/90"
                  )}
                >
                  <span className="group relative space-y-1">
                    <motion.h2
                      whileHover={{ y: -2 }}
                      className="text-lg font-medium transition-all duration-300 group-hover:text-primary/70"
                    >
                      {item.label}
                    </motion.h2>
                    <span
                      className={cn(
                        `absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300`,
                        pathName.includes(item.href)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      )}
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Book Appointment Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleContactClick}>
              Contact Us
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
          </Button>
        </div>
      </ContentContainer>

      {/* Mobile Navigation */}
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
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium"
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleContactClick}>
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
