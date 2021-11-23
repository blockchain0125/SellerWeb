import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import { Input } from "../../shared/Input";
import { CustomButton } from "../../shared/CustomButton";
import { getStyles } from "./CreateNewPassword.styles";
import {
  ICreateNewPasswordProps,
  ICreateNewPasswordStyleProps,
  ICreateNewPasswordStyles,
} from "./CreateNewPassword.types";
import { SuccessMessage } from "../SuccessMessage";
import { PasswordType } from "../passwordType";

const getClassNames = classNamesFunction<ICreateNewPasswordStyleProps, ICreateNewPasswordStyles>();

const guides = [{ rule: "contain at least 8 characters" }, { rule: "at least 1 number" }];

const CreateNewPasswordBase = ({ styles }: ICreateNewPasswordProps) => {
  const classNames = getClassNames(styles);
  const [createPasswordSuccess, setcreatePasswordSuccess] = useState<boolean>(false);

  const onGotoSuccessMessage = useCallback(() => setcreatePasswordSuccess(true), []);

  return (
    <div className={classNames.root}>
      {createPasswordSuccess ? (
        <SuccessMessage title="Success!" messageType={PasswordType.verifyAccount} />
      ) : (
        <>
          <div className="text-grey80 text-2xl font-semibold pt-3">Create A New Password</div>

          <div className="my-8">
            <p>
              To create your new password, type it below and confirm it by typing it a second time. All passwords must.
            </p>
            <ul className="list-disc list-inside">
              {guides.map((list, index) => (
                <li key={index}>{list.rule}</li>
              ))}
            </ul>
          </div>

          <div className={classNames.fieldContainer}>
            <Input
              styles={classNames.subComponentStyles.input}
              materialStyleLabel={false}
              label="New Password"
              rounded={false}
              type="password"
            />
            <Input
              styles={classNames.subComponentStyles.input}
              materialStyleLabel={false}
              label="Confirm Password"
              rounded={false}
              type="password"
            />
          </div>

          <div className="mx-auto mt-8 w-44">
            <CustomButton
              styles={classNames.subComponentStyles.customButton}
              fullSize
              rounded={true}
              primary={true}
              disabled={false}
              label="SET PASSWORD"
              onClick={onGotoSuccessMessage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export const CreateNewPassword = styled<
  ICreateNewPasswordProps,
  ICreateNewPasswordStyleProps,
  ICreateNewPasswordStyles
>(CreateNewPasswordBase, getStyles);
