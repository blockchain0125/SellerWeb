export interface OrderDetails {
  id: string;
  imageUrl: string;
  name: string;
  retailPrice: number;
  wholesale: number;
  total: number;
  returned: number;
  delivered: number;
  status: string;
}
