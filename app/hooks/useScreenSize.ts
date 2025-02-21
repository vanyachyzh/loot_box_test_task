import { findKey } from "lodash";
import { useMedia } from "use-media";
import { ScreenSize } from "../types/ScreenSize";

export const useScreenSize = (): ScreenSize => {
  const matches: Record<ScreenSize, boolean> = {
    xs: useMedia("(max-width: 480px)"),
    sm: useMedia("(max-width: 768px)"),
    md: useMedia("(max-width: 1024px)"),
    lg: useMedia("(max-width: 1280px)"),
    xl: useMedia("(min-width: 1281px)"),
  };

  return (findKey(matches, Boolean) as ScreenSize) || "xl";
};
