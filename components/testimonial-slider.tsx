"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface Testimonial {
  id: number
  nameKey: string
  locationKey: string
  textKey: string
  image: string
  titleKey: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    nameKey: "testimonials.name1",
    locationKey: "testimonials.location1",
    textKey: "testimonials.text1",
    image: "/images/testimonial-1.jpeg",
    titleKey: "testimonials.title1",
  },
  {
    id: 2,
    nameKey: "testimonials.name2",
    locationKey: "testimonials.location2",
    textKey: "testimonials.text2",
    image: "/images/testimonial-2.jpeg",
    titleKey: "testimonials.title2",
  },
  {
    id: 3,
    nameKey: "testimonials.name3",
    locationKey: "testimonials.location3",
    textKey: "testimonials.text3",
    image: "/images/testimonial-3.jpeg",
    titleKey: "testimonials.title3",
  },
  {
    id: 4,
    nameKey: "testimonials.name4",
    locationKey: "testimonials.location4",
    textKey: "testimonials.text4",
    image: "/images/testimonial-4.jpeg",
    titleKey: "testimonials.title4",
  },
]

export default function TestimonialSlider() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-10 left-0 text-brand-500/20">
        <Quote size={120} />
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="md:w-1/4 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand-500/20 mb-4">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={t(testimonials[current].nameKey)}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-center">{t(testimonials[current].nameKey)}</h4>
              <p className="text-sm text-gray-500 text-center">{t(testimonials[current].locationKey)}</p>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl md:text-2xl font-bold mb-4">{t(testimonials[current].titleKey)}</h3>
              <p className="text-lg italic mb-6">"{t(testimonials[current].textKey)}"</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full hover:bg-brand-50 hover:text-brand-700 bg-transparent"
        >
          <ChevronLeft size={20} />
        </Button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current ? "bg-brand-700 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full hover:bg-brand-50 hover:text-brand-700 bg-transparent"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  )
}
