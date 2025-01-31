import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.976 16.704C13.776 16.704 15.048 15.384 15.048 13.608C15.048 11.832 13.776 10.512 12.048 10.512C10.824 10.512 9.84001 11.232 9.48001 12.288H9.40801C9.31201 10.008 9.84001 8.112 12.024 8.112C13.272 8.112 14.04 8.76 14.232 10.008H15.024C14.808 8.4 13.656 7.344 12.024 7.344C9.81601 7.344 8.54401 9.216 8.56801 12.144C8.59201 15 9.84001 16.704 11.976 16.704ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84ZM9.67201 13.704V13.488C9.67201 12.144 10.488 11.28 11.904 11.28H12C13.416 11.28 14.232 12.12 14.232 13.488V13.704C14.232 15.072 13.416 15.912 12 15.912H11.904C10.464 15.912 9.67201 14.952 9.67201 13.704Z"
        fill={color}
      />
    </svg>
  );
}

export default SixCircledMediUltraLight;
