import React from "react";
import cn from "classnames";
import boxStyles from "./box.module.css";

const Box = ({ logo, text }) => {
  return (
    <div className="flex items-center gap-3">
        <div className="flex justify-center items-center">{logo}</div>
        <p className="text-main-dark font-normal text-base">{text}</p>
    </div>
  );
};
export default Box;
