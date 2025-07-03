"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import OfferForm from "@/components/offer-form"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/i18n"

export default function Commentaires() {
  const { language } = useLanguage()

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
              {getTranslation(language, "testimonials.pageTitle")}{" "}
              <span className="bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                {getTranslation(language, "testimonials.pageTitleHighlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              {getTranslation(language, "testimonials.pageSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand-100 mb-4">
                        <Image
                          src="/images/testimonial-3.jpeg"
                          alt="Marianne Dagenais Lespérance"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <h2 className="text-2xl font-bold mb-4">{getTranslation(language, "testimonials.title1")}</h2>
                      <p className="text-lg italic text-gray-600 mb-6">
                        "{getTranslation(language, "testimonials.text1")}"
                      </p>
                      <div>
                        <p className="font-semibold">{getTranslation(language, "testimonials.name1")}</p>
                        <p className="text-gray-500">{getTranslation(language, "testimonials.location1")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand-100 mb-4">
                        <Image src="/images/testimonial-1.jpeg" alt="Gabriel Ccopa" fill className="object-cover" />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <h2 className="text-2xl font-bold mb-4">{getTranslation(language, "testimonials.title2")}</h2>
                      <p className="text-lg italic text-gray-600 mb-6">
                        "{getTranslation(language, "testimonials.text2")}"
                      </p>
                      <div>
                        <p className="font-semibold">{getTranslation(language, "testimonials.name2")}</p>
                        <p className="text-gray-500">{getTranslation(language, "testimonials.location2")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand-100 mb-4">
                        <Image src="/images/testimonial-2.jpeg" alt="Michel Comptois" fill className="object-cover" />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <h2 className="text-2xl font-bold mb-4">{getTranslation(language, "testimonials.title3")}</h2>
                      <p className="text-lg italic text-gray-600 mb-6">
                        "{getTranslation(language, "testimonials.text3")}"
                      </p>
                      <div>
                        <p className="font-semibold">{getTranslation(language, "testimonials.name3")}</p>
                        <p className="text-gray-500">{getTranslation(language, "testimonials.location3")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand-100 mb-4">
                        <Image src="/images/testimonial-4.jpeg" alt="Patrick Martin" fill className="object-cover" />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <h2 className="text-2xl font-bold mb-4">{getTranslation(language, "testimonials.title4")}</h2>
                      <p className="text-lg italic text-gray-600 mb-6">
                        "{getTranslation(language, "testimonials.text4")}"
                      </p>
                      <div>
                        <p className="font-semibold">{getTranslation(language, "testimonials.name4")}</p>
                        <p className="text-gray-500">{getTranslation(language, "testimonials.location4")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="space-y-8">
              <AnimatedSection delay={0.4}>
                <div className="bg-gradient-to-br from-brand-700 to-brand-800 text-white rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">
                    {getTranslation(language, "testimonials.sidebarComparisonTitle")}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-semibold">{getTranslation(language, "testimonials.sidebarQuestion1")}</p>
                      <p className="text-sm text-teal-100">
                        {getTranslation(language, "testimonials.sidebarQuestion2")}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">{getTranslation(language, "testimonials.sidebarQuestion3")}</p>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-white text-brand-700 hover:bg-gray-100">
                    <Link href="/comment-ca-fonctionne">
                      {getTranslation(language, "testimonials.sidebarComparisonButton")}
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">
                    {getTranslation(language, "testimonials.sidebarOfferTitle")}
                  </h3>
                  <OfferForm buttonText={getTranslation(language, "testimonials.sidebarOfferButton")} />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">
                    {getTranslation(language, "testimonials.sidebarBlogTitle")}
                  </h3>

                  <div className="space-y-4">
                    <Link
                      href="/blog/la-verite-surprenante-detre-proprietaire-a-montreal"
                      className="block hover:text-teal-600 transition-colors"
                    >
                      {getTranslation(language, "testimonials.blogPost1")}
                    </Link>

                    <Link
                      href="/blog/proprietaire-et-frustre-par-vos-locataires"
                      className="block hover:text-teal-600 transition-colors"
                    >
                      {getTranslation(language, "testimonials.blogPost2")}
                    </Link>

                    <Link
                      href="/blog/que-faire-si-mon-locataire-a-detruit-ma-maison"
                      className="block hover:text-teal-600 transition-colors"
                    >
                      {getTranslation(language, "testimonials.blogPost3")}
                    </Link>

                    <div className="pt-4">
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href="/blogue">
                          {getTranslation(language, "testimonials.sidebarBlogButton")}
                          <ArrowRight size={14} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Share Experience Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">{getTranslation(language, "testimonials.shareTitle")}</h2>
            <p className="text-lg text-gray-600">{getTranslation(language, "testimonials.shareSubtitle")}</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation(language, "testimonials.formNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    {getTranslation(language, "testimonials.formLocationLabel")}
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  {getTranslation(language, "testimonials.formRatingLabel")}
                </label>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <button key={i} type="button" className="text-yellow-400 hover:text-yellow-500 focus:outline-none">
                      <Star size={24} className="fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  {getTranslation(language, "testimonials.formTitleLabel")}
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                  {getTranslation(language, "testimonials.formTestimonialLabel")}
                </label>
                <textarea
                  id="testimonial"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>

              <div>
                <Button className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900">
                  {getTranslation(language, "testimonials.formSubmitButton")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {getTranslation(language, "testimonials.finalCtaTitle")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{getTranslation(language, "testimonials.finalCtaSubtitle")}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
              <Link href="/obtenir-mon-offre">{getTranslation(language, "testimonials.finalCtaButton1")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
              <a href="tel:514-623-4280">{getTranslation(language, "testimonials.finalCtaButton2")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
