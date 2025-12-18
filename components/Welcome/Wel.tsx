"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const showcaseItems = 
[
  {
    "id": 1,
    "title": "Our School Director",
    "description": "Guiding the school's vision and growth.",
    "subtext": "Providing leadership to ensure quality education and student success.",
    "image": "/images/shi/drrr.jpeg"
  },
  {
    "id": 2,
    "title": "Our Teaching Staff",
    "description": "Dedicated educators shaping young minds.",
    "subtext": "Committed to delivering quality education and fostering student development.",
    "image": "/images/new/staff.jpg"
  },
  {
    "id": 3,
    "title": "Our Administrators",
    "description": "Ensuring smooth school operations.",
    "subtext": "Managing school affairs efficiently to support students and teachers.",
    "image": "/images/shi/dr.jpeg"
  },
  {
    "id": 4,
    "title": "Pupils Life",
    "description": "A vibrant and engaging school experience.",
    "subtext": "Encouraging learning, creativity, and friendships in a supportive environment.",
    "image": "/images/shi/gradz.jpeg"
  }
]


export default function WebsiteShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const changeSlide = useCallback(
    (newIndex: number) => {
      if (newIndex !== currentIndex) {
        setDirection(newIndex > currentIndex ? 1 : -1)
        setCurrentIndex(newIndex)
      }
    },
    [currentIndex],
  )

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % showcaseItems.length
    changeSlide(newIndex)
  }, [currentIndex, changeSlide])

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + showcaseItems.length) % showcaseItems.length
    changeSlide(newIndex)
  }, [currentIndex, changeSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1533] to-[#2d2b4a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 300C100 300 300 600 700 600C1100 600 1300 300 1500 300"
            stroke="#4299E1"
            strokeWidth="4"
            fill="none"
            className="opacity-20"
          />
        </svg>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="space-y-8"
            >
              <div className="inline-block">
                <h1 className="text-2xl lg:text-4xl font-bold text-white relative">
                  <motion.span
                    className="relative z-10 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {showcaseItems[currentIndex].title.split(" ")[0]}
                  </motion.span>
                  <br />
                  <motion.span
                    className="relative z-10 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {showcaseItems[currentIndex].title.split(" ").slice(1).join(" ")}
                  </motion.span>
                  <motion.div
                    className="absolute -inset-4 border-2 border-blue-400 rounded-full"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  ></motion.div>
                </h1>
              </div>

              <motion.h2
                className="text-3xl text-white font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {showcaseItems[currentIndex].description}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {showcaseItems[currentIndex].subtext}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[#f8f7ff] rounded-full"></div>
              <div className="relative h-full flex items-center justify-center p-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={showcaseItems[currentIndex].image || "/placeholder.svg"}
                      alt={`${showcaseItems[currentIndex].title} preview`}
                      className="rounded-lg shadow-2xl"
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="flex gap-3">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300 hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

