import tw from "twin.macro";
import { ICustomerPickUpProductStyleProps, ICustomerPickUpProductStyles } from "./CustomerPickUpProduct.types";

export function getStyles(_props: ICustomerPickUpProductStyleProps): ICustomerPickUpProductStyles {
  return {
    row2Cols: tw`grid grid-cols-2 gap-5 items-end`,
    subComponentStyles: {
      radioButton: {
        root: [tw`w-auto mr-5.5`],
      },
      input: {
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey60 block mt-4`,
          },
        },
      },
      select: {
        root: tw`h-12`,
      },
    },
  };
}
