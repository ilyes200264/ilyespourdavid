"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une soumission de formulaire
    setTimeout(() => {
      setIsLoading(false)
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
      toast({
        title: t("forms.requestSent"),
        description: t("forms.contactSoon"),
      })
    }, 1500)
  }

  const defaultButtonText = buttonText || t("hero.getCashOffer")

  return (
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
  )
}
