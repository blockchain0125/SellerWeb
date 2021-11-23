import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { VariantDetails } from "../../../../models/VariantDetails";
import { IInputStyles } from "../../../shared/Input";

export interface IVariantDetailsRowProps {
  styles?: IStyleFunctionOrObject<IVariantDetailsRowStyleProps, IVariantDetailsRowStyles>;
  item: VariantDetails;
  totalColumns: number;
}

export interface IVariantDetailsRowStyleProps {}

export interface IVariantDetailsRowStyles {
  root?: IStyle;
  subComponentStyles: {
    input: Partial<IInputStyles>;
  };
}
