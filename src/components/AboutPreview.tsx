"use client";

import Link from "next/link";
import {
  FaHardHat,
  FaTruckMonster,
  FaRegClock,
  FaHandshake,
} from "react-icons/fa";
import CounterSection from "./CounterSection";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaHardHat className="text-2xl sm:text-3xl lg:text-4xl text-white" />,
      title: "Experienced Team",
      desc: "Our skilled professionals bring years of expertise to every project.",
    },
    {
      icon: <FaTruckMonster className="text-2xl sm:text-3xl lg:text-4xl text-white" />,
      title: "Modern Equipment",
      desc: "We use powerful and modern machinery to ensure top-notch delivery.",
    },
    {
      icon: <FaRegClock className="text-2xl sm:text-3xl lg:text-4xl text-white" />,
      title: "Timely Delivery",
      desc: "We prioritize deadlines and deliver without compromising quality.",
    },
    {
      icon: <FaHandshake className="text-2xl sm:text-3xl lg:text-4xl text-white" />,
      title: "Client Satisfaction",
      desc: "Our reputation is built on transparency, integrity, and trust.",
    },
  ];

  return (
    <>
      <section
        className="relative w-full min-h-screen overflow-hidden isolate px-6 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-28 flex items-center
        bg-black bg-[url('/images/helmetbg.jpg')] bg-cover bg-center bg-no-repeat sm:bg-fixed"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-14 text-white">
          {/* Text Section */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-widest font-semibold mb-3 text-blue-300">
              Why Choose Us
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-5 leading-snug text-white">
              Trusted Construction,{" "}
              <br className="hidden md:block" /> Every Step of the Way
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 leading-relaxed max-w-2xl">
              At MYCLIENT, we don’t just build structures — we build trust,
              value, and long-term relationships. Our team is committed to
              precision, efficiency, and excellence on every project.
            </p>
            <Link
              href="/about"
              className="inline-block bg-white text-black px-6 py-3 md:px-7 md:py-3.5 rounded-md font-medium border border-white hover:bg-transparent hover:text-white transition duration-300"
            >
              Know More
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white/10 p-5 rounded-lg shadow hover:shadow-md transition backdrop-blur-md"
              >
                <div className="min-w-[48px] min-h-[48px] p-3 rounded-full bg-white/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section BELOW */}
      <CounterSection />
    </>
  );
}
