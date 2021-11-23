import { classNamesFunction, styled } from "@fluentui/utilities";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SearchMedIcon } from "../Icons";
import { Input } from "../Input";
import { getStyles } from "./SellerHeader.styles";
import { ISellerHeaderProps, ISellerHeaderStyleProps, ISellerHeaderStyles } from "./SellerHeader.types";

const getClassNames = classNamesFunction<ISellerHeaderStyleProps, ISellerHeaderStyles>();

const SellerHeaderBase = ({ styles }: ISellerHeaderProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div>
        <img src="/images/company_name.svg" />
      </div>
      <div className="w-78 ml-32">
        <Input
          leftIcon={<SearchMedIcon width={14.4} height={14.4} className="text-grey40" />}
          placeholder="Search"
          styles={classNames.subComponentStyles.searchInput}
        />
      </div>
      <div className="ml-auto inline-flex space-x-4 items-center">
        <FontAwesomeIcon icon={faPlusCircle} className="text-primary" />
        <FontAwesomeIcon icon={faBell} className="text-grey80" />
        <img src="/images/avatar.png" className="w-8 h-8 rounded-1/2" />
      </div>
    </div>
  );
};

export const SellerHeader = styled<ISellerHeaderProps, ISellerHeaderStyleProps, ISellerHeaderStyles>(
  SellerHeaderBase,
  getStyles
);
