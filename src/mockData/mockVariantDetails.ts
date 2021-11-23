import faker from "faker";
import { VariantDetails } from "../models/VariantDetails";

export const mockVariantDetails: VariantDetails[] = [];

faker.seed(1);
for (let i = 0; i < 20; i++) {
  mockVariantDetails.push({
    id: faker.datatype.number({ min: 10000, max: 99999 }).toString(10),
    name: `Variant ${i + 1}`,
    attributes: "Red, XL, 32GB",
    sku: "000000",
    wholesale: "$0,000",
    retailPrice: "$0,000",
    qty: 1000,
  });
}
