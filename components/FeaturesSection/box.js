import React from "react";
import cn from "classnames";
import boxStyles from "./box.module.css";

const Box = ({ logo, title, text }) => {
  return (
    <div className="flex items-center gap-5 max-w-sm">
      <div className="flex justify-center items-center">{logo}</div>
      <div className="flex flex-col gap-5">
        <h4 className="text-white font-semibold text-3xl mt-8 mb-5">{title}</h4>
        <p className="text-white font-normal text-xl">{text}</p>
      </div>
    </div>
  );
};
export default Box;
