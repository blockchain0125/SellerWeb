import tw from "twin.macro";
import { ITagStyleProps, ITagStyles } from "./Tag.types";

export function getStyles({}: ITagStyleProps): ITagStyles {
  return {
    root: [
      tw`h-6 inline-flex items-center rounded-xxs bg-grey80`,
      {
        padding: "unset 9.75px",
      },
    ],
    label: [tw`text-sm text-white font-semibold`],
  };
}
