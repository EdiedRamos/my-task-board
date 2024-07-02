import React from "react";

interface Props {
  className?: string;
}

export const Book = ({ className = "" }: Props) => {
  return (
    <svg
      className={className}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            fill="#F9EBB2"
            d="M56,62H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h46V62z"
          ></path>{" "}
          <g>
            {" "}
            <path
              fill="#45AAB8"
              d="M6,4v49.537C7.062,52.584,8.461,52,10,52h2V2H8C6.896,2,6,2.896,6,4z"
            ></path>{" "}
            <path
              fill="#45AAB8"
              d="M56,2H14v50h42h2v-2V4C58,2.896,57.104,2,56,2z"
            ></path>{" "}
          </g>{" "}
          <g>
            {" "}
            <path
              fill="#394240"
              d="M60,52V4c0-2.211-1.789-4-4-4H8C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1 s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M6,4c0-1.104,0.896-2,2-2h4v50h-2c-1.539,0-2.938,0.584-4,1.537V4z M56,62H10 c-2.209,0-4-1.791-4-4s1.791-4,4-4h46V62z M56,52H14V2h42c1.104,0,2,0.896,2,2v46v2H56z"
            ></path>{" "}
            <path
              fill="#394240"
              d="M43,26H23c-0.553,0-1,0.447-1,1s0.447,1,1,1h20c0.553,0,1-0.447,1-1S43.553,26,43,26z"
            ></path>{" "}
            <path
              fill="#394240"
              d="M49,20H23c-0.553,0-1,0.447-1,1s0.447,1,1,1h26c0.553,0,1-0.447,1-1S49.553,20,49,20z"
            ></path>{" "}
            <path
              fill="#394240"
              d="M23,16h12c0.553,0,1-0.447,1-1s-0.447-1-1-1H23c-0.553,0-1,0.447-1,1S22.447,16,23,16z"
            ></path>{" "}
          </g>{" "}
          <path
            opacity="0.2"
            fill="#231F20"
            d="M6,4v49.537C7.062,52.584,8.461,52,10,52h2V2H8C6.896,2,6,2.896,6,4z"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
