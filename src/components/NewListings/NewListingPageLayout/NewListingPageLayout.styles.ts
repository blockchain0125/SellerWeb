import tw from "twin.macro";
import { INewListingPageLayoutStyleProps, INewListingPageLayoutStyles } from "./NewListingPageLayout.types";

export function getStyles({}: INewListingPageLayoutStyleProps): INewListingPageLayoutStyles {
  return {
    root: tw`min-h-full flex`,
  };
}
