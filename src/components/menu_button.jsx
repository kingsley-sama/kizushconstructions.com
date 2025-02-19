"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 10 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -10 },
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.button
        className="relative w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 top-4"
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 top-6"
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 bottom-4"
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={isOpen ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </div>
  )
}

