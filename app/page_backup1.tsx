'use client'

import Hero from '@/components/sections/Hero'
import CollectionsGrid from '@/components/sections/CollectionsGrid'
import RsvpForm from '@/components/sections/RsvpForm'
import Navbar from '@/components/sections/Navbar'
import { getFeaturedCollections } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Home() {
  const featuredCollections = getFeaturedCollections()

  // Debug: Log to console
  console.log('Featured Collections:', featuredCollections)

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CollectionsGrid collections={featuredCollections} />
      
      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-stone-900 mb-4"
            >
              JOIN US
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-600 max-w-2xl mx-auto"
            >
              Be part of an unforgettable evening celebrating sustainable fashion innovation.
            </motion.p>
          </div>
          
          <RsvpForm />
        </div>
      </section>
      
      <footer className="py-8 px-4 bg-stone-950 text-center text-stone-500 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}