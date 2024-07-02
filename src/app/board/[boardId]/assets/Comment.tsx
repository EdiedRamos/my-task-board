import React from "react";

interface Props {
  className?: string;
}

export const Comment = ({ className = "" }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g clipPath="url(#clip0_901_2836)">
          {" "}
          <path
            d="M25.9199 27H7.99988C7.44988 27 6.99988 26.55 6.99988 26V21V8C6.99988 7.45 7.44988 7 7.99988 7H24.9999H29.9999C30.5499 7 30.9999 7.45 30.9999 8V30C30.9999 31 30.5499 31.61 28.9409 30C28.4199 29.48 27.0799 28.16 25.9199 27Z"
            fill="#FFC44D"
          ></path>{" "}
          <path
            d="M25 2V7H8C7.45 7 7 7.45 7 8V21H2C1.45 21 1 20.55 1 20V2C1 1.45 1.45 1 2 1H24C24.6 1 25 1.44 25 2Z"
            fill="#FFE6EA"
          ></path>{" "}
          <path
            d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0_901_2836">
            {" "}
            <rect width="32" height="32" fill="white"></rect>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
};
