import tw from "twin.macro";
import { IShadowOverlayerStyleProps, IShadowOverlayerStyles, OverlayChildPosition } from "./ShadowOverlayer.types";

export function getStyles({
  rootStyles,
  height,
  childPosition,
  fullScreen,
}: IShadowOverlayerStyleProps): IShadowOverlayerStyles {
  return {
    root: [
      {
        position: "fixed",
        left: "0",
        top: "0",
        display: "flex",
        background: "rgba(41, 41, 41, 0.9)",
        width: "100vw",
        zIndex: "100",
        flexDirection: "column",
        overflowY: "auto",
      },
      tw`md:justify-center`,
      !fullScreen && tw`absolute`,
      childPosition === OverlayChildPosition.Top && tw`justify-start md:justify-start`,
      height !== null && { height },
      rootStyles,
    ],
    children: [
      tw`w-full mt-auto md:mt-unset md:inline-flex md:justify-center md:items-center`,
      childPosition === OverlayChildPosition.Left && tw`md:h-full md:justify-start`,
      childPosition === OverlayChildPosition.Right && tw`md:h-full md:justify-end`,
    ],
  };
}
