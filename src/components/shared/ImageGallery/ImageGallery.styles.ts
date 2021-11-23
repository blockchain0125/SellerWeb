import tw from "twin.macro";
import { IImageGalleryStyleProps, IImageGalleryStyles } from "./ImageGallery.types";

export function getStyles({ thumbnailPosition }: IImageGalleryStyleProps): IImageGalleryStyles {
  return {
    deskTopRoot: [tw`flex`, { height: "489px" }, thumbnailPosition === "bottom" && tw`flex-col-reverse`],
    thumbContainer: [
      tw`flex flex-col w-18 mr-5`,
      thumbnailPosition === "bottom" && tw`flex-row w-auto h-18 space-x-5 mt-10`,
      thumbnailPosition === "right" && tw`order-1 ml-5`,
    ],
    thumb: [
      tw`flex items-center justify-center w-full h-18 border border-grey20 rounded-xxs cursor-pointer`,
      { marginBottom: "17px" },
      thumbnailPosition === "bottom" && "w-18",
    ],
    current: [tw`flex justify-center items-start relative max-w-full`, { width: "499px", height: "499px" }],
    swipeableContainer: [tw`relative w-full`, { paddingBottom: "100%" }],
  };
}
