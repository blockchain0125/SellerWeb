import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { ChangeEvent, useCallback } from "react";
import Field, { FieldStatus } from "../Field";
import { getStyles } from "./TextArea.styles";
import { ITextAreaProps, ITextAreaStyleProps, ITextAreaStyles } from "./TextArea.types";

const getClassNames = classNamesFunction<ITextAreaStyleProps, ITextAreaStyles>();

const TextAreaBase = ({
  styles,
  message,
  onChange,
  placeholder,
  value,
  status = FieldStatus.Default,
  label,
  isLabelActive,
  textareaRef,
  name,
  customData,
}: ITextAreaProps) => {
  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event.target.value, customData);
      }
    },
    [customData, onChange]
  );
  const classNames = getClassNames(styles, { status, isLabelActive });
  return (
    <Field styles={classNames.subComponentStyles.field} status={status} message={message} label={label}>
      <textarea
        value={value}
        onChange={onChangeCallback}
        placeholder={placeholder}
        ref={textareaRef}
        name={name}
        className={classNames.textArea}
      />
    </Field>
  );
};

export const TextArea = styled<ITextAreaProps, ITextAreaStyleProps, ITextAreaStyles>(TextAreaBase, getStyles);
