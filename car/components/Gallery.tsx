'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ASSETS, GALLERY_IMAGES } from '@/constants/assets'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const GalleryItem = ({ type, src, alt }: { 
  type: 'video' | 'image'
  src?: string
  alt?: string
}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={itemRef}
      className={`relative rounded-xl overflow-hidden ${
        type === 'video' ? 'aspect-video' : 'aspect-square'
      } transition-transform duration-300 hover:scale-[1.02] bg-gradient-to-br from-gray-800 to-gray-900`}
    >
      {type === 'video' ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={ASSETS.videos.mainVideo}
        />
      ) : (
        <Image
          src={src || '/placeholder.svg'}
          alt={alt || 'Car Detailing'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />
    </div>
  )
}

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const items = itemsRef.current
    
    if (!section || !items) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    })

    tl.fromTo(
      items.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }
    )

    return () => {
      tl.kill()
    }
  }, [])

  // Manually creating gallery items
  const galleryItems = []
  for (let i = 0; i < GALLERY_IMAGES.length; i++) {
    const image = GALLERY_IMAGES[i]
    galleryItems.push(
      <GalleryItem 
        key={image.id}
        type="image"
        src={image.src}
        alt={image.alt}
      />
    )
  }

  return (
    <section ref={sectionRef} className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Featured Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GalleryItem type="video" />
            <GalleryItem type="video" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
          <div ref={itemsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
