import tw from "twin.macro";
import { IRadioButtonGroupStyleProps, IRadioButtonGroupStyles } from "./RadioButtonGroup.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IRadioButtonGroupStyleProps): IRadioButtonGroupStyles {
  return {
    root: tw`flex space-x-8`,
  };
}
