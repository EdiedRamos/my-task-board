import React from "react";

interface Props {
  className?: string;
}

export const Clock = ({ className }: Props) => {
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
        <g clipPath="url(#clip0_901_3152)">
          {" "}
          <path
            d="M27 1C29.21 1 31 2.79 31 5C31 7.21 29.21 9 27 9C26.98 9 26.96 8.99 26.94 8.99C26.83 8.81 26.71 8.63 26.58 8.45C26.52 8.37 26.46 8.29 26.41 8.22C26.18 7.91 25.93 7.61 25.67 7.32C25.65 7.3 25.63 7.28 25.62 7.26C25.34 6.95 25.05 6.66 24.74 6.38C24.72 6.37 24.7 6.35 24.68 6.33C24.39 6.07 24.09 5.82 23.78 5.59C23.71 5.54 23.63 5.48 23.55 5.42C23.37 5.29 23.19 5.17 23.01 5.06C23.01 5.04 23 5.02 23 5C23 2.79 24.79 1 27 1ZM9 5C9 5.02 8.99 5.04 8.99 5.06C8.81 5.17 8.63 5.29 8.45 5.42C8.37 5.48 8.29 5.54 8.22 5.59C7.91 5.82 7.61 6.07 7.32 6.33C7.3 6.35 7.28 6.37 7.26 6.38C6.95 6.66 6.66 6.95 6.38 7.26C6.37 7.28 6.35 7.3 6.33 7.32C6.07 7.61 5.82 7.91 5.59 8.22C5.54 8.29 5.48 8.37 5.42 8.45C5.29 8.63 5.17 8.81 5.06 8.99C5.04 8.99 5.02 9 5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5Z"
            fill="#668077"
          ></path>{" "}
          <path
            d="M26.9404 8.99C28.2404 11.01 29.0004 13.42 29.0004 16C29.0004 23.179 23.1794 29 16.0004 29C8.82043 29 3.00043 23.179 3.00043 16C3.00043 13.42 3.75943 11.01 5.05943 8.99C5.17943 8.809 5.29943 8.63 5.41943 8.45C5.48043 8.37 5.54043 8.29 5.58943 8.219C5.83043 7.91 6.08043 7.61 6.33043 7.32C6.34943 7.3 6.37043 7.28 6.37943 7.26C6.66943 6.96 6.96043 6.67 7.25943 6.38C7.28043 6.37 7.29943 6.349 7.32043 6.33C7.61043 6.08 7.91043 5.83 8.21943 5.59C8.29043 5.54 8.37043 5.48 8.45043 5.42C8.62943 5.3 8.80943 5.179 8.99043 5.059C11.0094 3.76 13.4194 3 16.0004 3C18.5804 3 20.9904 3.76 23.0094 5.059C23.1904 5.179 23.3704 5.3 23.5494 5.42C23.6294 5.48 23.7104 5.54 23.7804 5.59C24.0894 5.83 24.3894 6.08 24.6794 6.33C24.7004 6.349 24.7194 6.37 24.7404 6.38C25.0404 6.67 25.3304 6.96 25.6204 7.26C25.6294 7.28 25.6504 7.3 25.6694 7.32C25.9194 7.61 26.1694 7.91 26.4104 8.219C26.4604 8.29 26.5194 8.37 26.5804 8.45C26.7004 8.63 26.8204 8.809 26.9404 8.99Z"
            fill="#FFC44D"
          ></path>{" "}
          <path
            d="M16 3.0001C23.18 3.0001 29 8.8201 29 16.0001C29 23.1801 23.18 29.0001 16 29.0001C8.81998 29.0001 2.99998 23.1801 2.99998 16.0001C2.99998 8.8201 8.81998 3.0001 16 3.0001ZM16 3.0001V1.0001M9.31148 27.1476L6.99948 31.0006M29.7686 7.879C30.5256 7.15 30.9996 6.133 30.9996 5C30.9996 2.79 29.2096 1 26.9996 1C25.8676 1 24.8496 1.475 24.1216 2.232M7.87888 2.2315C7.14988 1.4745 6.13288 1.0005 4.99988 1.0005C2.78988 1.0005 0.999878 2.7905 0.999878 5.0005C0.999878 6.1325 1.47488 7.1505 2.23188 7.8785M22 12.0001L14 20.0001L9.99998 16.0001M25 31.0001L22.689 27.1481"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="clip0_901_3152">
            {" "}
            <rect width="32" height="32" fill="white"></rect>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
};
