import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { categoryListType } from "../../../datalisting";
import { ReactNode } from "react";

export interface IListingDetailRowProps {
  styles?: IStyleFunctionOrObject<IListingDetailRowStyleProps, IListingDetailRowStyles>;
  name: string;
  content?: string;
  categoryList?: categoryListType;
  body?: ReactNode;
}

export interface IListingDetailRowStyleProps {
  categoryList?: categoryListType;
}

export interface IListingDetailRowStyles {
  root?: IStyle;
  body?: IStyle;
  category?: IStyle;
}
