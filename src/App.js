import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white text-3xl">
      Welcome to TECTONIC ESPORTS
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}
