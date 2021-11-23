import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { PropsWithChildren } from "react";

export enum OverlayChildPosition {
  Center,
  Left,
  Right,
  Top,
}

export type IShadowOverlayerProps = PropsWithChildren<{
  styles?: IStyleFunctionOrObject<IShadowOverlayerStyleProps, IShadowOverlayerStyles>;
  onDismiss?: () => void;
  rootStyles?: IStyle;
  parentElement?: HTMLElement | null;
  childPosition?: OverlayChildPosition;
  /**
   * Default value: 0
   * Unit: px
   * The height of the overlayer is [100% screen height] - reduceHeight
   * Used when the overlayer is not 100% screen height. For example, only covers part of the page.
   */
  reduceHeight?: number;
}>;

export interface IShadowOverlayerStyleProps {
  height: number | null;
  rootStyles: IShadowOverlayerProps["rootStyles"];
  childPosition: OverlayChildPosition;
  fullScreen: boolean;
}

export interface IShadowOverlayerStyles {
  root: IStyle;
  children: IStyle;
}
