import tw from "twin.macro";
import { ICommonLayoutStyleProps, ICommonLayoutStyles } from "./CommonLayout.types";

export function getStyles({}: ICommonLayoutStyleProps): ICommonLayoutStyles {
  return {
    root: [tw`bg-background`],
    content: [
      tw`ml-6`,
      {
        maxWidth: "1080px",
      },
    ],
  };
}
