import { ReactElement } from "react";
import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function ArrowResetIcon({ ...wrapperProps }: IconProps): ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 21"} width={24} height={21} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.42857 10.5C3.42857 4.70167 8.03429 0 13.7143 0C19.3943 0 24 4.70167 24 10.5C24 16.2983 19.3943 21 13.7143 21C11.36 21 9.18857 20.1833 7.45143 18.83L9.07429 17.15C10.3886 18.095 11.9886 18.6667 13.7143 18.6667C18.1371 18.6667 21.7143 15.015 21.7143 10.5C21.7143 5.985 18.1371 2.33333 13.7143 2.33333C9.29143 2.33333 5.71429 5.985 5.71429 10.5H9.14286L4.57143 15.1667L0 10.5H3.42857ZM13.7144 8.16667C14.9716 8.16667 16.0001 9.21667 16.0001 10.5C16.0001 11.7833 14.9716 12.8333 13.7144 12.8333C12.4573 12.8333 11.4287 11.7833 11.4287 10.5C11.4287 9.21667 12.4573 8.16667 13.7144 8.16667Z"
      />
    </IconWrapper>
  );
}
