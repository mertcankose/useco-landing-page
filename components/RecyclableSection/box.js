import React from "react";
import cn from "classnames";
import boxStyles from "./box.module.css";

const Box = ({ logo, title, text }) => {
  return (
    <div className={boxStyles.box}>
      <div className="flex justify-center items-center">{logo}</div>
      <h4 className="text-main-dark font-bold text-2xl mt-8 mb-5">{title}</h4>
      <p className="text-main-dark text-xl">{text}</p>
    </div>
  );
};
export default Box;
