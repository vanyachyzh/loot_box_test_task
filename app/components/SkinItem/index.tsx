import { useSound } from "@/app/hooks/useSound";
import { Skin, SkinState } from "@/app/types";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  skin: Skin;
  state: SkinState | null;
};

const SkinItem = ({ skin, state }: Props) => {
  const skinRef = useRef<HTMLDivElement>(null);

  const { play } = useSound({
    loop: false,
    volume: 0.5,
    src: "/audio/magical-glowing.mp3",
  });

  useEffect(() => {
    switch (state) {
      case SkinState.Selected:
        play();
        gsap.timeline().fromTo(
          skinRef.current,
          { scale: 1, opacity: 1 },
          {
            scale: 1.7,
            duration: 3,
            ease: "back.out(1.7)",
            onComplete: () => {
              gsap.to(skinRef.current, {
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut",
              });
            },
          }
        );
        break;

      case SkinState.Unselected:
        gsap.fromTo(
          skinRef.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.8, ease: "power3.out" }
        );
        break;

      default:
        console.log("TODO");
    }
  }, [play, skinRef, state]);

  return (
    <div ref={skinRef} className="flex justify-center items-center">
      <Image
        src={skin.src}
        width={100}
        height={100}
        alt={skin.name}
        className="w-full"
      />
    </div>
  );
};

export default SkinItem;
