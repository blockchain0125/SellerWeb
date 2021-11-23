import IconProps from "./IconProps";

const ArrowDownIcon: React.FC<IconProps> = ({ fill, width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M28.5367 12.6927C29.2865 11.8168 30.5505 11.7645 31.3599 12.576C32.1267 13.3447 32.2104 14.6129 31.5795 15.489L31.4677 15.6312L21.4721 27.3073C20.7195 28.1865 19.4601 28.2288 18.6587 27.4339L18.542 27.3084L8.53315 15.6323C7.78279 14.7569 7.83023 13.389 8.63912 12.577C9.40543 11.8077 10.5802 11.8133 11.3398 12.5603L11.4624 12.6916L19.2729 21.8025C19.6481 22.2401 20.2801 22.2658 20.6845 21.8598C20.703 21.8412 20.7208 21.8219 20.7379 21.802L28.5367 12.6927Z"
      fill={fill}
    />
  </svg>
);

export default ArrowDownIcon;
