import React from "react";

interface Props {
  className?: string;
}

export const Computer = ({ className = "" }: Props) => {
  return (
    <svg
      viewBox="0 -117.5 1259 1259"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M393.644285 971.514095l472.373142 0 0 52.485905-472.373142 0 0-52.485905Z"
          fill="#5C2D51"
        ></path>
        <path
          d="M524.859047 652.399795h209.943618v345.357253h-209.943618z"
          fill="#F05071"
        ></path>
        <path
          d="M708.559713 678.642747V970.989236h-157.457714V678.642747h157.457714m52.485905-52.485904H498.616094V1023.475141h262.429524V626.156843z"
          fill="#5C2D51"
        ></path>
        <path
          d="M26.242952 26.242952l1207.175808 0 0 734.802666-1207.175808 0 0-734.802666Z"
          fill="#FDCA89"
        ></path>
        <path
          d="M1207.175807 52.485905v682.31676H52.485905V52.485905h1154.689902m0-52.485905H52.485905a52.485905 52.485905 0 0 0-52.485905 52.485905v682.31676a52.485905 52.485905 0 0 0 52.485905 52.485905h1154.689902a52.485905 52.485905 0 0 0 52.485905-52.485905V52.485905a52.485905 52.485905 0 0 0-52.485905-52.485905z"
          fill="#5C2D51"
        ></path>
        <path
          d="M52.485905 763.669913a26.242952 26.242952 0 0 1-26.242953-26.242952v-100.510508h1207.175808v100.248078a26.242952 26.242952 0 0 1-26.242953 26.242952z"
          fill="#F05071"
        ></path>
        <path
          d="M1207.175807 663.159405v74.267556H52.485905v-74.267556h1154.689902m52.485905-52.485904H0v126.49103a52.485905 52.485905 0 0 0 52.485905 52.485905h1154.689902a52.485905 52.485905 0 0 0 52.485905-52.485905v-126.49103z"
          fill="#5C2D51"
        ></path>
      </g>
    </svg>
  );
};
