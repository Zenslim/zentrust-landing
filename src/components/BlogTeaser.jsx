import React from "react";
export default function BlogTeaser() {
  return (
    <section className="py-20 bg-green-100 text-green-900" id="blog">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Read Our Stories</h2>
        <p className="mb-6">Latest insights from our regenerative journey.</p>
        <a
          href="https://zentrust.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
        >
          Visit Our Blog
        </a>
      </div>
    </section>
  );
}

