import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IRadioButtonStyles, IRadioButtonStyleProps } from "../../shared/RadioButton";

export interface IStoreProps {
  styles?: IStyleFunctionOrObject<IStoreStyleProps, IStoreStyles>;
}

export interface IStoreStyleProps {}

export interface IStoreStyles {
  root?: IStyle;
  textInputFieldContainer: IStyle;
  textInputFieldLabel: IStyle;
  radioFieldContainer: IStyle;
  radioFieldLabel: IStyle;
  radiosRow: IStyle;
  subComponentStyles: {
    radioButton: IStyleFunctionOrObject<IRadioButtonStyleProps, IRadioButtonStyles>;
  };
}
