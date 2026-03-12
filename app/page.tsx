'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      
      {/* Quick Navigation Section */}
      <section className="py-20 px-4 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-stone-100 mb-4">
              Explore the Show
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Discover our collections, learn about our sustainability mission, and reserve your seat.
            </p>
          </motion.div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Collections Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/collections" className="block group">
                <div className="bg-stone-900 rounded-2xl p-8 border border-stone-800 hover:border-pink-500/50 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-4">👗</div>
                  <h3 className="text-xl font-serif text-stone-100 mb-2 group-hover:text-pink-400 transition-colors">
                    Collections
                  </h3>
                  <p className="text-stone-400 text-sm">
                    View all designer collections and lookbooks.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Sustainability Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/sustainability" className="block group">
                <div className="bg-stone-900 rounded-2xl p-8 border border-stone-800 hover:border-pink-500/50 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-serif text-stone-100 mb-2 group-hover:text-pink-400 transition-colors">
                    Sustainability
                  </h3>
                  <p className="text-stone-400 text-sm">
                    Learn about our eco-conscious fashion mission.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* RSVP Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/rsvp" className="block group">
                <div className="bg-stone-900 rounded-2xl p-8 border border-stone-800 hover:border-pink-500/50 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-4xl mb-4">🎟️</div>
                  <h3 className="text-xl font-serif text-stone-100 mb-2 group-hover:text-pink-400 transition-colors">
                    RSVP
                  </h3>
                  <p className="text-stone-400 text-sm">
                    Reserve your seat for the fashion show.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-stone-900 text-center text-stone-500 text-sm border-t border-stone-800">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}