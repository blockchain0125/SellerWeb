import tw from "twin.macro";
import { ITabStyleProps, ITabStyles } from "./Tab.types";

export function getStyles({ active }: ITabStyleProps): ITabStyles {
  return {
    root: [
      tw`text-grey80 font-semibold cursor-pointer relative`,
      active && [
        tw`text-primary border-b-4 border-primary`,
        {
          ":after": [
            {
              content: '""',
              width: "50px",
              height: "3px",
              borderRadius: "4px",
            },
            // tw`bg-primary absolute left-1/2 transform -translate-x-12 -bottom-1`,
          ],
        },
      ],
    ],
  };
}
