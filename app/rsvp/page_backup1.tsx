'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/sections/Navbar'
import RsvpForm from '@/components/sections/RsvpForm'

export default function RsvpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">
              RSVP
            </h1>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
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
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-stone-900 mb-2">📅 Date</h3>
              <p className="text-stone-600">April 15, 2026</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-stone-900 mb-2">🕐 Time</h3>
              <p className="text-stone-600">7:00 PM EST</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-serif text-stone-900 mb-2">📍 Location</h3>
              <p className="text-stone-600">Humber College, Toronto</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950 text-center text-stone-500 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}