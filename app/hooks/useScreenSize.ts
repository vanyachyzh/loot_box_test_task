import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "../constants";

export const useScreenSize = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return breakpoint || "xl";
};
