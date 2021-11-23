import { ReactElement } from "react";
import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function ClockMedIcon({ ...wrapperProps }: IconProps): ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 24"} width={24} height={24} {...wrapperProps}>
      <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 6C12.5523 6 13 6.44772 13 7V12.372L15.0301 11.2C15.5084 10.9239 16.12 11.0877 16.3962 11.566C16.6723 12.0443 16.5084 12.6559 16.0301 12.9321L12.566 14.9321C12.1502 15.1721 11.6337 15.0796 11.3244 14.7371C11.1252 14.5548 11 14.292 11 14V7C11 6.44772 11.4477 6 12 6Z" />
    </IconWrapper>
  );
}
