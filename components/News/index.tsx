"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionTitle from "../Common/SectionTitle"
import SingleNews from "./SingleNews"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react"

const News = () => {
  const [news, setNews] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch("https://shining-stars-dashboard.onrender.com/api/v1/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      const reversedData = data.slice(0).reverse()
      setNews(reversedData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(news.length / itemsPerPage) - 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  const paginatedNews = news.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section id="blog" className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle title="Latest News" paragraph="Stay up-to-date with the latest news at our school!" center />

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <>
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="space-y-4">
                    <div className="h-48 w-full bg-gray-200 animate-pulse rounded-lg"></div>
                    <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                ))}
              </>
            ) : (
              paginatedNews.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <SingleNews post={post} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-between items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${
              currentPage === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <Link href="/news" passHref>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              View All <Newspaper className="h-4 w-4" />
            </span>
          </Link>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(news.length / itemsPerPage) - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 ${
              currentPage === Math.ceil(news.length / itemsPerPage) - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default News

