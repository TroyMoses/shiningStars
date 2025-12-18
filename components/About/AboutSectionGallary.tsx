"use client"
import Image from "next/image"
import Link from "next/link"
import { Camera, Eye } from "lucide-react"

import basketa from "../../public/images/shi/life.jpeg"
import basketb from "../../public/images/shi/mddfz.jpeg"
import basketc from "../../public/images/shi/pip.jpeg"
import basketd from "../../public/images/shi/mdgd.jpeg"
import grad from "../../public/images/shi/schoo.jpeg"

export default function AboutSectionGallery() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-gray-950 -z-10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-4 animate-fade-in">
            Welcome to Shining Stars Primary School Gallery!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Discover Our School Life Through Our Gallery
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16 items-center">
          <div className="lg:col-span-2 transform hover:scale-105 transition-transform duration-500">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src={grad || "/placeholder.svg"} alt="School life" className="w-full h-[300px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Camera className="absolute bottom-4 right-4 text-white/80 w-6 h-6" />
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6 p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Explore the dynamic world of Shining Stars Primary School through our vibrant gallery. Here, you&apos;ll
              find captivating images from our engaging educational trips, inspiring tours, and the lively school
              environment that makes our community unique. Each photo tells a story of our pupil&apos;s adventures,
              learning experiences, and the nurturing atmosphere we proudly offer.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[basketa, basketb, basketc, basketd].map((img, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500"
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Eye className="absolute bottom-4 right-4 text-white/80 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Explore More Photos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                text: "Entebbe Zoo",
                href: "https://photos.google.com/share/AF1QipM3aWmWdnZT28nqVVjQPo3KNfKz0NIjkF7Od8Ap73blWXzz-Pz1CHERvhnHC8zjcg?key=QWxpUkNxNW5BTHZCMDE3czEzMXpIWkFLWE9LUFpB",
              },
              {
                text: "Tour 2024",
                href: "https://photos.google.com/share/AF1QipOVrV6OjflOoHvuTC7w95KycHlXb-uQH0fV2w_dHJX7cBX0vsuJ1L9SQ_rYuzNgPg?key=cjBTMWxTN2tiNS1NVUx6VkVOeEZfWktLOG5wMFBB",
              },
              { text: "Our Events", href: "https://photos.app.goo.gl/fVYcE9K1GW8f98Jp9" },
              { text: "Our News", href: "https://photos.app.goo.gl/cmdPf3JP5cstDoi77" },
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <button className="group relative px-6 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  <span className="relative z-10">Explore {link.text}</span>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

