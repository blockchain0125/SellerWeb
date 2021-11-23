import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ISelectStyles, ISelectStyleProps } from "../../../shared/Select";

export interface ILocationAddressesProps {
  styles?: IStyleFunctionOrObject<ILocationAddressesStyleProps, ILocationAddressesStyles>;
}

export interface ILocationAddressesStyleProps {}

export interface ILocationAddressesStyles {
  root?: IStyle;
  subComponentStyles: {
    select: IStyleFunctionOrObject<ISelectStyleProps, ISelectStyles>;
  };
}
