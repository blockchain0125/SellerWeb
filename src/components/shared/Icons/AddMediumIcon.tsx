import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function AddMediumIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 24 24"} width={24} height={24} {...wrapperProps}>
      <path d="M12 0C12.5523 0 13 0.447715 13 1V11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H12.999L13 23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23L10.999 13H1C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H11V1C11 0.447715 11.4477 0 12 0Z" />
    </IconWrapper>
  );
}
