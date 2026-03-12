'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/sections/Navbar'
import Image from 'next/image'

interface Sponsor {
  id: string
  name: string
  logo: string
  url: string
  description: string
  color: string
  glowColor: string
}

interface SponsorCardProps {
  sponsor: Sponsor
  index: number
  isHovered: boolean
  onHover: (id: string | null) => void
}

export default function SponsorsPage() {
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null)

  const sponsors: Sponsor[] = [
    {
      id: 'nudestix',
      name: 'Nudestix',
      logo: '/images/nudestix.avif',
      url: 'https://nudestix.ca/',
      description: 'Clean, effortless makeup for the modern individual.',
      color: 'from-pink-500/30 to-rose-500/30',
      glowColor: 'rgba(236,72,153,0.5)',
    },
    {
      id: 'quantum',
      name: 'Quantum Swarm',
      logo: '/images/quantum-swarm.png',
      url: 'https://quantum-swarm.com/',
      description: 'Innovative technology solutions for creative industries.',
      color: 'from-cyan-500/30 to-blue-500/30',
      glowColor: 'rgba(6,182,212,0.5)',
    },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden bg-stone-950">
      {/* Animated CSS Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-cyan-900/20 animate-pulse" />
      
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl"
      />

      <Navbar />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            SPONSORS
          </motion.h1>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto mb-20">
            A special thanks to our sponsors <span className="text-pink-400">Quantum Swarm</span> and <span className="text-pink-400">Nudestix</span> for their generous support.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <SponsorCard 
                key={sponsor.id}
                sponsor={sponsor}
                index={index}
                isHovered={hoveredSponsor === sponsor.id}
                onHover={setHoveredSponsor}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950/50 text-center text-stone-400 text-sm">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}

function SponsorCard({ sponsor, index, isHovered, onHover }: SponsorCardProps) {
  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => onHover(sponsor.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.03 }}
      className="block group"
    >
      <div className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg`}>
        <div className="text-center">
          <div className="w-48 h-32 mx-auto mb-6 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-serif text-white mb-2">{sponsor.name}</h3>
          <p className="text-stone-400 text-sm">{sponsor.description}</p>
        </div>
      </div>
    </motion.a>
  )
}