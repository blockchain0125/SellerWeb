import tw from "twin.macro";
import { ISummaryStyleProps, ISummaryStyles } from "./Summary.types";

export function getStyles({}: ISummaryStyleProps): ISummaryStyles {
  return {
    headline: tw`font-semibold text-grey80 mb-9`,
    smallerHeadline: tw`text-2xl font-semibold text-grey80 mb-6 capitalize`,
    gridHolder: tw`grid grid-cols-2 gap-3 max-w-3xl`,
    gridHolderOneLine: tw`grid gap-3 max-w-3xl`,
    infoBoxContainer: tw`mb-6`,
  };
}
