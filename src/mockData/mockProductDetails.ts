import faker from "faker";
import { ProductDetails } from "../models/ProductDetails";

export const mockProductDetails: ProductDetails[] = [];

faker.seed(1);
for (let i = 0; i < 20; i++) {
  const retailPrice = Number(faker.commerce.price(50, 100));
  mockProductDetails.push({
    id: faker.datatype.number({ min: 10000, max: 99999 }).toString(10),
    imageUrl: faker.image.image(),
    name: faker.commerce.productName(),
    createdOn: faker.date.past().toISOString(),
    closedDate: faker.date.soon().toISOString(),
    category: faker.random.words(),
    itemSold: faker.datatype.number(1000),
    minQuantity: faker.datatype.number(100),
    onlineShops: faker.commerce.department(),
    priceOffer: Number(faker.commerce.price(retailPrice * 0.5, retailPrice * 0.9)),
    quantityAvailable: faker.datatype.number(1000),
    retailPrice,
  });
}
