"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-6 sm:px-10 md:px-20 lg:px-32"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight mb-6"
        >
          We Construct Your Dream Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
        >
          MYCLIENT delivers high-quality construction services — from residential developments to commercial builds — focused on precision, speed, and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="bg-white text-black px-6 py-3 rounded-md font-medium border border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            View Our Projects
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
