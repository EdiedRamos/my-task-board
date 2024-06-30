import React from "react";

export const metadata = {
  title: "Page not found",
};

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center border bg-cc-white">
      <p className="text-2xl font-medium text-cc-orange text-center animate-pulse">
        Page not found
      </p>
      <p className="text-7xl font-bold animate-bounce">
        <span className="inline-block -rotate-6 text-cc-red">4</span>
        <span className="text-cc-blue">0</span>
        <span className="inline-block rotate-6 text-cc-red">4</span>
      </p>
    </div>
  );
};

export default NotFound;
