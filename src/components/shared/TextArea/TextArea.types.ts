import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { LegacyRef } from "react";
import { FieldStatus, IFieldProps, IFieldStyles } from "../Field";

export interface ITextAreaProps<T = unknown> extends Omit<IFieldProps, "styles"> {
  styles?: IStyleFunctionOrObject<ITextAreaStyleProps, ITextAreaStyles>;
  value?: string;
  placeholder?: string;
  onChange?: (newValue: string, customData?: T) => void;
  message?: string;
  name?: string;
  textareaRef?: LegacyRef<HTMLTextAreaElement>;
  customData?: T;
}

export interface ITextAreaStyleProps {
  status: FieldStatus;
  isLabelActive?: boolean;
}

export interface ITextAreaStyles {
  textArea?: IStyle;
  subComponentStyles: {
    field?: IStyleFunctionOrObject<unknown, IFieldStyles>;
  };
}
