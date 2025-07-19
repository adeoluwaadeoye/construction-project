"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] text-[var(--color-white)] px-6 py-16 mt-24">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-[var(--color-blue-light)] mb-4">
            MYCLIENT
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed font-body mb-6">
            We design, build, and deliver long-lasting residential and commercial structures across Nigeria — built on trust, precision, and innovation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-[var(--color-blue-light)]">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-body text-[var(--color-muted)]">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-blue-light)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider">
            Contact
          </h3>
          <ul className="space-y-2 text-sm font-body text-[var(--color-muted)]">
            <li>
              <a
                href="mailto:info@myclient.ng"
                className="hover:text-[var(--color-blue-light)] transition"
              >
                info@myclient.ng
              </a>
            </li>
            <li>
              <a
                href="tel:+2348031234567"
                className="hover:text-[var(--color-blue-light)] transition"
              >
                +234 803 123 4567
              </a>
            </li>
            <li>Abuja & Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider">
            Stay Updated
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Get news and updates on our latest projects and offers.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--color-blue-light)] hover:bg-white hover:text-black transition text-sm px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-[var(--color-muted)] font-body">
        &copy; {new Date().getFullYear()} MYCLIENT. All rights reserved.
      </div>
    </footer>
  );
}
