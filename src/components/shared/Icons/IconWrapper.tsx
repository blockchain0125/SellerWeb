import classnames from "classnames";
import IconProps from "./IconProps";

export interface IconWrapperProps extends IconProps {
  viewBox: string;
  children: React.ReactNode;
}

export default function IconWrapper({
  fill,
  stroke,
  viewBox,
  width = 20,
  height = 20,
  children,
  className,
  onClick,
  containerClassName,
}: IconWrapperProps): React.ReactElement {
  const svg = (
    <svg
      onClick={onClick}
      className={classnames("fill-current", className)}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
  return containerClassName ? <div className={containerClassName}>{svg}</div> : svg;
}
