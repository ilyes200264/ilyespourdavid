"use client"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-official.png"
                alt="Quoi Faire Avec Ma Maison"
                width={150}
                height={150}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {t("footer.description") ||
                "Nous achetons votre propriété rapidement et au comptant, peu importe son état."}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks") || "Liens rapides"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.home") || "Accueil"}
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-fonctionne"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("nav.howItWorks") || "Comment ça fonctionne"}
                </Link>
              </li>
              <li>
                <Link href="/achat-terrains" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.landPurchase") || "Achat de terrains"}
                </Link>
              </li>
              <li>
                <Link href="/achat-multilogements" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.multiUnitPurchase") || "Achat multilogements"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.services") || "Services"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/commentaires" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.testimonials") || "Témoignages"}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.faq") || "FAQ"}
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.about") || "À propos"}
                </Link>
              </li>
              <li>
                <Link href="/blogue" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("nav.blog") || "Blogue"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact") || "Contact"}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-700" />
                <a href="tel:514-623-4280" className="text-gray-300 hover:text-white transition-colors text-sm">
                  514‑623‑4280
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-700" />
                <a
                  href="mailto:info@quoifaireavecmamaison.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@quoifaireavecmamaison.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-700 mt-0.5" />
                <span className="text-gray-300 text-sm">{t("footer.serviceArea") || "Grand Montréal et environs"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Quoi Faire Avec Ma Maison. {t("footer.allRightsReserved") || "Tous droits réservés"}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.privacy") || "Confidentialité"}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.terms") || "Conditions"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
