import tw from "twin.macro";
import { ICustomButtonStyleProps, ICustomButtonStyles } from "./CustomButton.types";

export function getStyles({
  iconLeft,
  textOnly,
  primary,
  noMargin,
  rounded,
  noLabel,
  fullSize,
}: ICustomButtonStyleProps): ICustomButtonStyles {
  const disabledStyles = tw`bg-grey20 cursor-not-allowed`;
  return {
    root: [
      tw`bg-grey80 text-white`,
      {
        padding: "0.5rem 1.5rem",
        cursor: "pointer",
        textDecoration: "none",
        display: "inline-block",
        fontWeight: "bold",
        border: "none",
        margin: "5px",
        height: "48px",
        transition: "background-color 150ms linear",
        selectors: {
          ":hover": [tw`bg-grey60`],
          ":focus": {
            outline: "none",
          },
          ":disabled": disabledStyles,
          ":active:disabled": disabledStyles,
          ":hover:disabled": disabledStyles,
        },
      },
      fullSize && tw`w-full`,
      noMargin && tw`m-0`,
      rounded && {
        borderRadius: "40px",
      },
      primary && [tw`text-white bg-primary`, { selectors: { ":hover": tw`bg-grey80` } }],
      textOnly && tw`bg-inherit text-grey80`,
    ],
    content: [tw`flex items-center justify-center`, !iconLeft && tw`flex-row-reverse`],
    icon: [
      tw`text-inherit inline-flex items-center`,
      iconLeft ? { marginRight: "10px" } : { marginLeft: "10px" },
      noLabel && { margin: 0 },
    ],
  };
}
