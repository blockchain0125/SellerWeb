import tw from "twin.macro";
import { IProductDetailRowStyleProps, IProductDetailRowStyles } from "./ProductDetailRow.types";

export function getStyles(_props: IProductDetailRowStyleProps): IProductDetailRowStyles {
  return {
    root: tw`bg-white`,
    dataContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(4, auto)",
    },
    dataLabel: [
      tw`text-xs text-grey80 inline-flex justify-between`,
      {
        ":nth-of-type(2)": tw`ml-10`,
      },
    ],
    dataValue: [tw`text-xs text-grey80 capitalize font-bold ml-4`],
  };
}
