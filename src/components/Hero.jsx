// components/Hero.jsx
export function Hero() {
  return (
    <section className="bg-white text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">We are the Soil, the Seed, the Soul.</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Reclaiming harmony between land and life through regeneration and BPSS healing.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#about" className="bg-green-600 text-white px-6 py-3 rounded-xl">🌱 Get Involved</a>
        <a href="#story" className="bg-yellow-500 text-white px-6 py-3 rounded-xl">📖 Read Our Story</a>
      </div>
    </section>
  );
}
