import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledMediMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.92 16.4639H13.128C13.344 13.4399 14.328 11.0639 16.272 9.09589V7.58389H9.45601V9.23989H13.944V9.55189C12.168 11.7839 11.208 13.9919 10.92 16.4639ZM5.76001 21.3599H18.24V19.4399H5.76001V21.3599ZM5.76001 4.55989H18.24V2.63989H5.76001V4.55989Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledMediMedium;
