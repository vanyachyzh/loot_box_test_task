import { Skin } from "@/app/types/Skin";
import Image from "next/image";

type Props = {
  skin: Skin;
};

const SkinItem = ({ skin }: Props) => {
  return (
    <div>
      <Image
        src={skin.src}
        width={100}
        height={100}
        alt="Box"
        className="w-full"
      />
      <div>{skin.id}</div>
    </div>
  );
};

export default SkinItem;
