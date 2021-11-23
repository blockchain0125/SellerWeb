import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationLink } from "../navigation";
import { getStyles } from "./LeftSidebarLink.styles";
import { ILeftSidebarLinkProps, ILeftSidebarLinkStyleProps, ILeftSidebarLinkStyles } from "./LeftSidebarLink.types";

const getClassNames = classNamesFunction<ILeftSidebarLinkStyleProps, ILeftSidebarLinkStyles>();

const LeftSidebarLinkBase = ({ styles, navItem }: ILeftSidebarLinkProps) => {
  const classNames = getClassNames(styles);

  return (
    <>
      <NavLink to={navItem.link} className={classNames.link} activeClassName={classNames.active}>
        <div>
          <FontAwesomeIcon icon={navItem.icon} />
          <span className="not-italic font-semibold ml-5">{navItem.name}</span>
        </div>
      </NavLink>
      {navItem.hasDivider && <i className="block border-b border-grey20 mx-6 mb-3" />}
    </>
  );
};

export const LeftSidebarLink = styled<
  ILeftSidebarLinkProps,
  ILeftSidebarLinkStyleProps,
  ILeftSidebarLinkStyles,
  NavigationLink
>(LeftSidebarLinkBase, getStyles);
