import tw from "twin.macro";
import { IPopoverMenuStyleProps, IPopoverMenuStyles } from "./PopoverMenu.types";

export function getStyles({}: IPopoverMenuStyleProps): IPopoverMenuStyles {
  return {
    menuContainer: [
      tw`py-5 bg-white`,
      {
        minWidth: "220px",
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: "4px",
      },
    ],
  };
}
