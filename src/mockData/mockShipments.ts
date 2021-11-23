import faker from "faker";
import { AllShipments } from "../models/AllShipments";

export const mockShipments: AllShipments[] = [];

faker.seed(1);
for (let i = 0; i < 20; i++) {
  mockShipments.push({
    id: `#010${i}`,
    shippedDate: faker.date.soon().toDateString(),
    status: "Shipped",
    tracking: 9995895662,
    shipmentStatusImg: faker.image.image(),
    shipmentStatusDate: "On Aug 22, 2021",
    shipmentStatus: "Pending TrackShip",
    tax: "No Taxes",
    cost: 54.0,
  });
}
