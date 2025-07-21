"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

interface OfferFormProps {
  buttonText?: string
  className?: string
}

export default function OfferForm({ buttonText, className = "" }: OfferFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const templateParams = {
        prenom: formData.firstName,
        nom: formData.lastName,
        adresse: formData.address,
        ville: formData.city,
        province: formData.province,
        code_postal: formData.postalCode,
        telephone: formData.phone,
        email: formData.email,
        sujet: "Demande d'offre pour propriété",
        message: `Demande d'offre pour la propriété située au ${formData.address}, ${formData.city}, ${formData.province} ${formData.postalCode}`
      }

      console.log('Sending EmailJS offer form with params:', templateParams)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'offer', ...templateParams }),
      });
      const data = await response.json();
      if (data.success) setShowSuccessModal(true);
      else {
        toast({
          title: t("forms.errorTitle"),
          description: data.error || t("forms.errorMessage"),
          variant: "destructive"
        });
      }

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
        phone: "",
        email: "",
      })

    } catch (error) {
      console.error('EmailJS Error:', error)
      toast({
        title: t("forms.errorTitle"),
        description: t("forms.errorMessage"),
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const defaultButtonText = buttonText || t("hero.getCashOffer")

  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium">
              {t("common.firstName")}
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder={t("common.firstName")}
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium">
              {t("common.lastName")}
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder={t("common.lastName")}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address" className="text-sm font-medium">
            {t("forms.propertyAddress")}
          </Label>
          <Input
            id="address"
            name="address"
            placeholder={t("forms.propertyAddressPlaceholder")}
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="text-sm font-medium">
              {t("common.city")}
            </Label>
            <Input
              id="city"
              name="city"
              placeholder={t("common.city")}
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="province" className="text-sm font-medium">
              {t("common.province")}
            </Label>
            <Input
              id="province"
              name="province"
              placeholder={t("common.province")}
              value={formData.province}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="postalCode" className="text-sm font-medium">
            {t("common.postalCode")}
          </Label>
          <Input
            id="postalCode"
            name="postalCode"
            placeholder={t("common.postalCode")}
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              {t("common.phone")}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t("common.phone")}
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              {t("common.email")}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("common.email")}
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("common.processing")}
            </>
          ) : (
            defaultButtonText
          )}
        </Button>
      </form>

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
                {t("forms.requestSent")}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {t("forms.contactSoon")}
              </p>
              
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-brand-800 font-medium">
                  {t("forms.successNote")}
                </p>
              </div>
              
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-brand-700 to-brand-800 hover:from-brand-800 hover:to-brand-900 text-white"
              >
                {t("forms.successButton")}
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
    </>
  )
}
