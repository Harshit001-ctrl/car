'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ASSETS } from '@/constants/assets'

const VideoSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <motion.div
      ref={containerRef}
      className="bg-gradient-to-b from-gray-100 to-gray-200 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div 
            className="relative w-full max-w-6xl mx-auto"
            style={{ scale }}
          >
            <div className="absolute inset-0 bg-blue-600/10 rounded-xl -m-4 transform rotate-1"></div>
            <div className="absolute inset-0 bg-blue-600/10 rounded-xl -m-4 transform -rotate-1"></div>
            <video
              className="w-full rounded-xl shadow-2xl object-contain"
              autoPlay
              muted
              loop
              src={ASSETS.videos.mainVideo}
            />
          </motion.div>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience the Transformation
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Watch how we bring new life to every vehicle that comes through our doors.
              Our attention to detail and commitment to excellence shows in every project.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default VideoSection

