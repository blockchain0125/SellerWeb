import { classNamesFunction, styled } from "@fluentui/utilities";
import { faDownload, faEllipsisV, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAutoControlled } from "../../hooks/useAutoControlled";
import { Tab } from "./Tab";
import { getStyles } from "./TableToolbar.styles";
import { ITableToolbarProps, ITableToolbarStyleProps, ITableToolbarStyles } from "./TableToolbar.types";
import { IPopoverMenuProps, PopoverMenu } from "../../../shared/PopoverMenu";

const getClassNames = classNamesFunction<ITableToolbarStyleProps, ITableToolbarStyles>();

const popoverMenuItems = [
  {
    itemKey: "share",
    label: "Share",
  },
  {
    itemKey: "order",
    label: "Order Details",
  },
  {
    itemKey: "accept",
    label: "Accept Listing",
  },
  {
    itemKey: "reject",
    label: "Reject Listing",
  },
];

const popperOptions: IPopoverMenuProps["popperOptions"] = {
  placement: "bottom-start",
};

const TableToolbarBase = ({ styles, tabs, onTabChange, activeTabKey }: ITableToolbarProps) => {
  const classNames = getClassNames(styles);
  const [activeTab, onTabKeyChange] = useAutoControlled({ value: activeTabKey, onChange: onTabChange });
  return (
    <div className={classNames.root}>
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <Tab tab={tab} onClick={onTabKeyChange} active={tab.key === activeTab} key={tab.key} />
        ))}
      </div>
      <div className="ml-auto flex-grow-0 text-grey80 space-x-4">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faFilter} />
        <FontAwesomeIcon icon={faDownload} />
      </div>
      <div className="ml-4">
        <PopoverMenu
          referenceNode={<FontAwesomeIcon icon={faEllipsisV} />}
          items={popoverMenuItems}
          popperOptions={popperOptions}
        />
      </div>
    </div>
  );
};

export const TableToolbar = styled<ITableToolbarProps, ITableToolbarStyleProps, ITableToolbarStyles>(
  TableToolbarBase,
  getStyles
);
