import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import gsap from "gsap";
import { ScreenSize } from "../types";
import { useScreenSize } from "./useScreenSize";
import { shuffle } from "lodash";
import useAppDispatch from "./useAppDispatch";
import { setSkin } from "../store/slices/mainSlice";
import useAppSelector from "./useAppSelector";

interface RouletteProps {
  itemSizeConfig: Record<ScreenSize, number>;
  rouletteSizeConfig: Record<ScreenSize, number>;
}

const useRoulette = ({ itemSizeConfig, rouletteSizeConfig }: RouletteProps) => {
  const dispatch = useAppDispatch();
  const { selectedSkin, selectedBox } = useAppSelector((state) => state.main);
  const [isRolling, setIsRolling] = useState(false);
  const shuffledItems = useMemo(
    () => shuffle(selectedBox?.skins),
    [selectedBox?.skins]
  );

  const screenSize = useScreenSize();
  const currentRouletteSize = useMemo(
    () => rouletteSizeConfig[screenSize],
    [rouletteSizeConfig, screenSize]
  );
  const currentItemSize = useMemo(
    () => itemSizeConfig[screenSize],
    [itemSizeConfig, screenSize]
  );
  const middleItemIndex = Math.floor((selectedBox?.skins.length || 0) / 2);

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
        dispatch(setSkin(null));
      },
      onComplete: () => {
        setIsRolling(false);
        dispatch(setSkin(shuffledItems[middleItemIndex]));
      },
    });
  }, [
    currentRouletteSize,
    currentItemSize,
    middleItemIndex,
    dispatch,
    shuffledItems,
  ]);

  return {
    isRolling,
    selectedItem: selectedSkin,
    rouletteRef,
    spin,
    items: shuffledItems,
  };
};

export default useRoulette;
