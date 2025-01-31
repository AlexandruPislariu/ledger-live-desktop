import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledFinaThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25598 16.464H14.136V15.984H8.73598V15.504L11.808 13.248C13.464 12.024 14.016 11.184 14.016 10.056C14.016 8.28 12.648 7.344 11.088 7.344C9.16798 7.344 8.06398 8.712 8.06398 10.248V10.464H8.54398V10.248C8.54398 8.928 9.40798 7.824 11.064 7.824H11.112C12.48 7.824 13.536 8.568 13.536 10.056C13.536 11.016 13.104 11.688 11.52 12.864L8.25598 15.264V16.464ZM4.03198 20.88H11.088C16.056 20.88 19.968 16.848 19.968 12C19.968 7.032 16.056 3.12 11.088 3.12H4.03198V3.6H11.088C15.792 3.6 19.488 7.296 19.488 12C19.488 16.584 15.792 20.4 11.088 20.4H4.03198V20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledFinaThin;
