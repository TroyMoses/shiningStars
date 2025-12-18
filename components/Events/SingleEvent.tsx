import React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Event } from "@/types/types"
import { motion } from "framer-motion"

type Props = {
  post: Event
}

const SingleEvent = ({ post }: Props) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-white shadow-lg dark:bg-dark h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/events/${post._id}`} passHref>
        <motion.div className="relative block h-48 w-full" whileHover={{ scale: 1.05 }}>
          <span className="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white">
            {post.status}
          </span>
          <Image src={post.photo || "/placeholder.svg"} alt={post.activity} layout="fill" objectFit="cover" />
        </motion.div>
      </Link>
      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href={`/events/${post._id}`}>{post.activity}</Link>
        </h3>
        <p className="mb-4 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 "
        >
          {post.description.split(" ").slice(0, 20).join(" ")} ...
        </p>
        <p className="mb-6 text-base text-body-color dark:text-gray-300">{post.status}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={post.photo || "/placeholder.svg"}
                alt={post.activity}
                width={40}
                height={40}
                objectFit="cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-dark dark:text-white">At {post.place}</h4>
              <p className="text-xs text-body-color">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
          <Link href={`/events/${post._id}`} passHref>
            <motion.a
              className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white hover:bg-primary-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default SingleEvent

