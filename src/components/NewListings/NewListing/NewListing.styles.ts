import tw from "twin.macro";
import { INewListingStyleProps, INewListingStyles } from "./NewListing.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: INewListingStyleProps): INewListingStyles {
  return {
    root: tw`h-screen`,
    subComponentStyles: {
      button: {
        root: tw`h-10 w-72 bg-primary text-white px-4`,
        label: tw`mx-auto`,
        content: tw`flex-1 relative`,
        icon: [tw`absolute left-0`],
      },
    },
  };
}
