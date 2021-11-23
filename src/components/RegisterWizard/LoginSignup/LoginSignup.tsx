import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import { Login } from "../Login";
import { Signup } from "../Signup";
import { getStyles } from "./LoginSignup.styles";
import { ILoginSignupProps, ILoginSignupStyleProps, ILoginSignupStyles } from "./LoginSignup.types";

const getClassNames = classNamesFunction<ILoginSignupStyleProps, ILoginSignupStyles>();

const LoginSignupBase = ({ styles }: ILoginSignupProps) => {
  // eslint-disable-next-line no-empty-pattern -- may be non empty in the future
  const {} = getClassNames(styles);
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const onGotoLogin = useCallback(() => {
    setShowLogin(true);
  }, []);
  const onGotoSignup = useCallback(() => {
    setShowLogin(false);
  }, []);

  return showLogin ? <Login onClickSignup={onGotoSignup} /> : <Signup onClickLogin={onGotoLogin} />;
};

export const LoginSignup = styled<ILoginSignupProps, ILoginSignupStyleProps, ILoginSignupStyles>(
  LoginSignupBase,
  getStyles
);
