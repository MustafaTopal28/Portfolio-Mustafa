// components/ui/ImageCarousel.tsx
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  const next = () => setCurrent((c) => (c + 1) % images.length)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)

  return (
    <div className="mb-12">
      <div className="relative rounded-sm overflow-hidden border-2 border-slate-800 bg-slate-950 group">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={images[current]}
            alt={`${alt} - screenshot ${current + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Navigation arrows - visible only if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Image précédente"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Image suivante"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded-sm text-xs text-white font-mono">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === current ? 'w-6 bg-cyan-400' : 'w-1.5 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Aller à l'image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}