import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LockUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.81201 21.276H19.188V9.684H17.124V7.836C17.124 5.028 14.796 2.724 11.988 2.724C9.18001 2.724 6.87601 5.028 6.87601 7.836V9.684H4.81201V21.276ZM5.65201 20.46V10.5H18.348V20.46H5.65201ZM7.71601 9.684V7.836C7.71601 5.484 9.63601 3.54 11.988 3.54C14.34 3.54 16.284 5.484 16.284 7.836V9.684H7.71601Z"
        fill={color}
      />
    </svg>
  );
}

export default LockUltraLight;
