import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IProgressBarProps {
  styles?: IStyleFunctionOrObject<IProgressBarStyleProps, IProgressBarStyles>;
  /*
    from 0 to 100
     */
  percentage: number;
}

export interface IProgressBarStyleProps {
  percentage: number;
}

export interface IProgressBarStyles {
  container: IStyle;
  bar: IStyle;
}
