"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTools, FaHardHat, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicePreview() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const section = document.getElementById("service-preview");
    const handleScroll = () => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !startCount) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <section
      id="service-preview"
      className="relative w-full bg-white text-black py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/images/servicepreview.jpg"
            alt="Service Overview"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm uppercase text-black/60 font-semibold mb-2 tracking-widest">
            What We Do
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
            Quality Construction for All Sectors
          </h2>
          <p className="text-black/70 text-base mb-6 leading-relaxed max-w-xl">
            From modern residential estates to complex commercial and civil
            engineering projects, MYCLIENT delivers excellence with modern
            techniques, professional crews, and attention to every detail.
          </p>

          {/* Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            <Counter label="Projects Delivered" value={300} start={startCount} />
            <Counter label="Years of Expertise" value={15} start={startCount} />
          </div>
        </motion.div>
      </div>

      {/* Services Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center px-4"
      >
        <ServiceFeature
          icon={<FaTools size={32} className="text-blue-700 mx-auto mb-4" />}
          title="Renovation & Repairs"
          description="Professional upgrades and maintenance for homes and facilities."
        />
        <ServiceFeature
          icon={<FaHardHat size={32} className="text-blue-700 mx-auto mb-4" />}
          title="Engineering Expertise"
          description="Precision-driven planning and site execution by certified experts."
        />
        <ServiceFeature
          icon={<FaBuilding size={32} className="text-blue-700 mx-auto mb-4" />}
          title="Commercial Projects"
          description="Construction of office complexes, retail spaces and more."
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link
          href="/services"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Explore All Services
        </Link>
      </motion.div>
    </section>
  );
}

// Counter Component
function Counter({
  label,
  value,
  start,
}: {
  label: string;
  value: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = value / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        clearInterval(interval);
        current = value;
      }
      setCount(Math.floor(current));
    }, 20);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <div className="text-left">
      <h3 className="text-4xl sm:text-5xl font-bold text-black">
        {count}
        <span className="text-blue-700">+</span>
      </h3>
      <p className="text-sm text-black/60 mt-1">{label}</p>
    </div>
  );
}

// Feature Box Component
function ServiceFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-md transition text-center">
      {icon}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
