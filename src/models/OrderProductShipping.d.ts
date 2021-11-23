export interface OrderProductShipping {
  productName: string;
  sku: number;
  qty: number;
  asin: string;
  price: string;
  discountPrice: string;
  percentOff: number;
  deliveryOptionSelected: string;
  purchaseDate: string;
  collectionAddress: string;
  collectionAvailableFrom: string;
  shippingService: string;
  shipDate: string;
  shippingCarrier: string;
  shippingClassService: string;
  fulfillment: string;
  deliveryAddress: string;
  deliveryDate: string;
  billingCountry: string;
  paymentMethods: string;
  contactBuyer: string;
  itemsTotal: string;
  shippingTotal: string;
  deliveryCost: string;
  grandTotal: string;
}
