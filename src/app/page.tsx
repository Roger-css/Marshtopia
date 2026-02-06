"use client";
import { Footer } from "@/Components/Footer";
import { Gallery } from "@/Components/Gallery";
import { Hero } from "@/Components/Hero";
import { Timeline } from "@/Components/TimeLine";
import { VideoSection } from "@/Components/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <main>
        <Hero />
        <Gallery />
        <VideoSection />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
