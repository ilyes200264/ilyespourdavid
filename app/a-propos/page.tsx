"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Shield, Heart, Award, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import OfferForm from "@/components/offer-form"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-700 to-brand-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-brand-900/40"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left max-w-xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t("about.title")}{" "}
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {t("about.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                {t("about.heroSubtitle")}
              </p>
            </motion.div>

            {/* Image à droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full"
            >
              <Image
                src="/images/pexels-tomfisk-7815702.webp"
                alt="Maison canadienne typique"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>



      {/* Our Story Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.ourStoryTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 gap-12 items-center">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/logo-main.png"
                  alt="Quoi Faire Avec Ma Maison"
                  width={200}
                  height={200}
                  className="h-24 w-auto"
                />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">{t("about.storyParagraph1")}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{t("about.storyParagraph2")}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{t("about.storyParagraph3")}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.teamTitle")}</h2>
            <p className="text-lg text-gray-600">{t("about.teamSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src="/images/david-manianga-professional.png"
                      alt="David Manianga"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold mb-2">David Manianga</h3>
                    <p className="text-brand-700 font-semibold mb-6">{t("about.founderTitle")}</p>

                    <div className="space-y-4 mb-8">
                      <p className="text-gray-700 leading-relaxed">{t("about.davidBio1")}</p>
                      <p className="text-gray-700 leading-relaxed">{t("about.davidBio2")}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-brand-700" />
                        <a href="tel:514-623-4280" className="text-gray-700 hover:text-brand-700 transition-colors">
                          514‑623‑4280
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-brand-700" />
                        <a
                          href="mailto:info@quoifaireavecmamaison.com"
                          className="text-gray-700 hover:text-brand-700 transition-colors"
                        >
                          info@quoifaireavecmamaison.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.valuesTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="text-center p-8 h-full border-2 border-transparent hover:border-brand-200 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("about.transparencyTitle")}</h3>
                  <p className="text-gray-600 leading-relaxed">{t("about.transparencyDesc")}</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center p-8 h-full border-2 border-transparent hover:border-brand-200 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("about.integrityTitle")}</h3>
                  <p className="text-gray-600 leading-relaxed">{t("about.integrityDesc")}</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="text-center p-8 h-full border-2 border-transparent hover:border-brand-200 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t("about.excellenceTitle")}</h3>
                  <p className="text-gray-600 leading-relaxed">{t("about.excellenceDesc")}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* How We Work Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-brand-50 to-brand-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.howWeWorkTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-brand-700 rounded-full p-3">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.philosophyTitle")}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{t("about.philosophyDesc")}</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-brand-700 rounded-full p-3">
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{t("about.commitmentTitle")}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{t("about.commitmentDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.contactTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 rounded-full p-3 mt-1">
                    <Phone size={24} className="text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("about.phoneTitle")}</h3>
                    <a
                      href="tel:514-623-4280"
                      className="text-brand-700 hover:text-brand-800 transition-colors text-lg"
                    >
                      514‑623‑4280
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 rounded-full p-3 mt-1">
                    <Mail size={24} className="text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("about.emailTitle")}</h3>
                    <a
                      href="mailto:info@quoifaireavecmamaison.com"
                      className="text-brand-700 hover:text-brand-800 transition-colors"
                    >
                      info@quoifaireavecmamaison.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 rounded-full p-3 mt-1">
                    <MapPin size={24} className="text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t("about.serviceAreaTitle")}</h3>
                    <p className="text-gray-700">{t("about.serviceAreaDesc")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">{t("about.contactFormTitle")}</h3>
                <OfferForm />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.ctaTitle")}</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">{t("about.ctaSubtitle")}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-700 hover:bg-gray-100"
                onClick={() => {
                  document.getElementById("obtenir-offre")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {t("common.getOfferNow")}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/90"
              >
                <a href="tel:514-623-4280">
                  {t("common.callUs")}: {t("common.phone")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
