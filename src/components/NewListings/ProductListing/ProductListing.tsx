import { classNamesFunction, styled } from "@fluentui/utilities";
import { ImageGallery } from "../../shared/ImageGallery";
import { productImages } from "../datalisting";
import { NewListingPageLayout } from "../NewListingPageLayout";
import { getStyles } from "./ProductListing.styles";
import { IProductListingProps, IProductListingStyleProps, IProductListingStyles } from "./ProductListing.types";

const getClassNames = classNamesFunction<IProductListingStyleProps, IProductListingStyles>();

const ProductListingBase = ({ styles }: IProductListingProps) => {
  const classNames = getClassNames(styles);
  return (
    <NewListingPageLayout
      body={
        <div className="py-4 px-10 flex items-center justify-center">
          <div className="inline-block">
            <div className="text-lg text-messenger font-semibold mb-4">E-Blue Auroza-Gaming Mouse</div>
            <ImageGallery images={productImages} thumbnailPosition="bottom" />
          </div>
        </div>
      }
    />
  );
};

export const ProductListing = styled<IProductListingProps, IProductListingStyleProps, IProductListingStyles>(
  ProductListingBase,
  getStyles
);
