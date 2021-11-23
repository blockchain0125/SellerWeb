import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./LeftSidebar.styles";
import navigation, { NavigationLink } from "./navigation";
import { ILeftSidebarProps, ILeftSidebarStyleProps, ILeftSidebarStyles } from "./LeftSidebar.types";
import { LeftSidebarLink } from "./LeftSidebarLink";
const getClassNames = classNamesFunction<ILeftSidebarStyleProps, ILeftSidebarStyles>();
import { faCog } from "@fortawesome/free-solid-svg-icons";

const settingLink: NavigationLink = {
  link: "settings",
  name: "Settings",
  icon: faCog,
};

const LeftSidebarBase = ({ styles }: ILeftSidebarProps) => {
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.root}>
      <div className="flex flex-no-wrap h-full">
        <div className="w-64 absolute relative bg-gray-800 shadow h-full flex-col justify-between flex">
          <div className="flex justify-between flex-col h-full pb-8">
            <div className="mt-11">
              {navigation.map((navItem) => (
                <LeftSidebarLink key={navItem.name} navItem={navItem} />
              ))}
            </div>
            <LeftSidebarLink navItem={settingLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LeftSidebar = styled<ILeftSidebarProps, ILeftSidebarStyleProps, ILeftSidebarStyles>(
  LeftSidebarBase,
  getStyles
);
