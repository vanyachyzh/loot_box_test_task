"use client";

import Image from "next/image";
import { useState } from "react";
import SkinRoulette from "../SkinRoulette";

const Box = () => {
  const [hasRoulette, setHasRoulette] = useState(false);

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
        <div className="flex items-center justify-center fixed w-full h-full bg-purple-400 top-0 left-0">
          <button
            className="absolute right-0 top-0"
            onClick={() => setHasRoulette(false)}
          >
            Close
          </button>
          <div className="overflow-hidden">
            <SkinRoulette />
          </div>
        </div>
      )}
    </>
  );
};

export default Box;
