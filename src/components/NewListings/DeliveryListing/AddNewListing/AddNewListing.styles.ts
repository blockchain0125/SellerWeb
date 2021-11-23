import tw from "twin.macro";
import { IAddNewListingStyleProps, IAddNewListingStyles } from "./AddNewListing.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IAddNewListingStyleProps): IAddNewListingStyles {
  return {
    root: [tw`bg-white h-full`],
    fieldContainer: tw`mb-6`,
    row2Cols: tw`grid grid-cols-2 gap-5 items-end`,
    subComponentStyles: {
      radioButton: {
        root: [tw`w-auto mr-5.5 mb-6`],
        marker: [tw`w-8 text-messenger`],
      },
      input: {
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey60`,
          },
        },
      },
      select: {
        root: tw`h-12`,
      },
      field: {
        label: tw`text-sm text-grey60`,
      },
    },
  };
}
