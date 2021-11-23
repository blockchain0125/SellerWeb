import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function CheckMedIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 18"} width={24} height={18} {...wrapperProps}>
      <path d="M21.95 0.351683C22.419 -0.117228 23.1793 -0.117228 23.6483 0.351683C24.0812 0.784524 24.1145 1.46561 23.7482 1.93664L23.6483 2.04976L8.04773 17.6483C7.61483 18.0812 6.93366 18.1145 6.46257 17.7482L6.34944 17.6483L0.351728 11.6514C-0.117243 11.1825 -0.117243 10.4222 0.351728 9.95329C0.784624 9.52045 1.4658 9.48716 1.93689 9.85341L2.05002 9.95329L6.77398 14.6763C7.00849 14.9107 7.38865 14.9107 7.62315 14.6763L21.95 0.351683Z" />
    </IconWrapper>
  );
}
