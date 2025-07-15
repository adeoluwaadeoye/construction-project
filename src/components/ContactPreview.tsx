"use client";

import Link from "next/link";

export default function ContactPreview() {
  return (
    <section className="text-center px-6 md:px-16 py-24 bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[var(--color-text)]">
          Ready to Start Your Project?
        </h2>
        <p className="text-base md:text-lg text-[var(--color-muted)] mb-8">
          Whether it’s a new home, office, or large-scale infrastructure, our team is ready to build it right — on time, and with excellence. Let’s get started.
        </p>
        <Link
          href="/contact"
          className="bg-black border border-black text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
