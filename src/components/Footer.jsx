import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-20">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} ZenTrust. Rooted in Tradition. Driven by Technology.
      </div>
    </footer>
  );
}

