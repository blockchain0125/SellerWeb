import { classNamesFunction, styled } from "@fluentui/utilities";
import { ListingDetailRow } from "./ListingDetailRow";
import { SummaryListingPageLayout } from "./SummaryListingPageLayout";
import { getStyles } from "./SummaryListing.styles";
import { ISummaryListingProps, ISummaryListingStyleProps, ISummaryListingStyles } from "./SummaryListing.types";
import { ImageGallery } from "../../../shared/ImageGallery";
import { categoryListType, newProduct, productImages } from "../../datalisting";
import { AddNewProduct } from "../../../../models/AddNewProduct";
import { StoreNameWizard } from "./StoreNameWizard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const getClassNames = classNamesFunction<ISummaryListingStyleProps, ISummaryListingStyles>();

// temporary data
const addNewProduct: AddNewProduct = newProduct;

const SummaryListingBase = ({ styles }: ISummaryListingProps) => {
  const classNames = getClassNames(styles);
  const {
    title,
    discountPrice,
    price,
    discountPromo,
    category,
    sku,
    brand,
    shop,
    delivery,
    refund,
    refundPolicy,
    refundPayment,
    createdOn,
    dueDate,
    qtyAvailable,
    timeLeft,
  } = addNewProduct;

  return (
    <div className={classNames.root}>
      <div className="bg-white">
        <div className="py-12 px-6 w-4/5 m-auto">
          <SummaryListingPageLayout
            body={
              <>
                <div>
                  <p className="text-messenger text-xl font-bold">{title}</p>
                  <p className="font-bold">Listing ID# {sku}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p className="font-semibold text-primary text-2xl">${discountPrice}</p>
                  <p className="font-semibold text-grey60 text-lg mt-1">${price}</p>
                  <div className="bg-background rounded-2xl flex flex-wrap justify-center content-center h-8 w-24">
                    <p className="font-semibold text-secondary00 text-sm">{discountPromo}% OFF</p>
                  </div>
                </div>
              </>
            }
          />

          <SummaryListingPageLayout
            body={
              <>
                <div>
                  <ListingDetailRow name="Category" content={category} />
                  <ListingDetailRow name="SKU" content={sku} />
                  <ListingDetailRow name="Brand" content={brand} />
                  <ListingDetailRow name="Shop" content={shop} />
                  <ListingDetailRow name="Delivery" content={delivery} />
                  <ListingDetailRow name="Refund" content={refund} />
                </div>
                <div>
                  <ListingDetailRow
                    name="Refund Policy"
                    content={refundPolicy}
                    categoryList={categoryListType.RefundPolicy}
                    body={<span className="ml-8">30 days</span>}
                  />
                  <ListingDetailRow name="Refund Payment" content={refundPayment} />
                  <ListingDetailRow name="Created On" content={createdOn} />
                  <ListingDetailRow name="Due Date" content={dueDate} />
                  <ListingDetailRow name="QTY Available" content={`${qtyAvailable}`} />
                  <ListingDetailRow
                    name="Time Left"
                    content={`${timeLeft} Days`}
                    categoryList={categoryListType.TimeLeft}
                    body={<FontAwesomeIcon icon={faClock} className="ml-6 text-whatsapp" />}
                  />
                </div>
              </>
            }
          />
        </div>
      </div>

      <div className="py-12 px-6 w-4/5 m-auto">
        <SummaryListingPageLayout
          body={
            <>
              <div>
                <p className="font-bold text-grey80 mb-8">Shop Locations</p>
                <StoreNameWizard storeName="Store Name | No. 2" locations="India / New Delhi / Ghaziabad" />
                <StoreNameWizard storeName="Store Name | No. 2" locations="India / New Delhi / Ghaziabad" />
                <StoreNameWizard storeName="Store Name | No. 2" locations="India / New Delhi / Ghaziabad" />
                <StoreNameWizard storeName="Store Name | No. 2" locations="India / New Delhi / Ghaziabad" />
              </div>
              <div>
                <p className="font-bold text-grey80 mb-8">Shop Locations</p>
                <div className="bg-white p-4 inline-block h-96">
                  <ImageGallery images={productImages} thumbnailPosition="right" />
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export const SummaryListing = styled<ISummaryListingProps, ISummaryListingStyleProps, ISummaryListingStyles>(
  SummaryListingBase,
  getStyles
);
