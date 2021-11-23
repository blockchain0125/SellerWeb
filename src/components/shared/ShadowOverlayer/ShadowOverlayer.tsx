import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useContext, useEffect } from "react";
import { use100vh } from "react-div-100vh";
import { createPortal } from "react-dom";
import { ScrollControlContext } from "../ScrollControlProvider";
import { getStyles } from "./ShadowOverlayer.styles";
import {
  IShadowOverlayerProps,
  IShadowOverlayerStyleProps,
  IShadowOverlayerStyles,
  OverlayChildPosition,
} from "./ShadowOverlayer.types";

const getClassNames = classNamesFunction<IShadowOverlayerStyleProps, IShadowOverlayerStyles>();

const ShadowOverlayerBase = ({
  styles,
  children,
  onDismiss,
  rootStyles,
  childPosition = OverlayChildPosition.Center,
  parentElement,
  reduceHeight = 0,
}: IShadowOverlayerProps) => {
  const height = use100vh();
  const classNames = getClassNames(styles, {
    height: height ? height - reduceHeight : 0,
    rootStyles,
    fullScreen: !parentElement,
    childPosition,
  });
  const onClickChildren = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);
  const { setScrollEnabled } = useContext(ScrollControlContext);
  useEffect(() => {
    setScrollEnabled(false);
    return () => {
      setScrollEnabled(true);
    };
  }, [setScrollEnabled]);
  const overlay = (
    <div className={classNames.root} onClick={onDismiss}>
      <div className={classNames.children} onClick={onClickChildren}>
        {children}
      </div>
    </div>
  );
  return parentElement ? createPortal(overlay, parentElement) : overlay;
};

export const ShadowOverlayer = styled<IShadowOverlayerProps, IShadowOverlayerStyleProps, IShadowOverlayerStyles>(
  ShadowOverlayerBase,
  getStyles
);

export default ShadowOverlayer;
