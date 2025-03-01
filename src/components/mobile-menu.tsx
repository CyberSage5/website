"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl" onClick={closeMenu}>
              <span className="text-primary">IESC</span>
            </Link>
            <button onClick={toggleMenu} className="flex items-center justify-center p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container flex flex-col space-y-8 py-8">
            <Link href="#home" className="text-2xl font-medium" onClick={closeMenu}>
              Home
            </Link>
            <Link href="#services" className="text-2xl font-medium" onClick={closeMenu}>
              Services
            </Link>
            <Link href="#contact" className="text-2xl font-medium" onClick={closeMenu}>
              Contact
            </Link>
            <Link href="tel:+2347034994623" className="text-2xl font-medium" onClick={closeMenu}>
              +234 703 499 4623
            </Link>
            <Link
              href="https://cal.com/your-scheduling-link"
              className="text-2xl font-medium"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

