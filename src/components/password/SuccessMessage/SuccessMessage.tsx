import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./SuccessMessage.styles";
import { ISuccessMessageProps, ISuccessMessageStyleProps, ISuccessMessageStyles } from "./SuccessMessage.types";
import { PasswordType } from "../passwordType";

const getClassNames = classNamesFunction<ISuccessMessageStyleProps, ISuccessMessageStyles>();

const guides = [
  { rule: "Click on the link inside your email to create a new password" },
  { rule: "The email might take a few minutes to arrive" },
  { rule: "Check your junk mail/spam if it does not arrive in your inbox" },
];

const SuccessMessageBase = ({ styles, messageType, title }: ISuccessMessageProps) => {
  const classNames = getClassNames(styles, { messageType });

  return (
    <div className={classNames.root}>
      <div className="text-2xl font-semibold pt-3">{title}</div>

      {messageType === PasswordType.forgotPassword && (
        <>
          <p className="mt-10 mb-3">We have sent an email with a verification code to the email address provided.</p>

          <ul className="list-disc list-inside">
            {guides.map((list, index) => (
              <li key={index}>{list.rule}</li>
            ))}
          </ul>

          <div className="mt-7 font-semibold">Please check your email account for this email</div>
        </>
      )}

      {messageType === PasswordType.verifyAccount && (
        <>
          <p className="mt-10">
            Your password has been changed successfully! Please remember to keep your password secure and private.
          </p>
          <div className="mt-7 font-semibold">
            <span className="text-twitter">Click here</span> if you are not automatically redirected to your account
            screen within 10 seconds.
          </div>
        </>
      )}
    </div>
  );
};

export const SuccessMessage = styled<ISuccessMessageProps, ISuccessMessageStyleProps, ISuccessMessageStyles>(
  SuccessMessageBase,
  getStyles
);
