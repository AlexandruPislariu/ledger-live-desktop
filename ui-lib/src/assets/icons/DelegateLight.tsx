import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DelegateLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40796 12.444V20.844H4.60796V12.444C4.60796 9.94801 6.47996 8.07601 8.95196 8.07601H18.552C18.024 8.58001 17.472 9.10801 16.968 9.61201L15.504 11.1L16.248 11.844L20.592 7.50001L16.248 3.15601L15.504 3.92401L16.968 5.38801C17.472 5.89201 18 6.42001 18.528 6.92401H8.95196C5.90396 6.92401 3.40796 9.42001 3.40796 12.444Z"
        fill={color}
      />
    </svg>
  );
}

export default DelegateLight;
