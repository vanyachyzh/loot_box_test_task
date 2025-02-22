import useRoulette from "@/app/hooks/useRoulette";
import { ROULETTE_SIZE, SKIN_SIZE } from "@/app/constants";
import { SKIN_MOCK } from "@/app/mocks/skins";
import SkinItem from "../Skin";
import { useEffect } from "react";
import { SkinState } from "@/app/types";
import { twMerge } from "tailwind-merge";

export default function SkinRoulette() {
  const { rouletteRef, items, spin, selectedItem, isRolling } = useRoulette({
    items: SKIN_MOCK,
    itemSizeConfig: SKIN_SIZE,
    rouletteSizeConfig: ROULETTE_SIZE,
  });

  useEffect(() => {
    spin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={twMerge("relative", isRolling && "overflow-hidden")}>
      <div
        className={twMerge(
          "glowing-background absolute top-0 left-0 hidden",
          !isRolling && "block"
        )}
      ></div>
      <div ref={rouletteRef}>
        {items.map((item, index) => {
          const selectedState =
            selectedItem?.id === item.id
              ? SkinState.Selected
              : SkinState.Unselected;
          const skinState = selectedItem ? selectedState : SkinState.None;

          return <SkinItem skin={item} key={index} state={skinState} />;
        })}
      </div>
    </div>
  );
}
