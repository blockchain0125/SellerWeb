import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./OrderContactDetails.styles";
import {
  IOrderContactDetailsProps,
  IOrderContactDetailsStyleProps,
  IOrderContactDetailsStyles,
} from "./OrderContactDetails.types";

// get class names.
const getClassNames = classNamesFunction<IOrderContactDetailsStyleProps, IOrderContactDetailsStyles>();

/**
 * Order base component.
 *
 * @param {*} styles
 * @returns {Component}
 *
 */

const OrderContactDetailsBase = ({ styles, description, title }: IOrderContactDetailsProps) => {
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.rowStyles}>
      <p className="font-semibold">{title}</p>
      <p className={classNames.description}>{description}</p>
    </div>
  );
};

export const OrderContactDetails = styled<
  IOrderContactDetailsProps,
  IOrderContactDetailsStyleProps,
  IOrderContactDetailsStyles
>(OrderContactDetailsBase, getStyles);
