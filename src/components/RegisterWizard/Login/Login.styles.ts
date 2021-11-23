import tw from "twin.macro";
import { ILoginStyleProps, ILoginStyles } from "./Login.types";

export function getStyles({}: ILoginStyleProps): ILoginStyles {
  return {
    root: [tw`w-full h-full bg-white flex flex-col justify-start items-center`],
    subComponentStyles: {
      customButton: {
        root: [
          {
            padding: "0.75rem 1.5rem",
            fontWeight: "600",
          },
        ],
      },
    },
  };
}
