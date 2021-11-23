import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ISelectOption } from "../Select.types";

export interface ISelectOptionProps {
  styles?: IStyleFunctionOrObject<ISelectOptionStyleProps, ISelectOptionStyles>;
  option: ISelectOption;
  onSelect: (option: ISelectOption) => void;
}

export interface ISelectOptionStyleProps {}

export interface ISelectOptionStyles {
  root?: IStyle;
}
