
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 bg-green-700 text-white shadow-md flex justify-between items-center">
        <div className="text-xl font-bold">ZenTrust</div>
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

{/* Support Section: Contact, Newsletter, Ko-fi */}
<section className="bg-gray-50 py-12 px-6 lg:px-12" id="contact">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

    {/* Contact Form */}
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Contact ZenTrust</h2>
      <form action="https://formspree.io/f/mwplropq" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input type="email" name="email" placeholder="Your Email" required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <textarea name="message" placeholder="Your Message" rows="4" required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        <button type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>

    {/* Newsletter Signup */}
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Join Our Newsletter</h2>
      <p className="text-gray-600 mb-4">Stay updated on regenerative living, healing, and innovation.</p>
      <form action="https://buttondown.email/api/emails/embed-subscribe/zentrust" method="post" target="_blank" className="space-y-4">
        <input type="email" name="email" placeholder="Your Email" required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg">
          Subscribe
        </button>
      </form>
    </div>

    {/* Ko-fi Donation */}
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Support ZenTrust</h2>
        <p className="text-gray-600 mb-6">Your donations help us build a thriving, nature-connected future.</p>
      </div>
      <a href="https://ko-fi.com/zentrust" target="_blank"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-center py-2 px-4 rounded-lg transition duration-200">
        ☕ Buy us a Coffee on Ko-fi
      </a>
    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="w-full text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ZenTrust. All rights reserved.
      </footer>
    </main>
  );
}
