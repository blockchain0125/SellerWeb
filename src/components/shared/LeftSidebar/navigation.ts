import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faDolly } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface NavigationLink {
  link: string;
  name: string;
  icon: IconProp;
  hasDivider?: boolean;
}

const navigation: NavigationLink[] = [
  {
    link: "dashbaord",
    name: "Dashbaord",
    icon: faTachometerAlt,
  },
  {
    link: "orders",
    name: "Orders",
    icon: faShoppingCart,
  },
  {
    link: "products",
    name: "Products",
    icon: faBoxes,
  },
  {
    link: "listing",
    name: "Listings",
    icon: faLayerGroup,
  },
  {
    link: "customers",
    name: "Customers",
    icon: faUserFriends,
  },
  {
    link: "shipment",
    name: "Shipment",
    icon: faDolly,
    hasDivider: true,
  },
  {
    link: "analytics",
    name: "Analytics",
    icon: faChartArea,
  },
  {
    link: "marketing",
    name: "Marketing",
    icon: faBullhorn,
  },
  {
    link: "online-stores",
    name: "Online Stores",
    icon: faStore,
  },
];

export default navigation;
