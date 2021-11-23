import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IProgressBarStyles } from "../../shared/ProgressBar";

export interface IProductStatusProps {
  styles?: IStyleFunctionOrObject<IProductStatusStyleProps, IProductStatusStyles>;
  minQuality: number;
  priceOffer: number;
  retailPrice: number;
  itemSold: number;
}

export interface IProductStatusStyleProps {}

export interface IProductStatusStyles {
  root?: IStyle;
  subComponentStyles: {
    progressBar: Partial<IProgressBarStyles>;
  };
}
