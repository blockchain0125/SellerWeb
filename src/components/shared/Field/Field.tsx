import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./Field.styles";
import { IFieldProps, IFieldStyleProps, IFieldStyles } from "./Field.types";

const getClassNames = classNamesFunction<IFieldStyleProps, IFieldStyles>();

const FieldBase = ({
  styles,
  message,
  rightIcon,
  leftIcon,
  status,
  children,
  label,
  isLabelActive = false,
  materialStyleLabel = true,
}: IFieldProps) => {
  const classNames = getClassNames(styles, { status, isLabelActive, materialStyleLabel });
  return (
    <div className={classNames.root}>
      <div className="relative">
        {label && <label className={classNames.label}>{label}</label>}
        <div>
          {leftIcon && (
            <div className="absolute left-3.5 top-1/2 transform -translate-y-1/2 inline-flex items-center">
              {leftIcon}
            </div>
          )}
          {children}
        </div>
        {rightIcon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 inline-flex items-center">
            {rightIcon}
          </div>
        )}
      </div>
      {message && <p className={classNames.message}>{message}</p>}
    </div>
  );
};

export const Field = styled<IFieldProps, IFieldStyleProps, IFieldStyles>(FieldBase, getStyles);
