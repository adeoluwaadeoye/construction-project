"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  Building2,
  Wrench,
  Users,
  ShieldCheck,
  Award,
  Lightbulb,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutPage() {
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const imageControls = useAnimation();
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });

  useEffect(() => {
    if (isInView) {
      imageControls.start("visible");
    }
  }, [isInView, imageControls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full bg-white text-black font-body">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed">
        <div className="absolute inset-0 bg-black/70 flex items-end justify-start px-6 md:px-36 pb-36">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-widest">
            About Us
          </h1>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-y-16 lg:gap-x-16 items-start">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h4 className="text-sm text-gray-500 uppercase tracking-widest">
              About Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Building Trust. Delivering Excellence.
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              With over 25 years of experience, MYCLIENT is a trusted name in
              construction across Nigeria. We specialize in delivering
              high-quality residential, commercial, and civil engineering
              projects using cutting-edge tools and innovative techniques.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Whether it’s a modern housing estate, a corporate tower, or a
              critical infrastructure project, we bring deep technical expertise
              and a customer-first mindset.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* RIGHT IMAGES */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div
              ref={imageRef}
              className="relative w-full max-w-md h-96 rounded-xl shadow-lg"
              initial="hidden"
              animate={imageControls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <Image
                src="/images/builder2.jpg"
                alt="Construction"
                fill
                className="object-cover rounded-xl"
              />

              {/* Floating Cards (only on lg+) */}
              <div className="absolute top-48 -right-10 space-y-3 z-20 hidden lg:block">
                <InfoCard
                  icon={<Building2 size={20} />}
                  title="300+ Projects"
                />
                <InfoCard icon={<Wrench size={20} />} title="Modern Tools" />
                <InfoCard icon={<Users size={20} />} title="Skilled Pros" />
              </div>
            </motion.div>

            {/* Stack Image Top (only on lg+) */}
            <motion.div
              className="absolute top-20 -left-6 w-40 h-60 rounded-xl shadow-md z-30 hidden lg:block"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/builder.jpg"
                alt="Builder"
                fill
                className="object-cover rounded-xl"
              />

              <div
                ref={counterRef}
                className="absolute bottom-4 -left-6 bg-black text-center text-white px-6 py-2 shadow-md text-2xl font-bold z-40 rounded-full"
              >
                {startCount ? <Counter target={25} /> : "0"}+<br />
                <span className="text-xs font-medium">Years Exp.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <Card
            icon={<ShieldCheck className="text-blue-600" />}
            title="Mission"
            text="To deliver sustainable, innovative, and top-quality construction services that exceed client expectations."
          />
          <Card
            icon={<Lightbulb className="text-yellow-500" />}
            title="Vision"
            text="To be the most reliable and respected construction partner across Africa."
          />
          <Card
            icon={<Award className="text-green-600" />}
            title="Values"
            text="Integrity, Innovation, Safety, Teamwork, and Excellence."
          />
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow">
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-800">{title}</p>
    </div>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </motion.div>
  );
}
