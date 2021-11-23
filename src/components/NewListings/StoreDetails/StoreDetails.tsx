import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faEllipsisV, faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { Input } from "../../shared/Input";
import { TagEditor } from "../../shared/TagEditor";
import { CustomButton } from "../../shared/CustomButton";
import { Checkbox } from "../../shared/Checkbox";
import { getStyles } from "./StoreDetails.styles";
import { IStoreDetailsProps, IStoreDetailsStyleProps, IStoreDetailsStyles } from "./StoreDetails.types";

const getClassNames = classNamesFunction<IStoreDetailsStyleProps, IStoreDetailsStyles>();

const StoreDetailsBase = ({ styles, storeName, locations, index }: IStoreDetailsProps) => {
  const classNames = getClassNames(styles);
  const [isEditStore, setEditStore] = useState<boolean>(false);

  const onEdit = useCallback(() => {
    setEditStore((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames.root}>
      <div className="flex justify-between">
        <Checkbox
          styles={classNames.subComponentStyles.checkbox}
          label={
            <>
              <p className="font-bold">
                {storeName} | No. {index}
              </p>
              {!isEditStore && locations}
            </>
          }
        />
        <div className="flex flex-wrap content-center gap-4">
          {!isEditStore && (
            <>
              <FontAwesomeIcon icon={faInfoCircle} className="text-grey80" />
              <FontAwesomeIcon icon={faPen} className="text-grey80 cursor-pointer" onClick={onEdit} />
              <FontAwesomeIcon icon={faAsterisk} className="text-white bg-primary rounded p-1" />
            </>
          )}
          <FontAwesomeIcon icon={faEllipsisV} className="text-grey80" />
        </div>
      </div>

      {isEditStore && (
        <>
          <Input label="Name" styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />

          <TagEditor label="Location" styles={classNames.subComponentStyles.tagEditor} />

          <div className="flex justify-end">
            <CustomButton
              rounded
              icon={<FontAwesomeIcon icon={faSave} className="text-white" />}
              styles={classNames.subComponentStyles.button}
              label="Save Selling Location Area"
              customClass="w-72 bg-primary text-white mt-4"
              onClick={onEdit}
            />
          </div>
        </>
      )}
    </div>
  );
};

export const StoreDetails = styled<IStoreDetailsProps, IStoreDetailsStyleProps, IStoreDetailsStyles>(
  StoreDetailsBase,
  getStyles
);
