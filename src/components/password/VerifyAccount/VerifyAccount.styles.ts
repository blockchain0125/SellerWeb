import tw from "twin.macro";
import { IVerifyAccountStyleProps, IVerifyAccountStyles } from "./VerifyAccount.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IVerifyAccountStyleProps): IVerifyAccountStyles {
  return {
    root: [tw`w-1/2 m-auto mt-8`],
  };
}
