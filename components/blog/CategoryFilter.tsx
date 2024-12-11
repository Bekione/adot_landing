'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BlogCategory } from '@/types/blog'

interface CategoryFilterProps {
  categories: (BlogCategory | 'All')[]
  activeCategory: BlogCategory | 'All'
  onCategoryChange: (category: BlogCategory | 'All') => void
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {

  return (
    <motion.div 
      className="flex flex-wrap justify- gap-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => onCategoryChange('All')}
        className={cn(
          "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
          activeCategory === 'All' 
            ? "bg-primary text-white" 
            : "bg-secondary text-primary hover:bg-secondary/30"
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {activeCategory === 'All' && (
          <motion.div
            layoutId="activeCategory"
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="absolute inset-0 bg-primary rounded-full"
          />
        )}
        <span className="relative block">All</span>
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === category 
              ? "bg-primary text-white" 
              : "bg-secondary/30 text-primary hover:bg-secondary/40"
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="absolute inset-0 bg-primary rounded-full"
            />
          )}
          <span className="relative block">
            {category}
          </span>
        </button>
      ))}
    </motion.div>
  )
}
