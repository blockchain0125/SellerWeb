import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IFieldProps } from "../Field";

export interface ITagEditorProps extends Omit<IFieldProps, "styles"> {
  styles?: IStyleFunctionOrObject<ITagEditorStyleProps, ITagEditorStyles>;
  value?: string[];
  onChange?: (newValue: string[]) => void;
}

export interface ITagEditorStyleProps {}

export interface ITagEditorStyles {
  root?: IStyle;
}
