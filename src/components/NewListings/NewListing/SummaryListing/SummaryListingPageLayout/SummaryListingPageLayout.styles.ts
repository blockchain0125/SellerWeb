import tw from "twin.macro";
import { ISummaryListingPageLayoutStyleProps, ISummaryListingPageLayoutStyles } from "./SummaryListingPageLayout.types";

export function getStyles(_props: ISummaryListingPageLayoutStyleProps): ISummaryListingPageLayoutStyles {
  return {
    root: [tw`grid grid-cols-2 gap-4`],
  };
}
