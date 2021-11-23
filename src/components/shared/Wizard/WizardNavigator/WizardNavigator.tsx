import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { WizardStepStatus } from "../Wizard.types";
import { getStyles } from "./WizardNavigator.styles";
import { IWizardNavigatorProps, IWizardNavigatorStyleProps, IWizardNavigatorStyles } from "./WizardNavigator.types";
import { WizardStepButton } from "./WizardStepButton";

const getClassNames = classNamesFunction<IWizardNavigatorStyleProps, IWizardNavigatorStyles>();

function getStatus(stepIndex: number, currentStepIndex: number) {
  if (stepIndex < currentStepIndex) {
    return WizardStepStatus.Completed;
  } else if (stepIndex === currentStepIndex) {
    return WizardStepStatus.Current;
  }
  return WizardStepStatus.Incomplete;
}

const WizardNavigatorBase = ({
  styles,
  currentStepIndex,
  steps,
  wizardName,
  customButton,
  vertical,
  onGotoStep,
}: IWizardNavigatorProps) => {
  const { root, nameContainer, stepsContainer, customButtonContainer } = getClassNames(styles, { vertical });
  return (
    <div className={root}>
      <div className={nameContainer}>{wizardName}</div>
      <div className={stepsContainer}>
        {steps.map((step, index) => {
          const stepStatus = getStatus(index, currentStepIndex);
          return (
            <WizardStepButton
              key={step.name}
              step={step}
              status={stepStatus}
              index={index}
              vertical={vertical}
              onClick={onGotoStep}
            />
          );
        })}
      </div>
      <div className={customButtonContainer}>{customButton}</div>
    </div>
  );
};

export const WizardNavigator = styled<IWizardNavigatorProps, IWizardNavigatorStyleProps, IWizardNavigatorStyles>(
  WizardNavigatorBase,
  getStyles
);
