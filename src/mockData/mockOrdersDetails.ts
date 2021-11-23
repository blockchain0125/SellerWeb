import faker from "faker";
import { OrderDetails } from "../models/OrderDetails";

export const mockOrdersDetails: OrderDetails[] = [];

faker.seed(1);
for (let i = 0; i < 20; i++) {
  mockOrdersDetails.push({
    id: `#010${i}`,
    imageUrl: faker.image.image(),
    name: faker.commerce.productName(),
    retailPrice: Number(faker.commerce.price(50, 100)),
    wholesale: Number(faker.commerce.price(50, 100)),
    total: 50,
    returned: 5,
    delivered: 15,
    status: "In progress",
  });
}
