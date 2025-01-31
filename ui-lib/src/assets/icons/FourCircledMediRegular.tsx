import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledMediRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.192 12.216V13.296H9.48001L12.12 9.28801H12.24C12.216 10.176 12.192 11.232 12.192 12.216ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001ZM8.01601 14.568H12.192V16.464H13.68V14.568H15.072V13.296H13.68V7.58401H11.88L8.01601 13.416V14.568Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledMediRegular;
