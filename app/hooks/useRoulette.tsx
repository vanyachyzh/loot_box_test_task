import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScreenSize, Skin } from "../types";
import { useScreenSize } from "./useScreenSize";
import { shuffle } from "lodash";

interface RouletteProps {
  items: Skin[];
  itemSizeConfig: Record<ScreenSize, number>;
  rouletteSizeConfig: Record<ScreenSize, number>;
}

const useRoulette = ({
  items,
  itemSizeConfig,
  rouletteSizeConfig,
}: RouletteProps) => {
  const [isRolling, setIsRolling] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Skin | null>(null);
  const shuffledItems = useMemo(() => shuffle(items), [items]);

  const screenSize = useScreenSize();
  const currentRouletteSize = useMemo(
    () => rouletteSizeConfig[screenSize],
    [rouletteSizeConfig, screenSize]
  );
  const currentItemSize = useMemo(
    () => itemSizeConfig[screenSize],
    [itemSizeConfig, screenSize]
  );
  const middleItemIndex = Math.floor(items.length / 2);

  const rouletteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rouletteElement = rouletteRef.current;

    if (rouletteElement) {
      const rouletteWidth = currentRouletteSize * currentItemSize;
      rouletteElement.style.width = `${rouletteWidth}px`;
      rouletteElement.style.display = "flex";

      const children = Array.from(rouletteElement.children) as HTMLElement[];
      children.forEach(
        (child) => (child.style.minWidth = `${currentItemSize}px`)
      );
    }
  }, [screenSize, currentRouletteSize, currentItemSize]);

  const spin = useCallback(() => {
    setIsRolling(true);
    const offset =
      currentRouletteSize * currentItemSize * 0.5 - currentItemSize * 0.5;
    const targetX = -middleItemIndex * currentItemSize + offset;

    gsap.to(rouletteRef.current, {
      x: targetX,
      duration: 2.5,
      ease: "power1.out",
      onStart: () => {
        setSelectedItem(null);
      },
      onComplete: () => {
        setIsRolling(false);
        setSelectedItem(shuffledItems[middleItemIndex]);
      },
    });
  }, [currentRouletteSize, currentItemSize, middleItemIndex, shuffledItems]);

  return {
    isRolling,
    selectedItem,
    rouletteRef,
    spin,
    items: shuffledItems,
  };
};

export default useRoulette;
