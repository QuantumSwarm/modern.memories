'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import Navbar from '@/components/sections/Navbar'
import Image from 'next/image'

interface Sponsor {
  id: string
  name: string
  logo: string
  url: string
  description: string
  color: string
}

interface SponsorCardProps {
  sponsor: Sponsor
  index: number
  isHovered: boolean
  onHover: (id: string | null) => void
}

export default function SponsorsPage() {
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Detect client-side mount
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Generate particles once with random values (pure!)
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
    }))
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, mouseX: ReturnType<typeof useMotionValue>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    mouseX.set((x - centerX) / 20)
  }

  const sponsors: Sponsor[] = [
    {
      id: 'nudestix',
      name: 'Nudestix',
      logo: '/images/nudestix.avif',
      url: 'https://nudestix.ca/',
      description: 'Clean, effortless makeup for the modern individual.',
      color: 'from-pink-500/30 to-rose-500/30',
    },
    {
      id: 'quantum',
      name: 'Quantum Swarm',
      logo: '/images/quantum-swarm.png',
      url: 'https://quantum-swarm.com/',
      description: 'Innovative technology solutions for creative industries.',
      color: 'from-cyan-500/30 to-blue-500/30',
    },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      
      {/* Background image (if exists) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/images/sponsors-bg.jpg)',
        }}
      />
      
      {/* Fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-transparent to-cyan-900/20 animate-pulse" />
      
      {/* Floating particles - ONLY RENDER ON CLIENT */}
      {isClient && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: '0',  // Use string for CSS consistency
          }}
          animate={{
            y: [null, -20, 20, -20],
            opacity: ['0', '0.8', '0'],  // Use strings for consistency
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* ===== CONTENT ===== */}
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg">
              SPONSORS
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A special thanks to our sponsors <span className="text-pink-400 font-medium">Quantum Swarm</span> and <span className="text-pink-400 font-medium">Nudestix</span> for their generous support of Humber's Fashion Arts and Business students. Your contributions helped make our fashion show, <span className="text-white font-medium">Unfiltered</span>, a success, and we are grateful for your partnership in supporting emerging talent in the fashion industry.
            </p>
          </motion.div>

          {/* Sponsor Cards Grid */}
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <a
              href="/rsvp"
              className="inline-block px-8 py-4 bg-pink-500/80 hover:bg-pink-400/80 text-white font-medium rounded-full transition-all hover:scale-105 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
            >
              Support Future Shows →
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-950/50 backdrop-blur-sm text-center text-stone-400 text-sm border-t border-stone-800 relative z-10">
        <p>© 2026 Unfiltered Fashion Show • Humber College</p>
      </footer>
    </main>
  )
}

// ===== Sponsor Card Component =====
function SponsorCard({ 
  sponsor, 
  index, 
  isHovered, 
  onHover 
}: SponsorCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5])
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5])

  return (
    <motion.a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => onHover(sponsor.id)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={(e) => handleMouseMove(e, mouseX)}
      whileHover={{ 
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="block group"
    >
      {/* Outer wrapper with extra padding to prevent clipping */}
      <div className="p-4">
        <motion.div
          style={{ rotateX, rotateY }}
          className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-visible ${
            isHovered ? 'ring-2 ring-pink-500/50' : ''
          }`}
        >
          {/* Animated gradient border */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${sponsor.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-3xl`} />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Logo Container - LARGER with padding */}
            <motion.div
              animate={{ 
                y: isHovered ? -8 : 0,
                filter: isHovered ? 'drop-shadow(0 0 25px rgba(236,72,153,0.7))' : 'none'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-56 h-40 mb-6 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-4 overflow-visible"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={220}
                height={120}
                className="object-contain max-w-full max-h-full transition-transform duration-500 group-hover:scale-115"
              />
            </motion.div>

            {/* Name */}
            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-pink-400 transition-colors">
              {sponsor.name}
            </h3>

            {/* Description */}
            <p className="text-stone-400 text-sm leading-relaxed">
              {sponsor.description}
            </p>

            {/* Visit Link */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="mt-4 text-pink-400 text-sm font-medium flex items-center gap-2"
            >
              Visit Website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.span>
          </div>

          {/* Pulse animation on border */}
          {isHovered && (
            <motion.div
              className="absolute -inset-0.5 rounded-3xl border-2 border-pink-500/50 pointer-events-none"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
            />
          )}
        </motion.div>
      </div>
    </motion.a>
  )
}

function handleMouseMove(e: React.MouseEvent<HTMLDivElement>, mouseX: ReturnType<typeof useMotionValue>) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  mouseX.set((x - rect.width / 2) / 20)
}