import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledInitRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5841 12.216V13.296H10.8721L13.5121 9.28801H13.6321C13.6081 10.176 13.5841 11.232 13.5841 12.216ZM4.1521 12C4.1521 17.16 8.2321 21.24 13.3921 21.24H19.8481V19.68H13.3921C9.0961 19.68 5.7121 16.296 5.7121 12C5.7121 7.80001 9.0961 4.32001 13.3921 4.32001H19.8481V2.76001H13.3921C8.2081 2.76001 4.1521 6.96001 4.1521 12ZM9.4081 14.568H13.5841V16.464H15.0721V14.568H16.4641V13.296H15.0721V7.58401H13.2721L9.4081 13.416V14.568Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledInitRegular;
