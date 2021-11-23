import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./OrderShippingDetail.styles";
import {
  IOrderShippingDetailProps,
  IOrderShippingDetailStyleProps,
  IOrderShippingDetailStyles,
  OrderType,
} from "./OrderShippingDetail.types";

import nintendo_switch from "../../../images/nintendo_switch.png";
import { OrderShippingDetailRow } from "../OrderShippingDetailRow";

// get class names.
const getClassNames = classNamesFunction<IOrderShippingDetailStyleProps, IOrderShippingDetailStyles>();

function renderPrice(price: string) {
  return <strong>${price}</strong>;
}

const OrderShippingDetailBase = ({ styles, item, orderTypeTest }: IOrderShippingDetailProps) => {
  const classNames = getClassNames(styles, { orderTypeTest });
  const {
    productName,
    sku,
    qty,
    asin,
    price,
    discountPrice,
    percentOff,
    deliveryOptionSelected,
    purchaseDate,
    collectionAddress,
    collectionAvailableFrom,
    shippingService,
    shipDate,
    shippingCarrier,
    shippingClassService,
    fulfillment,
    deliveryAddress,
    deliveryDate,
    billingCountry,
    paymentMethods,
    contactBuyer,
    itemsTotal,
    shippingTotal,
    deliveryCost,
    grandTotal,
  } = item;

  return (
    <div className={classNames.root}>
      <div className="flex bg-white rounded-t-sm">
        <div className="flex-grow-0 p-12">
          <img src={nintendo_switch} className="w-40 m-auto" />
        </div>
        <div className="flex-grow p-12 text-sm">
          <p className="font-semibold text-twitter text-lg">{productName}</p>

          <div className="flex my-5">
            <div className="flex-grow text-grey40 text-xl font-semibold line-through">${price}</div>

            <div className="flex-grow">
              <div className="flex">
                <strong className="flex-grow bg-secondary01 p-1 rounded text-center w-1 text-twitter text-sm">
                  {percentOff}% OFF
                </strong>
                <div className="flex-grow text-center text-error font-semibold text-lg">${discountPrice}</div>
              </div>
            </div>
          </div>

          <p>
            ASIN: <strong>{asin}</strong>
          </p>
          <p>
            SKU: <strong>{sku}</strong>
          </p>
          <p>
            QTY: <strong>{qty}</strong>
          </p>
        </div>
      </div>

      <div className="p-5 rounded-b-sm">
        <div className="py-3 px-9 text-grey80">
          {(orderTypeTest === OrderType.OrderShipped || orderTypeTest === OrderType.OrderSummary) && (
            <strong>Shipping Details</strong>
          )}

          {orderTypeTest === OrderType.OrderCollection && <strong>Collection Details</strong>}

          {orderTypeTest === OrderType.OrderDelivery && <strong>Delivery Details</strong>}
        </div>

        <div className="grid grid-cols-1 divide-y divide-grey10 text-grey80">
          {orderTypeTest === OrderType.OrderShipped && (
            <>
              <OrderShippingDetailRow title="Purchase Date" description={purchaseDate} />
              <OrderShippingDetailRow title="Shipping Service" description={shippingService} />
              <OrderShippingDetailRow title="Ship Date" description={shipDate} />
              <OrderShippingDetailRow title="Shipping Carrier" description={shippingCarrier} />
              <OrderShippingDetailRow title="Shipping Service" description={shippingClassService} />
              <OrderShippingDetailRow title="Fulfillment" description={fulfillment} />
              <OrderShippingDetailRow title="Billing Country / Region" description={billingCountry} />
              <OrderShippingDetailRow title="Payment Methods" description={paymentMethods} />
              <OrderShippingDetailRow title="Contact Buyer" description={contactBuyer} />
            </>
          )}

          {orderTypeTest === OrderType.OrderSummary && (
            <>
              <OrderShippingDetailRow title="Purchase Date" description={purchaseDate} />
              <OrderShippingDetailRow title="Shipping Service" description={shippingService} />
              <OrderShippingDetailRow title="Ship Date" description={shipDate} />
              <OrderShippingDetailRow title="Shipping Carrier" description={shippingCarrier} />
              <OrderShippingDetailRow title="Shipping Service" description={shippingClassService} />
              <OrderShippingDetailRow title="Fulfillment" description={fulfillment} />
              <OrderShippingDetailRow title="Billing Country / Region" description={billingCountry} />
              <OrderShippingDetailRow title="Payment Methods" description={paymentMethods} />
              <OrderShippingDetailRow title="Contact Buyer" description={contactBuyer} />
            </>
          )}

          {orderTypeTest === OrderType.OrderCollection && (
            <>
              <OrderShippingDetailRow title="Delivery Option Selected" description={deliveryOptionSelected} />
              <OrderShippingDetailRow title="Purchase Date" description={purchaseDate} />
              <OrderShippingDetailRow title="Collection Address" description={collectionAddress} />
              <OrderShippingDetailRow title="Collection Available From" description={collectionAvailableFrom} />
              <OrderShippingDetailRow title="Payment Methods" description={paymentMethods} />
              <OrderShippingDetailRow title="Contact Buyer" description={contactBuyer} />
            </>
          )}

          {orderTypeTest === OrderType.OrderDelivery && (
            <>
              <OrderShippingDetailRow title="Delivery Option Selected" description={deliveryOptionSelected} />
              <OrderShippingDetailRow title="Purchase Date" description={purchaseDate} />
              <OrderShippingDetailRow title="Delivery Address" description={deliveryAddress} />
              <OrderShippingDetailRow title="Delivery Date" description={deliveryDate} />
              <OrderShippingDetailRow title="Billing Country / Region" description={billingCountry} />
              <OrderShippingDetailRow title="Payment Methods" description={paymentMethods} />
              <OrderShippingDetailRow title="Contact Buyer" description={contactBuyer} />
            </>
          )}
        </div>

        <div className="py-3 px-9 mt-5 text-grey80">
          {orderTypeTest === OrderType.OrderShipped && <strong>Shipped</strong>}

          {(orderTypeTest === OrderType.OrderSummary ||
            orderTypeTest === OrderType.OrderCollection ||
            orderTypeTest === OrderType.OrderDelivery) && <strong>Order Summary</strong>}
        </div>

        <div className="grid grid-cols-1 divide-y divide-grey10 text-grey80">
          <OrderShippingDetailRow title="Items Total" description={renderPrice(itemsTotal)} />

          {orderTypeTest === OrderType.OrderShipped && (
            <OrderShippingDetailRow title="Shipping Total" description={renderPrice(shippingTotal)} />
          )}

          {orderTypeTest === OrderType.OrderSummary && (
            <OrderShippingDetailRow title="Delivery Cost" description={renderPrice(deliveryCost)} />
          )}
        </div>

        <div className={classNames.grandTotal}>
          <OrderShippingDetailRow title="Grand Total" description={renderPrice(grandTotal)} />
        </div>
      </div>
    </div>
  );
};

export const OrderShippingDetail = styled<
  IOrderShippingDetailProps,
  IOrderShippingDetailStyleProps,
  IOrderShippingDetailStyles
>(OrderShippingDetailBase, getStyles);
