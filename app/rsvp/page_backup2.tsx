'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/sections/Navbar'
import RsvpForm from '@/components/sections/RsvpForm'

export default function RsvpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
      {/* Decorative background elements for glass effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-700/20 rounded-full blur-3xl" />
      
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">
              RSVP
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Reserve your seat for an unforgettable evening celebrating sustainable 
              fashion innovation. Spaces are limited.
            </p>
          </motion.div>

          <RsvpForm />

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="font-serif text-white mb-2">📅 Date</h3>
              <p className="text-stone-300">April 15, 2026</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="font-serif text-white mb-2">🕐 Time</h3>
              <p className="text-stone-300">7:00 PM EST</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="font-serif text-white mb-2">📍 Location</h3>
              <p className="text-stone-300">Humber College, Toronto</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950/50 backdrop-blur-sm text-center text-stone-400 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}