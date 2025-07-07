"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "@/components/language-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Small delay to ensure smooth scroll starts before navigation
    setTimeout(() => {
      router.push(href)
    }, 100)
  }

  const handleMobileNavigation = (href: string) => {
    setMobileMenuOpen(false)
    handleNavigation(href)
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div
        className={cn(
          "transition-all duration-300 w-full",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-zinc-800 text-white py-3",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-brand-700" />
                <a href="tel:514-623-4280" className="text-sm hover:text-brand-700 transition-colors">
                  514‑623‑4280
                </a>
              </div>
              <LanguageToggle />
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => {
                  const offerSection = document.getElementById("obtenir-offre")
                  if (offerSection) {
                    offerSection.scrollIntoView({
                      behavior: "smooth",
                    })
                  } else {
                    // If not on homepage, navigate to homepage first then scroll
                    router.push("/")
                    setTimeout(() => {
                      const section = document.getElementById("obtenir-offre")
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    }, 500)
                  }
                }}
                className="text-sm hover:text-brand-700 transition-colors cursor-pointer"
              >
                {t("nav.getOffer")}
              </button>
              <button
                onClick={() => handleNavigation("/achat-terrains")}
                className="text-sm hover:text-brand-700 transition-colors cursor-pointer"
              >
                {t("nav.sellLand")}
              </button>
              <button
                onClick={() => handleNavigation("/achat-multilogements")}
                className="text-sm hover:text-brand-700 transition-colors cursor-pointer"
              >
                {t("nav.sellMultiUnit")}
              </button>
              <button
                onClick={() => handleNavigation("/nous-joindre")}
                className="text-sm hover:text-brand-700 transition-colors cursor-pointer"
              >
                {t("nav.contact")}
              </button>
              <button
                onClick={() => handleNavigation("/blogue")}
                className="text-sm hover:text-brand-700 transition-colors cursor-pointer"
              >
                {t("nav.blog")}
              </button>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-brand-700 transition-colors"
              >
                <Facebook size={16} />
              </Link>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className={isScrolled ? "text-zinc-800" : "text-white"}
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={cn("transition-all duration-300 w-full", isScrolled ? "bg-white py-2" : "bg-white py-4")}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button onClick={() => handleNavigation("/")} className="flex items-center cursor-pointer">
              <Image
                src="/images/logo-official.png"
                alt="Quoi Faire Avec Ma Maison"
                width={200}
                height={200}
                className={cn("transition-all duration-300", isScrolled ? "h-16 w-auto" : "h-20 w-auto")}
                priority
              />
            </button>

            <nav className="hidden md:flex space-x-1">
              <NavLink href="/" onClick={() => handleNavigation("/")}>
                {t("nav.home")}
              </NavLink>
              <NavLink href="/comment-ca-fonctionne" onClick={() => handleNavigation("/comment-ca-fonctionne")}>
                {t("nav.howItWorks")}
              </NavLink>
              <NavLink href="/achat-terrains" onClick={() => handleNavigation("/achat-terrains")}>
                {t("nav.landPurchase")}
              </NavLink>
              <NavLink href="/achat-multilogements" onClick={() => handleNavigation("/achat-multilogements")}>
                {t("nav.multiUnitPurchase")}
              </NavLink>
              <NavLink href="/commentaires" onClick={() => handleNavigation("/commentaires")}>
                {t("nav.testimonials")}
              </NavLink>
              <NavLink href="/faq" onClick={() => handleNavigation("/faq")}>
                {t("nav.faq")}
              </NavLink>
              <NavLink href="/a-propos" onClick={() => handleNavigation("/a-propos")}>
                {t("nav.about")}
              </NavLink>
            </nav>

            <div className="hidden md:block">
              <Button
                className="bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white"
                onClick={(e) => {
                  e.preventDefault()
                  const offerSection = document.getElementById("obtenir-offre")
                  if (offerSection) {
                    offerSection.scrollIntoView({
                      behavior: "smooth",
                    })
                  } else {
                    // If not on homepage, navigate to homepage first then scroll
                    router.push("/")
                    setTimeout(() => {
                      const section = document.getElementById("obtenir-offre")
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    }, 500)
                  }
                }}
              >
                {t("nav.getOffer")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-4">
              <LanguageToggle />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </Button>
            </div>

            <div className="flex flex-col items-center gap-6 p-8">
              <button onClick={() => handleMobileNavigation("/")} className="flex items-center mb-8">
                <Image
                  src="/images/logo-official.png"
                  alt="Quoi Faire Avec Ma Maison"
                  width={150}
                  height={150}
                  className="h-16 w-auto"
                />
              </button>

              <MobileNavLink onClick={() => handleMobileNavigation("/")}>{t("nav.home")}</MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavigation("/comment-ca-fonctionne")}>
                {t("nav.howItWorks")}
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavigation("/achat-terrains")}>
                {t("nav.landPurchase")}
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavigation("/achat-multilogements")}>
                {t("nav.multiUnitPurchase")}
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavigation("/commentaires")}>
                {t("nav.testimonials")}
              </MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavigation("/faq")}>{t("nav.faq")}</MobileNavLink>
              <MobileNavLink onClick={() => handleMobileNavigation("/a-propos")}>{t("nav.about")}</MobileNavLink>

              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    const offerSection = document.getElementById("obtenir-offre")
                    if (offerSection) {
                      offerSection.scrollIntoView({
                        behavior: "smooth",
                      })
                    } else {
                      // If not on homepage, navigate to homepage first then scroll
                      router.push("/")
                      setTimeout(() => {
                        const section = document.getElementById("obtenir-offre")
                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                          })
                        }
                      }, 500)
                    }
                  }}
                >
                  {t("nav.getOffer")}
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <button
                  onClick={() => handleMobileNavigation("/obtenir-mon-offre")}
                  className="text-sm hover:text-brand-700 transition-colors"
                >
                  {t("nav.getOffer")}
                </button>
                <button
                  onClick={() => handleMobileNavigation("/achat-terrains")}
                  className="text-sm hover:text-brand-700 transition-colors"
                >
                  {t("nav.sellLand")}
                </button>
                <button
                  onClick={() => handleMobileNavigation("/achat-multilogements")}
                  className="text-sm hover:text-brand-700 transition-colors"
                >
                  {t("nav.sellMultiUnit")}
                </button>
                <button
                  onClick={() => handleMobileNavigation("/nous-joindre")}
                  className="text-sm hover:text-brand-700 transition-colors"
                >
                  {t("nav.contact")}
                </button>
                <button
                  onClick={() => handleMobileNavigation("/blogue")}
                  className="text-sm hover:text-brand-700 transition-colors"
                >
                  {t("nav.blog")}
                </button>
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:text-brand-700 transition-colors"
                >
                  <Facebook size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({ href, onClick, children }: { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="relative px-3 py-2 text-sm font-medium text-zinc-800 hover:text-brand-700 transition-colors group cursor-pointer"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </button>
  )
}

function MobileNavLink({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      className="text-xl font-medium text-zinc-800 hover:text-brand-700 transition-colors py-2 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
