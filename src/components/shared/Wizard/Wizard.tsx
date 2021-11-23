import { classNamesFunction, styled } from "@fluentui/utilities";
import classnames from "classnames";
import React, { useCallback, useState } from "react";
import { WizardFooter } from "./WizardFooter";
import { getStyles } from "./Wizard.styles";
import { IWizardProps, IWizardStyleProps, IWizardStyles } from "./Wizard.types";
import { WizardNavigator } from "./WizardNavigator";

const getClassNames = classNamesFunction<IWizardStyleProps, IWizardStyles>();

const WizardBase = ({ styles, steps, wizardName, customButton, onFinish, vertical }: IWizardProps) => {
  const classNames = getClassNames(styles, { vertical });
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const gotoNextStep = useCallback(() => {
    setCurrentStepIndex((i) => i + 1);
  }, []);
  const gotoPrevStep = useCallback(() => {
    setCurrentStepIndex((i) => i - 1);
  }, []);

  const onGotoStep = useCallback((index: number) => {
    // TODO: validate previous steps
    setCurrentStepIndex(index);
  }, []);

  return (
    <div className={classNames.root}>
      <div>
        <WizardNavigator
          steps={steps}
          currentStepIndex={currentStepIndex}
          wizardName={wizardName}
          customButton={customButton}
          vertical={vertical}
          onGotoStep={onGotoStep}
        />
      </div>
      <div className="flex flex-grow overflow-y-auto">
        <div className={classNames.sidebarContainer}>
          {steps.map((step, index) => (
            <div
              key={step.name}
              className={classnames("h-full overflow-y-auto", index !== currentStepIndex && "hidden")}
            >
              {steps[index].sideBar}
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-grow">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className={classnames("flex-grow overflow-y-auto", index !== currentStepIndex && "hidden")}
            >
              {steps[index].content}
            </div>
          ))}
          <div>
            <WizardFooter
              hasNextStep={currentStepIndex < steps.length - 1}
              hasPrevStep={currentStepIndex > 0}
              onNext={gotoNextStep}
              onPrev={gotoPrevStep}
              onFinish={onFinish}
              styles={classNames.subComponentStyles.footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Wizard = styled<IWizardProps, IWizardStyleProps, IWizardStyles>(WizardBase, getStyles);
