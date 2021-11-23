import tw from "twin.macro";
import { ICreateNewPasswordStyleProps, ICreateNewPasswordStyles } from "./CreateNewPassword.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: ICreateNewPasswordStyleProps): ICreateNewPasswordStyles {
  return {
    root: tw`text-grey80`,
    fieldContainer: tw`mb-6 space-y-7`,
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
