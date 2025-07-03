"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Clock, Shield, DollarSign, Users, FileText, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import OfferForm from "@/components/offer-form"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"

export default function CommentCaFonctionne() {
  const { t } = useLanguage()

  const scrollToOfferForm = () => {
    const offerForm = document.getElementById("offer-form")
    if (offerForm) {
      offerForm.scrollIntoView({ behavior: "smooth" })
    } else {
      // If form not found on current page, navigate to homepage
      window.location.href = "/#offer-form"
    }
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/house-driveway.jpeg"
            alt="Processus de vente de maison"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-zinc-900/40"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("howItWorks.title")}{" "}
              <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                {t("howItWorks.titleHighlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">{t("howItWorks.subtitle")}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("howItWorks.detailedProcessTitle")}</h2>
            <p className="text-lg text-gray-600">{t("howItWorks.detailedProcessSubtitle")}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold">{t("howItWorks.step1Title")}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{t("howItWorks.step1Description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step1Feature1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step1Feature2")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step1Feature3")}</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                    <FileText size={80} className="text-brand-700 mx-auto mb-4" />
                    <p className="text-center text-gray-600">{t("howItWorks.step1IconDesc")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                    <Users size={80} className="text-brand-700 mx-auto mb-4" />
                    <p className="text-center text-gray-600">{t("howItWorks.step2IconDesc")}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold">{t("howItWorks.step2Title")}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{t("howItWorks.step2Description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step2Feature1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step2Feature2")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step2Feature3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold">{t("howItWorks.step3Title")}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{t("howItWorks.step3Description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step3Feature1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step3Feature2")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step3Feature3")}</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                    <DollarSign size={80} className="text-brand-700 mx-auto mb-4" />
                    <p className="text-center text-gray-600">{t("howItWorks.step3IconDesc")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 4 */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                    <Home size={80} className="text-brand-700 mx-auto mb-4" />
                    <p className="text-center text-gray-600">{t("howItWorks.step4IconDesc")}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                    <h3 className="text-2xl font-bold">{t("howItWorks.step4Title")}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{t("howItWorks.step4Description")}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step4Feature1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step4Feature2")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check size={16} className="text-brand-700" />
                      <span>{t("howItWorks.step4Feature3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("howItWorks.whyDifferentTitle")}</h2>
            <p className="text-lg text-gray-600">{t("howItWorks.whyDifferentSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("howItWorks.speedTitle")}</h3>
                <p className="text-gray-600 text-sm">{t("howItWorks.speedDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("howItWorks.securityTitle")}</h3>
                <p className="text-gray-600 text-sm">{t("howItWorks.securityDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("howItWorks.savingsTitle")}</h3>
                <p className="text-gray-600 text-sm">{t("howItWorks.savingsDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t("howItWorks.supportTitle")}</h3>
                <p className="text-gray-600 text-sm">{t("howItWorks.supportDesc")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("howItWorks.comparisonTitle")}</h2>
            <p className="text-lg text-gray-600">{t("howItWorks.comparisonSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-brand-700 to-brand-800 text-white">
                  <th className="p-4 text-left">{t("howItWorks.aspectColumn")}</th>
                  <th className="p-4 text-left">{t("howItWorks.traditionalColumn")}</th>
                  <th className="p-4 text-left">{t("howItWorks.ourServiceColumn")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("howItWorks.saleTimeAspect")}</td>
                  <td className="p-4">{t("howItWorks.saleTimeTraditional")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("howItWorks.saleTimeOurs")}</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("howItWorks.commissionsAspect")}</td>
                  <td className="p-4">{t("howItWorks.commissionsTraditional")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("howItWorks.commissionsOurs")}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("howItWorks.repairsAspect")}</td>
                  <td className="p-4">{t("howItWorks.repairsTraditional")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("howItWorks.repairsOurs")}</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("howItWorks.visitsAspect")}</td>
                  <td className="p-4">{t("howItWorks.visitsTraditional")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("howItWorks.visitsOurs")}</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-semibold">{t("howItWorks.guaranteeAspect")}</td>
                  <td className="p-4">{t("howItWorks.guaranteeTraditional")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("howItWorks.guaranteeOurs")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("howItWorks.ctaTitle")}</h2>
              <p className="text-xl mb-8">{t("howItWorks.ctaSubtitle")}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToOfferForm} size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
                  {t("howItWorks.ctaButton")}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-brand-700 bg-white hover:bg-white/90"
                >
                  <a href="tel:514-623-4280">{t("howItWorks.ctaPhone")}</a>
                </Button>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-zinc-800 mb-6">{t("howItWorks.ctaFormTitle")}</h3>
                <div id="offer-form">
                  <OfferForm buttonText={t("howItWorks.ctaFormButton")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
