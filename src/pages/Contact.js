// ✅ Full Cleaned & Final Contact.js
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-xl w-full bg-gray-900 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
        <p className="text-gray-300 text-center mb-6">
          Have questions or want to partner with <span className="text-purple-400 font-semibold">TECTONIC ESPORTS</span>? Reach out to us via email!
        </p>
        <div className="text-center">
          <a
            href="mailto:tectonic.esports@gmail.com"
            className="text-purple-500 hover:text-purple-400 text-lg"
          >
            tectonic.esports@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}
