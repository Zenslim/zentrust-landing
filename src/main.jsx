import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Vision } from './components/Vision';
import { BlogTeaser } from './components/BlogTeaser';
import { Duxbury } from './components/Duxbury';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Main() {
  return (
    <main className="text-gray-800 bg-white scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About ZenTrust */}
      <About />

      {/* Our Vision */}
      <Vision />

      {/* What We Do */}
      <Programs />

      {/* Blog / Stories */}
      <BlogTeaser />

      {/* Local Chapter Portal */}
      <Duxbury />

      {/* Contact Us */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
