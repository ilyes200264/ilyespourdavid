import Image from "next/image"
import Link from "next/link"

interface AreaCardProps {
  /** City / area name (e.g., "Montréal") */
  name: string
  /** Image URL or path shown for the area */
  image: string
}

/**
 * Small card linking to the “vendre-ma-maison-rapidement” pages
 * for each serviced area.
 */
export default function AreaCard({ name, image }: AreaCardProps) {
  return (
    <Link href={`/vendre-ma-maison-rapidement-a-${name.toLowerCase().replace(/\s+/g, "-")}`} className="group">
      <div className="relative overflow-hidden rounded-lg h-40">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Vendre ma maison à ${name}`}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  )
}
