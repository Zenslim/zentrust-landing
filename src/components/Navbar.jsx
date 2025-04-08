import React from "react";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-green-800 font-bold text-xl">
          🌿 ZenTrust
        </a>
        <ul className="flex gap-6 text-green-700 font-medium">
          <li><a href="#about" className="hover:text-green-900">About</a></li>
          <li><a href="#vision" className="hover:text-green-900">Vision</a></li>
          <li><a href="#blog" className="hover:text-green-900">Blog</a></li>
          <li><a href="#contact" className="hover:text-green-900">Contact</a></li>
<li>
  <a href="https://duxbury.zentrust.world" target="_blank" rel="noopener noreferrer" className="hover:text-green-900">
    Duxbury
  </a>
</li>


        </ul>
      </nav>
    </header>
  );
}

