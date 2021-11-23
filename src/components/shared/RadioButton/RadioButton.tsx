import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback } from "react";
import { getStyles } from "./RadioButton.styles";
import { IRadioButtonProps, IRadioButtonStyleProps, IRadioButtonStyles } from "./RadioButton.types";

const getClassNames = classNamesFunction<IRadioButtonStyleProps, IRadioButtonStyles>();

const unCheckedMarker = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="22" height="22" rx="11" strokeWidth="2" stroke="currentColor" />
  </svg>
);
const checkedMarker = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="currentColor" />
    <circle cx="12" cy="12" r="4" fill="white" />
  </svg>
);

const RadioButtonBase = ({ styles, label, name, checked, value, id, onChange }: IRadioButtonProps) => {
  const classNames = getClassNames(styles, { checked });
  const inputId = id || value;
  const internalOnChange = useCallback(() => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange, value]);
  return (
    <div className={classNames.root}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        id={inputId}
        onChange={internalOnChange}
        className={classNames.input}
      />
      <span className={classNames.marker}>{checked ? checkedMarker : unCheckedMarker}</span>
      <label htmlFor={inputId} className={classNames.label}>
        {label}
      </label>
    </div>
  );
};

export const RadioButton = styled<IRadioButtonProps, IRadioButtonStyleProps, IRadioButtonStyles>(
  RadioButtonBase,
  getStyles
);
