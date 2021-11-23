import tw from "twin.macro";
import { IContactAddressStyleProps, IContactAddressStyles } from "./ContactAddress.types";

export function getStyles({}: IContactAddressStyleProps): IContactAddressStyles {
  return {
    subComponentStyles: {
      select: {
        root: tw`h-12`,
      },
    },
  };
}
