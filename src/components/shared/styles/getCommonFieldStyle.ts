import { IStyle } from "@fluentui/style-utilities";
import tw from "twin.macro";
import { FieldStatus } from "../Field";

export function getCommonFieldStyle({
  status,
  isLabelActive,
  rounded = true,
}: {
  status?: FieldStatus;
  isLabelActive?: boolean;
  rounded?: boolean;
}): IStyle {
  return [
    tw`h-12 px-4 w-full focus:outline-none border border-grey20 placeholder-grey40`,
    rounded && tw`rounded`,
    status === FieldStatus.Success && tw`border-success placeholder-success`,
    status === FieldStatus.Error && tw`border-error placeholder-error`,
    isLabelActive && tw`pt-5`,
  ];
}
