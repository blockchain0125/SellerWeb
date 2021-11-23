import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { WizardButton, WizardButtonType } from "../../WizardButton";
import { getStyles } from "./WizardFooter.styles";
import { IWizardFooterProps, IWizardFooterStyleProps, IWizardFooterStyles } from "./WizardFooter.types";

const getClassNames = classNamesFunction<IWizardFooterStyleProps, IWizardFooterStyles>();

const WizardFooterBase = ({ styles, onNext, onPrev, hasPrevStep, hasNextStep, onFinish }: IWizardFooterProps) => {
  const {
    root,
    subComponentStyles: { wizardButton },
  } = getClassNames(styles);
  return (
    <div className={root}>
      {hasPrevStep && <WizardButton buttonType={WizardButtonType.Back} styles={wizardButton} onClick={onPrev} />}
      {hasNextStep ? (
        <WizardButton buttonType={WizardButtonType.Next} styles={wizardButton} onClick={onNext} />
      ) : (
        <WizardButton buttonType={WizardButtonType.Finish} styles={wizardButton} onClick={onFinish} />
      )}
    </div>
  );
};

export const WizardFooter = styled<IWizardFooterProps, IWizardFooterStyleProps, IWizardFooterStyles>(
  WizardFooterBase,
  getStyles
);
