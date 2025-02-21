import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { Skin } from "../types/Skin";
import { useScreenSize } from "./useScreenSize";
import { multiplyArray } from "../utils/multiplyArray";
import { ScreenSize } from "../types/ScreenSize";

interface RouletteProps {
  skins: Skin[];
  skinSizeConfig: Record<ScreenSize, number>;
  rouletteSizeConfig: Record<ScreenSize, number>;
}

const useSkinRoulette = ({
  skins,
  skinSizeConfig,
  rouletteSizeConfig,
}: RouletteProps) => {
  const [isRolling, setIsRolling] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rouletteRef = useRef<HTMLDivElement>(null);
  const multipliedArray = multiplyArray(skins, 2);

  const screenSize = useScreenSize();
  const currentRouletteSize = rouletteSizeConfig[screenSize];
  const currentSkinSize = skinSizeConfig[screenSize];

  useEffect(() => {
    const rouletteElement = rouletteRef.current;
    if (rouletteElement) {
      const rouletteWidth = currentRouletteSize * currentSkinSize;

      rouletteElement.style.width = `${rouletteWidth}px`;
      rouletteElement.style.display = "flex";

      Array.from(rouletteElement.children).forEach((child) => {
        (child as HTMLElement).style.minWidth = `${currentSkinSize}px`;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  const spin = useCallback(() => {
    const randomIndex =
      currentIndex +
      Math.floor(Math.random() * skins.length + skins.length / 2);
    const offset =
      (currentRouletteSize * currentSkinSize) / 2 - currentSkinSize / 2;
    const targetX = -(randomIndex * currentSkinSize - offset);
    setCurrentIndex(randomIndex);

    gsap.to(rouletteRef.current, {
      x: targetX,
      duration: 2.5,
      ease: "power3.out",
      onStart: () => {
        setIsRolling(true);
        setSelectedSkin(null);
      },
      onComplete: () => {
        setIsRolling(false);
        setSelectedSkin(multipliedArray[randomIndex]);
      },
    });
  }, [
    currentIndex,
    currentRouletteSize,
    currentSkinSize,
    multipliedArray,
    skins.length,
  ]);

  return {
    isRolling,
    selectedSkin,
    rouletteRef,
    spin,
    rouletteItems: multipliedArray,
  };
};

export default useSkinRoulette;
