import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { OrderTabs } from "../OrdersPage";

import { getStyles } from "./OrdersRow.styles";
import { IOrdersRowProps, IOrdersRowStyleProps, IOrdersRowStyles } from "./OrdersRow.types";

const getClassNames = classNamesFunction<IOrdersRowStyleProps, IOrdersRowStyles>();

/**
 * Orders general row component: for listing and return.
 * TODO: still need some more work here.
 *
 * @param {*} styles
 * @param {Object} item
 * @returns {Component}
 *
 */
const OrdersRowBase = ({ styles, item, orderTab }: IOrdersRowProps) => {
  const classNames = getClassNames(styles);
  const { id, imageUrl, name, retailPrice, wholesale, total, returned, delivered, status } = item;

  return (
    <tr>
      <td>
        <p className="text-grey80 text-twitter text-center font-semibold">{id}</p>
      </td>
      <td rowSpan={1}>
        <img src={imageUrl} className="h-20 w-20 object-contain block m-auto" alt="Product image" />
      </td>
      <td>
        <p className="text-messenger font-bold text-center">{name}</p>
      </td>

      {orderTab === OrderTabs.ordersByListings && (
        <td>
          <p className="text-grey80 line-through text-center">${retailPrice}</p>
        </td>
      )}

      <td>
        <p className="text-primary text-center font-semibold">${wholesale}</p>
      </td>
      <td className="text-center">
        <span className={classNames.total}>{total}</span>
      </td>

      {orderTab === OrderTabs.ordersByListings && (
        <>
          <td className="text-center">
            <span className={classNames.returned}>{returned}</span>
          </td>
          <td className="text-center">
            <span className={classNames.delivered}>{delivered}</span>
          </td>
        </>
      )}

      <td className="text-center">
        <span className={classNames.status}>{status}</span>
      </td>
      <td className="text-center">
        <span className="text-grey80 flex justify-between">
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="mr-2" />
          <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
        </span>
      </td>
    </tr>
  );
};

export const OrdersRow = styled<IOrdersRowProps, IOrdersRowStyleProps, IOrdersRowStyles>(OrdersRowBase, getStyles);
