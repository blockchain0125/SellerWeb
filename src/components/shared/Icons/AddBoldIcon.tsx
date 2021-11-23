import { ReactElement } from "react";
import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function AddBoldIcon({ ...wrapperProps }: IconProps): ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 24"} width={24} height={24} {...wrapperProps}>
      <path d="M12 0C13.1046 0 14 0.89543 14 2V10H22C23.1046 10 24 10.8954 24 12C24 13.1046 23.1046 14 22 14H14V22C14 23.1046 13.1046 24 12 24C10.8954 24 10 23.1046 10 22V13.999L2 14C0.89543 14 0 13.1046 0 12C0 10.8954 0.89543 10 2 10L10 9.999V2C10 0.89543 10.8954 0 12 0Z" />
    </IconWrapper>
  );
}
