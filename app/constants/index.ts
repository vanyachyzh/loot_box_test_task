import { ScreenSize } from "../types";

export const SKIN_SIZE: Record<ScreenSize, number> = {
  xs: 100,
  sm: 100,
  md: 200,
  lg: 200,
  xl: 200,
};
export const ROULETTE_SIZE: Record<ScreenSize, number> = {
  xs: 3,
  sm: 3,
  md: 3,
  lg: 5,
  xl: 7,
};
export const ATTEMPTS_AMOUNT = 4;

export const BREAKPOINTS = { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1280 };
