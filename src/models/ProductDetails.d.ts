export interface ProductDetails {
  id: string;
  name: string;
  createdOn: string;
  closedDate: string;
  quantityAvailable: number;
  minQuantity: number;
  category: string;
  onlineShops: string;
  priceOffer: number;
  retailPrice: number;
  itemSold: number;
  imageUrl?: string;
}
