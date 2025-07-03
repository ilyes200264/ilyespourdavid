"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo-main.png"
                alt="Quoi Faire Avec Ma Maison"
                width={180}
                height={180}
                className="h-20 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-zinc-300 mb-6">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-zinc-400 hover:text-brand-400 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-zinc-400 hover:text-brand-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-zinc-400 hover:text-brand-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-fonctionne" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("nav.howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/commentaires" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("nav.testimonials")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/blogue" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.serviceAreas")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/vendre-ma-maison-rapidement-grand-montreal"
                  className="text-zinc-300 hover:text-brand-400 transition-colors"
                >
                  {t("footer.grandMontreal")}
                </Link>
              </li>
              <li>
                <Link
                  href="/vendre-ma-maison-rapidement-rive-sud"
                  className="text-zinc-300 hover:text-brand-400 transition-colors"
                >
                  {t("footer.riveSud")}
                </Link>
              </li>
              <li>
                <Link
                  href="/vendre-ma-maison-rapidement-rive-nord"
                  className="text-zinc-300 hover:text-brand-400 transition-colors"
                >
                  {t("footer.riveNord")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-400 mt-1 flex-shrink-0" />
                <a href="tel:514-623-4280" className="text-zinc-300 hover:text-brand-400 transition-colors">
                  {t("common.phone")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@quoifaireavecmamaison.com"
                  className="text-zinc-300 hover:text-brand-400 transition-colors"
                >
                  {t("common.email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-400 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Grand Montréal, Québec</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-4">{t("footer.subscribe")}</h4>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm mb-4 md:mb-0">{t("footer.copyright")}</p>
            <div className="flex space-x-4 text-sm">
              <Link
                href="/politique-de-confidentialite"
                className="text-zinc-400 hover:text-brand-400 transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link href="/conditions-utilisation" className="text-zinc-400 hover:text-brand-400 transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
