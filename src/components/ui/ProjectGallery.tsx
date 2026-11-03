'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Maximize2, X } from 'lucide-react'

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images.length) return null

  function openImage(image: string) {
    setSelectedImage(image)
    dialog.current?.showModal()
  }

  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading"><div><p className="eyebrow">Una mirada más cerca</p><h2 id="gallery-title">El proyecto, en detalle.</h2></div><p>Selecciona una imagen para ampliarla.</p></div>
      <div className="gallery-grid">{images.map((image, index) => <button className="gallery-item" key={image} type="button" onClick={() => openImage(image)} aria-label={`Ampliar imagen ${index + 1} de ${title}`}><Image src={image} alt={`Captura ${index + 1} de ${title}`} fill sizes="(max-width: 700px) 90vw, 550px" /><span aria-hidden="true"><Maximize2 size={15} /></span></button>)}</div>
      <dialog ref={dialog} className="image-dialog" aria-label={`Imagen ampliada de ${title}`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }} onClose={() => setSelectedImage(null)}>
        <div className="dialog-header"><p>{title}</p><button className="dialog-close" type="button" aria-label="Cerrar imagen" onClick={() => dialog.current?.close()}><X size={23} aria-hidden="true" /></button></div>
        <div className="dialog-image">{selectedImage && <Image src={selectedImage} alt={`Vista ampliada de ${title}`} fill sizes="95vw" />}</div>
      </dialog>
    </section>
  )
}
