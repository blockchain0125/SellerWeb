import { classNamesFunction, styled } from "@fluentui/utilities";
import { DeliveryDetailsWizardPageLayout } from "../DeliveryDetailsWizardPageLayout";
import { getStyles } from "./SellerDeliverProduct.styles";
import {
  ISellerDeliverProductProps,
  ISellerDeliverProductStyleProps,
  ISellerDeliverProductStyles,
} from "./SellerDeliverProduct.types";

const getClassNames = classNamesFunction<ISellerDeliverProductStyleProps, ISellerDeliverProductStyles>();

const SellerDeliverProductBase = ({ styles }: ISellerDeliverProductProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <DeliveryDetailsWizardPageLayout
        title="Delivery Information"
        body={
          <div className="bg-background p-8">
            <p>This option requires you to deliver the product directly to the customer.</p>
            <p className="mt-4">
              When you deliver it,the customer can check the product and either accept or reject it.
            </p>
            <p className="mt-4">If they accept the order, they can no longer return it.</p>
            <p className="mt-4">
              This option requires <strong>a great deal of customer care </strong>
              but it also <strong>avoids the risk of returns</strong> in the future.
            </p>
          </div>
        }
      />
    </div>
  );
};

export const SellerDeliverProduct = styled<
  ISellerDeliverProductProps,
  ISellerDeliverProductStyleProps,
  ISellerDeliverProductStyles
>(SellerDeliverProductBase, getStyles);
