import { IImageStyleProps, IImageStyles } from "./Image.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IImageStyleProps): IImageStyles {
  return {
    root: {
      width: "auto",
      height: "95%",
    },
  };
}
