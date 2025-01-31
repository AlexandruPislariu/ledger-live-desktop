import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledFinaLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.15621 16.44H10.5242C10.8362 13.296 12.0122 10.752 14.0522 8.856V7.584H7.47621V8.64001H12.6602V8.97601C10.6442 11.088 9.49221 13.584 9.15621 16.44ZM4.11621 21.12H10.7642C15.8762 21.12 19.8842 16.968 19.8842 12C19.8842 6.888 15.8762 2.88 10.7642 2.88H4.11621V4.08H10.7642C15.2042 4.08 18.6842 7.56 18.6842 12C18.6842 16.32 15.2042 19.92 10.7642 19.92H4.11621V21.12Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledFinaLight;
