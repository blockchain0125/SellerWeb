import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./Login.styles";
import { ILoginProps, ILoginStyleProps, ILoginStyles } from "./Login.types";
import { CustomButton } from "../../shared/CustomButton";
import { Input } from "../../shared/Input";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getClassNames = classNamesFunction<ILoginStyleProps, ILoginStyles>();

const LoginBase = ({ styles, onClickSignup }: ILoginProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className="bg-background py-6 px-12 rounded-sm max-w-md mt-10vh mb-8">
        <h2 className="text-3xl font-semibold text-grey80 text-center mb-4">Login</h2>
        <Input
          className="mb-3.5"
          leftIcon={<FontAwesomeIcon icon={faEnvelope} className="text-grey40" />}
          placeholder="Email"
          rounded={false}
          type="email"
        />
        <Input
          className="mb-2"
          leftIcon={<FontAwesomeIcon icon={faLock} className="text-grey40" />}
          placeholder="Password"
          rounded={false}
          type="password"
        />
        <p className="text-sm text-grey80 mb-3.5">
          <a className="text-primary" href="">
            Forgot password?
          </a>
        </p>
        <div className="mx-auto mb-4 w-36">
          <CustomButton
            styles={classNames.subComponentStyles.customButton}
            fullSize
            rounded={true}
            primary={true}
            disabled={false}
            label="LOGIN"
          />
        </div>
        <p className="text-sm text-grey80 text-center mb-4">
          By accessing your account, you declare that you have read and accept our{" "}
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
        <p className="text-sm text-grey60 text-center mb-3.5">Are you new on Salami Slicing?</p>
        <div className="mx-auto mb-4 w-36">
          <CustomButton
            styles={classNames.subComponentStyles.customButton}
            fullSize
            rounded={true}
            primary={false}
            disabled={false}
            label="SIGN UP"
            onClick={onClickSignup}
          />
        </div>
      </div>
    </div>
  );
};

export const Login = styled<ILoginProps, ILoginStyleProps, ILoginStyles>(LoginBase, getStyles);
