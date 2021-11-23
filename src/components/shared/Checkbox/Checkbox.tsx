import { classNamesFunction, styled } from "@fluentui/utilities";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { useAutoControlled } from "../hooks/useAutoControlled";
import { getStyles } from "./Checkbox.styles";
import { ICheckboxProps, ICheckboxStyleProps, ICheckboxStyles } from "./Checkbox.types";

const getClassNames = classNamesFunction<ICheckboxStyleProps, ICheckboxStyles>();

const CheckboxBase = ({ styles, value, onChange, label }: ICheckboxProps) => {
  const classNames = getClassNames(styles);
  const [checked, onCheckedChange] = useAutoControlled<boolean>({ value, onChange });
  const onClick = useCallback(() => {
    onCheckedChange(!checked);
  }, [checked, onCheckedChange]);

  return (
    <div className={classNames.root} onClick={onClick}>
      <input type="checkbox" checked={checked} className={classNames.checkbox} />
      <FontAwesomeIcon icon={checked ? faCheckSquare : faSquare} className={classNames.checkIcon} />
      <label className={classNames.label}>{label}</label>
    </div>
  );
};

export const Checkbox = styled<ICheckboxProps, ICheckboxStyleProps, ICheckboxStyles>(CheckboxBase, getStyles);
