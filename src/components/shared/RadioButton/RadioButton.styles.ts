import tw from "twin.macro";
import { IRadioButtonStyleProps, IRadioButtonStyles } from "./RadioButton.types";

export function getStyles({ checked }: IRadioButtonStyleProps): IRadioButtonStyles {
  return {
    root: tw`relative flex w-full`,
    input: tw`w-full h-full opacity-0 absolute left-0 top-0 cursor-pointer`,
    label: tw`ml-2 text-grey60`,
    marker: [tw`w-6 h-6`, checked ? tw`text-primary` : tw`text-grey10`],
  };
}
