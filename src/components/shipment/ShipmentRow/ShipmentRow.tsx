import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { ShipmentTabs } from "../ShipmentPage";

import { getStyles } from "./ShipmentRow.styles";
import { IShipmentRowProps, IShipmentRowStyleProps, IShipmentRowStyles } from "./ShipmentRow.types";

const getClassNames = classNamesFunction<IShipmentRowStyleProps, IShipmentRowStyles>();

/**
 * Shipment general row component: for listing and return.
 * TODO: still need some more work here.
 *
 * @param {*} styles
 * @param {Object} item
 * @returns {Component}
 *
 */
const ShipmentRowBase = ({ styles, item }: IShipmentRowProps) => {
  const classNames = getClassNames(styles);
  const { id, shippedDate, status, tracking, shipmentStatus, shipmentStatusImg, shipmentStatusDate, tax, cost } = item;

  return (
    <tr className={classNames.tr}>
      <td>
        <p className={classNames.id}>{id}</p>
      </td>
      <td>
        <p className={classNames.shippedDate}>{shippedDate}</p>
      </td>
      <td>
        <p className={classNames.status}>{status}</p>
      </td>
      <td>
        <div className="border rounded-xxs border-grey40 pl-2">
          <p>{"USPS\n"}</p>
          <p className={classNames.tracking}>{tracking}</p>
        </div>
      </td>
      <td className="p-4">
        <div className="border rounded-xxs border-grey40 pl-2 flex flex-row flex flex-row ..">
          <div>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <img src={shipmentStatusImg} className="h-12 w-12 object-contain block m-auto" alt="image" />
          </div>
          <div className="px-2">
            <p className={classNames.shipmentStatus}>{shipmentStatus}</p>
            {"\n"}
            <p className={classNames.shipmentStatusDate}>{shipmentStatusDate}</p>
          </div>
        </div>
      </td>
      <td>
        <span className={classNames.tax}>{tax}</span>
      </td>
      <td>
        <span className={classNames.cost}>${cost}</span>
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

export const ShipmentRow = styled<IShipmentRowProps, IShipmentRowStyleProps, IShipmentRowStyles>(
  ShipmentRowBase,
  getStyles
);
