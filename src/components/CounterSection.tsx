"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 250 },
  { label: "Happy Clients", value: 200 },
  { label: "Team Members", value: 50 },
  { label: "Years Experience", value: 15 },
];

export default function CounterSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Count once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          Trusted Excellence in Every Project
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-2xl mx-auto"
        >
          Over the years, MYCLIENT has consistently delivered top-tier construction services.
          Our commitment to quality, client satisfaction, and innovation sets us apart.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-5xl md:text-6xl font-extrabold mb-2 text-blue-500">
              {startCount ? <AnimatedNumber target={stat.value} /> : "0+"}
            </h3>
            <p className="text-sm text-white/70 uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Optional Call to Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Learn More About Us
        </a>
      </motion.div>
    </section>
  );
}

// Counter animation logic
function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}+</>;
}
