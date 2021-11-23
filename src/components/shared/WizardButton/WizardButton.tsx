import { classNamesFunction, styled } from "@fluentui/utilities";
import { faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CustomButton } from "../CustomButton";
import { getStyles } from "./WizardButton.styles";
import {
  IWizardButtonProps,
  IWizardButtonStyleProps,
  IWizardButtonStyles,
  WizardButtonType,
} from "./WizardButton.types";

const getClassNames = classNamesFunction<IWizardButtonStyleProps, IWizardButtonStyles>();

const labels = new Map([
  [WizardButtonType.Next, "Next"],
  [WizardButtonType.Back, "Back"],
  [WizardButtonType.Finish, "Finish"],
]);

const icons = new Map([
  [WizardButtonType.Back, faLongArrowAltLeft],
  [WizardButtonType.Next, faLongArrowAltRight],
]);

const WizardButtonBase = ({ styles, buttonType, ...restProps }: IWizardButtonProps) => {
  const classNames = getClassNames(styles, { buttonType });
  const icon = icons.get(buttonType);
  return (
    <CustomButton
      rounded
      label={labels.get(buttonType)}
      iconLeft={buttonType === WizardButtonType.Back}
      icon={icon && <FontAwesomeIcon icon={icon} className="text-grey80" />}
      styles={classNames.subComponentStyles.button}
      {...restProps}
    />
  );
};

export const WizardButton = styled<IWizardButtonProps, IWizardButtonStyleProps, IWizardButtonStyles>(
  WizardButtonBase,
  getStyles
);
