import { classNamesFunction, styled } from "@fluentui/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { getStyles } from "./ListItem.styles";
import { IListItemProps, IListItemStyleProps, IListItemStyles } from "./ListItem.types";

const getClassNames = classNamesFunction<IListItemStyleProps, IListItemStyles>();

const ListItemBase = ({ styles, children }: IListItemProps) => {
  const classNames = getClassNames(styles);
  return (
    <li className={classNames.root}>
      <FontAwesomeIcon className={classNames.listItemIcon} icon={faCircle} />
      <span className={classNames.listItemContent}>{children}</span>
    </li>
  );
};

export const ListItem = styled<IListItemProps, IListItemStyleProps, IListItemStyles>(ListItemBase, getStyles);
