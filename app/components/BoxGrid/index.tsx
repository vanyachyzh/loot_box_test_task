"use client";

import { useEffect, useRef, useState } from "react";
import Box from "../Box";
import { useKeyPressEvent } from "react-use";
import { CrossIcon } from "../icons";
import SkinRoulette from "../SkinRoulette";
import gsap from "gsap";

const BoxGrid = () => {
  const [hasRoulette, setHasRoulette] = useState(false);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useKeyPressEvent("Escape", () => setHasRoulette(false));

  useEffect(() => {
    if (hasRoulette) {
      gsap.fromTo(
        rouletteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [hasRoulette]);

  return (
    <>
      <div className="grid grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-6xl w-full max-h-[100vh] overflow-scroll">
        {Array.from({ length: 20 }).map((_, index) => (
          <Box
            key={index}
            index={index}
            openRoulette={() => setHasRoulette(true)}
            isActive={!hasRoulette}
          />
        ))}
      </div>

      {hasRoulette && (
        <div
          ref={rouletteRef}
          className="flex items-center justify-center fixed w-full h-full bg-black/40 backdrop-blur-lg  top-0 left-0"
        >
          <button
            className="absolute top-10 right-[10%] size-12 md:size-24 hover:scale-105 transition-transform duration-300"
            onClick={() => setHasRoulette(false)}
            aria-label="Close button"
            title="Close button"
            ref={closeButtonRef}
          >
            <CrossIcon />
          </button>
          <SkinRoulette />
        </div>
      )}
    </>
  );
};

export default BoxGrid;
