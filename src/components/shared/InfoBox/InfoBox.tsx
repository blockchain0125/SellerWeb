import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./InfoBox.styles";
import { IInfoBoxProps, IInfoBoxStyleProps, IInfoBoxStyles } from "./InfoBox.types";

const getClassNames = classNamesFunction<IInfoBoxStyleProps, IInfoBoxStyles>();

const InfoBoxBase = ({ styles, headline, children }: IInfoBoxProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={`${classNames.contentContainer} heading6`}>
      <h4 className={classNames.headlineStyle}>{headline}</h4>
      <p className={classNames.paragraph}>{children}</p>
    </div>
  );
};

export const InfoBox = styled<IInfoBoxProps, IInfoBoxStyleProps, IInfoBoxStyles>(InfoBoxBase, getStyles);
