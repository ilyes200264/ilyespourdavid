"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Check,
  ArrowRight,
  MapPin,
  Calculator,
  FileText,
  Clock,
  DollarSign,
  Zap,
  TreePine,
  Building,
  Home,
  Factory,
  Mountain,
  Waves,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"

export default function AchatTerrains() {
  const { t } = useLanguage()

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/terrain-a-vendre.jpeg"
            alt="Terrain à vendre"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/60"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("landPurchase.title")}{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {t("landPurchase.titleHighlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">{t("landPurchase.subtitle")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-green-500/20 rounded-full p-2">
                  <Check size={20} className="text-green-400" />
                </div>
                <p className="text-sm md:text-base">{t("landPurchase.freeEvaluation")}</p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-green-500/20 rounded-full p-2">
                  <Check size={20} className="text-green-400" />
                </div>
                <p className="text-sm md:text-base">{t("landPurchase.guaranteedCash")}</p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-green-500/20 rounded-full p-2">
                  <Check size={20} className="text-green-400" />
                </div>
                <p className="text-sm md:text-base">{t("landPurchase.allTypesAccepted")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800"
                onClick={() => {
                  document.getElementById("formulaire-terrain")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {t("landPurchase.getFreeEvaluation")}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/90"
              >
                <a href="tel:514-623-4280">
                  {t("common.callUs")}: {t("common.phone")}
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Types de terrains */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("landPurchase.typesTitle")}</h2>
            <p className="text-lg text-gray-600">{t("landPurchase.typesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{t("landPurchase.residentialTitle")}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.residentialFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.residentialFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.residentialFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.residentialFeature4")}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">{t("landPurchase.residentialDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{t("landPurchase.commercialTitle")}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.commercialFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.commercialFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.commercialFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.commercialFeature4")}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">{t("landPurchase.commercialDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TreePine size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{t("landPurchase.agriculturalTitle")}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.agriculturalFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.agriculturalFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.agriculturalFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.agriculturalFeature4")}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">{t("landPurchase.agriculturalDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Factory size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{t("landPurchase.industrialTitle")}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.industrialFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.industrialFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.industrialFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.industrialFeature4")}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">{t("landPurchase.industrialDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mountain size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{t("landPurchase.forestTitle")}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.forestFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.forestFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.forestFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.forestFeature4")}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">{t("landPurchase.forestDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Waves size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{t("landPurchase.waterfrontTitle")}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.waterfrontFeature1")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.waterfrontFeature2")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.waterfrontFeature3")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" />
                    <span className="text-sm">{t("landPurchase.waterfrontFeature4")}</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">{t("landPurchase.waterfrontDesc")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("landPurchase.whyChooseTitle")}</h2>
            <p className="text-lg text-gray-600">{t("landPurchase.whyChooseSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("landPurchase.rapidEvaluationTitle")}</h3>
                <p className="text-gray-600">{t("landPurchase.rapidEvaluationDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("landPurchase.fairPriceTitle")}</h3>
                <p className="text-gray-600">{t("landPurchase.fairPriceDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("landPurchase.fastTransactionTitle")}</h3>
                <p className="text-gray-600">{t("landPurchase.fastTransactionDesc")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("landPurchase.noFeesTitle")}</h3>
                <p className="text-gray-600">{t("landPurchase.noFeesDesc")}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Processus d'achat */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("landPurchase.processTitle")}</h2>
            <p className="text-lg text-gray-600">{t("landPurchase.processSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-700 transform -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {[
                  {
                    number: 1,
                    title: t("landPurchase.processStep1"),
                    description: t("landPurchase.processStep1Desc"),
                  },
                  {
                    number: 2,
                    title: t("landPurchase.processStep2"),
                    description: t("landPurchase.processStep2Desc"),
                  },
                  {
                    number: 3,
                    title: t("landPurchase.processStep3"),
                    description: t("landPurchase.processStep3Desc"),
                  },
                  {
                    number: 4,
                    title: t("landPurchase.processStep4"),
                    description: t("landPurchase.processStep4Desc"),
                  },
                  {
                    number: 5,
                    title: t("landPurchase.processStep5"),
                    description: t("landPurchase.processStep5Desc"),
                  },
                ].map((step, index) => (
                  <AnimatedSection key={step.number} delay={0.1 * (index + 1)}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-white text-xl font-bold">
                          {step.number}
                        </div>
                        <div className="absolute -z-10 w-20 h-20 rounded-full bg-green-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                      </div>
                      <h3 className="font-bold text-lg mt-4 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="formulaire-terrain" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("landPurchase.formTitle")}</h2>
              <p className="text-lg text-gray-600">{t("landPurchase.formSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{t("landPurchase.formInfoTitle")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-green-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("landPurchase.formLocationLabel")}</p>
                      <p className="text-green-100 text-sm">{t("landPurchase.formLocationDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calculator size={20} className="text-green-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("landPurchase.formSizeLabel")}</p>
                      <p className="text-green-100 text-sm">{t("landPurchase.formSizeDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText size={20} className="text-green-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("landPurchase.formZoningLabel")}</p>
                      <p className="text-green-100 text-sm">{t("landPurchase.formZoningDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("landPurchase.formAccessLabel")}</p>
                      <p className="text-green-100 text-sm">{t("landPurchase.formAccessDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("common.firstName")} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        placeholder={t("common.firstName")}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("common.lastName")} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        placeholder={t("common.lastName")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("common.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder={t("common.email")}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("common.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder={t("common.phone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("forms.propertyAddress")} *
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder={t("forms.propertyAddressPlaceholder")}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("landPurchase.formSizeLabel")}
                      </label>
                      <input
                        type="text"
                        id="size"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        placeholder={t("landPurchase.sizePlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="zoning" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("landPurchase.landTypeLabel")}
                      </label>
                      <select
                        id="zoning"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">{t("landPurchase.landTypeSelect")}</option>
                        <option value="residential">{t("landPurchase.landTypeResidential")}</option>
                        <option value="commercial">{t("landPurchase.landTypeCommercial")}</option>
                        <option value="industrial">{t("landPurchase.landTypeIndustrial")}</option>
                        <option value="agricultural">{t("landPurchase.landTypeAgricultural")}</option>
                        <option value="forest">{t("landPurchase.landTypeForest")}</option>
                        <option value="waterfront">{t("landPurchase.landTypeWaterfront")}</option>
                        <option value="other">{t("landPurchase.landTypeOther")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("landPurchase.descriptionLabel")}
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder={t("landPurchase.descriptionPlaceholder")}
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white">
                    {t("landPurchase.submitButton")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("landPurchase.ctaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("landPurchase.ctaSubtitle")}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <a href="tel:514-623-4280">{t("landPurchase.ctaCallButton")}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
              <Link href="/nous-joindre">
                {t("common.contactUs")}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
