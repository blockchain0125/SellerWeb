import tw from "twin.macro";
import { IFieldStyleProps, IFieldStyles } from "./Field.types";
import { FieldStatus } from "./index";

export function getStyles({ status, isLabelActive, materialStyleLabel }: IFieldStyleProps): IFieldStyles {
  const textColor = [
    tw`text-black`,
    status === FieldStatus.Success && tw`text-success`,
    status === FieldStatus.Error && tw`text-error`,
  ];
  return {
    root: [textColor],
    label: [
      tw`absolute top-1/2 transform -translate-y-1/2 inline-flex items-center duration-300 text-grey40 ml-4 left-1px pointer-events-none`,
      status === FieldStatus.Success && tw`text-success`,
      status === FieldStatus.Error && tw`text-error`,
      isLabelActive && [tw`translate-y-0`, "heading6 bold", { top: "6px" }],
      !materialStyleLabel && tw`static inline ml-0 text-xs text-grey80`,
    ],
    message: ["note", textColor, tw`ml-3 my-0`],
  };
}
