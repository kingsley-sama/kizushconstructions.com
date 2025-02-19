"use client"
import { motion } from "framer-motion"

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2D2D2D] mb-6">Our Mission</h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">
              At Bay Point Contracting, we believe in transforming spaces with purpose and passion. Our approach goes
              beyond mere renovation – we create environments that reflect your unique style while enhancing
              functionality. By combining innovative design solutions with expert craftsmanship, we've built a
              reputation for delivering exceptional results that exceed expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3]">
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 400 300"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
              >
                <defs>
                  <clipPath id="blob-shape">
                    <path d="M390.5,146.5Q376,193,336,220.5Q296,248,246,257Q196,266,153.5,239.5Q111,213,78,175.5Q45,138,45.5,91.5Q46,45,92,21Q138,-3,188.5,7.5Q239,18,282.5,44Q326,70,365.5,108.5Q405,147,390.5,146.5Z" />
                  </clipPath>
                </defs>
                <foreignObject width="100%" height="100%" clipPath="url(#blob-shape)">
                  <img
                    src="images/r-architecture-P_0tnQ8hb70-unsplash.jpg"
                    alt="Our team at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </foreignObject>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

