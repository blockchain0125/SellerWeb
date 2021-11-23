import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

const AddIcon: React.FC<IconProps> = ({ ...wrapperProps }: IconProps) => (
  <IconWrapper viewBox={"0 0 40 40"} width={40} height={40} {...wrapperProps}>
    <path
      d="M20 8C21.1046 8 22 8.89543 22 10V18H30C31.1046 18 32 18.8954 32 20C32 21.1046 31.1046 22 30 22H22V30C22 31.1046 21.1046 32 20 32C18.8954 32 18 31.1046 18 30V21.999L10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18L18 17.999V10C18 8.89543 18.8954 8 20 8Z"
      // fill={fill}
    />
  </IconWrapper>
);

export default AddIcon;
