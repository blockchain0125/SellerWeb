import tw from "twin.macro";
import { IInfoBoxStyleProps, IInfoBoxStyles } from "./InfoBox.types";

export function getStyles({}: IInfoBoxStyleProps): IInfoBoxStyles {
  return {
    contentContainer: tw`mb-4`,
    headlineStyle: tw`font-semibold text-grey80 mb-1 capitalize text-sm`,
    paragraph: tw`font-normal text-grey80`,
  };
}
