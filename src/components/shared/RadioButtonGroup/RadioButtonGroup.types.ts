import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IRadioButtonProps } from "../RadioButton";

export interface IRadioButtonGroupProps {
  styles?: IStyleFunctionOrObject<IRadioButtonGroupStyleProps, IRadioButtonGroupStyles>;
  name: string;
  options: Pick<IRadioButtonProps, "label" | "value">[];
  value?: IRadioButtonProps["value"];
  onChange: (newValue: IRadioButtonProps["value"]) => void;
}

export interface IRadioButtonGroupStyleProps {}

export interface IRadioButtonGroupStyles {
  root: IStyle;
}
