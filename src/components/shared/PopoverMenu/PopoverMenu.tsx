import { classNamesFunction, styled } from "@fluentui/utilities";
import classnames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { getStyles } from "./PopoverMenu.styles";
import { IPopoverMenuProps, IPopoverMenuStyleProps, IPopoverMenuStyles } from "./PopoverMenu.types";
import { PopoverMenuItem } from "./PopoverMenuItem";

const getClassNames = classNamesFunction<IPopoverMenuStyleProps, IPopoverMenuStyles>();

const PopoverMenuBase = ({ styles, referenceNode, items, popperOptions }: IPopoverMenuProps) => {
  const classNames = getClassNames(styles);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const { styles: popperStyles, attributes, update } = usePopper(
    referenceElement.current,
    popperElement.current,
    popperOptions
  );
  const onMouseEnter = useCallback(() => {
    setShowMenu(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setShowMenu(false);
  }, []);
  useEffect(() => {
    if (update && showMenu) {
      update();
    }
  }, [update, showMenu]);

  return (
    <div className={classNames.root} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span ref={referenceElement}>{referenceNode}</span>
      <div ref={popperElement} style={popperStyles.popper} {...attributes.popper}>
        <div className={classnames(classNames.menuContainer, !showMenu && "hidden")}>
          {items.map((item) => (
            <PopoverMenuItem key={item.itemKey} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PopoverMenu = styled<IPopoverMenuProps, IPopoverMenuStyleProps, IPopoverMenuStyles>(
  PopoverMenuBase,
  getStyles
);
