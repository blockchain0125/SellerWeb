import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./SummaryListingPageLayout.styles";
import {
  ISummaryListingPageLayoutProps,
  ISummaryListingPageLayoutStyleProps,
  ISummaryListingPageLayoutStyles,
} from "./SummaryListingPageLayout.types";

const getClassNames = classNamesFunction<ISummaryListingPageLayoutStyleProps, ISummaryListingPageLayoutStyles>();

const NewListingDetailsPageLayoutBase = ({ styles, body }: ISummaryListingPageLayoutProps) => {
  const classNames = getClassNames(styles);
  return <div className={classNames.root}>{body}</div>;
};

export const SummaryListingPageLayout = styled<
  ISummaryListingPageLayoutProps,
  ISummaryListingPageLayoutStyleProps,
  ISummaryListingPageLayoutStyles
>(NewListingDetailsPageLayoutBase, getStyles);
