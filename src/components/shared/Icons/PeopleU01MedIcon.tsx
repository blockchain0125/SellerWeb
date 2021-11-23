import { ReactElement } from "react";
import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function PeopleU01MedIcon({ ...wrapperProps }: IconProps): ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 24"} width={24} height={24} {...wrapperProps}>
      <path d="M12 0C15.866 0 19 3.13401 19 7C19 9.35321 17.8388 11.4352 16.0582 12.7043C20.5978 14.3346 23.8697 18.6243 23.9962 23.695L24 24H0C0 18.7967 3.31174 14.3669 7.94239 12.7034C6.16118 11.4352 5 9.35321 5 7C5 3.13401 8.13401 0 12 0ZM12 14C7.22601 14 3.23337 17.3453 2.23839 21.8196L2.2 22H21.799L21.7659 21.8377C20.7965 17.4366 16.9288 14.1318 12.2799 14.0038L12 14ZM12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" />
    </IconWrapper>
  );
}
