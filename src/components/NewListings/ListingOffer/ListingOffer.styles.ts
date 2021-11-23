import tw from "twin.macro";
import { IListingOfferStyleProps, IListingOfferStyles } from "./ListingOffer.types";

export function getStyles({}: IListingOfferStyleProps): IListingOfferStyles {
  return {
    label: tw`text-sm text-grey80 block mt-4`,
    subComponentStyles: {
      input: {
        input: [tw`rounded-none h-10`],
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey80 block mt-4`,
          },
        },
      },
      select: {
        root: [tw`h-12 h-10`],
      },
      button: {
        root: tw`w-40 h-9 bg-white text-grey80 inline-flex items-center justify-between px-2`,
        label: tw`mx-auto`,
        content: tw`flex-1 relative`,
        icon: [tw`absolute left-0`],
      },
    },
  };
}
