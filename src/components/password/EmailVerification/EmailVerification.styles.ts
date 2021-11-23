import tw from "twin.macro";
import { IEmailVerificationStyleProps, IEmailVerificationStyles } from "./EmailVerification.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IEmailVerificationStyleProps): IEmailVerificationStyles {
  return {
    subComponentStyles: {
      customButton: {
        root: [tw`py-3 px-6 font-semibold`],
      },
      input: {
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey60`,
          },
        },
      },
    },
  };
}
