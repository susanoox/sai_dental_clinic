import React from "react";

const googleColors = [
  { letter: "G", color: "#4285F4" }, // Blue
  { letter: "o", color: "#DB4437" }, // Red
  { letter: "o", color: "#F4B400" }, // Yellow
  { letter: "g", color: "#4285F4" }, // Blue
  { letter: "l", color: "#0F9D58" }, // Green
  { letter: "e", color: "#DB4437" }, // Red
];

export default function GoogleBusinessQRSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 animate-fadeIn">
      <h2 className="text-center text-3xl font-bold mb-8">
        {googleColors.map(({ letter, color }, i) => (
          <span key={i} style={{ color }}>
            {letter}
          </span>
        ))}{" "}
        Business Profile
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
        {/* Left QR */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2 space-x-2">
            <svg
              className="w-6 h-6 text-gray-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l-7 7 7 7" />
            </svg>
            <span className="text-gray-700 font-medium">Scan here</span>
          </div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://local.google.com/place?placeid=ChIJg6M5EB0hVToRl4a_BPekvAw&utm_medium=noren&utm_source=gbp&utm_campaign=2026"
            alt="Google Business Profile QR"
            className="w-72 h-72 md:w-80 md:h-80"
          />
        </div>

        {/* Right QR */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2 space-x-2">
            <span className="text-gray-700 font-medium">Write a review</span>
            <svg
              className="w-6 h-6 text-gray-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l7-7-7-7" />
            </svg>
          </div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://search.google.com/local/writereview?placeid=ChIJg6M5EB0hVToRl4a_BPekvAw"
            alt="Google Review QR"
            className="w-72 h-72 md:w-80 md:h-80"
          />
        </div>
      </div>

      <p className="mt-8 text-center text-gray-800 text-lg max-w-xl mx-auto">
        Find us on Google and share your experience. Your feedback helps us provide even better care!{" "}
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJg6M5EB0hVToRl4a_BPekvAw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all"
        >
          https://search.google.com/local/writereview?placeid=ChIJg6M5EB0hVToRl4a_BPekvAw
        </a>
      </p>
    </section>
  );
}
