import tw from "twin.macro";
import { IPasswordPageStyleProps, IPasswordPageStyles } from "./PasswordPage.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IPasswordPageStyleProps): IPasswordPageStyles {
  return {
    root: [tw`w-1/2 m-auto mt-8`],
  };
}
