import { classNamesFunction, styled } from "@fluentui/utilities";
import { faExclamationTriangle, faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockVariantDetails } from "../../../mockData/mockVariantDetails";
import { VariantDetails } from "../../../models/VariantDetails";
import { StrongTypedTable } from "../../shared/Table";
import { detailsTableColumns } from "../datalisting";
import { NewListingPageLayout } from "../NewListingPageLayout";
import { getStyles } from "./OfferListing.styles";
import { IOfferListingProps, IOfferListingStyleProps, IOfferListingStyles } from "./OfferListing.types";
import { VariantDetailsRow } from "./VariantDetailsRow";

const Table = StrongTypedTable<VariantDetails>();

const getClassNames = classNamesFunction<IOfferListingStyleProps, IOfferListingStyles>();

const onRenderRow = (item: VariantDetails) => (
  <VariantDetailsRow item={item} totalColumns={detailsTableColumns.length} />
);
const getKey = (item: VariantDetails) => item.id;

const OfferListingBase = ({ styles }: IOfferListingProps) => {
  const classNames = getClassNames(styles);
  return (
    <NewListingPageLayout
      body={
        <>
          <div className="py-4 px-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-lg text-messenger font-semibold w-24">Variants</span>
                <div className="grid grid-cols-2 gap-4">
                  <FontAwesomeIcon icon={faPlusCircle} className="text-primary" />
                  <FontAwesomeIcon icon={faSearch} className="text-grey60" />
                </div>
              </div>
              <div className="text-primary text-sm">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-primary mr-4" />
                There are only 90 products available in the inventory please adjust!
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <Table
              onRenderRow={onRenderRow}
              getKey={getKey}
              columns={detailsTableColumns}
              itemsPerPage={5}
              items={mockVariantDetails}
              pageButtonNumber={5}
            />
          </div>
        </>
      }
    />
  );
};

export const OfferListing = styled<IOfferListingProps, IOfferListingStyleProps, IOfferListingStyles>(
  OfferListingBase,
  getStyles
);
