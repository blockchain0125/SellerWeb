import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";
import { ITagStyles } from "../Tag";

export interface ISelectOption {
  value: string;
  display: ReactNode;
}

export interface ISelectProps {
  styles?: IStyleFunctionOrObject<ISelectStyleProps, ISelectStyles>;
  options: ISelectOption[];
  placeHolder?: string;
  multiSelect?: boolean;
  /**
   * For single select mode
   */
  selectedOption?: ISelectOption;
  /**
   * For single select mode
   */
  onSelectedOptionChange?: (newValue: ISelectOption) => void;
  /**
   * only available when multiSelect is true
   */
  selectedOptions?: ISelectOption[];
  /**
   * only available when multiSelect is true
   */
  onSelectedOptionsChange?: (newValues: ISelectOption[]) => void;
}

export interface ISelectStyleProps {}

export interface ISelectStyles {
  root: IStyle;
  optionsContainer: IStyle;
  subComponentStyles: {
    tag: Partial<ITagStyles>;
  };
}
