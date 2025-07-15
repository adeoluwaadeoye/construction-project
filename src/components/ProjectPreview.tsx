"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectPreview() {
  const projects = [
    {
      title: "Luxury Duplex, Abuja",
      desc: "From foundation to finish, this home blends elegance and engineering.",
      img: "/images/project1.jpg",
    },
    {
      title: "Commercial Complex, Ibadan",
      desc: "A modern business plaza built in record time with premium materials.",
      img: "/images/project2.jpg",
    },
    {
      title: "Rural Road Project, Ogun",
      desc: "Reconnecting communities through reliable infrastructure.",
      img: "/images/project3.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold">Our Projects</h2>
        <p className="text-[var(--color-muted)] mt-2">
          A glimpse into the spaces we’ve proudly built across Nigeria.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="relative h-56">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="inline-block bg-blue-700 text-white px-6 py-3 font-medium hover:bg-blue-light transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
