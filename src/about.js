import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">ABOUT TECTONIC ESPORTS</h2>
        <p className="text-md md:text-lg text-gray-300">
          TECTONIC ESPORTS is more than just a name — it's a revolution in the gaming world.
          Built for passionate players, pro-level tournaments, and a community that thrives on competition,
          we're here to shake the esports landscape. Whether you're grinding to be the best or playing for the thrill,
          Tectonic is your arena.
        </p>
      </div>
    </motion.section>
  );
}
