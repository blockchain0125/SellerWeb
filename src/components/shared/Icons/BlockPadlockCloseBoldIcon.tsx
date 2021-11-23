import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function BlockPadlockCloseBoldIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 22 24"} width={22} height={24} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C7.68629 0 5 2.68629 5 6V8H2C0.895431 8 0 8.89543 0 10V22C0 23.1046 0.89543 24 2 24H20C21.1046 24 22 23.1046 22 22V10C22 8.89543 21.1046 8 20 8H17V6C17 2.68629 14.3137 0 11 0ZM14 6V8H8V6C8 4.34315 9.34315 3 11 3C12.6569 3 14 4.34315 14 6ZM4 11C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H18C18.5523 21 19 20.5523 19 20V12C19 11.4477 18.5523 11 18 11H4ZM11 14C10.1716 14 9.5 14.6716 9.5 15.5V16.5C9.5 17.3284 10.1716 18 11 18C11.8284 18 12.5 17.3284 12.5 16.5V15.5C12.5 14.6716 11.8284 14 11 14Z"
      />
    </IconWrapper>
  );
}
