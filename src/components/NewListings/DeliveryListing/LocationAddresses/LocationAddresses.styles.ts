import tw from "twin.macro";
import { ILocationAddressesStyleProps, ILocationAddressesStyles } from "./LocationAddresses.types";

export function getStyles(_props: ILocationAddressesStyleProps): ILocationAddressesStyles {
  return {
    subComponentStyles: {
      select: {
        root: tw`h-12`,
      },
    },
  };
}
