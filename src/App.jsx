import React from "react";
import About from "./components/About";
import Vision from "./components/Vision";
import BlogTeaser from "./components/BlogTeaser";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-gradient-to-b from-green-50 via-white to-green-100 text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen py-20 flex flex-col justify-center items-center text-center bg-green-100">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-sm">ZenTrust: Harmony in Action</h1>
        <p className="text-lg text-green-700 tracking-wide mt-4 max-w-2xl">
          A sanctuary for healing, community resilience, and regenerative living — rooted in tradition, scaled by technology.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#about"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-green-800 transition"
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

      {/* Ninja-style Flow Sections */}
      <About />
      <Vision />
      <BlogTeaser />
      <Contact />
      <Footer />
    </main>
  );
}
