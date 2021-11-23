import tw from "twin.macro";
import { IDeliveryListingStyleProps, IDeliveryListingStyles } from "./DeliveryListing.types";

export function getStyles({}: IDeliveryListingStyleProps): IDeliveryListingStyles {
  return {
    root: [tw`bg-white min-h-full`],
    subComponentStyles: {
      radioButton: {
        root: [tw`w-auto mr-5.5 mt-4`],
        marker: [tw`text-messenger`],
        label: [tw`font-semibold text-sm ml-4`],
      },
      input: {
        input: [tw`rounded-none h-10`],
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey60 block mt-4`,
          },
        },
      },
      select: {
        root: [tw`h-12 h-10`],
      },
    },
  };
}
