import tw from "twin.macro";
import { IListingDetailRowStyleProps, IListingDetailRowStyles } from "./ListingDetailRow.types";
import { categoryListType } from "../../../datalisting";

export function getStyles({ categoryList }: IListingDetailRowStyleProps): IListingDetailRowStyles {
  return {
    body: [tw`flex my-8`],
    category: [tw`font-bold`, categoryList === categoryListType.TimeLeft && tw`text-whatsapp`],
  };
}
