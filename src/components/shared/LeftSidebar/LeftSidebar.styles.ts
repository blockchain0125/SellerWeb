import { ILeftSidebarStyleProps, ILeftSidebarStyles } from "./LeftSidebar.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: ILeftSidebarStyleProps): ILeftSidebarStyles {
  return {
    root: [`h-full`],
  };
}
