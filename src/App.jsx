import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-6 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-md mb-6">
          ZenTrust: Harmony in Action
        </h1>
        <p className="text-lg text-green-700 max-w-2xl tracking-wide mb-8">
          A sanctuary for healing, community resilience, and regenerative living — rooted in tradition, scaled by technology.
        </p>
        <div className="flex gap-6">
          <a
            href="#contact"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-green-800 transition"
          >
            Join the Movement
          </a>
          <a
            href="#about"
            className="text-green-800 underline hover:text-green-900 transition"
          >
            Learn More
          </a>
        </div>
      </main>
    </>
  );
}


