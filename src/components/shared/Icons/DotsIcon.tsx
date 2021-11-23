import IconProps from "./IconProps";

const DotsIcon: React.FC<IconProps> = ({ fill, width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 18C11.1046 18 12 18.8954 12 20C12 21.1046 11.1046 22 10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18ZM20 18C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18ZM30 18C31.1046 18 32 18.8954 32 20C32 21.1046 31.1046 22 30 22C28.8954 22 28 21.1046 28 20C28 18.8954 28.8954 18 30 18Z"
      fill={fill}
    />
  </svg>
);

export default DotsIcon;
