import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.24C17.184 21.24 21.24 17.04 21.24 12C21.24 6.84001 17.16 2.76001 12 2.76001C6.84001 2.76001 2.76001 6.84001 2.76001 12C2.76001 17.16 6.84001 21.24 12 21.24ZM4.32001 12C4.32001 7.68001 7.70401 4.32001 12 4.32001C16.32 4.32001 19.68 7.68001 19.68 12C19.68 16.176 16.32 19.68 12 19.68C7.70401 19.68 4.32001 16.296 4.32001 12ZM8.66401 8.95201H13.512V9.26401C11.616 11.424 10.56 13.8 10.248 16.464H12.048C12.288 13.368 13.368 10.92 15.384 8.97601V7.58401H8.66401V8.95201Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledRegular;
