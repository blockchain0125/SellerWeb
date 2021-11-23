import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faComments } from "@fortawesome/free-solid-svg-icons";

import { getStyles } from "./OrderContactButton.styles";
import {
  IOrderContactButtonProps,
  IOrderContactButtonStyleProps,
  IOrderContactButtonStyles,
  OrderType,
} from "./OrderContactButton.types";

const getClassNames = classNamesFunction<IOrderContactButtonStyleProps, IOrderContactButtonStyles>();

const OrderContactButtonBase = ({ styles, orderTypeTest }: IOrderContactButtonProps) => {
  const classNames = getClassNames(styles, { orderType: orderTypeTest });
  return (
    <div className={classNames.root}>
      <div className={classNames.buttonDiscussionDesign}>
        <FontAwesomeIcon icon={faComments} />
        <p className="m-auto">Seller/Buyer Discussion</p>
      </div>

      {(orderTypeTest === OrderType.OrderShipped || orderTypeTest === OrderType.OrderSummary) && (
        <div className={classNames.buttonPrintDesign}>
          <FontAwesomeIcon icon={faPrint} />
          <p className="m-auto">Print Packing Slip</p>
        </div>
      )}
    </div>
  );
};

export const OrderContactButton = styled<
  IOrderContactButtonProps,
  IOrderContactButtonStyleProps,
  IOrderContactButtonStyles
>(OrderContactButtonBase, getStyles);
