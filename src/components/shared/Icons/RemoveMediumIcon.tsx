import IconProps from "./IconProps";

const RemoveMediumIcon: React.FC<IconProps> = ({ fill, width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31 20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H31C31.5523 22 32 21.5523 32 21C32 20.4477 31.5523 20 31 20Z"
      fill={fill}
    />
  </svg>
);

export default RemoveMediumIcon;
