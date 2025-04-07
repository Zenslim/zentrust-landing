import React from "react";

export default function Contact() {
  return (
    <section className="py-20 bg-white text-gray-800" id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form action="https://formspree.io/f/mqkrnvpj" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Name" required className="w-full border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" required className="w-full border p-2 rounded" />
          <textarea name="message" placeholder="Message" rows="5" required className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

