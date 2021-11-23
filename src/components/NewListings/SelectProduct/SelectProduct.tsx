import { classNamesFunction, styled } from "@fluentui/utilities";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";
import { CustomButton } from "../../shared/CustomButton/CustomButton";
import { SearchMedIcon } from "../../shared/Icons";
import { Input } from "../../shared/Input/Input";
import { Select } from "../../shared/Select";
import { TagEditor } from "../../shared/TagEditor";
import { TextArea } from "../../shared/TextArea";
import { brandTypeOptions, categoryTypeOptions, productTypeOptions, vendorTypeOptions } from "../datalisting";
import { getStyles } from "./SelectProduct.styles";
import { ISelectProductProps, ISelectProductStyleProps, ISelectProductStyles } from "./SelectProduct.types";

const getClassNames = classNamesFunction<ISelectProductStyleProps, ISelectProductStyles>();

const onChange = (): void => {
  return;
};
const SelectProductBase = ({ styles }: ISelectProductProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className="px-8 pt-6 pb-5">
      <div className="text-lg text-messenger font-semibold">Select Product</div>
      <Input styles={classNames.subComponentStyles.input} label="Listing Name" materialStyleLabel={false} type="text" />

      <div className={classNames.label}>Listing Description</div>
      <TextArea styles={classNames.subComponentStyles.textarea} />

      <div className={classNames.label}>Search Product</div>
      <Input
        rightIcon={<SearchMedIcon width={14.4} height={14.4} className="text-grey40" />}
        styles={classNames.subComponentStyles.searchInput}
      />

      <div className={classnames(classNames.label, "mt-10")}>Product Details</div>
      <TextArea styles={classNames.subComponentStyles.textarea} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className={classNames.label}>Product Type</div>
          <Select
            options={productTypeOptions}
            selectedOption={productTypeOptions[0]}
            onSelectedOptionChange={onChange}
            styles={classNames.subComponentStyles.select}
          />
        </div>

        <div>
          <div className={classNames.label}>Category</div>
          <Select
            options={categoryTypeOptions}
            selectedOption={categoryTypeOptions[0]}
            onSelectedOptionChange={onChange}
            styles={classNames.subComponentStyles.select}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className={classNames.label}>Vendor</div>
          <Select
            options={vendorTypeOptions}
            selectedOption={vendorTypeOptions[0]}
            onSelectedOptionChange={onChange}
            styles={classNames.subComponentStyles.select}
          />
        </div>

        <div>
          <div className={classNames.label}>Brand</div>
          <Select
            options={brandTypeOptions}
            selectedOption={brandTypeOptions[0]}
            onSelectedOptionChange={onChange}
            styles={classNames.subComponentStyles.select}
          />
        </div>
      </div>

      <Input styles={classNames.subComponentStyles.input} label="Address" materialStyleLabel={false} type="text" />

      <TagEditor label="Keyword" styles={classNames.subComponentStyles.tagEditor} />

      <div className="flex justify-end mt-12">
        <CustomButton
          rounded
          icon={<FontAwesomeIcon icon={faRedo} className="text-grey80" />}
          styles={classNames.subComponentStyles.button}
          label="Clear"
          customClass="w-32 border border-solid border-grey80"
        />
        <CustomButton
          rounded
          icon={<FontAwesomeIcon icon={faSave} className="text-white" />}
          styles={classNames.subComponentStyles.button}
          label="Save Product"
          customClass="w-44 bg-primary text-white"
        />
      </div>
    </div>
  );
};

export const SelectProduct = styled<ISelectProductProps, ISelectProductStyleProps, ISelectProductStyles>(
  SelectProductBase,
  getStyles
);
