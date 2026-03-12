'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { getCollections, getCollectionById } from '@/lib/data'
import Navbar from '@/components/sections/Navbar'

export default function DesignerPage() {
  const params = useParams()
  const collection = getCollectionById(params.slug as string)

  if (!collection) {
    return (
      <main className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center">
        <p>Collection not found</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-stone-950">
      <Navbar />
      
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-stone-100 mb-4"
          >
            {collection.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-stone-300"
          >
            by {collection.designer}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-serif text-stone-100 mb-4">Concept</h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              {collection.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-serif text-stone-100 mb-4">Sustainability</h2>
            <div className="flex flex-wrap gap-3">
              {collection.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <a
              href="/rsvp"
              className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white font-medium rounded-full transition-all hover:scale-105"
            >
              RSVP to See This Collection Live →
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-900 text-center text-stone-500 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}