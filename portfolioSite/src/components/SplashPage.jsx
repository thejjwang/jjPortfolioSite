import React, { useEffect, useState } from "react";
import Vivus from "vivus";

const SplashPage = ({ onEnter }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const container = document.getElementById("signature-container");

    fetch("/signature.svg")
      .then((res) => res.text())
      .then((svgText) => {
        container.innerHTML = svgText;

        requestAnimationFrame(() => {
          const svg = container.querySelector("svg");
          if (!svg) {
            console.error("SVG not found");
            return;
          }

          // Ensure stroke-based drawing
          svg.setAttribute("stroke", "white");
          svg.setAttribute("fill", "none");

          // Animate with Vivus
          new Vivus(svg, {
            type: "oneByOne", // ← this gives left-to-right stroke animation
            duration: 300,     // ← slower = more natural (try 300–500)
            animTimingFunction: Vivus.EASE,
            start: "autostart",
          });

          // Show Enter button after 1s
          setTimeout(() => setShowButton(true), 1000);
        });
      });
  }, []);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background visual (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-20 pointer-events-none" />

      {/* Signature SVG container */}
      <div
        id="signature-container"
        className="z-10 w-[300px] md:w-[400px] h-auto"
      />

      {/* Enter Button */}
      <div className="absolute bottom-24 z-10">
        <button
          onClick={onEnter}
          className={`transition-opacity duration-700 ${
            showButton ? "opacity-100" : "opacity-0 pointer-events-none"
          } rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black`}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default SplashPage;
