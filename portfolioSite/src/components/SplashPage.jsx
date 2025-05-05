import React, { useEffect, useState } from "react";
import Vivus from "vivus";

const SplashPage = ({ onEnter }) => {
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);

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

          // Make SVG responsive
          svg.removeAttribute("width");
          svg.removeAttribute("height");
          svg.setAttribute(
            "viewBox",
            svg.getAttribute("viewBox") || "0 0 150 60"
          );
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.style.width = "100%";
          svg.style.height = "auto";

          // Force stroke-based drawing
          svg.setAttribute("stroke", "white");
          svg.setAttribute("fill", "none");

          new Vivus(svg, {
            type: "oneByOne",
            duration: 300,
            animTimingFunction: Vivus.EASE,
            start: "autostart",
          });

          setTimeout(() => setShowButton(true), 1000);
        });
      });

    const handleKeyDown = (e) => {
      if (e.key === "Enter") triggerExit();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerExit = () => {
    const audio = new Audio("/swoosh.mp3");
    audio.play();
    setExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div
      className={`relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden text-white transition-opacity duration-1000 ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Galaxy Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/galaxy-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dim overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Signature wrapper (scales on all screens) */}
      <div className="z-10 w-full max-w-[360px] px-4">
        <div id="signature-container" className="w-full h-auto" />
      </div>

      {/* Enter Button */}
      <div className="absolute bottom-24 z-10">
        <button
          onClick={triggerExit}
          className={`relative z-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] 
    border-2 border-white text-white px-8 py-3 rounded-full tracking-wider font-medium 
    bg-transparent backdrop-blur-md hover:bg-white hover:text-black
    ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          ENTER
          <span className="absolute inset-0 rounded-full animate-pulse border border-white/20" />
        </button>
      </div>
    </div>
  );
};

export default SplashPage;
