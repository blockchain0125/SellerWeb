import { classNamesFunction, styled } from "@fluentui/utilities";
import { Wizard, WizardStep } from "../../shared/Wizard";
import { CustomButton } from "../../shared/CustomButton";
import { ListingOffer } from "../ListingOffer";
import { SelectProduct } from "../SelectProduct";
import { SelectStore } from "../SelectStore";
import { StoreListing } from "../StoreListing";
import { ProductListing } from "../ProductListing";
import { OfferListing } from "../OfferListing";
import { DeliveryListing } from "../DeliveryListing";
import { SummaryListing } from "./SummaryListing";
import { getStyles } from "./NewListing.styles";
import { INewListingProps, INewListingStyleProps, INewListingStyles } from "./NewListing.types";

const getClassNames = classNamesFunction<INewListingStyleProps, INewListingStyles>();

const steps: WizardStep[] = [
  {
    name: "Store",
    content: <StoreListing />,
    sideBar: <SelectStore />,
  },
  {
    name: "Product",
    content: <ProductListing />,
    sideBar: <SelectProduct />,
  },
  {
    name: "Offer",
    content: <OfferListing />,
    sideBar: <ListingOffer />,
  },
  {
    name: "Delivery",
    content: <DeliveryListing />,
  },
  {
    name: "Summary",
    content: <SummaryListing />,
  },
];

const mockOnFinish = () => {
  return;
};

const NewListingBase = ({ styles }: INewListingProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <Wizard
        steps={steps}
        onFinish={mockOnFinish}
        wizardName="New Listings"
        customButton={
          <CustomButton
            rounded
            styles={classNames.subComponentStyles.button}
            label="Save & Exit"
            customClass="w-36 bg-primary text-white"
          />
        }
      />
    </div>
  );
};

export const NewListing = styled<INewListingProps, INewListingStyleProps, INewListingStyles>(NewListingBase, getStyles);
