// lib/data.ts
import collectionsData from '@/data/collections.json'
import designersData from '@/data/designers.json'

export interface Collection {
  id: string
  title: string
  designer: string
  description: string
  image: string
  video?: string
  tags: string[]
  featured: boolean
}

export interface Designer {
  id: string
  name: string
  bio: string
  image: string
  instagram: string
}

export function getCollections(): Collection[] {
  return collectionsData as Collection[]
}

export function getFeaturedCollections(): Collection[] {
  return (collectionsData as Collection[]).filter((c) => c.featured)
}

export function getDesigners(): Designer[] {
  return designersData as Designer[]
}

export function getCollectionById(id: string): Collection | undefined {
  return (collectionsData as Collection[]).find((c) => c.id === id)
}