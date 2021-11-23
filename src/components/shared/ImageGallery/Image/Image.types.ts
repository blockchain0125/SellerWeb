import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

interface ImageOptions {
  source: string;
  id: number;
}

export interface IImageProps {
  styles?: IStyleFunctionOrObject<IImageStyleProps, IImageStyles>;
  index: number;
  imageOptions: ImageOptions;
  onClick: (index: number) => void;
}

export interface IImageStyleProps {}

export interface IImageStyles {
  root?: IStyle;
}
