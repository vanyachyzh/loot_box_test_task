"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SkinRoulette from "../SkinRoulette";

const Box = () => {
  const [hasRoulette, setHasRoulette] = useState(false);
  const rouletteRef = useRef(null);

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
      <div onClick={() => setHasRoulette(true)}>
        <Image
          src="/box.png"
          width={100}
          height={100}
          alt="Box"
          className="w-full"
        />
      </div>

      {hasRoulette && (
        <div
          ref={rouletteRef}
          className="flex items-center justify-center fixed w-full h-full bg-purple-400 top-0 left-0"
        >
          <button
            className="absolute right-0 top-0"
            onClick={() => setHasRoulette(false)}
          >
            Close
          </button>
          <SkinRoulette />
        </div>
      )}
    </>
  );
};

export default Box;
