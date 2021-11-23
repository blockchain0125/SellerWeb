import tw from "twin.macro";
import { IOrderContactButtonStyleProps, IOrderContactButtonStyles } from "./OrderContactButton.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrderContactButtonStyleProps): IOrderContactButtonStyles {
  return {
    root: [tw`p-5 flex-grow text-grey80`],
    buttonDiscussionDesign: [
      tw`flex rounded px-5 py-2 border-2 bg-white border-grey60 mb-3 items-center`,
      {
        width: "100%",
      },
    ],
    buttonPrintDesign: [tw`flex rounded px-5 py-2 border-2 bg-error border-error text-white items-center`],
  };
}
