import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./NewListingPageLayout.styles";
import {
  INewListingPageLayoutProps,
  INewListingPageLayoutStyleProps,
  INewListingPageLayoutStyles,
} from "./NewListingPageLayout.types";

const getClassNames = classNamesFunction<INewListingPageLayoutStyleProps, INewListingPageLayoutStyles>();

const NewListingPageLayoutBase = ({ styles, body }: INewListingPageLayoutProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className="w-full bg-white">{body}</div>
    </div>
  );
};

export const NewListingPageLayout = styled<
  INewListingPageLayoutProps,
  INewListingPageLayoutStyleProps,
  INewListingPageLayoutStyles
>(NewListingPageLayoutBase, getStyles);
