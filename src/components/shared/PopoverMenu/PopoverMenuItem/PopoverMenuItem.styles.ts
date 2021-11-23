import tw from "twin.macro";
import { IPopoverMenuItemStyleProps, IPopoverMenuItemStyles } from "./PopoverMenuItem.types";

export function getStyles({}: IPopoverMenuItemStyleProps): IPopoverMenuItemStyles {
  return {
    root: tw`px-4 py-2 text-grey80 hover:text-primary text-sm font-semibold bg-white hover:bg-background cursor-pointer`,
  };
}
