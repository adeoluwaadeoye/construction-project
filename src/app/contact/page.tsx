"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFileError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const file = formData.get("file") as File;

    // ✅ File validation
    if (file && file.size > 0) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setFileError("Unsupported file type.");
        toast.error("Only JPG, PNG, PDF, DOC/DOCX files are allowed.");
        setIsLoading(false);
        return;
      }

      if (file.size > maxSize) {
        setFileError("File too large. Max 5MB.");
        toast.error("File size exceeds 5MB.");
        setIsLoading(false);
        return;
      }

      // ❌ Formspree can't accept file uploads on the free plan
      formData.delete("file");
      formData.append(
        "file-note",
        `Uploaded file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`
      ); // Just notes
    }

    try {
      const res = await fetch("https://formspree.io/f/xvgqokyp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Message failed. Try again.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full bg-white text-black font-body">
      <section className="relative h-[90vh] w-full">
    <Image
      src="/images/contact.jpg"
      alt="Contact"
      fill
      className="w-full h-full object-cover md:object-fixed"
      priority
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-black/70"></div>
  <div className="relative z-10 flex h-full items-end justify-start px-6 md:px-36 pb-36 md:pb-56">
    <h1 className="text-white text-4xl md:text-6xl font-heading font-bold tracking-widest">
      Contact Us
    </h1>
  </div>
</section>


      {/* Hero */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-2">
          Contact Us
        </h2>
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
          Let&apos;s Build Something Great Together
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Whether you&apos;re starting a project or just exploring ideas, our
          team is ready to connect. Reach out to us — we&apos;re here to listen
          and help bring your vision to life.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        {/* Info */}
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white p-3 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <a href="tel:+2348123456789" className="text-blue-700 underline">
                +234 812 345 6789
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white p-3 rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <a
                href="mailto:info@myclient.com"
                className="text-blue-700 underline"
              >
                info@myclient.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-700 text-white p-3 rounded-full">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Our Offices</h4>
              <p className="text-gray-600">
                Lagos · Abuja · Ogun State <br />
                Nigeria
              </p>
            </div>
          </div>

          <div className="border-l-4 border-blue-700 pl-4 text-gray-700 text-base">
            We’re available Monday to Friday, 9am–5pm. For urgent inquiries,
            call or message us on WhatsApp.
          </div>

          <a
            href="https://wa.me/2348123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-md font-medium hover:bg-green-700 transition"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            ></textarea>
          </div>

          <div>
            <label htmlFor="file" className="block font-medium mb-1">
              Upload File (optional)
            </label>
            <input
              type="file"
              name="file"
              id="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm"
              aria-label="Upload file"
            />
            {fileError && (
              <p className="text-red-600 text-sm mt-1">{fileError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-white transition ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
