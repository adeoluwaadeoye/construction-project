"use client";

import type { KeenSliderInstance } from "keen-slider";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Reviews() {
  // Autoplay plugin
  function AutoplayPlugin(slider: KeenSliderInstance) {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 5000);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [AutoplayPlugin]
  );

  const testimonials = [
    {
      name: "Mrs. Adeyemi Abimbola",
      role: "Homeowner, Lagos",
      quote:
        "MYCLIENT built our dream home with so much precision and care. Their attention to detail and project delivery was truly outstanding.",
      image: "/images/client-1.jpg",
    },
    {
      name: "Engr. Sunday Olawale",
      role: "Site Supervisor, Ogun",
      quote:
        "They are one of the most reliable teams I’ve worked with. Very organized, quality-driven, and safety-conscious.",
      image: "/images/client-2.jpg",
    },
    {
      name: "Mr. Ibrahim Musa",
      role: "Commercial Developer, Abuja",
      quote:
        "From planning to completion, everything was handled professionally. We got more value than expected.",
      image: "/images/client-3.jpg",
    },
  ];

  return (
    <section className="bg-white text-black py-24 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold">Client Testimonials</h2>
        <p className="text-black/60 mt-2 text-base max-w-xl mx-auto">
          Hear from homeowners, developers, and partners we&apos;ve worked with across Nigeria.
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="keen-slider__slide p-8 bg-black text-white rounded-lg shadow text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-white">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-white italic mb-4">“{t.quote}”</p>
            <h4 className="text-lg font-semibold text-white">{t.name}</h4>
            <p className="text-sm text-white/60">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
