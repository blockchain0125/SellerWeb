import tw from "twin.macro";
import { getCommonFieldStyle } from "../styles/getCommonFieldStyle";
import { ITextAreaStyleProps, ITextAreaStyles } from "./TextArea.types";

export function getStyles({ status, isLabelActive }: ITextAreaStyleProps): ITextAreaStyles {
  return {
    textArea: [getCommonFieldStyle({ status, isLabelActive }), tw`rounded-sm`],
    subComponentStyles: {},
  };
}
