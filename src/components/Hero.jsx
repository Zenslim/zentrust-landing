// components/Hero.jsx
export function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-100 to-white text-center py-24 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6 leading-tight">
        We are the Soil, the Seed, the Soul.
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        Reclaiming harmony between land and life through regeneration, BPSS healing, and community wisdom.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="#about" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg transition">
          🌱 Get Involved
        </a>
        <a href="#projects" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-lg transition">
          📖 Read Our Story
        </a>
        <a href="#donate" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg transition">
          💖 Donate
        </a>
      </div>
    </section>
  );
}
