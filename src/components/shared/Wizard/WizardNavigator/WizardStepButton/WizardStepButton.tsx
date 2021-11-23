import { classNamesFunction, styled } from "@fluentui/utilities";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React, { useCallback, useMemo } from "react";
import { CustomButton } from "../../../CustomButton";
import { WizardStepStatus } from "../../Wizard.types";
import { getStyles } from "./WizardStepButton.styles";
import { IWizardStepButtonProps, IWizardStepButtonStyleProps, IWizardStepButtonStyles } from "./WizardStepButton.types";

const getClassNames = classNamesFunction<IWizardStepButtonStyleProps, IWizardStepButtonStyles>();

const WizardStepButtonBase = ({ styles, step, status, vertical, index, onClick }: IWizardStepButtonProps) => {
  const {
    verticalStepIndex,
    verticalStepName,
    currentVerticalStepName,
    currentVerticalStepIndex,
    subComponentStyles: { button },
  } = getClassNames(styles, { status });
  const icon = useMemo(() => {
    switch (status) {
      case WizardStepStatus.Current:
      case WizardStepStatus.Incomplete:
        return <FontAwesomeIcon icon={faLongArrowAltRight} />;
      case WizardStepStatus.Completed:
        return <FontAwesomeIcon icon={faCheckCircle} />;
    }
    return undefined;
  }, [status]);

  const onClickStep = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

  return vertical ? (
    <div key={step.name} className="flex items-center cursor-pointer" onClick={onClickStep}>
      <div className={classnames(verticalStepIndex, status === WizardStepStatus.Current && currentVerticalStepIndex)}>
        {index + 1}
      </div>
      <div className={classnames(verticalStepName, status === WizardStepStatus.Current && currentVerticalStepName)}>
        {step.name}
      </div>
    </div>
  ) : (
    <CustomButton label={step.name} styles={button} noMargin icon={icon} onClick={onClickStep} />
  );
};

export const WizardStepButton = styled<IWizardStepButtonProps, IWizardStepButtonStyleProps, IWizardStepButtonStyles>(
  WizardStepButtonBase,
  getStyles
);
