'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length <= 1) return null

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Galería</h2>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="h-48 rounded-lg overflow-hidden bg-brand-card border border-white/10 relative group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <Image 
              src={img} 
              alt={`Galería de ${title} - Imagen ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay for hint */}
            <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors flex items-center justify-center">
               <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand-bg/80 text-white text-xs px-3 py-1.5 rounded backdrop-blur-sm">
                 Ampliar imagen
               </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage}
                alt={`Imagen ampliada de ${title}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
