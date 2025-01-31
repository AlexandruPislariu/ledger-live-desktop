import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DropdownMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 15.54L17.7121 9.80396L16.3681 8.45996L12.0001 12.804L7.63209 8.45996L6.28809 9.80396L12.0001 15.54Z"
        fill={color}
      />
    </svg>
  );
}

export default DropdownMedium;
