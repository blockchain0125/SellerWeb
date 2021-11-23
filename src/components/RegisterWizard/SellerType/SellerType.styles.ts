import tw from "twin.macro";
import { ISellerTypeStyleProps, ISellerTypeStyles } from "./SellerType.types";

export function getStyles({}: ISellerTypeStyleProps): ISellerTypeStyles {
  return {
    checklistContainer: tw`mb-14`,
    fieldContainer: tw`mb-6`,
    row2Cols: tw`grid grid-cols-2 gap-5 items-end`,
    row3Cols: tw`grid grid-cols-3 gap-5 items-end`,
    subComponentStyles: {
      select: {
        root: tw`h-12`,
      },
      field: {
        label: tw`text-sm text-grey60`,
      },
      input: {
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey60`,
          },
        },
      },
    },
  };
}
