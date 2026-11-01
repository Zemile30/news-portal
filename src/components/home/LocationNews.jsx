'use client';
import { useState } from "react";

export default function LocationNews() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(value.trim());
  };

  return (
    <section>
      <h2 className="text-sm font-semibold text-gray-900">Location News</h2>

      <form onSubmit={handleSubmit} className="mt-3 bg-white shadow-sm p-4">
        <label htmlFor="location" className="block text-[10px] text-gray-700">
          Get Location specific News
        </label>
        <input
          id="location"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Your Location"
          className="mt-3 w-full h-10 px-3 border border-gray-200 text-xs placeholder:text-gray-400 focus:outline-none focus:border-brand"
        />
        <button
          type="submit"
          className="mt-3 bg-brand text-white text-[10px] font-medium tracking-wider uppercase px-4 py-2 hover:opacity-90"
        >
          Submit
        </button>

        {submitted && (
          <p className="mt-3 text-[10px] text-gray-500">
            Showing news for: {submitted}
          </p>
        )}
      </form>
    </section>
  );
}