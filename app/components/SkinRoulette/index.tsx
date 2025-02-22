import useRoulette from "@/app/hooks/useRoulette";
import { ROULETTE_SIZE, SKIN_SIZE } from "@/app/constants";
import { SKIN_MOCK } from "@/app/mocks/skins";
import SkinItem from "../Skin";
import { useEffect } from "react";
import { SkinState } from "@/app/types";

export default function SkinRoulette() {
  const { rouletteRef, items, spin, selectedItem } = useRoulette({
    items: SKIN_MOCK,
    itemSizeConfig: SKIN_SIZE,
    rouletteSizeConfig: ROULETTE_SIZE,
  });

  useEffect(() => {
    spin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-screen flex justify-center items-center">
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
