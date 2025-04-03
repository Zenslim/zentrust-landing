
import React from "react";
import SupportSection from "./SupportSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 bg-green-700 text-white shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-2">
  <img src="/logo.svg" alt="ZenTrust Logo" className="h-8 w-8 object-contain" />
  <span className="text-xl font-bold">ZenTrust</span>
</div>

        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-4xl mx-auto text-center py-16 px-6 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Regenerating Land. Restoring Balance.
        </h1>
        <p className="text-lg md:text-xl">
          ZenTrust is a nonprofit initiative advancing ecological regeneration,
          syntropic agriculture, and holistic community health.
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-2xl text-lg hover:bg-green-700 transition"
        >
          Connect With Us
        </a>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            ZenTrust is a Massachusetts-based 501(c)(3) nonprofit that restores
            degraded ecosystems and strengthens communities through
            nature-aligned, science-backed regeneration practices. We combine
            syntropic food forests, agroecology, aquaponics, and holistic healing
            systems grounded in Bio-Psycho-Social-Spiritual (BPSS) principles.
          </p>

          <h2 className="text-2xl font-semibold">Current Focus: Duxbury, MA</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Regenerating degraded public or private land</li>
            <li>Implementing syntropic agroforestry and aquaponics systems</li>
            <li>Creating healing landscapes and vocational learning hubs</li>
            <li>Partnering with municipalities, land trusts, and landowners</li>
          </ul>

          <h2 className="text-2xl font-semibold">Public Benefit</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>IRS-compliant 501(c)(3) nonprofit status</li>
            <li>Education, soil health, food security, and climate resilience</li>
            <li>Zero-profit distribution—100% reinvested in regeneration</li>
          </ul>

          <h2 className="text-2xl font-semibold">Future Vision</h2>
          <p>
            ZenTrust is building a decentralized, AI-augmented network for land
            stewards, researchers, and communities. We envision an open-access,
            blockchain-integrated platform for regeneration protocols,
            transparent funding, and community governance.
          </p>
        </div>
      </section>

      {/* Blog Placeholder Section */}
      <section id="blog" className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Blog (Coming Soon)</h2>
        <p className="text-gray-600">
          Articles and updates on regenerative land use, syntropic design, and community healing.
        </p>
      </section>
<section id="contact" className="max-w-xl mx-auto p-6 mt-16 bg-gray-100 rounded shadow">
  <h2 className="text-2xl font-bold mb-4 text-center">Contact ZenTrust</h2>
  <form action="https://formspree.io/f/mwplropq" method="POST" className="space-y-4">
    <label className="block">
      <span className="text-gray-700">Your email</span>
      <input
        type="email"
        name="email"
        required
        className="mt-1 block w-full border border-gray-300 rounded p-2"
      />
    </label>
    <label className="block">
      <span className="text-gray-700">Your message</span>
      <textarea
        name="message"
        required
        className="mt-1 block w-full border border-gray-300 rounded p-2"
      ></textarea>
    </label>
    <button
      type="submit"
      className="w-full bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
    >
      Send Message
    </button>
  </form>
</section>

<SupportSection />


      {/* Footer */}
      <footer className="w-full text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ZenTrust. All rights reserved.
      </footer>
    </main>
  );
}
