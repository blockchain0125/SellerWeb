import { classNamesFunction, styled } from "@fluentui/utilities";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faExclamationTriangle, faPen } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import React, { useMemo } from "react";
import { ProgressBar } from "../../shared/ProgressBar";
import { getStyles } from "./ProductStatus.styles";
import { IProductStatusProps, IProductStatusStyleProps, IProductStatusStyles } from "./ProductStatus.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getClassNames = classNamesFunction<IProductStatusStyleProps, IProductStatusStyles>();

const ProductStatusBase = ({ styles, minQuality, priceOffer, retailPrice, itemSold }: IProductStatusProps) => {
  const classNames = getClassNames(styles);
  const offPercentage = useMemo(() => ((retailPrice - priceOffer) * 100) / retailPrice, [priceOffer, retailPrice]);
  return (
    <div className={classnames(classNames.root, "bg-background py-3 px-6")}>
      <div className="flex justify-between">
        <div className="text-whatsapp">
          <FontAwesomeIcon icon={faCheckCircle} />
          <span className="ml-2 font-bold">Completed</span>
        </div>
        <div className="ml-auto space-x-3 font-semibold">
          <span className="text-secondary00 ">${priceOffer}</span>
          <span className="text-grey60">${retailPrice}</span>
          <span className="text-secondary00 bg-secondary01 px-2 py-1 text-sm rounded-xs">
            {Math.round(offPercentage)}% OFF
          </span>
        </div>
      </div>

      <div className="my-3">
        <ProgressBar percentage={90} styles={classNames.subComponentStyles.progressBar} />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-grey80 text-sm">
          <span>Min Qty:</span>
          <span className="ml-2 font-bold">{minQuality}</span>
          <FontAwesomeIcon icon={faPen} className="text-grey20 text-xs ml-3" />
        </div>
        <div className="text-primary">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-sm" />
          <span className="text-xs ml-3">Slow selling progress</span>
        </div>
        <div className="text-grey80 text-sm">
          <span>{"Item Sold "}</span>
          <span className="font-bold">{itemSold}</span>
        </div>
      </div>
    </div>
  );
};

export const ProductStatus = styled<IProductStatusProps, IProductStatusStyleProps, IProductStatusStyles>(
  ProductStatusBase,
  getStyles
);
