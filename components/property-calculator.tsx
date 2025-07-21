"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

export default function PropertyCalculator() {
  const { t } = useLanguage()
  const [propertyType, setPropertyType] = useState("maison")
  const [squareFeet, setSquareFeet] = useState(1500)
  const [bedrooms, setBedrooms] = useState(3)
  const [bathrooms, setBathrooms] = useState(2)
  const [condition, setCondition] = useState("bon")
  const [showResult, setShowResult] = useState(false)

  const calculateEstimate = () => {
    // Simulation d'un calcul d'estimation
    setShowResult(true)
  }

  const getEstimatedRange = () => {
    // Logique simplifiée pour l'estimation
    let basePrice = 0

    switch (propertyType) {
      case "maison":
        basePrice = 350000
        break
      case "condo":
        basePrice = 250000
        break
      case "duplex":
        basePrice = 450000
        break
      case "triplex":
        basePrice = 550000
        break
    }

    const sqftFactor = squareFeet / 1000
    const bedroomValue = bedrooms * 15000
    const bathroomValue = bathrooms * 10000

    let conditionFactor = 1
    switch (condition) {
      case "excellent":
        conditionFactor = 1.1
        break
      case "bon":
        conditionFactor = 1
        break
      case "moyen":
        conditionFactor = 0.9
        break
      case "renovation":
        conditionFactor = 0.8
        break
    }

    const estimate = (basePrice + bedroomValue + bathroomValue) * sqftFactor * conditionFactor

    // Créer une fourchette de prix
    const minPrice = Math.round((estimate * 0.9) / 1000) * 1000
    const maxPrice = Math.round((estimate * 1.1) / 1000) * 1000

    return { minPrice, maxPrice }
  }

  const { minPrice, maxPrice } = getEstimatedRange()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-CA", { style: "currency", currency: "CAD" }).format(price)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-6">{t("calculator.title")}</h3>

      <div className="space-y-6">
        <div>
          <Label htmlFor="property-type">{t("calculator.propertyTypeLabel")}</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger id="property-type" className="mt-2">
              <SelectValue placeholder={t("calculator.propertyTypeSelect")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maison">{t("calculator.propertyTypeHouse")}</SelectItem>
              <SelectItem value="condo">{t("calculator.propertyTypeCondo")}</SelectItem>
              <SelectItem value="duplex">{t("calculator.propertyTypeDuplex")}</SelectItem>
              <SelectItem value="triplex">{t("calculator.propertyTypeTriplex")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <Label htmlFor="square-feet">{t("calculator.squareFeetLabel")}</Label>
            <span className="text-sm font-medium">{squareFeet} pi²</span>
          </div>
          <Slider
            id="square-feet"
            min={500}
            max={5000}
            step={100}
            value={[squareFeet]}
            onValueChange={(value) => setSquareFeet(value[0])}
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="bedrooms">{t("calculator.bedroomsLabel")}</Label>
              <span className="text-sm font-medium">{bedrooms}</span>
            </div>
            <Slider
              id="bedrooms"
              min={1}
              max={6}
              step={1}
              value={[bedrooms]}
              onValueChange={(value) => setBedrooms(value[0])}
              className="mt-2"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="bathrooms">{t("calculator.bathroomsLabel")}</Label>
              <span className="text-sm font-medium">{bathrooms}</span>
            </div>
            <Slider
              id="bathrooms"
              min={1}
              max={5}
              step={0.5}
              value={[bathrooms]}
              onValueChange={(value) => setBathrooms(value[0])}
              className="mt-2"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="condition">{t("calculator.conditionLabel")}</Label>
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger id="condition" className="mt-2">
              <SelectValue placeholder={t("calculator.conditionSelect")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">{t("calculator.conditionExcellent")}</SelectItem>
              <SelectItem value="bon">{t("calculator.conditionGood")}</SelectItem>
              <SelectItem value="moyen">{t("calculator.conditionAverage")}</SelectItem>
              <SelectItem value="renovation">{t("calculator.conditionRenovation")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculateEstimate}
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600"
        >
          {t("calculator.calculateButton")}
        </Button>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg"
          >
            <h4 className="font-semibold text-lg mb-2">{t("calculator.resultTitle")}</h4>
            <p className="text-gray-700">{t("calculator.resultDescription")}</p>
            <p className="text-2xl font-bold text-teal-700 mt-2">
              {formatPrice(minPrice)} - {formatPrice(maxPrice)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {t("calculator.resultNote")}
            </p>
            <div className="mt-4">
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <a href="/obtenir-mon-offre">{t("calculator.getPreciseOfferButton")}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
