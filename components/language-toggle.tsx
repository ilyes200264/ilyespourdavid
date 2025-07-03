"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-gray-600" />
      <div className="relative bg-gray-100 rounded-full p-1 flex">
        <motion.div
          className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm"
          initial={false}
          animate={{
            left: language === "fr" ? "4px" : "50%",
            width: language === "fr" ? "28px" : "28px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <Button
          variant="ghost"
          size="sm"
          className={`relative z-10 h-7 px-3 text-xs font-medium transition-colors ${
            language === "fr" ? "text-brand-700" : "text-gray-500"
          }`}
          onClick={() => setLanguage("fr")}
        >
          FR
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`relative z-10 h-7 px-3 text-xs font-medium transition-colors ${
            language === "en" ? "text-brand-700" : "text-gray-500"
          }`}
          onClick={() => setLanguage("en")}
        >
          EN
        </Button>
      </div>
    </div>
  )
}
