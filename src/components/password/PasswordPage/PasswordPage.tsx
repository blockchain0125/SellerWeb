import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import { getStyles } from "./PasswordPage.styles";
import { IPasswordPageProps, IPasswordPageStyleProps, IPasswordPageStyles } from "./PasswordPage.types";
import { SuccessMessage } from "../SuccessMessage";
import { PasswordType } from "../passwordType";
import { EmailVerification } from "../EmailVerification";

const getClassNames = classNamesFunction<IPasswordPageStyleProps, IPasswordPageStyles>();

const PasswordPageBase = ({ styles }: IPasswordPageProps) => {
  const classNames = getClassNames(styles);
  const [sendCode, onSendCode] = useState<boolean>(false);

  const onGotoSendCode = useCallback(() => onSendCode(true), []);

  return (
    <div className={classNames.root}>
      {sendCode ? (
        <SuccessMessage title="Forgotten Password" messageType={PasswordType.forgotPassword} />
      ) : (
        <EmailVerification
          title="Forgotten Password"
          fieldType={PasswordType.forgotPassword}
          buttonLabel="SEND CODE"
          onClickSendCode={onGotoSendCode}
        />
      )}
    </div>
  );
};

export const PasswordPage = styled<IPasswordPageProps, IPasswordPageStyleProps, IPasswordPageStyles>(
  PasswordPageBase,
  getStyles
);
