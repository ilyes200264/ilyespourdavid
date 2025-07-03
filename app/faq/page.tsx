"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import OfferForm from "@/components/offer-form"
import AnimatedSection from "@/components/animated-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"

export default function FAQ() {
  const { t } = useLanguage()

  return (
    <div className="pt-32">
      {/* Simple Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("faq.title")}{" "}
              <span className="bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                {t("faq.titleHighlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">{t("faq.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">{t("faq.faqSectionTitle")}</h2>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq1Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq1Answer")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq2Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq2Answer")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq3Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq3Answer")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq4Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq4Answer")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq5Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq5Answer")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq6Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq6Answer")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                    {t("faq.faq7Question")}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2">
                    <p className="text-gray-700">{t("faq.faq7Answer")}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">{t("faq.sidebarQuestionsTitle")}</h3>
                <p className="text-gray-600 mb-6">{t("faq.sidebarQuestionsText")}</p>
                <div className="flex flex-col gap-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
                  >
                    <a href={`tel:${t("common.phone")}`}>{t("faq.sidebarCallButton")}</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/nous-joindre">
                      {t("faq.sidebarContactButton")}
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">{t("faq.sidebarOfferTitle")}</h3>
                <OfferForm buttonText={t("faq.sidebarOfferButton")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("faq.comparisonTitle")}</h2>
            <p className="text-lg text-gray-600">{t("faq.comparisonSubtitle")}</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-brand-700 to-brand-800 text-white">
                  <th className="p-4 text-left">{t("faq.comparisonAspectColumn")}</th>
                  <th className="p-4 text-left">{t("faq.comparisonAgentColumn")}</th>
                  <th className="p-4 text-left">{t("faq.comparisonUsColumn")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonFeesRow")}</td>
                  <td className="p-4">{t("faq.comparisonFeesAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonFeesUs")}</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonCommissionRow")}</td>
                  <td className="p-4">{t("faq.comparisonCommissionAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonCommissionUs")}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonRepairsRow")}</td>
                  <td className="p-4">{t("faq.comparisonRepairsAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonRepairsUs")}</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonAppraisalRow")}</td>
                  <td className="p-4">{t("faq.comparisonAppraisalAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonAppraisalUs")}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonInspectionRow")}</td>
                  <td className="p-4">{t("faq.comparisonInspectionAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonInspectionUs")}</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonTimeRow")}</td>
                  <td className="p-4">{t("faq.comparisonTimeAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonTimeUs")}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td className="p-4 font-semibold">{t("faq.comparisonVisitsRow")}</td>
                  <td className="p-4">{t("faq.comparisonVisitsAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonVisitsUs")}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">{t("faq.comparisonMovingRow")}</td>
                  <td className="p-4">{t("faq.comparisonMovingAgent")}</td>
                  <td className="p-4 text-brand-700 font-medium">{t("faq.comparisonMovingUs")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-5xl mx-auto mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-bold text-blue-700 mb-2">NOTE:</p>
            <p className="text-blue-700">{t("faq.comparisonNote")}</p>
          </div>
        </div>
      </section>

      {/* Guide Download Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 rounded-full bg-brand-100"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 rounded-full bg-brand-200"></div>

              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vente-maison-guide.jpeg"
                  alt={t("faq.guideTitle")}
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t("faq.guideTitle")}</h2>

              <p className="text-lg text-gray-600 mb-6">{t("faq.guideText1")}</p>

              <p className="text-lg text-gray-600 mb-8">{t("faq.guideText2")}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900"
                >
                  <Link href="/telecharger-guide">{t("faq.guideDownloadButton")}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/partager">{t("faq.guideShareButton")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("faq.finalCtaTitle")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("faq.finalCtaSubtitle")}</p>

          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm p-6 rounded-xl">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <OfferForm buttonText={t("faq.finalCtaButton")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
