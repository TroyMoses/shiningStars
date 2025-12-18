"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, AlertCircle, Loader2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/types/types"
import SingleEvent from "./SingleEvent"
import AdvancedFeatures from "./AdvancedFeatures"
import SectionTitle from "../Common/SectionTitle"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://shining-stars-dashboard.onrender.com/api/v1/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }
        const data = await response.json()
        const sortedEvents = data.sort((a: Event, b: Event) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setEvents(sortedEvents.slice(0, 2))
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred while fetching events")
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative">
        <SectionTitle title="Upcoming Events" paragraph="Stay connected with our vibrant school community!" center />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-12"
            >
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-12 px-4"
            >
              <div className="flex items-center space-x-2 text-destructive mb-4">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Oops! Something went wrong</span>
              </div>
              <p className="text-muted-foreground text-center max-w-md">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              {events.length > 0 ? (
                events.map((event) => (
                  <motion.div key={event._id} variants={itemVariants} className="w-full">
                    <SingleEvent post={event} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="md:col-span-2 flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-muted-foreground/25"
                >
                  <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Upcoming Events</h3>
                  <p className="text-muted-foreground text-center">
                    Check back later for new events or subscribe to our newsletter!
                  </p>
                </motion.div>
              )}
              <motion.div variants={itemVariants}>
                <AdvancedFeatures />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/events"
            className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-200 shadow-lg hover:shadow-primary/25"
          >
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

