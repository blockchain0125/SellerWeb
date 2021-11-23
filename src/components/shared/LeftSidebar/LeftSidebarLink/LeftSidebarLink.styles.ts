import { ILeftSidebarLinkStyleProps, ILeftSidebarLinkStyles } from "./LeftSidebarLink.types";
import tw from "twin.macro";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: ILeftSidebarLinkStyleProps): ILeftSidebarLinkStyles {
  return {
    link: [tw`flex w-full justify-between pl-8 cursor-pointer items-center mb-6 text-grey80 hover:text-grey60`],
    active: [
      tw`text-primary`,
      {
        selectors: {
          ":before": [
            tw`absolute block bg-primary`,
            {
              left: "4px",
              content: '""',
              width: "3px",
              height: "20px",
              borderRadius: "4px",
            },
          ],
        },
      },
    ],
  };
}
