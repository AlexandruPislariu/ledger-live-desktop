import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ReverseRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9998 21.2999C17.0638 21.2999 21.2398 17.124 21.2398 12.06C21.2398 6.99595 17.0638 2.81995 11.9998 2.81995C9.11977 2.81995 6.62377 4.16395 4.94377 6.34795C4.94377 5.72395 4.96777 5.09995 4.96777 4.49995V2.69995H3.59977V8.84395H9.74377V7.45195H7.94377C7.24777 7.45195 6.52777 7.47595 5.85577 7.52395C7.22377 5.60395 9.45577 4.37995 11.9998 4.37995C16.2238 4.37995 19.6798 7.85995 19.6798 12.06C19.6798 16.26 16.2238 19.74 11.9998 19.74C7.79977 19.74 4.31977 16.26 4.31977 12.06H2.75977C2.75977 17.124 6.93577 21.2999 11.9998 21.2999Z"
        fill={color}
      />
    </svg>
  );
}

export default ReverseRegular;
