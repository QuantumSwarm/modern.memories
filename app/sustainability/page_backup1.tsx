'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/sections/Navbar'

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">
              SUSTAINABILITY
            </h1>
            <p className="text-stone-600 text-lg">
              Fashion with purpose. Design with conscience.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-stone-300 text-lg leading-relaxed">
              Unfiltered is committed to showcasing fashion that respects both creativity 
              and the environment. Every piece in this show demonstrates that sustainable 
              practices and high fashion are not mutually exclusive—they're inseparable.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '🌱',
                title: 'Organic Materials',
                desc: 'Prioritizing organic cotton, hemp, and recycled fibers.'
              },
              {
                icon: '♻️',
                title: 'Zero-Waste Patterns',
                desc: 'Designing to minimize fabric waste during production.'
              },
              {
                icon: '💧',
                title: 'Low-Impact Dyes',
                desc: 'Using water-efficient, non-toxic dyeing processes.'
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-serif text-stone-900 mb-2">{pillar.title}</h3>
                <p className="text-stone-600">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/rsvp"
              className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white font-medium rounded-full transition-all hover:scale-105"
            >
              Experience Sustainable Fashion Live →
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950 text-center text-stone-500 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}