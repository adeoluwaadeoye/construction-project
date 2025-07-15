"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handle scroll direction + shadow
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScroll || currentScroll < 10;
      setVisible(isScrollingUp);
      setHasScrolled(currentScroll > 10);
      setPrevScrollPos(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2349012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-36 right-7 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all lg:hidden"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Header */}
      <header
        className={`fixed w-full z-40 transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "shadow-md" : "shadow-none"} bg-white`}
      >
        {/* Top CTA Bar */}
        <div className="bg-blue-800 text-white text-center text-xs sm:text-sm py-2 px-4">
          🏗️ Licensed Builder Since 2003 — Trusted Across Nigeria
        </div>

        {/* Contact Bar */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-16 py-2 text-gray-700 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-center sm:text-left">
              <a href="tel:+2349012345678" className="hover:text-blue-700 transition">
                📞 +234 901 234 5678
              </a>
              <a href="mailto:info@myclient.ng" className="hover:text-blue-700 transition">
                ✉️ info@myclient.ng
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-blue-dark">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-600 transition">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-600 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="bg-white/90 backdrop-blur-lg px-4 md:px-16 py-3 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold font-heading text-blue-800 tracking-wide">
              MYCLIENT
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6 font-medium text-sm">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
              <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-blue-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-3 space-y-3 text-center text-sm font-medium text-gray-700">
              <Link href="/" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/services" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/projects" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link href="/contact" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
