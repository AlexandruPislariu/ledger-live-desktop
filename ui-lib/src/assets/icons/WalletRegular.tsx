import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function WalletRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.67977 20.28H21.2398V7.19997H6.35977V8.66397H19.7758V18.816H4.67977C4.36777 18.816 4.22377 18.672 4.22377 18.36V5.63997C4.22377 5.32797 4.36777 5.18397 4.67977 5.18397H19.2958C19.1758 4.31997 18.4318 3.71997 17.5198 3.71997H4.67977C3.57577 3.71997 2.75977 4.53597 2.75977 5.63997V18.36C2.75977 19.464 3.57577 20.28 4.67977 20.28ZM15.1678 13.848C15.1678 14.472 15.6718 15.024 16.3198 15.024C16.9678 15.024 17.4718 14.472 17.4718 13.848C17.4718 13.224 16.9678 12.72 16.3198 12.72C15.6718 12.72 15.1678 13.224 15.1678 13.848Z"
        fill={color}
      />
    </svg>
  );
}

export default WalletRegular;
