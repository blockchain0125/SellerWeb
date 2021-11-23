import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ISelectStyles } from "../../shared/Select";

export interface IContactAddressProps {
  styles?: IStyleFunctionOrObject<IContactAddressStyleProps, IContactAddressStyles>;
}

export interface IContactAddressStyleProps {}

export interface IContactAddressStyles {
  subComponentStyles: {
    select: Partial<ISelectStyles>;
  };
}
