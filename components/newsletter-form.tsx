"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"

export default function NewsletterForm() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une soumission de formulaire
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: t("forms.subscriptionSuccess"),
        description: t("forms.newsletterSubscribed"),
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        placeholder={t("common.email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
      />
      <Button type="submit" disabled={isLoading} className="bg-brand-700 hover:bg-brand-800 text-white">
        {isLoading ? "..." : t("footer.subscribeBtn")}
      </Button>
    </form>
  )
}
