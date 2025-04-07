import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Vision from "./components/Vision";
import BlogTeaser from "./components/BlogTeaser";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-800 bg-white scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 via-white to-green-100 text-center py-20">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-sm">
          ZenTrust: Harmony in Action
        </h1>
        <p className="text-lg text-green-700 mt-6 tracking-wide max-w-2xl mx-auto">
          A sanctuary for healing, community resilience, and regenerative living – rooted in tradition, scaled by technology.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#about"
            className="bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-green-800 transition"
          >
            Join the Movement
          </a>
          <a
            href="#vision"
            className="text-green-800 font-semibold underline hover:text-green-900 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <About />
      <Vision />
      <BlogTeaser />
      <Contact />
      <Footer />
    </main>
  );
}
