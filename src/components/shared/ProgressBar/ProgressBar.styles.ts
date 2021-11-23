import tw from "twin.macro";
import { IProgressBarStyleProps, IProgressBarStyles } from "./ProgressBar.types";

export function getStyles({ percentage }: IProgressBarStyleProps): IProgressBarStyles {
  return {
    container: [
      tw`border-solid border-white bg-white`,
      {
        height: "14px",
        padding: "3px",
        borderRadius: "40px",
      },
    ],
    bar: [
      tw`bg-secondary00 h-full rounded`,
      {
        width: `${percentage}%`,
        minWidth: "1px",
        maxWidth: "100%",
      },
    ],
  };
}
