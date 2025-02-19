import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D2D2D] mb-6"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-[0.2em] uppercase text-[#4A4A4A] mb-4"
        >
          Design & Renovation Specialist in Barrie
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl mx-auto"
        >
          At Bay Point Contracting, we specialize in bringing your vision to life through thoughtful design and
          renovation. Crafting a space that reflects your style and dreams, our in-house design team and renovation
          expertise come together for a customized and stylish transformation of your home.
        </motion.p>
      </div>
    </section>
  )
}

