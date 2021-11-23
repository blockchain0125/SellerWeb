import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback } from "react";
import { getStyles } from "./Image.styles";
import { IImageProps, IImageStyleProps, IImageStyles } from "./Image.types";

const getClassNames = classNamesFunction<IImageStyleProps, IImageStyles>();

const ImageBase = ({ styles, imageOptions, onClick, index }: IImageProps) => {
  const classNames = getClassNames(styles);
  const onClickCallback = useCallback(() => {
    onClick(index);
  }, [onClick, index]);
  return <img onClick={onClickCallback} className={classNames.root} src={imageOptions.source} alt="product image" />;
};

export const Image = styled<IImageProps, IImageStyleProps, IImageStyles>(ImageBase, getStyles);
