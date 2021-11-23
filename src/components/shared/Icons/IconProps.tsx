export default interface IconProps {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  containerClassName?: string;
}
