import { useMemo } from "react";
import { CSSProp } from "styled-components";
import tw from "twin.macro";
import { FieldStatus } from "../Field";

export interface UseFieldCssParams {
  customStyles?: CSSProp;
  status?: FieldStatus;
  isLabelActive?: boolean;
}

export function useFieldCss({ customStyles, status, isLabelActive }: UseFieldCssParams): CSSProp {
  return useMemo(
    () => [
      tw`h-12 px-4 w-full rounded focus:outline-none border border-grey20 placeholder-grey40`,
      status === FieldStatus.Success && tw`border-success placeholder-success`,
      status === FieldStatus.Error && tw`border-error placeholder-error`,
      isLabelActive && tw`pt-5`,
      customStyles,
    ],
    [customStyles, isLabelActive, status]
  );
}
