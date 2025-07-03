interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-700 to-brand-800 flex items-center justify-center text-white text-2xl font-bold">
          {number}
        </div>
        <div className="absolute -z-10 w-20 h-20 rounded-full bg-brand-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
      <h3 className="font-bold text-lg mt-4 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
