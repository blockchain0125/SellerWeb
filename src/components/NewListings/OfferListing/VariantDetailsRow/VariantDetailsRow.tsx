import { classNamesFunction, styled } from "@fluentui/utilities";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../../../shared/Input";
import { getStyles } from "./VariantDetailsRow.styles";
import {
  IVariantDetailsRowProps,
  IVariantDetailsRowStyleProps,
  IVariantDetailsRowStyles,
} from "./VariantDetailsRow.types";

const getClassNames = classNamesFunction<IVariantDetailsRowStyleProps, IVariantDetailsRowStyles>();

/**
 * Orders general row component: for listing and return.
 * TODO: still need some more work here.
 *
 * @param {*} styles
 * @param {Object} item
 * @returns {Component}
 *
 */

const VariantDetailsRowBase = ({ styles, item }: IVariantDetailsRowProps) => {
  const classNames = getClassNames(styles);
  const { name, attributes, sku, wholesale, retailPrice, qty } = item;

  return (
    <tr>
      <td className="p-2">
        <Input value={name} styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />
      </td>
      <td className="p-2">
        <Input value={attributes} styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />
      </td>
      <td className="p-2">
        <Input value={sku} styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />
      </td>
      <td className="p-2">
        <Input value={wholesale} styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />
      </td>
      <td className="p-2">
        <Input
          value={retailPrice}
          styles={classNames.subComponentStyles.input}
          materialStyleLabel={false}
          type="text"
        />
      </td>
      <td className="p-2 flex items-center">
        <Input value={`${qty}`} styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />

        <FontAwesomeIcon icon={faTrash} className="text-grey80 ml-4" />
      </td>
    </tr>
  );
};

export const VariantDetailsRow = styled<
  IVariantDetailsRowProps,
  IVariantDetailsRowStyleProps,
  IVariantDetailsRowStyles
>(VariantDetailsRowBase, getStyles);
