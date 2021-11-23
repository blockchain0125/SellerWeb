import { classNamesFunction, styled } from "@fluentui/utilities";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisV, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import dayjs from "dayjs";
import React, { Fragment } from "react";
import { IPopoverMenuProps, PopoverMenu } from "../../shared/PopoverMenu";
import { ProductStatus } from "../ProductStatus";
import { getStyles } from "./ProductDetailRow.styles";
import { IProductDetailRowProps, IProductDetailRowStyleProps, IProductDetailRowStyles } from "./ProductDetailRow.types";

const getClassNames = classNamesFunction<IProductDetailRowStyleProps, IProductDetailRowStyles>();
const dateFormat = "MMM D, YYYY";

const popoverMenuItems = [
  {
    itemKey: "pause",
    label: "Pause Listings",
  },
  {
    itemKey: "open",
    label: "Open Product Details",
  },
  {
    itemKey: "cancel",
    label: "Cancel Orders",
  },
  {
    itemKey: "return",
    label: "Return  Payment",
  },
  {
    itemKey: "delete",
    label: "Delete Listing",
  },
];

const popperOptions: IPopoverMenuProps["popperOptions"] = {
  placement: "bottom-start",
};

const ProductDetailRowBase = ({ styles, item, totalColumns }: IProductDetailRowProps) => {
  const classNames = getClassNames(styles);
  const {
    id,
    retailPrice,
    priceOffer,
    quantityAvailable,
    minQuantity,
    itemSold,
    category,
    closedDate,
    createdOn,
    name,
    imageUrl,
    onlineShops,
  } = item;
  return (
    <>
      <tr className={classNames.root}>
        <td rowSpan={2} className="pl-2">
          <img src={imageUrl} className="h-25 w-25 object-contain" alt="Product image" />
        </td>
        <td className="pt-4">
          <span className="bg-grey80 px-2 h-6 text-sm text-white font-bold">ID# {id}</span>
          <span className="text-messenger font-bold ml-3">{name}</span>
        </td>
        <td className="text-center">
          <FontAwesomeIcon icon={faRedo} className="text-grey80" />
        </td>
        <td className="text-center">
          <FontAwesomeIcon icon={faCopy} className="text-grey80" />
        </td>
        <td className="text-center text-grey80 hover:text-primary">
          <PopoverMenu
            referenceNode={<FontAwesomeIcon icon={faEllipsisV} />}
            items={popoverMenuItems}
            popperOptions={popperOptions}
          />
        </td>
      </tr>
      <tr className={classnames(classNames.root, "border-b border-background")}>
        <td colSpan={totalColumns - 1} className="pb-4">
          <div className="flex justify-between">
            <div className={classNames.dataContainer}>
              {[
                ["Created On", dayjs(createdOn).format(dateFormat)],
                ["Category", category],
                ["Closed Date", dayjs(closedDate).format(dateFormat)],
                ["Online Shops", onlineShops],
                ["QTY Available", quantityAvailable],
                ["Price Offer", `$${priceOffer}`],
                ["Min Qty", minQuantity],
                ["Retail Price", `$${retailPrice}`],
              ].map(([label, value]) => (
                <Fragment key={label}>
                  <div className={classNames.dataLabel}>
                    <span>{label}</span> <span className="ml-auto">:</span>
                  </div>
                  <div className={classNames.dataValue}>{value}</div>
                </Fragment>
              ))}
            </div>

            <ProductStatus
              priceOffer={priceOffer}
              retailPrice={retailPrice}
              itemSold={itemSold}
              minQuality={minQuantity}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export const ProductDetailRow = styled<IProductDetailRowProps, IProductDetailRowStyleProps, IProductDetailRowStyles>(
  ProductDetailRowBase,
  getStyles
);
