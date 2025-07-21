"use client"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Loader2, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function NousJoindre() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.consentRequired"),
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      const templateParams = {
        prenom: formData.firstName,
        nom: formData.lastName,
        telephone: formData.phone,
        email: formData.email,
        sujet: formData.subject,
        message: formData.message
      };
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...templateParams }),
      });
      const data = await response.json();
      if (data.success) {
        setShowSuccessModal(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "", consent: false });
      } else {
        toast({
          title: t("contact.errorTitle"),
          description: data.error || t("contact.errorMessage"),
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorMessage"),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-700 to-brand-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-brand-900/40"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t("contact.title")}{" "}
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {t("contact.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.infoTitle")}</h2>
              <p className="text-lg text-gray-600">{t("contact.infoSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <AnimatedSection delay={0.1}>
                <Card className="text-center p-8 h-full border-2 border-transparent hover:border-brand-200 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Phone size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t("contact.phoneTitle")}</h3>
                    <p className="text-gray-600 mb-4">{t("contact.phoneDesc")}</p>
                    <a
                      href="tel:514-623-4280"
                      className="text-brand-700 hover:text-brand-800 transition-colors text-lg font-semibold"
                    >
                      514-623-4280
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="text-center p-8 h-full border-2 border-transparent hover:border-brand-200 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t("contact.emailTitle")}</h3>
                    <p className="text-gray-600 mb-4">{t("contact.emailDesc")}</p>
                    <a
                      href="mailto:info@quoifaireavecmamaison.com"
                      className="text-brand-700 hover:text-brand-800 transition-colors font-semibold"
                    >
                      info@quoifaireavecmamaison.com
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="text-center p-8 h-full border-2 border-transparent hover:border-brand-200 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-brand-700 to-brand-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t("contact.locationTitle")}</h3>
                    <p className="text-gray-600 mb-4">{t("contact.locationDesc")}</p>
                    <p className="text-brand-700 font-semibold">{t("contact.serviceArea")}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50">
        <div id="contact-form" className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.formTitle")}</h2>
              <p className="text-lg text-gray-600">{t("contact.formSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-brand-700 to-brand-800 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">{t("contact.whyContactTitle")}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <MessageSquare size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t("contact.personalizedServiceTitle")}</h4>
                      <p className="text-gray-200 text-sm">{t("contact.personalizedServiceDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t("contact.quickResponseTitle")}</h4>
                      <p className="text-gray-200 text-sm">{t("contact.quickResponseDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 mt-1">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t("contact.expertAdviceTitle")}</h4>
                      <p className="text-gray-200 text-sm">{t("contact.expertAdviceDesc")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <h4 className="font-semibold mb-2">{t("contact.urgentTitle")}</h4>
                  <p className="text-sm text-gray-200 mb-3">{t("contact.urgentDesc")}</p>
                  <Button asChild className="bg-white text-brand-700 hover:bg-gray-100">
                    <a href="tel:514-623-4280">{t("contact.callNowButton")}</a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("common.firstName")} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 placeholder:text-gray-500"
                        placeholder={t("common.firstName")}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("common.lastName")} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 placeholder:text-gray-500"
                        placeholder={t("common.lastName")}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("common.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder={t("common.email")}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("common.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder={t("common.phone")}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.subjectLabel")}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900"
                      required
                    >
                      <option value="">{t("contact.subjectSelect")}</option>
                      <option value="house-sale">{t("contact.subjectHouseSale")}</option>
                      <option value="land-sale">{t("contact.subjectLandSale")}</option>
                      <option value="multi-unit">{t("contact.subjectMultiUnit")}</option>
                      <option value="evaluation">{t("contact.subjectEvaluation")}</option>
                      <option value="other">{t("contact.subjectOther")}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.messageLabel")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder={t("contact.messagePlaceholder")}
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      {t("contact.consentText")}
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white py-3" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        {t("contact.sendButton")}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Business Hours Section */}
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.hoursTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-brand-800">{t("contact.officeHoursTitle")}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.monday")}</span>
                    <span className="text-gray-600">{t("contact.weekdayHours")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.tuesday")}</span>
                    <span className="text-gray-600">{t("contact.weekdayHours")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.wednesday")}</span>
                    <span className="text-gray-600">{t("contact.weekdayHours")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.thursday")}</span>
                    <span className="text-gray-600">{t("contact.weekdayHours")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.friday")}</span>
                    <span className="text-gray-600">{t("contact.weekdayHours")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.saturday")}</span>
                    <span className="text-gray-600">{t("contact.saturdayHours")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t("contact.sunday")}</span>
                    <span className="text-gray-600">{t("contact.sundayHours")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-800">{t("contact.emergencyTitle")}</h3>
                <p className="text-gray-700 mb-6">{t("contact.emergencyDesc")}</p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href="tel:514-623-4280">
                      <Phone size={20} className="mr-2" />
                      {t("contact.emergencyCall")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <a href="mailto:urgence@quoifaireavecmamaison.com">
                      <Mail size={20} className="mr-2" />
                      {t("contact.emergencyEmail")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Quick Links */}
      <AnimatedSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.faqTitle")}</h2>
            <p className="text-lg text-gray-600 mb-8">{t("contact.faqSubtitle")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-3">{t("contact.faqQuestion1")}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t("contact.faqAnswer1")}</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-3">{t("contact.faqQuestion2")}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t("contact.faqAnswer2")}</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-3">{t("contact.faqQuestion3")}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t("contact.faqAnswer3")}</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold mb-3">{t("contact.faqQuestion4")}</h3>
                  <p className="text-gray-600 text-sm mb-4">{t("contact.faqAnswer4")}</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="border-brand-700 text-brand-700 hover:bg-brand-50 bg-transparent"
              >
                <a href="/faq">{t("contact.viewAllFaq")}</a>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.finalCtaTitle")}</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">{t("contact.finalCtaSubtitle")}</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
                <a href="tel:514-623-4280" className="flex items-center">
                  <Phone size={20} className="mr-2" />
                  {t("contact.callNowButton")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-700 bg-transparent"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                <Send size={20} className="mr-2" />
                {t("contact.sendMessageButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("contact.successTitle")}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {t("contact.successMessage")}
              </p>
              
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-brand-800 font-medium">
                  {t("contact.successNote")}
                </p>
              </div>
              
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white"
              >
                {t("contact.successButton")}
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
