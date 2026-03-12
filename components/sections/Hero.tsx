'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8 // Slow motion effect
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-stone-950">
      {/* Video Background - BRIGHTER */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Lighter Gradient Overlay - Less Dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950/60" />

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-stone-200 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Humber College Fashion Show 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-white tracking-tight drop-shadow-lg"
        >
          UNTAMED <br />
          <span className="text-pink-400">ELEGANCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-stone-100 max-w-2xl drop-shadow-md"
        >
          Sustainable fashion reimagined. Experience the future of design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#collections"
            className="px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 drop-shadow-lg"
          >
            Explore Collections
          </a>
          <a
            href="#rsvp"
            className="px-8 py-4 border border-white/60 hover:border-white text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            RSVP Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}