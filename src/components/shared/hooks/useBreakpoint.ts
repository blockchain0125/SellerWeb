import { useMediaQuery } from "react-responsive";

export function useBreakpoint(): "sm" | "md" {
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  return isMd ? "md" : "sm";
}
