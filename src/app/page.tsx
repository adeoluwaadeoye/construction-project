import AboutPreview from "@/components/AboutPreview"
import ContactPreview from "@/components/ContactPreview";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import ServicePreview from "@/components/ServicePreview"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicePreview />
      <Reviews />
      <ContactPreview />
    </main>
  );
}
