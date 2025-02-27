import React from "react";

interface Props {
  className?: string;
}

export const MugHot = ({ className = "" }: Props) => {
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
        <path
          d="M7 14H30C30.39 14 31 14 31 15C31 21.63 25.63 27 19 27C14.93 27 11.33 24.97 9.17 21.88C8.17 20.45 7.47 18.79 7.17 17C7.17 17 7 15 7 14Z"
          fill="#FFC44D"
        ></path>{" "}
        <path
          d="M22 10C22 10 21 9 21 8C21 7 22 6 22 6C22 6 23 5 23 4C23 3 22 2 22 2M17 10C17 10 16 9 16 8C16 7 17 6 17 6C17 6 18 5 18 4C18 3 17 2 17 2M11 31H27M6 22.0029C6 22.0029 6 21.9999 5 21.9999C2.791 21.9999 1 20.2089 1 17.9999C1 15.7909 2.791 13.9999 5 13.9999H30C30.386 13.9999 31 13.9999 31 14.9999C31 21.6269 25.627 26.9999 19 26.9999C13.054 26.9999 8.117 22.6739 7.166 16.9979"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
