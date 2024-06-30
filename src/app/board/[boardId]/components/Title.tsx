import { Edit, Logo } from "../assets";

import React from "react";

export const Title = () => {
  return (
    <div className="flex gap-3">
      <Logo className="mt-3" />
      <div className="">
        <h1 className="text-cf-400 p-0">My Task Board</h1>
        <p>Tasks to keep organised</p>
      </div>
      <Edit className="mt-4" />
    </div>
  );
};
