"use client"

import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
export const img = "/images/new/hm.png";

export default function Welcome() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-950 to-purple-900 py-16 mt-[60px] lg:mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-pulse" />
              <div className="absolute inset-2 rounded-full border-2 border-blue-300/20" />
              <Image
                src={img}
                alt="Shining Stars Education"
                width={600}
                height={250}
                className="rounded-full w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h2 className="text-blue-500 text-xl font-medium">You Are Welcome To</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 dark:text-white">Shining Stars</h1>
            </div>

            <div className="space-y-4 text-black">
              <p className="text-lg leading-relaxed dark:text-white">
                At Shining Stars, We believe that while what students know is important, the true measure of a students education is the ability to analyse what they do not know.
              </p>
              <p className="text-lg leading-relaxed dark:text-white">
              The School emphasises a learner-centred approach to teaching and learning, whereby topics from different subject areas are taught and students’ prior knowledge and experiences are used to teach new content. Students are allowed to explore and use their environment to learn on their own through research, project work and related learner–centered methods of teaching and learning.
              </p>
            </div>

            <div className="flex gap-4 pt-6 dark:text-white">
              <Link
                href="/school-content"
                className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 hover:bg-lime-600 
                transition-colors rounded-full text-black font-medium dark:text-white"
              >
                Our Work
              </Link>
              <Link
                href="/whyshin"
                className="bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
              
              >
                <span>Explore More</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
    </section>
  )
}

