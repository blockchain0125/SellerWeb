import { useCallback, useRef, useState } from "react";

interface Parameters<T> {
  onChange?: (newValue: T) => void;
  value?: T;
  defaultValue?: T;
}
// Reusable logic for component that can be both controlled and uncontrolled
// When ran for the first time, if value is not undefined, it is controlled mode, value is not saved internally
// Otherwise it is uncontrolled mode, save value internally
export function useAutoControlled<T>({
  onChange,
  value,
  defaultValue,
}: Parameters<T>): [T | undefined, (newValue: T) => void] {
  const controlled = useRef(value !== undefined).current;
  const [internalValue, setInternalValue] = useState<T | undefined>(value ?? defaultValue);
  const internalOnChange = useCallback(
    (newValue: T) => {
      if (controlled) {
        onChange && onChange(newValue);
      } else {
        setInternalValue(newValue);
      }
    },
    [controlled, onChange]
  );
  return [controlled ? value : internalValue, internalOnChange];
}
