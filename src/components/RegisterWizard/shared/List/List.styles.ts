import tw from "twin.macro";
import { IListStyleProps, IListStyles } from "./List.types";

export function getStyles({}: IListStyleProps): IListStyles {
  return {
    root: [tw`list-none`],
  };
}
