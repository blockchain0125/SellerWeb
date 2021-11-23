import { classNamesFunction, styled } from "@fluentui/utilities";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faEraser, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NewListingPageLayout } from "../NewListingPageLayout";
import { getStyles } from "./StoreListing.styles";
import { IStoreListingProps, IStoreListingStyleProps, IStoreListingStyles } from "./StoreListing.types";

const getClassNames = classNamesFunction<IStoreListingStyleProps, IStoreListingStyles>();

const StoreListingBase = ({ styles }: IStoreListingProps) => {
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.root}>
      <NewListingPageLayout
        body={
          <>
            <div className="py-4 px-10 flex justify-end">
              <FontAwesomeIcon icon={faVectorSquare} className="text-grey80 mx-2" />
              <FontAwesomeIcon icon={faEraser} className="text-grey80 mx-2" />
              <FontAwesomeIcon icon={faSave} className="text-grey80 mx-2" />
            </div>
            <div>
              <img src="/images/store-locations.png" className="w-full m-auto" />
            </div>
          </>
        }
      />
    </div>
  );
};

export const StoreListing = styled<IStoreListingProps, IStoreListingStyleProps, IStoreListingStyles>(
  StoreListingBase,
  getStyles
);
