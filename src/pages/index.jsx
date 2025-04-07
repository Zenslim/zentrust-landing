import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 via-white to-green-200 text-gray-900 font-sans">
      <header className="w-full shadow p-4 bg-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="ZenTrust Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">ZenTrust</span>
        </div>
        <nav className="space-x-4">
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Regenerating Land. Restoring Balance.</h1>
        <p className="text-xl max-w-xl mx-auto mb-8">
          ZenTrust is a regenerative initiative weaving ecology, technology, and holistic health into thriving community ecosystems.
        </p>
        <Button className="text-lg px-6 py-3 rounded-xl" size="lg">Join the Movement</Button>
      </main>

      <section id="mission" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Ecological Stewardship</h3>
              <p>Reviving ecosystems through syntropic agroforestry, integrated livestock systems, and permaculture design.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Community Healing</h3>
              <p>Fusing Ayurveda, indigenous wellness, and environmental harmony for radical holistic health.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2">Decentralized Trust</h3>
              <p>Building techno-spiritual cooperatives for self-determined futures, governed by shared purpose not profit.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="text-center py-16 px-6 bg-green-100">
        <h2 className="text-3xl font-semibold mb-4">Connect With Us</h2>
        <p className="max-w-xl mx-auto mb-6">We welcome collaborators, land stewards, designers, funders, and visionaries. Reach out to co-create.</p>
        <Button size="lg" variant="outline">hello@zentrust.world</Button>
      </section>

      <footer className="text-sm text-gray-600 text-center py-4">© 2025 ZenTrust. All rights reserved.</footer>
    </div>
  );
}

