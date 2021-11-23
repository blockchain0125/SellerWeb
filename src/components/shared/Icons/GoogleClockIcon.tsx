import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function GoogleClockIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 10 10"} width={10} height={10} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99442 0.199219C2.34482 0.199219 0.199219 2.34962 0.199219 4.99922C0.199219 7.64882 2.34482 9.79922 4.99442 9.79922C7.64882 9.79922 9.79922 7.64882 9.79922 4.99922C9.79922 2.34962 7.64882 0.199219 4.99442 0.199219ZM4.99898 8.83928C2.87738 8.83928 1.15898 7.12088 1.15898 4.99928C1.15898 2.87768 2.87738 1.15928 4.99898 1.15928C7.12058 1.15928 8.83898 2.87768 8.83898 4.99928C8.83898 7.12088 7.12058 8.83928 4.99898 8.83928ZM4.51934 2.59922H5.23934V5.11922L7.39934 6.40082L7.03934 6.99122L4.51934 5.47922V2.59922Z"
      />
    </IconWrapper>
  );
}
