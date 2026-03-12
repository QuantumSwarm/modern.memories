'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Collection } from '@/lib/data'
import Link from 'next/link'

interface Props {
  collections: Collection[]
}

export default function CollectionsGrid({ collections }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Safety check: ensure collections is an array
  if (!collections || !Array.isArray(collections)) {
    return (
      <section className="py-20 px-4 bg-stone-50">
        <div className="text-center text-stone-500">
          <p>No collections available at this time.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="collections" className="py-20 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-4">
            COLLECTIONS
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover innovative designs from Humbers emerging fashion talent.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id || index} 
              href={`/collections/${collection.id || index}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(collection.id || String(index))}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-stone-900 cursor-pointer"
              >
                {/* Static Image */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Video Preview on Hover */}
                {collection.video && hoveredId === (collection.id || String(index)) && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={collection.video} type="video/mp4" />
                  </video>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-white">{collection.title}</h3>
                  <p className="text-stone-300 text-sm mt-1">{collection.designer}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {collection.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-pink-500/20 text-pink-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}