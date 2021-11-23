import { IListingPageStyleProps, IListingPageStyles } from "./ListingPage.types";

export function getStyles({}: IListingPageStyleProps): IListingPageStyles {
  return {
    locationSelectContainer: {
      minWidth: "180px",
    },
  };
}
