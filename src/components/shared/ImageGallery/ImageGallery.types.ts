import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ImageOptions {
  source: string;
  id: number;
}

type ThumbnailPosition = "left" | "bottom" | "right";

export interface IImageGalleryProps {
  styles?: IStyleFunctionOrObject<IImageGalleryStyleProps, IImageGalleryStyles>;
  /**
   * thumbs: default view of desktop, there is a column of thumbnails on the top left of the large image, select different images by clicking a thumbnail
   * swipeable: default view of mobile, swipe to view different images
   * null or undefined: default value, responsively select mode according to screen size
   */
  mode?: "thumbs" | "swipeable";
  images: ImageOptions[];
  thumbnailPosition?: ThumbnailPosition;
}

export interface IImageGalleryStyleProps {
  thumbnailPosition: ThumbnailPosition;
}

export interface IImageGalleryStyles {
  deskTopRoot?: IStyle;
  thumbContainer?: IStyle;
  thumb?: IStyle;
  current?: IStyle;
  swipeableContainer: IStyle;
}
