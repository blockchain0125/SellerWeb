import { classNamesFunction, styled } from "@fluentui/utilities";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { StrongTypedTag } from "../Tag";
import { getStyles } from "./Select.styles";
import { ISelectOption, ISelectProps, ISelectStyleProps, ISelectStyles } from "./Select.types";
import { SelectOption } from "./SelectOption";

const getClassNames = classNamesFunction<ISelectStyleProps, ISelectStyles>();

const Tag = StrongTypedTag<ISelectOption>();

const SelectBase = (props: ISelectProps) => {
  const {
    styles,
    options,
    multiSelect,
    selectedOptions,
    onSelectedOptionsChange,
    selectedOption,
    onSelectedOptionChange,
    placeHolder = "Select...",
  } = props;
  const classNames = getClassNames(styles);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { styles: popperStyles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
    placement: "bottom",
  });
  const [selectedValue, setSelectedValue] = useState<ISelectOption[]>(
    multiSelect ? selectedOptions || [] : selectedOption ? [selectedOption] : []
  );

  const toggleOptions = useCallback(() => {
    setShowOptions((prevState) => !prevState);
  }, []);
  const onSelectOption = useCallback(
    (option: ISelectOption) => {
      if (multiSelect) {
        setSelectedValue((prevState: ISelectOption[]) => [...prevState, option]);
      } else {
        setSelectedValue([option]);
      }
      setShowOptions(false);
    },
    [multiSelect]
  );
  useEffect(() => {
    if (showOptions && update) {
      update();
    }
  }, [showOptions, update]);

  useEffect(() => {
    if (multiSelect) {
      onSelectedOptionsChange && onSelectedOptionsChange(selectedValue);
    } else {
      onSelectedOptionChange && onSelectedOptionChange(selectedValue[0]);
    }
  }, [multiSelect, onSelectedOptionChange, onSelectedOptionsChange, selectedValue]);
  useEffect(() => {
    if (multiSelect) {
      if (selectedOptions) {
        setSelectedValue(selectedOptions);
      }
    } else {
      if (selectedOption) {
        setSelectedValue((prevState) => (prevState[0] === selectedOption ? prevState : [selectedOption]));
      }
    }
  }, [multiSelect, selectedOption, selectedOptions]);
  const hasValue = multiSelect ? selectedValue.length > 0 : selectedValue[0];
  const onUnselectOption = useCallback((option) => {
    setSelectedValue((prevState: ISelectOption[]) => prevState.filter((i) => i !== option));
  }, []);
  const displayedOptions = useMemo(() => {
    if (multiSelect) {
      if (selectedValue.length === 0) {
        return options;
      } else {
        const excludedValues = new Set(selectedValue.map((i) => i.value));
        return options.filter((o) => !excludedValues.has(o.value));
      }
    } else {
      return options;
    }
  }, [multiSelect, options, selectedValue]);

  return (
    <div className={classNames.root} ref={referenceElement}>
      <div onClick={toggleOptions} className="w-full h-full flex items-center justify-between">
        <div>
          {hasValue ? (
            multiSelect ? (
              <div>
                {selectedValue.map((option: ISelectOption) => (
                  <Tag
                    key={option.value}
                    label={option.display}
                    customData={option}
                    onRemove={onUnselectOption}
                    styles={classNames.subComponentStyles.tag}
                  />
                ))}
              </div>
            ) : (
              selectedValue[0].display
            )
          ) : (
            placeHolder
          )}
        </div>
        <div className="ml-auto">
          <FontAwesomeIcon icon={faCaretDown} className="text-grey60 ml-2" />
        </div>
      </div>
      <div
        ref={popperElement}
        style={popperStyles.popper}
        {...attributes.popper}
        className={classnames(classNames.optionsContainer, !showOptions && "hidden")}
      >
        {displayedOptions.map((option) => (
          <SelectOption key={option.value} option={option} onSelect={onSelectOption} />
        ))}
      </div>
    </div>
  );
};

export const Select = styled<ISelectProps, ISelectStyleProps, ISelectStyles>(SelectBase, getStyles);
