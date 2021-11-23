import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./OrderShippingDetailRow.styles";
import {
  IOrderShippingDetailRowProps,
  IOrderShippingDetailRowStyleProps,
  IOrderShippingDetailRowStyles,
} from "./OrderShippingDetailRow.types";

// get class names.
const getClassNames = classNamesFunction<IOrderShippingDetailRowStyleProps, IOrderShippingDetailRowStyles>();

/**
 * Order base component.
 *
 * @param {*} styles
 * @returns {Component}
 *
 */

const OrderShippingDetailRowBase = ({ styles, title, description }: IOrderShippingDetailRowProps) => {
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.rowStyles}>
      <strong>{title}</strong>
      <span>{description}</span>
    </div>
  );
};

export const OrderShippingDetailRow = styled<
  IOrderShippingDetailRowProps,
  IOrderShippingDetailRowStyleProps,
  IOrderShippingDetailRowStyles
>(OrderShippingDetailRowBase, getStyles);
