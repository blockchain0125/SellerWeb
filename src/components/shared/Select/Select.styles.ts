import tw from "twin.macro";
import { ISelectStyleProps, ISelectStyles } from "./Select.types";

export function getStyles({}: ISelectStyleProps): ISelectStyles {
  return {
    root: tw`relative text-grey80 text-sm bg-white border-grey10 border h-8 inline-flex items-center w-full px-4`,
    optionsContainer: [
      tw`w-full overflow-y-auto max-h-96 bg-white z-10`,
      {
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.05)",
      },
    ],
    subComponentStyles: {
      tag: {
        root: {
          ":not(:last-of-type)": tw`mr-2`,
        },
      },
    },
  };
}
