import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faArrowLeft,
  faArrowRight,
  faDownload,
  faPrint,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import { getStyles } from "./OrderDetail.styles";
import { IOrderDetailProps, IOrderDetailStyleProps, IOrderDetailStyles } from "./OrderDetail.types";
import { OrderShippingDetail } from "../OrderShippingDetail";
import { OrderPaymentStatus } from "../OrderPaymentStatus";
import { OrderContactButton } from "../OrderContactButton";

import { OrderProductShipping } from "../../../models/OrderProductShipping";
import { OrderPaymentDetails } from "../../../models/OrderPaymentDetails";
import { orderDetailsData, orderPaymentStatusData } from "./utils";
import { OrderType } from "./index";

// get class names.
const getClassNames = classNamesFunction<IOrderDetailStyleProps, IOrderDetailStyles>();

/**
 * Order base component.
 *
 * @param {*} styles
 * @returns {Component}
 *
 */

// temporary data
const productDesc: OrderProductShipping = orderDetailsData;
const paymentStatusDesc: OrderPaymentDetails = orderPaymentStatusData;

const OrderDetailBase = ({ styles }: IOrderDetailProps) => {
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.root}>
      <div className="flex">
        <div className="flex-grow text-grey80 text-sm">
          <FontAwesomeIcon icon={faChevronLeft} className="mr-3" />
          <strong>Orders</strong>
        </div>

        <div className="flex-grow flex justify-end flex-wrap content-center space-x-4">
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className="flex mt-3">
        <div className="flex-grow">
          <div className="text-grey80 text-2xl font-semibold">Order Details</div>
          <div className="text-grey70 text-sm">Order ID: # 0000000000</div>
        </div>

        <div className="flex-grow flex justify-end flex-wrap content-center space-x-4">
          <FontAwesomeIcon icon={faDownload} />
          <FontAwesomeIcon icon={faPrint} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>

      <div className="flex mt-6 grid-cols-2 gap-4">
        <div className={classNames.containerLeft}>
          <OrderShippingDetail orderTypeTest={OrderType.OrderCollection} item={productDesc} />
        </div>

        <div className={classNames.containerRight}>
          <OrderPaymentStatus item={paymentStatusDesc} />
          <OrderContactButton orderTypeTest={OrderType.OrderCollection} />
        </div>
      </div>
    </div>
  );
};

export const OrderDetail = styled<IOrderDetailProps, IOrderDetailStyleProps, IOrderDetailStyles>(
  OrderDetailBase,
  getStyles
);
