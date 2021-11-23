import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { getStyles } from "./OrderDetailsRow.styles";
import { IOrderDetailsRowProps, IOrderDetailsRowStyleProps, IOrderDetailsRowStyles } from "./OrderDetailsRow.types";

import { AllOrders } from "../../../models/AllOrders";
import { orderDetailsData } from "./utils";

const getClassNames = classNamesFunction<IOrderDetailsRowStyleProps, IOrderDetailsRowStyles>();

/**
 * Orders general row component: for listing and return.
 * TODO: still need some more work here.
 *
 * @param {*} styles
 * @param {Object} item
 * @returns {Component}
 *
 */

// temporary data
const productDesc: AllOrders = orderDetailsData;

// TOTO: order details row: zhang is working here.
const OrderDetailsRowBase = ({ styles, item }: IOrderDetailsRowProps) => {
  const classNames = getClassNames(styles);
  // const { id, imageUrl, retailPrice, wholesale, total, returned, delivered, status } = item;
  const { id, name, imageUrl, retailPrice, wholesale } = item;
  const {
    asin,
    sku,
    qty,
    orderDate,
    shipment,
    delivery,
    paymentStatus,
    deliveryStatus,
    onlineStore,
    address,
  } = productDesc;

  return (
    <tr>
      <td className="p-2">
        <p className="text-grey80 text-twitter text-center font-semibold">{id}</p>
      </td>
      <td className="p-2" rowSpan={1}>
        <img src={imageUrl} className="h-20 w-20 object-contain block m-auto" alt="Product image" />
      </td>
      <td className="p-2">
        <p className="text-messenger font-bold mb-2">{name}</p>
        <p className="text-xs">
          ASIN: <strong>{asin}</strong>
        </p>
        <p className="text-xs">
          SKU: <strong>{sku}</strong>
        </p>
        <p className="text-xs">
          QTY: <strong>{qty}</strong>
        </p>
      </td>

      <td colSpan={2} className="p-2">
        <div className={classNames.rowStyles}>
          <td>
            <p className="text-grey60 font-semibold line-through">${retailPrice}</p>
          </td>
          <td>
            <tr>
              <td>
                <p className="text-primary font-bold pr-4">${wholesale}</p>
              </td>
              <td>
                <p>
                  <strong className="bg-secondary01 px-2 rounded text-center w-1 text-twitter text-sm">50% OFF</strong>
                </p>
              </td>
            </tr>
          </td>
        </div>

        <td colSpan={2}>
          <tr>
            <td>
              <p className="text-xs mt-2">
                Order Date: <strong>{orderDate}</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-xs">
                Shipment: <strong>{shipment}</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-xs">
                Delivery: <strong>{delivery}</strong>
              </p>
            </td>
          </tr>
        </td>
      </td>

      <td colSpan={3} className="p-2">
        <div className={classNames.rowStyles}>
          <td className="text-center">
            <span className={classNames.paymentStatus}>{paymentStatus}</span>
          </td>
          <td className="text-center">
            <span className={classNames.deliveryStatus}>{deliveryStatus}</span>
          </td>
          <td className="text-center">
            <span className="text-grey80 flex justify-between">
              <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="mr-2" />
              <FontAwesomeIcon icon={faEllipsisV} className="mr-2" />
            </span>
          </td>
        </div>

        <div className={classNames.storeDetails}>
          <span>
            <strong>Online Store:</strong> {onlineStore}
          </span>
        </div>
        <div className={classNames.storeDetails}>
          <span>
            <strong>Address:</strong> {address}
          </span>
        </div>
      </td>
    </tr>
  );
};

export const OrderDetailsRow = styled<IOrderDetailsRowProps, IOrderDetailsRowStyleProps, IOrderDetailsRowStyles>(
  OrderDetailsRowBase,
  getStyles
);
