import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function FileIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 19 24"} width={19} height={24} {...wrapperProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.375 0H11.875L19 7.2V21.6C19 22.92 17.9312 24 16.625 24H2.36313C1.05687 24 0 22.92 0 21.6L0.011875 2.4C0.011875 1.08 1.06875 0 2.375 0ZM2.40031 2.40031V21.6003H16.8003V8.4003H10.8003V2.40031H2.40031Z"
      />
    </IconWrapper>
  );
}
