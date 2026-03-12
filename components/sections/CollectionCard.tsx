'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Collection } from '@/lib/data'
import Link from 'next/link'

interface Props {
  collection: Collection
  index: number
}

export default function CollectionCard({ collection, index }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/collections/${collection.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-stone-900 cursor-pointer"
      >
        <img
          src={collection.image}
          alt={collection.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {collection.video && isHovered && (
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

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-serif text-white">{collection.title}</h3>
          <p className="text-stone-300 text-sm mt-1">{collection.designer}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {collection.tags.slice(0, 2).map((tag) => (
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
  )
}