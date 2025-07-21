"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Home, Building2, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start1 = 0;
          let start2 = 0;
          const end1 = 120;
          const end2 = 75;
          const speed = 20;

          const timer = setInterval(() => {
            start1 += 2;
            start2 += 1;
            setCount1((prev) => (prev < end1 ? start1 : end1));
            setCount2((prev) => (prev < end2 ? start2 : end2));

            if (start1 >= end1 && start2 >= end2) clearInterval(timer);
          }, speed);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white w-full text-black font-body">
      {/* Hero Banner */}
      <section className="relative h-[90vh] w-full bg-[url('/images/serviceimg.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed">
        <div className="absolute inset-0 bg-black/60 flex items-end justify-start px-6 sm:px-12 md:px-36 pb-24 sm:pb-36 md:pb-56">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-widest"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT - Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Mobile + Tablet layout (visible below lg) */}
          <div className="flex flex-col gap-6 lg:hidden">
            {[
              { src: "/images/residential.jpg", alt: "Residential" },
              { src: "/images/commercial.jpg", alt: "Commercial" },
              { src: "/images/infrastructure.jpg", alt: "Infrastructure" },
            ].map((img, i) => (
              <div
                key={i}
                className="relative w-full h-64 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop layered collage (only visible on lg and up) */}
          <div className="relative hidden lg:block h-[420px] w-full">
            <div className="absolute top-0 left-0 w-64 h-72 shadow-md z-10 rounded-lg overflow-hidden">
              <Image
                src="/images/residential.jpg"
                alt="Residential"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-[180px] w-64 h-72 shadow-lg z-20 rounded-lg overflow-hidden">
              <Image
                src="/images/commercial.jpg"
                alt="Commercial"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-24 left-16 w-64 h-72 shadow-xl z-30 rounded-xl overflow-hidden">
              <Image
                src="/images/infrastructure.jpg"
                alt="Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Text and Counters */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h4 className="text-sm text-blue-700 uppercase tracking-widest font-semibold">
            Why Choose Us
          </h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-snug">
            Purpose-Driven Construction, Built to Last
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We go beyond bricks and mortar. Through innovation, collaboration,
            and accountability, we deliver environments that stand the test of
            time and elevate everyday living.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="border border-gray-300 px-6 py-4 rounded-lg text-center w-full sm:w-1/2">
              <h3 className="text-4xl font-bold text-blue-700">{count1}+</h3>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div className="border border-gray-300 px-6 py-4 rounded-lg text-center w-full sm:w-1/2">
              <h3 className="text-4xl font-bold text-blue-700">{count2}+</h3>
              <p className="text-sm text-gray-600">Communities Impacted</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Services Overview */}
      <section className="px-6 md:px-16 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm text-blue-700 uppercase tracking-widest font-semibold mb-3">
            Our Core Services
          </h2>
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
            End-to-End Construction Expertise
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            MYCLIENT delivers comprehensive construction solutions — from
            groundbreaking residential builds to complex infrastructure projects
            — all anchored in quality and accountability.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto space-y-24">
        {[
          {
            title: "Residential Construction",
            icon: <Home className="text-blue-700 w-6 h-6 mr-2" />,
            img: "/images/residential.jpg",
            desc: "We design and build homes that reflect your lifestyle — combining elegance, sustainability, and smart space planning.",
          },
          {
            title: "Commercial Buildings",
            icon: <Building2 className="text-blue-700 w-6 h-6 mr-2" />,
            img: "/images/commercial.jpg",
            desc: "From retail spaces to high-rise developments, we deliver business environments that are functional, efficient, and future-focused.",
          },
          {
            title: "Roads & Infrastructure",
            icon: <MapPinned className="text-blue-700 w-6 h-6 mr-2" />,
            img: "/images/infrastructure.jpg",
            desc: "We engineer resilient infrastructure — roads, drainage, and water systems — that power the growth of thriving communities.",
          },
        ].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 items-center`}
          >
            <div className="w-full md:w-1/2 h-[300px] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold flex items-center">
                {service.icon}
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Final Note */}
      <section className="px-6 md:px-16 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-heading font-semibold mb-4 text-blue-800">
            Built on Trust. Powered by Purpose.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At MYCLIENT, our passion goes beyond construction. We build lasting
            partnerships, thriving neighborhoods, and spaces that empower people
            to live and work better.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
