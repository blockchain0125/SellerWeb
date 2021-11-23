import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function DottedLine({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 1 64"} width={2} height={64} {...wrapperProps}>
      <line x1="0.5" y1="2.18556e-08" x2="0.499997" y2="64" strokeDasharray="4 4" />
    </IconWrapper>
  );
}
