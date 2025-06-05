import React from "react";
import { motion } from "framer-motion";

const dummyTournaments = [
  {
    title: "BGMI Clash Cup",
    date: "June 10, 2025",
    prize: "₹50,000",
    status: "Upcoming",
  },
  {
    title: "Tectonic Scrims #7",
    date: "June 15, 2025",
    prize: "₹10,000",
    status: "Ongoing",
  },
  {
    title: "Squad Showdown",
    date: "May 30, 2025",
    prize: "₹25,000",
    status: "Completed",
  },
];

export default function Tournaments() {
  return (
    <motion.section
      className="min-h-screen px-6 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-white mb-10">TOURNAMENTS</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {dummyTournaments.map((tournament, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-purple-500 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-2">
              {tournament.title}
            </h3>
            <p className="text-gray-300">📅 {tournament.date}</p>
            <p className="text-gray-300">🏆 Prize: {tournament.prize}</p>
            <p className="mt-2 text-sm text-white font-bold">
              Status: <span className="text-yellow-400">{tournament.status}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
