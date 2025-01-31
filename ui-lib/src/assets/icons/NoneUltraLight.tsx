import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NoneUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12C3 17.04 6.96 21 12 21ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C14.136 3.84 16.056 4.608 17.496 5.904L5.928 17.472C4.632 16.032 3.84 14.136 3.84 12ZM6.528 18.072L18.096 6.504C19.392 7.944 20.16 9.864 20.16 12C20.16 16.44 16.584 20.16 12 20.16C9.864 20.16 7.968 19.368 6.528 18.072Z"
        fill={color}
      />
    </svg>
  );
}

export default NoneUltraLight;
