import React from "react";

export default function SupportSection() {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Contact ZenTrust</h2>
          <form action="https://formspree.io/f/mwplropq" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <textarea name="message" placeholder="Your Message" rows="4" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            <button type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-4">Stay updated on regenerative living, healing, and innovation.</p>
          <form action="https://buttondown.email/api/emails/embed-subscribe/zentrust" method="post" target="_blank" className="space-y-4">
            <input type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>

        {/* Ko-fi Donation */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Support ZenTrust</h2>
            <p className="text-gray-600 mb-6">Your donations help us build a thriving, nature-connected future.</p>
          </div>
          <a href="https://ko-fi.com/zentrust" target="_blank"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-center py-2 px-4 rounded-lg transition duration-200">
            ☕ Buy us a Coffee on Ko-fi
          </a>
        </div>

      </div>
    </section>
  );
}

