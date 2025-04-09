'use client';
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-100 text-gray-800">
      <Head>
        <title>ZenTrust – Healing Earth, Healing Ourselves</title>
        <meta name="description" content="A sanctuary for regeneration, BPSS healing, and DAO-ready community living." />
      </Head>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-5xl font-bold max-w-4xl leading-tight">
          We are the <span className="text-emerald-700">Soil</span>, the <span className="text-amber-500">Seed</span>, the <span className="text-blue-500">Soul</span>.
        </h1>
        <p className="mt-6 text-lg max-w-xl text-gray-700">
          Reclaiming harmony between land and life through regeneration, BPSS healing, and sacred tech.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="#about" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl">🌱 Get Involved</a>
          <a href="#donate" className="border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-xl">💖 Donate</a>
          <a href="#about" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-800 font-medium py-3 px-4">📖 Learn More</a>
        </div>
      </section>

      <section id="about" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          A New Earth is Possible. And It Begins with Trust.
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          ZenTrust is a nonprofit at the intersection of ancestral wisdom and modern tech. We cultivate food forests, holistic wellness, and open-source solutions for the future of community healing.
        </p>
      </section>

      <section className="bg-emerald-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "🌳 Syntropic Forests", desc: "Nature-inspired farming that heals land and life." },
            { title: "🧠 BPSS Healing", desc: "Whole-person wellness: Bio-Psycho-Social-Spiritual." },
            { title: "📚 Radical Education", desc: "Workshops, research, and tools for open regeneration." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">From the Zen Blog</h2>
        <iframe
          src="https://zentrust.hashnode.dev/embed"
          style={{ width: "100%", height: "600px", border: "none" }}
          title="ZenTrust Blog"
        ></iframe>
      </section>

      <section className="bg-emerald-100 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Trust Circle</h2>
        <p className="text-gray-700 mb-6">We send seeds, not spam. Be the first to hear our stories.</p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input type="email" name="email" required placeholder="you@zentrust.world" className="p-3 rounded-md border border-gray-300" />
          <button type="submit" className="bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700">
            Sign Up
          </button>
        </form>
      </section>

      <footer className="bg-emerald-700 text-white text-center py-6 text-sm">
        <p>© 2025 ZenTrust, Inc. | hello@zentrust.world</p>
        <p>Built with love, rooted in regeneration 🌿</p>
      </footer>
    </div>
  );
}
