import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function ViewFilledIcon(props: IconProps): React.ReactElement {
  const { fill = "#292929" } = props;
  return (
    <IconWrapper viewBox="0 0 24 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.00011774C17.9768 -0.0307079 24 5.9998 24 8.07511C24 10.1504 17.9768 15.9695 12 16.0005C6.0232 16.0312 0 10.4152 0 8.19889C0 5.98259 6.0232 0.0309433 12 0.00011774ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
        fill={fill}
      />
    </IconWrapper>
  );
}
