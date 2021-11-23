import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../CustomButton";

export interface IPaginationProps {
  itemsCount: number;
  itemsPerPage: number;
  styles?: IStyleFunctionOrObject<IPaginationStyleProps, IPaginationStyles>;
  onPageChange: (pageIndex: number) => void;
  /**
   * How many page buttons are displayed, except first and last one.
   */
  pageButtonNumber?: number;
}

export interface IPaginationStyleProps {}

export interface IPaginationStyles {
  root?: IStyle;
  subComponentStyles: {
    navigateButton: Partial<ICustomButtonStyles>;
  };
}
