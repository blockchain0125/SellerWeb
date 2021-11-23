import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IInfoBoxProps {
  styles?: IStyleFunctionOrObject<IInfoBoxStyleProps, IInfoBoxStyles>;
  headline: string;
  children: React.ReactNode;
}

export interface IInfoBoxStyleProps {}

export interface IInfoBoxStyles {
  root?: IStyle;
  contentContainer: IStyle;
  headlineStyle: IStyle;
  paragraph: IStyle;
}
