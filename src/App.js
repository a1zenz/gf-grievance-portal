import React, { useState } from "react";

export default function GrievancePortal() {
  const [grievance, setGrievance] = useState("");
  const [level, setLevel] = useState("Mildly Annoyed 🙄");
  const [compensation, setCompensation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/xpwdnbdj";

    const payload = {
      grievance,
      level,
      compensation,
    };

    await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-6">
          Tishaaaa's Grievance Portal 💌
        </h1>

        {submitted ? (
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-green-600">
              Grievance submitted successfully!
            </p>
            <p className="text-sm text-gray-500">Ayush will review your complaint promptly, and think if this is a matter worth his attention. Stay tuned.😇</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Describe your grievance
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-pink-400 focus:border-pink-400"
                rows={4}
                placeholder="What went wrong? Be honest... 😔"
                value={grievance}
                onChange={(e) => setGrievance(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Annoyance Level
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-pink-400 focus:border-pink-400"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option>Mildly Annoyed 🙄</option>
                <option>Irritated 😤</option>
                <option>Lowkey Hurt 💔</option>
                <option>Mad Mad 😡</option>
                <option>Crying in Corner 😭</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Compensation
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-pink-400 focus:border-pink-400"
                placeholder="e.g. 1 ice cream, apology, 10 kisses 💋"
                value={compensation}
                onChange={(e) => setCompensation(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
            >
              Submit Grievance
            </button>
          </form>
        )}
      </div>
    </div>
  );
}