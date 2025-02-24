import useAppSelector from "@/app/hooks/useAppSelector";
import { setBox } from "@/app/store/slices/mainSlice";
import { Box } from "@/app/types";
import Image from "next/image";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

type Props = {
  box: Box;
  openRoulette: () => void;
  isActive: boolean;
};

const BoxItem = ({ openRoulette, isActive, box }: Props) => {
  const dispatch = useDispatch();
  const { selectedBoxIds } = useAppSelector((state) => state.main);
  const isOpenBox = Boolean(selectedBoxIds.find((id) => id === box.id));

  const chooseBox = useCallback(() => {
    openRoulette();
    dispatch(setBox(box));
  }, [box, dispatch, openRoulette]);

  return (
    <button
      className="cursor-pointer disabled:cursor-default disabled:opacity-50"
      onClick={chooseBox}
      disabled={isOpenBox}
      aria-label="Loot Box button"
      title={`${box.name} Loot Box`}
      tabIndex={isActive ? 0 : -1}
    >
      <Image
        src="/images/box.png"
        width={100}
        height={100}
        alt={box.name}
        className="w-full"
      />
    </button>
  );
};

export default BoxItem;
