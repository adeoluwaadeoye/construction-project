// src/components/Footer.tsx

"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] text-[var(--color-white)] px-6 py-14 mt-24">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Column 1: Branding */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-[var(--color-blue-light)] mb-3">
            MYCLIENT
          </h2>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm font-body">
            We design, build, and deliver durable homes and structures across Nigeria — with a focus on quality, trust, and long-term value.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-white)] uppercase mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-body">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Our Projects" },
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

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-white)] uppercase mb-4 tracking-wide">
            Contact
          </h3>
          <ul className="space-y-2 text-sm font-body text-[var(--color-muted)]">
            <li>
              <a
                href="mailto:info@myclient.ng"
                className="hover:text-[var(--color-blue-light)] transition-colors duration-200"
              >
                info@myclient.ng
              </a>
            </li>
            <li>
              <a
                href="tel:+2348031234567"
                className="hover:text-[var(--color-blue-light)] transition-colors duration-200"
              >
                +234 803 123 4567
              </a>
            </li>
            <li>Abuja & Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-[var(--color-muted)] font-body">
        &copy; {new Date().getFullYear()} MYCLIENT. All rights reserved.
      </div>
    </footer>
  );
}
