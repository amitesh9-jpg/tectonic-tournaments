import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    ign: "",
    email: "",
    phone: "",
    gameNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbzCW0mLbz9QJXcmiMxpP7RN5r3_LMHEHV9Lac4Zvkp4MkMNL7R2siGoRRFNYUlMLhP0ag/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">Tournament Registration</h2>

        <input name="name" onChange={handleChange} required placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input name="ign" onChange={handleChange} required placeholder="In-Game Name (IGN)" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input name="email" onChange={handleChange} required type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input name="phone" onChange={handleChange} required type="tel" placeholder="Phone Number" className="w-full p-3 rounded bg-gray-800 text-white" />
        <input name="gameNumber" onChange={handleChange} required placeholder="Game Number" className="w-full p-3 rounded bg-gray-800 text-white" />

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white p-3 rounded transition">
          Submit
        </button>

        {submitted && (
          <p className="text-center text-green-400 font-medium">Thank you for registering!</p>
        )}
      </form>
    </section>
  );
}
