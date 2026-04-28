"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
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
  ]

  const primaryColor = "text-blue-600"
  const primaryBg = "bg-blue-600"
  const primaryHover = "hover:bg-blue-700"
  const primaryBgLight = "bg-blue-50"

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
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <ContentContainer className="py-3 md:py-4">
        <div className="flex items-center justify-between h-16 px-4 sm:px-0">

          {/* Logo + Brand Name */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3"
            >
              {/* Logo image */}
              <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/icon.png"
                  alt="SAI Dental Clinic Logo"
                  width={36}
                  height={36}
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>

              {/* Brand name — large on mobile, normal on desktop */}
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-extrabold ${primaryColor} leading-none
                    text-2xl md:text-xl`}
                >
                  SAI Dental Clinic
                </span>
                {/* Optional tagline — visible only on desktop */}
                <span className="hidden md:block text-xs text-gray-400 tracking-wide mt-0.5">
                  Your Smile, Our 1st Priority
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-base transition-colors duration-200 rounded flex items-center h-10",
                  pathName.includes(item.href)
                    ? `${primaryColor} ${primaryBgLight}`
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Button
              size="default"
              className={`${primaryBg} ${primaryHover} text-white text-base px-6 h-10 flex items-center justify-center`}
              onClick={handleContactClick}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700 text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </ContentContainer>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white md:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="space-y-2 px-4 py-4 sm:px-0">
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
                    className={cn(
                      "block px-4 py-3 text-base rounded-lg transition-colors duration-200 font-medium",
                      pathName.includes(item.href)
                        ? `${primaryColor} ${primaryBgLight}`
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    )}
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