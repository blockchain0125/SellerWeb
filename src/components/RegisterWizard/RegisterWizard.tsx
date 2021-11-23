import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { Wizard, WizardStep } from "../shared/Wizard";
import { Billing } from "./Billing";
import { ContactAddress } from "./ContactAddress";
import { LoginSignup } from "./LoginSignup";
import { getStyles } from "./RegisterWizard.styles";
import { IRegisterWizardProps, IRegisterWizardStyleProps, IRegisterWizardStyles } from "./RegisterWizard.types";
import { SellerType } from "./SellerType";
import { Store } from "./Store";
import { Summary } from "./Summary";

const steps: WizardStep[] = [
  {
    name: "Login/Signup",
    content: <LoginSignup />,
  },
  {
    name: "Seller Type",
    content: <SellerType />,
  },
  {
    name: "Contact And Address Details",
    content: <ContactAddress />,
  },
  {
    name: "Billing",
    content: <Billing />,
  },
  {
    name: "Store",
    content: <Store />,
  },
  {
    name: "Summary",
    content: <Summary />,
  },
];

const mockOnFinish = () => {
  return;
};

const getClassNames = classNamesFunction<IRegisterWizardStyleProps, IRegisterWizardStyles>();

const RegisterWizardBase = ({ styles }: IRegisterWizardProps) => {
  // eslint-disable-next-line no-empty-pattern -- may be non empty in the future
  const {} = getClassNames(styles);
  return <Wizard steps={steps} vertical onFinish={mockOnFinish} />;
};

export const RegisterWizard = styled<IRegisterWizardProps, IRegisterWizardStyleProps, IRegisterWizardStyles>(
  RegisterWizardBase,
  getStyles
);
