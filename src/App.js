import React, { useState } from "react";

export default function GrievancePortal() {
  const [grievance, setGrievance] = useState("");
  const [level, setLevel] = useState("Mildly Annoyed");
  const [compensation, setCompensation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

    const formData = new FormData();
    formData.append("entry.1234567890", grievance);     // Replace with actual entry ID for grievance
    formData.append("entry.2345678901", level);         // Replace with actual entry ID for level
    formData.append("entry.3456789012", compensation);  // Replace with actual entry ID for compensation

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-pink-600">GF Grievance Portal 💌</h1>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 text-lg font-semibold mb-2">Grievance submitted successfully!</p>
            <p className="text-sm">You may now proceed to make up for it 🥺</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Describe your grievance</label>
              <textarea
                className="mt-1 block w-full p-2 border rounded-md"
                rows={3}
                value={grievance}
                onChange={(e) => setGrievance(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Annoyance Level</label>
              <select
                className="mt-1 block w-full p-2 border rounded-md"
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
              <label className="block text-sm font-medium text-gray-700">Preferred Compensation</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded-md"
                placeholder="e.g. 1 ice cream, apology, 10 kisses"
                value={compensation}
                onChange={(e) => setCompensation(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl"
            >
              Submit Grievance
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
