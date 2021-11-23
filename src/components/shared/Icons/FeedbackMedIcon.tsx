import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function FeedbackMedIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 24"} width={24} height={24} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C5.38333 24 0 18.6169 0 12C0 5.38307 5.38333 0 12 0C18.6167 0 24 5.38307 24 12C24 18.6169 18.6167 24 12 24Z"
        fill="#FFAC00"
      />
      <path
        d="M17.4 15.6H6.6C6.26863 15.6 6 15.8686 6 16.2C6 16.5313 6.26863 16.8 6.6 16.8H17.4C17.7314 16.8 18 16.5313 18 16.2C18 15.8686 17.7314 15.6 17.4 15.6Z"
        fill="black"
      />
      <path
        d="M7.8 9.6C8.79411 9.6 9.6 8.79411 9.6 7.8C9.6 6.80589 8.79411 6 7.8 6C6.80589 6 6 6.80589 6 7.8C6 8.79411 6.80589 9.6 7.8 9.6Z"
        fill="black"
      />
      <path
        d="M16.1999 9.6C17.194 9.6 17.9999 8.79411 17.9999 7.8C17.9999 6.80589 17.194 6 16.1999 6C15.2058 6 14.3999 6.80589 14.3999 7.8C14.3999 8.79411 15.2058 9.6 16.1999 9.6Z"
        fill="black"
      />
    </IconWrapper>
  );
}
