import tw from "twin.macro";
import { ICheckboxStyleProps, ICheckboxStyles } from "./Checkbox.types";

export function getStyles({}: ICheckboxStyleProps): ICheckboxStyles {
  return {
    root: tw`cursor-pointer flex items-center`,
    checkIcon: tw`text-primary text-lg`,
    checkbox: tw`invisible`,
    label: tw`cursor-pointer ml-4 text-sm text-grey80 font-semibold`,
  };
}
