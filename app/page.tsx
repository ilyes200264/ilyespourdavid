"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Check,
  ArrowRight,
  Clock,
  DollarSign,
  Home,
  Percent,
  Shield,
  PenToolIcon as Tool,
  Users,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import OfferForm from "@/components/offer-form"
import TestimonialSlider from "@/components/testimonial-slider"
import AnimatedSection from "@/components/animated-section"
import AreaCard from "@/components/area-card"
import InvestorForm from "@/components/investor-form"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()
  const [showInvestorForm, setShowInvestorForm] = useState(false)
  const [formType, setFormType] = useState<"investisseur" | "preteur">("investisseur")

  const openInvestorForm = (type: "investisseur" | "preteur") => {
    setFormType(type)
    setShowInvestorForm(true)
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/house-night.jpeg"
            alt="Maisons à Montréal"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-zinc-900/40"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                {t("hero.title")}{" "}
                <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                  {t("hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                {t("hero.subtitle")}
                <strong className="text-brand-400"> {t("hero.subtitleBold")}</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="bg-brand-500/20 rounded-full p-2">
                    <Check size={20} className="text-brand-400" />
                  </div>
                  <p className="text-sm md:text-base">{t("hero.noCommission")}</p>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="bg-brand-500/20 rounded-full p-2">
                    <Check size={20} className="text-brand-400" />
                  </div>
                  <p className="text-sm md:text-base">{t("hero.asIs")}</p>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="bg-brand-500/20 rounded-full p-2">
                    <Check size={20} className="text-brand-400" />
                  </div>
                  <p className="text-sm md:text-base">{t("hero.evenAbandoned")}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
                  onClick={() => {
                    document.getElementById("obtenir-offre")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {t("hero.getCashOffer")}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-black bg-white hover:bg-white/90"
                >
                  <Link href="/comment-ca-fonctionne">
                    {t("hero.howItWorks")}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Abandoned Houses Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.abandonedHousesTitle")} <span className="text-brand-700">TOUTES</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">{t("home.abandonedHousesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Abandoned House 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/abandoned-house-1.png"
                  alt="Maison abandonnée au Canada"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t("home.abandonedLabel")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t("home.abandonedLabel")} {t("home.abandonedLabel") === "Abandoned" ? "Houses" : "Maisons"}
                </h3>
                <p className="text-gray-600 text-sm">{t("home.abandonedDesc")}</p>
              </div>
            </div>

            {/* Abandoned House 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/abandoned-house-2.jpg"
                  alt="Maison endommagée en Ontario"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t("home.damagedLabel")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t("home.damagedLabel")} {t("home.damagedLabel") === "Damaged" ? "Houses" : "Maisons"}
                </h3>
                <p className="text-gray-600 text-sm">{t("home.damagedDesc")}</p>
              </div>
            </div>

            {/* Good House */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/montreal-house.jpeg" alt="Belle maison à Montréal" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t("home.goodConditionLabel")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t("home.goodConditionLabel")}{" "}
                  {t("home.goodConditionLabel") === "Good condition" ? "Houses" : "Maisons"}
                </h3>
                <p className="text-gray-600 text-sm">{t("home.goodConditionDesc")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-brand-700">
            <div className="flex items-start gap-4">
              <div className="bg-brand-100 rounded-full p-2 mt-1">
                <AlertTriangle size={24} className="text-brand-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t("home.situationsWeHandle")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.abandonedYears")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.waterFireDamage")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.moldProblems")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.problematicTenants")}</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.structuralProblems")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.complicatedSuccession")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.divorceOrSeparation")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.financialDifficulties")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Investor Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.investorTitle")}</h2>
            <p className="text-lg text-gray-600 mb-8">{t("home.investorSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Investisseur Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t("home.investorCardTitle")}</h3>
                  <p className="text-gray-600 mb-6">{t("home.investorCardDesc")}</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.exclusiveProperties")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.abandonedAtDiscount")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.profitabilityAnalysis")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.professionalSupport")}</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => openInvestorForm("investisseur")}
                    className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
                  >
                    {t("home.investorCardTitle")}
                  </Button>
                </div>
              </div>

              {/* Prêteur Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t("home.lenderCardTitle")}</h3>
                  <p className="text-gray-600 mb-6">{t("home.lenderCardDesc")}</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.attractiveReturns")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.securedProjects")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-brand-700" />
                      <span className="text-sm">{t("home.totalTransparency")}</span>
                    </li>
                  </ul>
                  <Button
                    onClick={() => openInvestorForm("preteur")}
                    className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
                  >
                    {t("home.lenderCardTitle")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Offer Form Section */}
      <section id="obtenir-offre" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.offerIn24h")}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("home.offerFormSubtitle")} <strong className="text-brand-700">{t("home.offerFormBold")}</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gradient-to-br from-brand-700 to-brand-800 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">{t("features.whyChoose")}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("home.offer24h")}</p>
                        <p className="text-teal-100 text-sm">{t("home.offer24hDesc")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("features.noCommission")}</p>
                        <p className="text-teal-100 text-sm">{t("home.noCommissionSave")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("features.noRepairs")}</p>
                        <p className="text-teal-100 text-sm">{t("home.buyAsIs")}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <Check size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{t("features.allSituations")}</p>
                        <p className="text-teal-100 text-sm">{t("home.allSituationsShort")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <OfferForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("features.whyChoose")}</h2>
            <p className="text-lg text-gray-600">{t("features.whyChooseSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCardComponent
              icon={Clock}
              title={t("features.fastSale")}
              description={t("features.fastSaleDesc")}
              gradient="bg-gradient-to-br from-brand-700 to-brand-800"
            />
            <FeatureCardComponent
              icon={DollarSign}
              title={t("features.noCommission")}
              description={t("features.noCommissionDesc")}
              gradient="bg-gradient-to-br from-brand-700 to-brand-800"
            />
            <FeatureCardComponent
              icon={Percent}
              title={t("features.fairOffer")}
              description={t("features.fairOfferDesc")}
              gradient="bg-gradient-to-br from-brand-700 to-brand-800"
            />
            <FeatureCardComponent
              icon={Tool}
              title={t("features.noRepairs")}
              description={t("features.noRepairsDesc")}
              gradient="bg-gradient-to-br from-brand-700 to-brand-800"
            />
            <FeatureCardComponent
              icon={Shield}
              title={t("features.allSituations")}
              description={t("features.allSituationsDesc")}
              gradient="bg-gradient-to-br from-brand-700 to-brand-800"
            />
            <FeatureCardComponent
              icon={Home}
              title={t("features.totalFlexibility")}
              description={t("features.totalFlexibilityDesc")}
              gradient="bg-gradient-to-br from-brand-700 to-brand-800"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Why People Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                {t("home.whyPeopleChooseTitle")}
              </span>
            </h2>
            <p className="text-lg text-gray-600">{t("home.whyPeopleChooseSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-brand-800">{t("home.commonSituations")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.divorceOrSeparation")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.financialDifficulties")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.complicatedSuccession")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">
                        {t("home.divorceOrSeparation") === "Divorce or separation"
                          ? "Urgent move"
                          : "Déménagement urgent"}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">
                        {t("home.divorceOrSeparation") === "Divorce or separation"
                          ? "House in poor condition"
                          : "Maison en mauvais état"}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-blue-800">{t("home.propertyOwners")}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-semibold">{t("home.dontWantToManage")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.problematicTenantsShort")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.expensiveRepairs")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.managementStress")}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full p-1 mt-1">
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-gray-700">{t("home.insufficientProfitability")}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">{t("home.whateverSituation")}</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
                onClick={() => {
                  document.getElementById("obtenir-offre")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {t("home.discoverSolution")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.howItWorksTitle")}</h2>
            <p className="text-lg text-gray-600">{t("home.howItWorksSubtitle")}</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-700 to-brand-800 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <AnimatedSection delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                    <div className="absolute -z-10 w-20 h-20 rounded-full bg-brand-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-lg mt-4 mb-2">{t("home.step1Title")}</h3>
                  <p className="text-gray-600 text-sm">{t("home.step1Desc")}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                    <div className="absolute -z-10 w-20 h-20 rounded-full bg-brand-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-lg mt-4 mb-2">{t("home.step2Title")}</h3>
                  <p className="text-gray-600 text-sm">{t("home.step2Desc")}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                    <div className="absolute -z-10 w-20 h-20 rounded-full bg-brand-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-lg mt-4 mb-2">{t("home.step3Title")}</h3>
                  <p className="text-gray-600 text-sm">{t("home.step3Desc")}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                    <div className="absolute -z-10 w-20 h-20 rounded-full bg-brand-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                  <h3 className="font-bold text-lg mt-4 mb-2">{t("home.step4Title")}</h3>
                  <p className="text-gray-600 text-sm">{t("home.step4Desc")}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
            >
              <Link href="/comment-ca-fonctionne">{t("home.learnMoreProcess")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.testimonialsTitle")}</h2>
            <p className="text-lg text-gray-600">{t("home.testimonialsSubtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialSlider />
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-brand-700 text-brand-700 hover:bg-brand-50 bg-transparent"
            >
              <Link href="/commentaires">
                {t("home.viewAllTestimonials")}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.ctaTitle")}</h2>
              <p className="text-lg mb-8">{t("home.ctaSubtitle")}</p>

              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="border-white text-white hover:bg-white hover:text-brand-700 bg-transparent"
                >
                  <a href="tel:514-623-4280">{t("common.callUs")}: 514-623-4280</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/10 rounded-full"></div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 relative z-10">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-zinc-800 mb-6">{t("home.ctaContactToday")}</h3>
                  <OfferForm buttonText={t("home.sendRequest")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("home.areasTitle")}</h2>
            <p className="text-lg text-gray-600">{t("home.areasSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AreaCard name={t("footer.grandMontreal")} image="/images/montreal-house.jpeg" />
            <AreaCard name={t("footer.riveSud")} image="/images/rive-sud-house.webp" />
            <AreaCard name={t("footer.riveNord")} image="/images/rive-nord-house.jpeg" />
          </div>
        </div>
      </AnimatedSection>

      {/* Investor Form Modal */}
      {showInvestorForm && <InvestorForm type={formType} onClose={() => setShowInvestorForm(false)} />}
    </div>
  )
}

const FeatureCardComponent = ({ icon: Icon, title, description, gradient }: { 
  icon: React.ComponentType<{ size?: number; className?: string }>; 
  title: string; 
  description: string; 
  gradient?: string; 
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white">
      <div
        className={
          gradient ||
          "bg-gradient-to-br from-brand-700 to-brand-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        }
      >
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
