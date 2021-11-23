import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./StoreNameWizard.styles";
import { IStoreNameWizardProps, IStoreNameWizardStyleProps, IStoreNameWizardStyles } from "./StoreNameWizard.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faEllipsisV, faInfoCircle, faPen } from "@fortawesome/free-solid-svg-icons";

const getClassNames = classNamesFunction<IStoreNameWizardStyleProps, IStoreNameWizardStyles>();

const StoreNameWizardBase = ({ styles, storeName, locations }: IStoreNameWizardProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div>
        <p className="font-bold">{storeName}</p>
        {locations}
      </div>
      <div className="grid grid-cols-4 gap-4 flex flex-wrap content-center">
        <FontAwesomeIcon icon={faInfoCircle} className="text-grey80" />
        <FontAwesomeIcon icon={faPen} className="text-grey80" />
        <FontAwesomeIcon icon={faAsterisk} className="text-white bg-primary rounded p-1" />
        <FontAwesomeIcon icon={faEllipsisV} className="text-grey80" />
      </div>
    </div>
  );
};

export const StoreNameWizard = styled<IStoreNameWizardProps, IStoreNameWizardStyleProps, IStoreNameWizardStyles>(
  StoreNameWizardBase,
  getStyles
);
