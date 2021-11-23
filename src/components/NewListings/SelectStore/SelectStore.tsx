import { classNamesFunction, styled } from "@fluentui/utilities";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Checkbox } from "../../shared/Checkbox";
import { CustomButton } from "../../shared/CustomButton/CustomButton";
import { SearchMedIcon } from "../../shared/Icons";
import { Input } from "../../shared/Input/Input";
import { ShadowOverlayer } from "../../shared/ShadowOverlayer/ShadowOverlayer";
import { store } from "../datalisting";
import { StoreDetails } from "../StoreDetails";
import { getStyles } from "./SelectStore.styles";
import { ISelectStoreProps, ISelectStoreStyleProps, ISelectStoreStyles } from "./SelectStore.types";

const getClassNames = classNamesFunction<ISelectStoreStyleProps, ISelectStoreStyles>();

const SelectStoreBase = ({ styles }: ISelectStoreProps) => {
  const classNames = getClassNames(styles);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onShowModal = useCallback(() => {
    setShowModal((prevState) => !prevState);
  }, []);
  return (
    <div className="px-10 pt-3 pb-5">
      <div className="flex justify-between items-center">
        <div className="text-lg text-messenger font-semibold">Select Store</div>
        <div className="text-sm text-primary font-semibold cursor-pointer" onClick={onShowModal}>
          <FontAwesomeIcon icon={faPlusCircle} className="text-primary mr-2" />
          New Store
        </div>

        {showModal && (
          <ShadowOverlayer onDismiss={onShowModal}>
            <div className="bg-white p-8 w-2/6">
              <div className="text-lg text-primary font-semibold mb-2">Selling Location Name</div>
              <Input label="Name" styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />

              <div className="flex justify-end">
                <CustomButton
                  rounded
                  icon={<FontAwesomeIcon icon={faSave} className="text-white" />}
                  styles={classNames.subComponentStyles.button}
                  label="Save Selling Location Area"
                  customClass="w-72 bg-primary text-white mt-4"
                  onClick={onShowModal}
                />
              </div>
            </div>
          </ShadowOverlayer>
        )}
      </div>
      <div className="text-sm text-grey80 mt-4">Online Stores Location</div>
      <Input
        rightIcon={<SearchMedIcon width={14.4} height={14.4} className="text-grey40" />}
        placeholder="Search"
        styles={classNames.subComponentStyles.searchInput}
      />

      <Checkbox
        styles={classNames.subComponentStyles.checkbox}
        label={<div className="text-sm text-grey80 font-semibold my-4">No. of Stores ({store.length})</div>}
      />

      <div>
        {store.map((data, index) => (
          <StoreDetails key={index} storeName={data.storeName} locations={data.locations} index={index + 1} />
        ))}
      </div>

      <div className="flex justify-end">
        <CustomButton
          rounded
          icon={<FontAwesomeIcon icon={faRedo} className="text-grey80" />}
          styles={classNames.subComponentStyles.button}
          label="Clear"
          customClass="border border-solid border-grey80"
        />
        <CustomButton
          rounded
          icon={<FontAwesomeIcon icon={faSave} className="text-white" />}
          styles={classNames.subComponentStyles.button}
          label="Save Selling Location Area"
          customClass="w-72 bg-primary text-white"
        />
      </div>
    </div>
  );
};

export const SelectStore = styled<ISelectStoreProps, ISelectStoreStyleProps, ISelectStoreStyles>(
  SelectStoreBase,
  getStyles
);
