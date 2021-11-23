import tw from "twin.macro";
import { IOrderContactDetailsStyleProps, IOrderContactDetailsStyles } from "./OrderContactDetails.types";

export function getStyles({}: IOrderContactDetailsStyleProps): IOrderContactDetailsStyles {
  return {
    rowStyles: [tw`grid grid-cols-2 pt-2 pb-2`],
  };
}
