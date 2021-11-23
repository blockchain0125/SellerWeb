import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICheckboxStyles } from "../../shared/Checkbox";
import { ICustomButtonProps, ICustomButtonStyles } from "../../shared/CustomButton";
import { IInputStyles } from "../../shared/Input";
import { ITagEditorStyles } from "../../shared/TagEditor";

export interface IStoreDetailsProps extends Omit<ICustomButtonProps, "label" | "styles" | "rounded"> {
  styles?: IStyleFunctionOrObject<IStoreDetailsStyleProps, IStoreDetailsStyles>;
  storeName: string;
  locations: string;
  index: number;
}

export interface IStoreDetailsStyleProps {}

export interface IStoreDetailsStyles {
  root?: IStyle;
  subComponentStyles: {
    input: Partial<IInputStyles>;
    tagEditor: Partial<ITagEditorStyles>;
    button: Partial<ICustomButtonStyles>;
    checkbox: Partial<ICheckboxStyles>;
  };
}
