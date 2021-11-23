import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { getStyles } from "./OrderPaymentStatus.styles";
import {
  IOrderPaymentStatusProps,
  IOrderPaymentStatusStyleProps,
  IOrderPaymentStatusStyles,
} from "./OrderPaymentStatus.types";

import { OrderContactDetails } from "../OrderContactDetails";

// get class names.
const getClassNames = classNamesFunction<IOrderPaymentStatusStyleProps, IOrderPaymentStatusStyles>();

/**
 * Order base component.
 *
 * @param {*} styles
 * @returns {Component}
 *
 */

const OrderPaymentStatusBase = ({ styles, item }: IOrderPaymentStatusProps) => {
  const classNames = getClassNames(styles);
  const { paymentStatus, deliveryDate, deliveryType, contactName, abn, trackingId } = item;

  return (
    <div className={classNames.root}>
      <div className="bg-white rounded-t-sm py-12 px-6">
        <div className="flex">
          <div className="flex-grow font-semibold text-grey80">Payment Status</div>
          <div className={classNames.successColor}>{paymentStatus}</div>
        </div>

        <div className="flex mt-3">
          <div className="flex-grow font-semibold text-grey80">{deliveryDate}</div>
          <div className={classNames.successColor}>
            <FontAwesomeIcon icon={faCheck} /> {deliveryType}
          </div>
        </div>
      </div>

      <div className="p-6 text-grey80">
        <div className="mb-3 font-semibold">Contact Details</div>

        <div className="grid grid-cols-1 text-sm">
          <OrderContactDetails title="Name" description={contactName} />
          <OrderContactDetails title="ABN" description={abn} />
          <OrderContactDetails
            title="Tracking ID"
            description={<span className="text-twitter">{trackingId}</span>}
            styles={classNames.subComponentStyles.trackingID}
          />
        </div>
      </div>
    </div>
  );
};

export const OrderPaymentStatus = styled<
  IOrderPaymentStatusProps,
  IOrderPaymentStatusStyleProps,
  IOrderPaymentStatusStyles
>(OrderPaymentStatusBase, getStyles);
