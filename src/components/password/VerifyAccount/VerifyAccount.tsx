import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import { getStyles } from "./VerifyAccount.styles";
import { IVerifyAccountProps, IVerifyAccountStyleProps, IVerifyAccountStyles } from "./VerifyAccount.types";
import { PasswordType } from "../passwordType";
import { CreateNewPassword } from "../CreateNewPassword";
import { EmailVerification } from "../EmailVerification";

const getClassNames = classNamesFunction<IVerifyAccountStyleProps, IVerifyAccountStyles>();

const VerifyAccountBase = ({ styles }: IVerifyAccountProps) => {
  const classNames = getClassNames(styles);
  const [verifyAccount, setVerifyAccount] = useState<boolean>(false);

  const onVerifyAccount = useCallback(() => setVerifyAccount(true), []);

  return (
    <div className={classNames.root}>
      {verifyAccount ? (
        <CreateNewPassword />
      ) : (
        <EmailVerification
          title="Enter Verification Code"
          fieldType={PasswordType.verifyAccount}
          buttonLabel="VERIFY ACCOUNT"
          onClickSendCode={onVerifyAccount}
        />
      )}
    </div>
  );
};

export const VerifyAccount = styled<IVerifyAccountProps, IVerifyAccountStyleProps, IVerifyAccountStyles>(
  VerifyAccountBase,
  getStyles
);
