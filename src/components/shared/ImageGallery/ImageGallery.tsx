import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import SwipeableViews, { OnSwitchingCallback } from "react-swipeable-views";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { getStyles } from "./ImageGallery.styles";
import { IImageGalleryProps, IImageGalleryStyleProps, IImageGalleryStyles } from "./ImageGallery.types";
import { Image as GalleryImage } from "./Image";

const getClassNames = classNamesFunction<IImageGalleryStyleProps, IImageGalleryStyles>();

const ImageGalleryBase = ({ styles, images, mode, thumbnailPosition = "left" }: IImageGalleryProps) => {
  const classNames = getClassNames(styles, { thumbnailPosition });
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const selectCurrentImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);
  const breakpoint = useBreakpoint();
  const finalMode: IImageGalleryProps["mode"] = mode || (breakpoint === "sm" ? "swipeable" : "thumbs");

  const onSwitching = useCallback<OnSwitchingCallback>((index, type) => {
    if (type === "end") {
      setCurrentImageIndex(index);
    }
  }, []);

  return finalMode === "thumbs" ? (
    <div className={classNames.deskTopRoot}>
      <div className={classNames.thumbContainer}>
        {images &&
          images.map((image, index) => {
            return (
              <div key={image.id} className={classNames.thumb}>
                <GalleryImage index={index} imageOptions={image} onClick={selectCurrentImage} />
              </div>
            );
          })}
      </div>
      <div className={classNames.current}>
        <img src={images[currentImageIndex].source} className="object-contain" alt="Picture of product" />
      </div>
    </div>
  ) : (
    <div className="relative">
      <SwipeableViews enableMouseEvents onSwitching={onSwitching}>
        {images &&
          images.map(({ id, source }) => (
            <div className={classNames.swipeableContainer} key={id}>
              <img src={source} className="object-contain" alt="Picture of product" />
            </div>
          ))}
      </SwipeableViews>
      <div className="bold text-grey80 heading6 px-2 py-1 bg-grey10 rounded-sm inline-flex absolute right-0 bottom-0">
        {currentImageIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export const ImageGallery = styled<IImageGalleryProps, IImageGalleryStyleProps, IImageGalleryStyles>(
  ImageGalleryBase,
  getStyles
);
