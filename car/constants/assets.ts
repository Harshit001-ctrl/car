export const ASSETS = {
  images: {
    carDetailingImage1: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-detailing-image1.jpg-KSYzA5uA8JJsLYfSdP0fhaBixO10bs.jpeg",
    carDetailingImage2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-detailing-image2.jpg-iP4ji3IcCY1NqnlWZ5zmyQUrpHU7G1.jpeg",
    carDetailingImage3: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-detailing-image3.jpg-sZAdGYyh3bQAdrdRdo69yHSNoawLO4.jpeg",
    carDetailingImage4: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/car-detailing-image4.jpg-L0Fgsm9FIQ4xtMQlCGSUK2hnnTt0oT.jpeg",
  },
  videos: {
    mainVideo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6158134-hd_1920_1080_30fps-hPSlQjbWpObRUi3oeREuBUEtFQfFeR.mp4"
  }
} as const

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: ASSETS.images.carDetailingImage1,
    alt: "Manual transmission gear shift"
  },
  {
    id: 2,
    src: ASSETS.images.carDetailingImage2,
    alt: "BMW interior dashboard"
  },
  {
    id: 3,
    src: ASSETS.images.carDetailingImage3,
    alt: "Mercedes-Benz interior"
  },
  {
    id: 4,
    src: ASSETS.images.carDetailingImage4,
    alt: "Luxury car interior details"
  }
] as const

