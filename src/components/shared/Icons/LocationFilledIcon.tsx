import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function LocationFilledIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 18 24"} width={18} height={24} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8.99759C18 4.02792 13.971 0 9 0C4.029 0 0 4.02792 0 8.99759C0 11.9376 2.3638 16.5363 7.09139 22.7938L7.41007 23.2134L7.51485 23.3397C8.20471 24.106 9.3791 24.2264 10.2133 23.5899C10.3551 23.4818 10.4817 23.3551 10.5899 23.2134C15.53 16.7415 18 12.0029 18 8.99759ZM9 9.99732C10.1046 9.99732 11 9.10213 11 7.99786C11 6.89358 10.1046 5.99839 9 5.99839C7.89543 5.99839 7 6.89358 7 7.99786C7 9.10213 7.89543 9.99732 9 9.99732Z"
      />
    </IconWrapper>
  );
}
