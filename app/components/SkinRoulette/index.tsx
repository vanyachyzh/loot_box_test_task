import useSkinRoulette from "@/app/hooks/useRoulette";
import { ROULETTE_SIZE, SKIN_SIZE } from "@/app/constants";
import { SKIN_MOCK } from "@/app/mocks/skins";
import SkinItem from "../Skin";
import { useEffect } from "react";

export default function SkinRoulette() {
  const { rouletteRef, rouletteItems, spin } = useSkinRoulette({
    skins: SKIN_MOCK,
    skinSizeConfig: SKIN_SIZE,
    rouletteSizeConfig: ROULETTE_SIZE,
  });

  useEffect(() => {
    spin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rouletteRef}>
      {rouletteItems.map((skin, index) => (
        <SkinItem skin={skin} key={index} />
      ))}
    </div>
  );
}
