import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledCheckSolidLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12ZM7.10388 11.448L7.94388 10.608L11.1839 13.848L16.7519 8.30401L17.5919 9.144L11.1839 15.552L7.10388 11.448Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledCheckSolidLight;
