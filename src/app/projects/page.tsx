"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data/projectsData";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const openGallery = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const nextImg = useCallback(() => {
    if (selectedProject) {
      setDirection(1);
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  }, [selectedProject]);

  const prevImg = useCallback(() => {
    if (selectedProject) {
      setDirection(-1);
      setCurrentImgIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, nextImg, prevImg]);

  return (
    <main className="bg-white w-full font-body">
      {/* Fixed Background Hero Section */}
      <section className="relative h-screen w-full bg-[url('/images/residential.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-black/70 flex items-end justify-start px-36 pb-56">
          <h1 className="text-white text-5xl md:text-6xl font-heading font-bold tracking-widest">
            Our Projects 
          </h1>
        </div>
      </section>

      {/* Title */}
      <section className="text-center py-20 px-6 md:px-16">
        <h4 className="text-sm uppercase tracking-widest text-blue-700">
          Featured Works
        </h4>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Recent Projects
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We take pride in every structure we build. From residential estates to
          major infrastructure — see some of our completed works.
        </p>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-16 space-y-20 max-w-7xl mx-auto pb-24">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 items-center`}
          >
            <div className="relative w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm uppercase font-medium text-blue-600">
                {project.type}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{project.description}</p>
              <button
                onClick={() => openGallery(project)}
                className="mt-2 inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
              >
                View Gallery
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Modal Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <div
              className="relative w-[95%] max-w-4xl bg-white rounded-xl p-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeGallery}
                title="close image"
                className="absolute top-4 right-4 z-50 bg-black text-white rounded-full p-2 hover:bg-red-600"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image slider with swipe */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-lg overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={selectedProject.gallery[currentImgIndex]}
                    custom={direction}
                    className="absolute inset-0"
                    initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -100) nextImg();
                      else if (info.offset.x > 100) prevImg();
                    }}
                  >
                    <Image
                      src={selectedProject.gallery[currentImgIndex]}
                      alt={`Gallery ${selectedProject.title}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow */}
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-black text-white hover:bg-gray-800 rounded-full p-2"
                  title="Previous image"
                  aria-label="Previous image"
                >
                  <ArrowLeft
                    className="w-5 h-5"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <span className="sr-only">Previous image</span>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-black text-white hover:bg-gray-800 rounded-full p-2"
                  title="Next image"
                  aria-label="Next image"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center items-center mt-4 gap-2">
                {selectedProject.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentImgIndex ? 1 : -1);
                      setCurrentImgIndex(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      i === currentImgIndex ? "bg-blue-700" : "bg-gray-300"
                    }`}
                    title={`Go to image ${i + 1}`}
                    aria-label={`Go to image ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
