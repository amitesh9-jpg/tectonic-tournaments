import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          WELCOME TO <span className="text-purple-500">TECTONIC ESPORTS</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          India’s next-gen gaming battleground. Compete. Conquer. Celebrate.
        </p>
      </div>
    </motion.section>
  );
}
