import { useRef, useEffect } from "react";

export const useSound = ({ loop = false, volume = 1, src = "" } = {}) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio(src);
    soundRef.current.loop = loop;
    soundRef.current.volume = volume;

    return () => {
      soundRef.current?.pause();
      soundRef.current = null;
    };
  }, [src, loop, volume]);

  const play = () => soundRef.current?.play();
  const pause = () => soundRef.current?.pause();
  const stop = () => {
    if (soundRef.current) {
      soundRef.current.pause();
      soundRef.current.currentTime = 0;
    }
  };
  const setVolume = (value: number) => {
    if (soundRef.current) soundRef.current.volume = value;
  };

  return { play, pause, stop, setVolume };
};
