"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Check,
  ArrowRight,
  Building2,
  Calculator,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Shield,
  Home,
  AlertTriangle,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/i18n"

export default function AchatMultilogements() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/longueuil-duplex.jpeg"
            alt={t("multiUnit.title") + " " + t("multiUnit.titleHighlight")}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("multiUnit.title")}{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {t("multiUnit.titleHighlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">{t("multiUnit.subtitle")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <Check size={20} className="text-blue-400" />
                </div>
                <p className="text-sm md:text-base">{t("multiUnit.withOrWithoutTenants")}</p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <Check size={20} className="text-blue-400" />
                </div>
                <p className="text-sm md:text-base">{t("multiUnit.allConditionsAccepted")}</p>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <Check size={20} className="text-blue-400" />
                </div>
                <p className="text-sm md:text-base">{t("multiUnit.fastCashPayment")}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                onClick={() => {
                  document.getElementById("formulaire-multilogement")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {t("multiUnit.getFreeEvaluation")}
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/90"
              >
                <a href="tel:514-623-4280">
                  {t("multiUnit.callUs")}
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Situations problématiques */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("multiUnit.problemsTitle")} <span className="text-red-600">{t("multiUnit.problemsHighlight")}</span>{" "}
              {t("multiUnit.problemsSubtitle")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{t("multiUnit.problemsDescription")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Locataires problématiques */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="text-red-500" />
                <h3 className="text-xl font-bold">{t("multiUnit.problematicTenantsTitle")}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-red-500" />
                  <span>{t("multiUnit.nonPaymentRent")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-red-500" />
                  <span>{t("multiUnit.propertyDamage")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-red-500" />
                  <span>{t("multiUnit.constantConflicts")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-red-500" />
                  <span>{t("multiUnit.evictionProcedures")}</span>
                </li>
              </ul>
            </div>

            {/* Réparations coûteuses */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <Wrench size={24} className="text-orange-500" />
                <h3 className="text-xl font-bold">{t("multiUnit.majorRepairsTitle")}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-orange-500" />
                  <span>{t("multiUnit.roofReplacement")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-orange-500" />
                  <span>{t("multiUnit.plumbingFailure")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-orange-500" />
                  <span>{t("multiUnit.electricalSystem")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-orange-500" />
                  <span>{t("multiUnit.foundationProblems")}</span>
                </li>
              </ul>
            </div>

            {/* Gestion difficile */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-yellow-500" />
                <h3 className="text-xl font-bold">{t("multiUnit.complexManagementTitle")}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-yellow-500" />
                  <span>{t("multiUnit.tooMuchTimeRequired")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-yellow-500" />
                  <span>{t("multiUnit.constantStress")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-yellow-500" />
                  <span>{t("multiUnit.lowProfitability")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-yellow-500" />
                  <span>{t("multiUnit.complexRegulations")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">{t("multiUnit.solutionTitle")}</h3>
              <p className="text-lg text-gray-600 mb-6">{t("multiUnit.solutionDescription")}</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                onClick={() => {
                  document.getElementById("formulaire-multilogement")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {t("multiUnit.freeYourselfButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types de multilogements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("multiUnit.typesTitle")}</h2>
            <p className="text-lg text-gray-600">{t("multiUnit.typesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("multiUnit.duplexTitle")}</h3>
                <p className="text-gray-600 text-sm mb-4">{t("multiUnit.duplexDesc")}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t("multiUnit.duplexFeature1")}</li>
                  <li>• {t("multiUnit.duplexFeature2")}</li>
                  <li>• {t("multiUnit.duplexFeature3")}</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("multiUnit.triplexTitle")}</h3>
                <p className="text-gray-600 text-sm mb-4">{t("multiUnit.triplexDesc")}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t("multiUnit.triplexFeature1")}</li>
                  <li>• {t("multiUnit.triplexFeature2")}</li>
                  <li>• {t("multiUnit.triplexFeature3")}</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("multiUnit.quadruplexTitle")}</h3>
                <p className="text-gray-600 text-sm mb-4">{t("multiUnit.quadruplexDesc")}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t("multiUnit.quadruplexFeature1")}</li>
                  <li>• {t("multiUnit.quadruplexFeature2")}</li>
                  <li>• {t("multiUnit.quadruplexFeature3")}</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t("multiUnit.building5PlusTitle")}</h3>
                <p className="text-gray-600 text-sm mb-4">{t("multiUnit.building5PlusDesc")}</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t("multiUnit.building5PlusFeature1")}</li>
                  <li>• {t("multiUnit.building5PlusFeature2")}</li>
                  <li>• {t("multiUnit.building5PlusFeature3")}</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Avantages de vendre avec nous */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("multiUnit.whySellTitle")}</h2>
            <p className="text-lg text-gray-600">{t("multiUnit.whySellSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("multiUnit.tenantManagementTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("multiUnit.tenantManagementDesc")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.tenantNegotiation")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.legalProcedures")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.relocationHelp")}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Calculator size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("multiUnit.expertEvaluationTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("multiUnit.expertEvaluationDesc")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.rentalIncomeAnalysis")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.repairEvaluation")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.improvementPotential")}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("multiUnit.fastTransactionTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("multiUnit.fastTransactionDesc")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.guaranteedFastClosing")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.administrativeManagement")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.leaseTransfer")}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <DollarSign size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("multiUnit.noFeesTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("multiUnit.noFeesDesc")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.zeroCommission")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.noRepairsRequired")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.legalFeesPaid")}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("multiUnit.confidentialityTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("multiUnit.confidentialityDesc")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.noSigns")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.minimalVisits")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.discreteProcess")}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("multiUnit.realEstateExpertiseTitle")}</h3>
                <p className="text-gray-600 mb-4">{t("multiUnit.realEstateExpertiseDesc")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.marketExpertise")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.professionalNetwork")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-blue-600" />
                    <span>{t("multiUnit.creativeSolutions")}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Processus d'achat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("multiUnit.processTitle")}</h2>
            <p className="text-lg text-gray-600">{t("multiUnit.processSubtitle")}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 transform -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
                {[
                  {
                    number: 1,
                    title: t("multiUnit.initialAnalysisTitle"),
                    description: t("multiUnit.initialAnalysisDesc"),
                  },
                  {
                    number: 2,
                    title: t("multiUnit.detailedVisitTitle"),
                    description: t("multiUnit.detailedVisitDesc"),
                  },
                  {
                    number: 3,
                    title: t("multiUnit.tenantMeetingTitle"),
                    description: t("multiUnit.tenantMeetingDesc"),
                  },
                  {
                    number: 4,
                    title: t("multiUnit.offerCalculationTitle"),
                    description: t("multiUnit.offerCalculationDesc"),
                  },
                  {
                    number: 5,
                    title: t("multiUnit.negotiationTitle"),
                    description: t("multiUnit.negotiationDesc"),
                  },
                  {
                    number: 6,
                    title: t("multiUnit.closingTitle"),
                    description: t("multiUnit.closingDesc"),
                  },
                ].map((step, index) => (
                  <AnimatedSection key={step.number} delay={0.1 * (index + 1)}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-lg font-bold">
                          {step.number}
                        </div>
                        <div className="absolute -z-10 w-16 h-16 rounded-full bg-blue-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                      </div>
                      <h3 className="font-bold text-base mt-3 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-xs">{step.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="formulaire-multilogement" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("multiUnit.formTitle")}</h2>
              <p className="text-lg text-gray-600">{t("multiUnit.formSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{t("multiUnit.formAnalysisTitle")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calculator size={20} className="text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("multiUnit.financialAnalysis")}</p>
                      <p className="text-blue-100 text-sm">{t("multiUnit.financialAnalysisDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 size={20} className="text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("multiUnit.propertyCondition")}</p>
                      <p className="text-blue-100 text-sm">{t("multiUnit.propertyConditionDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("multiUnit.rentalSituation")}</p>
                      <p className="text-blue-100 text-sm">{t("multiUnit.rentalSituationDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp size={20} className="text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold">{t("multiUnit.improvementPotentialTitle")}</p>
                      <p className="text-blue-100 text-sm">{t("multiUnit.improvementPotentialDesc")}</p>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("common.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(514) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("forms.propertyAddress")} *
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder={t("forms.propertyAddressPlaceholder")}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("multiUnit.numberOfUnits")}
                      </label>
                      <select
                        id="units"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">{t("multiUnit.selectUnits")}</option>
                        <option value="2">{t("multiUnit.twoUnits")}</option>
                        <option value="3">{t("multiUnit.threeUnits")}</option>
                        <option value="4">{t("multiUnit.fourUnits")}</option>
                        <option value="5">{t("multiUnit.fiveUnits")}</option>
                        <option value="6+">{t("multiUnit.sixPlusUnits")}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("multiUnit.monthlyRevenue")}
                      </label>
                      <input
                        type="number"
                        id="revenue"
                        placeholder={t("multiUnit.revenuePlaceholder")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="situation" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("multiUnit.currentSituation")}
                    </label>
                    <textarea
                      id="situation"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder={t("multiUnit.situationPlaceholder")}
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white">
                    {t("multiUnit.submitButton")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("multiUnit.ctaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("multiUnit.ctaSubtitle")}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <a href="tel:514-623-4280">{t("multiUnit.ctaCallButton")}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
              <Link href="/nous-joindre">
                {t("multiUnit.ctaContactButton")}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
