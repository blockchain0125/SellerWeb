import tw from "twin.macro";
import { ISelectOptionStyleProps, ISelectOptionStyles } from "./SelectOption.types";

export function getStyles({}: ISelectOptionStyleProps): ISelectOptionStyles {
  return {
    root: tw`h-8 px-4 py-2 hover:bg-grey10`,
  };
}
