import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useEffect, useState } from "react";
import { IRadioButtonProps, RadioButton } from "../RadioButton";
import { getStyles } from "./RadioButtonGroup.styles";
import { IRadioButtonGroupProps, IRadioButtonGroupStyleProps, IRadioButtonGroupStyles } from "./RadioButtonGroup.types";

const getClassNames = classNamesFunction<IRadioButtonGroupStyleProps, IRadioButtonGroupStyles>();

const RadioButtonGroupBase = ({ styles, name, value, options, onChange }: IRadioButtonGroupProps) => {
  const [internalValue, setInternalValue] = useState<IRadioButtonProps["value"] | undefined>(value);
  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  const classNames = getClassNames(styles);
  const onClickRadioButton = useCallback(
    (newValue: IRadioButtonProps["value"]) => {
      setInternalValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange]
  );

  return (
    <div className={classNames.root}>
      {options.map((option) => (
        <RadioButton
          checked={option.value === internalValue}
          name={name}
          value={option.value}
          key={option.value}
          id={`${name}-${option.value}`}
          label={option.label}
          onChange={onClickRadioButton}
        />
      ))}
    </div>
  );
};

export const RadioButtonGroup = styled<IRadioButtonGroupProps, IRadioButtonGroupStyleProps, IRadioButtonGroupStyles>(
  RadioButtonGroupBase,
  getStyles
);
