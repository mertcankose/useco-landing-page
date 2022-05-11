import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { LogoUseco } from "../icons/";

const FooterSection = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-32 mb-11">
      <a href="/" className="flex justify-center items-center">
        <LogoUseco width="153" height="40" />
      </a>
      <p>Copyright © {new Date().getFullYear()} Useco All rights reserved.</p>
    </div>
  );
};
export default FooterSection;
