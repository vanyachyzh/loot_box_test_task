"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BoxItem from "../BoxItem";
import { useKeyPressEvent } from "react-use";
import { CrossIcon } from "../icons";
import SkinRoulette from "../SkinRoulette";
import gsap from "gsap";
import { BOXES_MOCK } from "@/app/mocks/boxes";
import useAppDispatch from "@/app/hooks/useAppDispatch";
import { setBox, setSkin } from "@/app/store/slices/mainSlice";
import useAppSelector from "@/app/hooks/useAppSelector";

const BoxGrid = () => {
  const [hasRoulette, setHasRoulette] = useState(false);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const { selectedSkin } = useAppSelector((state) => state.main);

  const closeRoulette = useCallback(() => {
    if (!selectedSkin) {
      return;
    }
    setHasRoulette(false);
    dispatch(setSkin(null));
    dispatch(setBox(null));
  }, [dispatch, selectedSkin]);

  useKeyPressEvent("Escape", closeRoulette);

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
        {BOXES_MOCK.map((box) => (
          <BoxItem
            key={box.id}
            box={box}
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
          {selectedSkin && (
            <button
              className="absolute top-10 right-[10%] size-12 md:size-24 hover:scale-105 transition-transform duration-300"
              onClick={closeRoulette}
              aria-label="Close button"
              title="Close button"
              ref={closeButtonRef}
            >
              <CrossIcon />
            </button>
          )}
          <SkinRoulette />
        </div>
      )}
    </>
  );
};

export default BoxGrid;
