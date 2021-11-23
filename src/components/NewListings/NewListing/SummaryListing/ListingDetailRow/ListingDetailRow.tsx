import { classNamesFunction, styled } from "@fluentui/utilities";
import { getStyles } from "./ListingDetailRow.styles";
import { IListingDetailRowProps, IListingDetailRowStyleProps, IListingDetailRowStyles } from "./ListingDetailRow.types";

const getClassNames = classNamesFunction<IListingDetailRowStyleProps, IListingDetailRowStyles>();

const ListingDetailRowBase = ({ styles, name, content, categoryList, body }: IListingDetailRowProps) => {
  const classNames = getClassNames(styles, { categoryList });
  return (
    <div className={classNames.root}>
      <div className={classNames.body}>
        <p className="w-36">{name}</p>
        <p>
          :{" "}
          <span className={classNames.category}>
            {content} {body}
          </span>
        </p>
      </div>
    </div>
  );
};

export const ListingDetailRow = styled<IListingDetailRowProps, IListingDetailRowStyleProps, IListingDetailRowStyles>(
  ListingDetailRowBase,
  getStyles
);
