'use client'

import { motion } from 'framer-motion'
import { getCollections } from '@/lib/data'
import CollectionCard from '@/components/sections/CollectionCard'
import Navbar from '@/components/sections/Navbar'

export default function CollectionsPage() {
  const collections = getCollections()

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">
              COLLECTIONS
            </h1>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Explore the innovative designs from Humber College's emerging fashion talent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard 
                key={collection.id} 
                collection={collection} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950 text-center text-stone-500 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}