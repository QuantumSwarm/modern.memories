'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/sections/Navbar'
import RsvpForm from '@/components/sections/RsvpForm'

export default function RsvpPage() {
  return (
    <main className="min-h-screen bg-stone-950 relative overflow-hidden">
      {/* ===== BACKGROUND ELEMENTS FOR GLASS EFFECT ===== */}
      
      {/* Large pink orb - directly behind form (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/50 to-pink-600/50 rounded-full blur-3xl animate-pulse" />
      
      {/* Purple orb - behind form (slightly offset) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Cyan orb - behind form (slightly offset) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Top left accent orb */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl" />
      
      {/* Bottom right accent orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl" />
      
      {/* Small floating orbs around form area */}
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-pink-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-purple-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-[200px] h-[200px] bg-cyan-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Gradient mesh overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-transparent to-cyan-900/10" />
      
      {/* Subtle grid pattern for extra texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* ===== CONTENT ===== */}
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

          {/* Event Details - Also Glass Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="font-serif text-white mb-2 text-lg">📅 Date</h3>
              <p className="text-stone-300">April 15, 2026</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="font-serif text-white mb-2 text-lg">🕐 Time</h3>
              <p className="text-stone-300">7:00 PM EST</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h3 className="font-serif text-white mb-2 text-lg">📍 Location</h3>
              <p className="text-stone-300">Humber College, Toronto</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950/50 backdrop-blur-sm text-center text-stone-400 text-sm border-t border-stone-800 relative z-10">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}