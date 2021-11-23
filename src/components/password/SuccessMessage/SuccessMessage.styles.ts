import tw from "twin.macro";
import { ISuccessMessageStyleProps, ISuccessMessageStyles } from "./SuccessMessage.types";

export function getStyles({}: ISuccessMessageStyleProps): ISuccessMessageStyles {
  return {
    root: tw`text-grey80`,
  };
}
