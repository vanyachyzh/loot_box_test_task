import Image from "next/image";

type Props = {
  index: number;
  openRoulette: () => void;
  isActive: boolean;
};

const Box = ({ index, openRoulette, isActive }: Props) => {
  return (
    <button
      className="cursor-pointer disabled:cursor-default disabled:opacity-50"
      onClick={openRoulette}
      // disabled={true}
      aria-label="Loot Box button"
      title={`Loot Box ${index + 1}`}
      tabIndex={isActive ? 0 : -1}
    >
      <Image
        src="/images/box.png"
        width={100}
        height={100}
        alt="Box"
        className="w-full"
      />
    </button>
  );
};

export default Box;
