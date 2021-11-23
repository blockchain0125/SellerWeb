import tw from "twin.macro";
import { IPageButtonStyleProps, IPageButtonStyles } from "./PageButton.types";

export function getStyles({ active }: IPageButtonStyleProps): IPageButtonStyles {
  return {
    root: tw`relative`,
    button: [
      {
        borderRadius: "6px",
        "&:focus": {
          outline: "none",
        },
      },
      tw`w-9 h-9 bg-lightBg2 text-subTt relative`,
      active && [
        {
          background: "linear-gradient(0deg, rgba(204, 0, 0, 0.1), rgba(204, 0, 0, 0.1)), #FFFFFF",
          paddingTop: "6px",
        },
        tw`text-primary font-semibold`,
      ],
    ],
    activeIndicator: [tw`bg-primary absolute w-9`, { height: "2px", borderRadius: "2px", top: "-6px" }],
  };
}
