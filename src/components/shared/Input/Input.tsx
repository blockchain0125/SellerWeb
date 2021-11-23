import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import Field, { FieldStatus } from "../Field";
import { ViewFilledIcon } from "../Icons";
import { emptyFunction } from "../utilities";
import { getStyles } from "./Input.styles";
import { IInputProps, IInputStyleProps, IInputStyles } from "./Input.types";

const getClassNames = classNamesFunction<IInputStyleProps, IInputStyles>();

const InputBase = ({
  styles,
  value,
  placeholder,
  status = FieldStatus.Default,
  onChange = emptyFunction,
  onKeyUp,
  onFocus,
  disabled,
  message,
  type = "text",
  inputRef,
  label,
  customData,
  leftIcon,
  materialStyleLabel,
  rightIcon,
  register,
  className,
  rounded,
}: IInputProps) => {
  // if register is not undefined, input is uncontrolled. react-hook-form will take care of it
  const controlled = !register;
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  useEffect(() => setInputValue(value), [value]);

  const toggleShowPassword = useCallback(() => setShowPassword((currentValue) => !currentValue), []);

  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (onChange) {
        onChange(newValue, customData);
      }
      setInputValue(newValue);
    },
    [customData, onChange]
  );
  const onKeyUpCallback = useCallback(
    (event: React.KeyboardEvent) => {
      if (onKeyUp) {
        onKeyUp(event, customData);
      }
    },
    [customData, onKeyUp]
  );
  const onFocusCallback = useCallback(
    (event: React.FocusEvent) => {
      if (onFocus) {
        onFocus(event, customData);
      }
      setFocused(true);
    },
    [customData, onFocus]
  );
  const onBlurCallback = useCallback(() => {
    setFocused(false);
  }, []);
  const icon = useMemo(() => {
    if (rightIcon) {
      return rightIcon;
    } else if (type === "password") {
      return <ViewFilledIcon width={14.4} height={9.6} className="fill-current" onClick={toggleShowPassword} />;
    }
    return null;
  }, [rightIcon, toggleShowPassword, type]);
  const inputType = useMemo<IInputProps["type"]>(() => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  }, [showPassword, type]);
  const showPlaceholder = useMemo(() => {
    if (!label) {
      return true;
    } else if (focused) {
      return true;
    }
    return false;
  }, [focused, label]);
  const isLabelActive = !!(label && (inputValue || focused));
  const classNames = getClassNames(styles, {
    status,
    isLabelActive,
    hasLeftIcon: !!leftIcon,
    fieldClassName: className,
    rounded,
  });
  return (
    <Field
      status={status}
      message={message}
      leftIcon={leftIcon}
      rightIcon={icon}
      label={label}
      isLabelActive={isLabelActive}
      styles={classNames.subComponentStyles.field}
      materialStyleLabel={materialStyleLabel}
    >
      <input
        type={inputType}
        className={classNames.input}
        placeholder={showPlaceholder ? placeholder : ""}
        onChange={onChangeCallback}
        onKeyUp={onKeyUpCallback}
        onFocus={onFocusCallback}
        onBlur={onBlurCallback}
        disabled={disabled}
        value={controlled ? inputValue || "" : undefined}
        ref={inputRef}
        {...register}
      />
    </Field>
  );
};

export const Input = styled<IInputProps, IInputStyleProps, IInputStyles>(InputBase, getStyles);
// for backward compatibility
export { Input as default };
