// src/App.jsx
import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-sm">
          ZenTrust: Harmony in Action
        </h1>
        <p className="text-lg text-green-700 tracking-wide">
          A sanctuary for healing, community resilience, and regenerative living — rooted in tradition, scaled by technology.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#"
            className="bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-green-800 transition"
          >
            Join the Movement
          </a>
          <a
            href="#"
            className="text-green-800 font-semibold underline hover:text-green-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}

