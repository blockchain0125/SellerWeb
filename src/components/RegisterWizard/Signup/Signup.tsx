import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./Signup.styles";
import { ISignupProps, ISignupStyleProps, ISignupStyles } from "./Signup.types";
import { CustomButton } from "../../shared/CustomButton";
import { Input } from "../../shared/Input";
import { faUser, faEnvelope, faPhoneAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getClassNames = classNamesFunction<ISignupStyleProps, ISignupStyles>();

const SignupBase = ({ styles, onClickLogin }: ISignupProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className="bg-background py-6 px-12 rounded-sm max-w-md mt-10vh mb-8">
        <h2 className="text-3xl font-semibold text-grey80 text-center mb-4">Sign Up</h2>
        <Input
          className="mb-3.5"
          leftIcon={<FontAwesomeIcon icon={faUser} className="text-grey40" />}
          placeholder="Name"
          rounded={false}
          type="text"
        />
        <Input
          className="mb-3.5"
          leftIcon={<FontAwesomeIcon icon={faEnvelope} className="text-grey40" />}
          placeholder="Email"
          rounded={false}
          type="email"
        />
        <Input
          className="mb-3.5"
          leftIcon={<FontAwesomeIcon icon={faEnvelope} className="text-grey40" />}
          placeholder="Confirm Email"
          rounded={false}
          type="email"
        />
        <Input
          className="mb-3.5"
          leftIcon={<FontAwesomeIcon icon={faPhoneAlt} className="text-grey40" />}
          placeholder="Phone Number"
          rounded={false}
          type="tel"
        />
        <Input
          className="mb-4.5"
          leftIcon={<FontAwesomeIcon icon={faLock} className="text-grey40" />}
          placeholder="Password"
          rounded={false}
          type="password"
        />
        <div className="mb-4">
          <div className="mx-auto mb-4 w-36">
            <CustomButton
              styles={classNames.subComponentStyles.customButton}
              fullSize
              rounded={true}
              primary={true}
              disabled={false}
              label="SIGN IN"
            />
          </div>
        </div>
        <p className="text-sm text-grey80 text-center mb-4">
          By registering, you declare that you have read and fully accept our{" "}
          <a className="text-primary" href="">
            General Conditions of Use and Sale
          </a>
        </p>
        <p className="text-sm text-center">
          <a className="text-primary" href="">
            Need help?
          </a>
        </p>
      </div>
      <div className="mb-auto">
        <p className="text-sm text-grey60 text-center mb-3.5">Do you already have an account?</p>
        <div className="mx-auto mb-4 w-36">
          <CustomButton
            styles={classNames.subComponentStyles.customButton}
            fullSize
            rounded={true}
            primary={false}
            disabled={false}
            label="LOGIN"
            onClick={onClickLogin}
          />
        </div>
      </div>
    </div>
  );
};

export const Signup = styled<ISignupProps, ISignupStyleProps, ISignupStyles>(SignupBase, getStyles);
