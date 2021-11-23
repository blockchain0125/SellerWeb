import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICheckboxStyles } from "../../shared/Checkbox";
import { ICustomButtonStyles } from "../../shared/CustomButton";
import { IInputStyles } from "../../shared/Input";
import { IShadowOverlayerStyles } from "../../shared/ShadowOverlayer";

export interface ISelectStoreProps {
  styles?: IStyleFunctionOrObject<ISelectStoreStyleProps, ISelectStoreStyles>;
}

export interface ISelectStoreStyleProps {}

export interface ISelectStoreStyles {
  root?: IStyle;
  subComponentStyles: {
    searchInput: Partial<IInputStyles>;
    button: Partial<ICustomButtonStyles>;
    checkbox: Partial<ICheckboxStyles>;
    shadowOverlayer: Partial<IShadowOverlayerStyles>;
    input: Partial<IInputStyles>;
  };
}
