'use client'

import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <motion.div 
      className="relative w-full max-w-md mx-auto mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="search"
        placeholder="Search posts..."
        className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </motion.div>
  )
}

