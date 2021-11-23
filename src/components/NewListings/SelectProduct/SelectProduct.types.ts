import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../shared/CustomButton";
import { IInputStyles } from "../../shared/Input";
import { ISelectStyles } from "../../shared/Select";
import { ITagEditorStyles } from "../../shared/TagEditor";
import { ITextAreaStyles } from "../../shared/TextArea";

export interface ISelectProductProps {
  styles?: IStyleFunctionOrObject<ISelectProductStyleProps, ISelectProductStyles>;
}

export interface ISelectProductStyleProps {}

export interface ISelectProductStyles {
  root?: IStyle;
  label?: IStyle;
  subComponentStyles: {
    select: Partial<ISelectStyles>;
    input: Partial<IInputStyles>;
    textarea: Partial<ITextAreaStyles>;
    searchInput: Partial<IInputStyles>;
    button: Partial<ICustomButtonStyles>;
    tagEditor: Partial<ITagEditorStyles>;
  };
}
