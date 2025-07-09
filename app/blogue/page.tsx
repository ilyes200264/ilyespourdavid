"use client"
import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import AnimatedSection from "@/components/animated-section"
import PropertyCalculator from "@/components/property-calculator"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: {
      fr: "Comment évaluer rapidement la valeur de votre propriété",
      en: "How to quickly assess your property's value",
    },
    excerpt: {
      fr: "Découvrez les méthodes simples pour estimer la valeur de votre maison avant de la vendre.",
      en: "Discover simple methods to estimate your home's value before selling.",
    },
    content: {
      fr: "L'évaluation de votre propriété est une étape cruciale...",
      en: "Property evaluation is a crucial step...",
    },
    image: "/images/vente-maison-guide.jpeg",
    category: {
      fr: "Évaluation",
      en: "Evaluation",
    },
    author: "David Manianga",
    date: "2024-01-15",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: {
      fr: "Les avantages de vendre à un investisseur immobilier",
      en: "Benefits of selling to a real estate investor",
    },
    excerpt: {
      fr: "Pourquoi choisir un investisseur plutôt qu'une vente traditionnelle sur le marché.",
      en: "Why choose an investor over traditional market sale.",
    },
    content: {
      fr: "Vendre à un investisseur présente plusieurs avantages...",
      en: "Selling to an investor has several advantages...",
    },
    image: "/images/montreal-house.jpeg",
    category: {
      fr: "Conseils",
      en: "Tips",
    },
    author: "David Manianga",
    date: "2024-01-10",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 3,
    title: {
      fr: "Préparer sa maison pour une vente rapide",
      en: "Preparing your home for a quick sale",
    },
    excerpt: {
      fr: "Les étapes essentielles pour maximiser l'attrait de votre propriété.",
      en: "Essential steps to maximize your property's appeal.",
    },
    content: {
      fr: "Une bonne préparation peut faire toute la différence...",
      en: "Good preparation can make all the difference...",
    },
    image: "/images/laval-house.jpeg",
    category: {
      fr: "Préparation",
      en: "Preparation",
    },
    author: "David Manianga",
    date: "2024-01-05",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: {
      fr: "Comprendre le marché immobilier de Montréal",
      en: "Understanding Montreal's real estate market",
    },
    excerpt: {
      fr: "Analyse des tendances actuelles du marché immobilier montréalais.",
      en: "Analysis of current Montreal real estate market trends.",
    },
    content: {
      fr: "Le marché immobilier de Montréal connaît des évolutions...",
      en: "Montreal's real estate market is experiencing changes...",
    },
    image: "/images/longueuil-house.webp",
    category: {
      fr: "Marché",
      en: "Market",
    },
    author: "David Manianga",
    date: "2023-12-28",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 5,
    title: {
      fr: "Investir dans l'immobilier : Guide du débutant",
      en: "Real Estate Investing: Beginner's Guide",
    },
    excerpt: {
      fr: "Tout ce que vous devez savoir pour commencer à investir dans l'immobilier.",
      en: "Everything you need to know to start investing in real estate.",
    },
    content: {
      fr: "L'investissement immobilier peut être très rentable...",
      en: "Real estate investment can be very profitable...",
    },
    image: "/images/brossard-house.jpeg",
    category: {
      fr: "Investissement",
      en: "Investment",
    },
    author: "David Manianga",
    date: "2023-12-20",
    readTime: "10 min",
    featured: false,
  },
  {
    id: 6,
    title: {
      fr: "Les erreurs à éviter lors de la vente de sa maison",
      en: "Mistakes to avoid when selling your home",
    },
    excerpt: {
      fr: "Les pièges les plus courants et comment les éviter pour une vente réussie.",
      en: "Common pitfalls and how to avoid them for a successful sale.",
    },
    content: {
      fr: "Éviter ces erreurs peut vous faire économiser temps et argent...",
      en: "Avoiding these mistakes can save you time and money...",
    },
    image: "/images/rive-sud-house.webp",
    category: {
      fr: "Conseils",
      en: "Tips",
    },
    author: "David Manianga",
    date: "2023-12-15",
    readTime: "6 min",
    featured: false,
  },
]

const categories = [
  { fr: "Tous", en: "All" },
  { fr: "Évaluation", en: "Evaluation" },
  { fr: "Conseils", en: "Tips" },
  { fr: "Préparation", en: "Preparation" },
  { fr: "Marché", en: "Market" },
  { fr: "Investissement", en: "Investment" },
]

export default function BlogPage() {
  const { language, t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [showCalculator, setShowCalculator] = useState(false)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "Tous" || selectedCategory === "All" || post.category[language] === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-6">
                {language === "fr" ? "Blog & " : "Blog & "}
                <span className="text-brand-700">{language === "fr" ? "Conseils" : "Tips"}</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                {language === "fr"
                  ? "Découvrez nos conseils d'experts pour vendre votre propriété rapidement et au meilleur prix"
                  : "Discover our expert tips to sell your property quickly and at the best price"}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
              <Input
                type="text"
                placeholder={language === "fr" ? "Rechercher un article..." : "Search articles..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.fr}
                  variant={selectedCategory === category[language] ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category[language])}
                  className="text-sm"
                >
                  <Tag size={14} className="mr-1" />
                  {category[language]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
                {language === "fr" ? "Calculateur de Propriété" : "Property Calculator"}
              </h2>
              <p className="text-xl text-zinc-600 mb-8">
                {language === "fr"
                  ? "Estimez rapidement la valeur de votre propriété avec notre outil gratuit"
                  : "Quickly estimate your property value with our free tool"}
              </p>
              <Button
                onClick={() => setShowCalculator(!showCalculator)}
                className="bg-brand-700 hover:bg-brand-800 text-white"
              >
                {showCalculator
                  ? language === "fr"
                    ? "Masquer le calculateur"
                    : "Hide calculator"
                  : language === "fr"
                    ? "Utiliser le calculateur"
                    : "Use calculator"}
              </Button>
            </div>
            {showCalculator && (
              <div className="max-w-4xl mx-auto">
                <PropertyCalculator />
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
                  {language === "fr" ? "Article en Vedette" : "Featured Article"}
                </h2>
              </div>
              <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title[language]}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-4 bg-brand-100 text-brand-800">{featuredPost.category[language]}</Badge>
                    <h3 className="text-2xl font-bold text-zinc-800 mb-4">{featuredPost.title[language]}</h3>
                    <p className="text-zinc-600 mb-6">{featuredPost.excerpt[language]}</p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>
                          {new Date(featuredPost.date).toLocaleDateString(language === "fr" ? "fr-CA" : "en-CA")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-brand-700 hover:bg-brand-800 text-white">
                      {language === "fr" ? "Lire l'article" : "Read article"}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
                {language === "fr" ? "Tous les Articles" : "All Articles"}
              </h2>
              <p className="text-xl text-zinc-600">
                {language === "fr"
                  ? `${regularPosts.length} articles trouvés`
                  : `${regularPosts.length} articles found`}
              </p>
            </div>

            {regularPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-zinc-500">
                  {language === "fr"
                    ? "Aucun article trouvé pour cette recherche."
                    : "No articles found for this search."}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title[language]}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-brand-100 text-brand-800">
                        {post.category[language]}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-zinc-800 mb-3 line-clamp-2">{post.title[language]}</h3>
                      <p className="text-zinc-600 mb-4 line-clamp-3">{post.excerpt[language]}</p>
                      <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString(language === "fr" ? "fr-CA" : "en-CA")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group bg-transparent">
                        {language === "fr" ? "Lire l'article" : "Read article"}
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "fr" ? "Restez Informé" : "Stay Informed"}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {language === "fr"
                  ? "Recevez nos derniers conseils et articles directement dans votre boîte e-mail"
                  : "Receive our latest tips and articles directly in your inbox"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={language === "fr" ? "Votre adresse e-mail" : "Your email address"}
                  className="flex-1 bg-white text-zinc-800"
                />
                <Button className="bg-white text-brand-700 hover:bg-zinc-100">
                  {language === "fr" ? "S'abonner" : "Subscribe"}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
                {language === "fr" ? "Prêt à Vendre Votre Propriété ?" : "Ready to Sell Your Property?"}
              </h2>
              <p className="text-xl text-zinc-600 mb-8">
                {language === "fr"
                  ? "Contactez-nous dès aujourd'hui pour une évaluation gratuite et sans engagement"
                  : "Contact us today for a free, no-obligation evaluation"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-brand-700 hover:bg-brand-800 text-white"
                  onClick={() => {
                    const offerSection = document.getElementById("obtenir-offre")
                    if (offerSection) {
                      offerSection.scrollIntoView({ behavior: "smooth" })
                    } else {
                      window.location.href = "/#obtenir-offre"
                    }
                  }}
                >
                  {language === "fr" ? "Obtenir mon offre" : "Get my offer"}
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "tel:514-623-4280")}>
                  {language === "fr" ? "Appelez-nous: 514-623-4280" : "Call us: 514-623-4280"}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
