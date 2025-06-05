import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">TECTONIC ESPORTS</h1>
      <div className="flex gap-6 text-white text-lg">
        <Link to="/" className="hover:text-purple-400 transition">Home</Link>
        <Link to="/register" className="hover:text-purple-400 transition">Register</Link>
        <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
