import { classNamesFunction, styled } from "@fluentui/utilities";
import { Input } from "../../shared/Input";
import { CustomButton } from "../../shared/CustomButton";
import { getStyles } from "./EmailVerification.styles";
import {
  IEmailVerificationProps,
  IEmailVerificationStyleProps,
  IEmailVerificationStyles,
} from "./EmailVerification.types";
import { PasswordType } from "../passwordType";

const getClassNames = classNamesFunction<IEmailVerificationStyleProps, IEmailVerificationStyles>();

const EmailVerificationBase = ({ styles, fieldType, title, buttonLabel, onClickSendCode }: IEmailVerificationProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className="text-grey80 text-2xl font-semibold pt-3">{title}</div>

      {fieldType === PasswordType.forgotPassword && (
        <>
          <p className="mt-10 mb-8 text-grey80">
            Please enter your email address so that we can send you a verification code. This will help you to create a
            new password.
          </p>

          <Input
            styles={classNames.subComponentStyles.input}
            materialStyleLabel={false}
            label="Email Address"
            rounded={false}
            type="email"
          />
        </>
      )}

      {fieldType === PasswordType.verifyAccount && (
        <>
          <p className="mt-10 mb-7 text-grey80">Enter the verification code below in order to set a new password.</p>
          <Input
            styles={classNames.subComponentStyles.input}
            materialStyleLabel={false}
            label="Verification Code"
            rounded={false}
            type="text"
          />
        </>
      )}

      <div className="mx-auto mt-8 w-44">
        <CustomButton
          styles={classNames.subComponentStyles.customButton}
          fullSize
          rounded={true}
          primary={true}
          disabled={false}
          label={buttonLabel}
          onClick={onClickSendCode}
        />
      </div>
    </div>
  );
};

export const EmailVerification = styled<
  IEmailVerificationProps,
  IEmailVerificationStyleProps,
  IEmailVerificationStyles
>(EmailVerificationBase, getStyles);
