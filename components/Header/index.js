import React, { useState } from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";
import { LogoUseco } from "../icons/";
import { CloseMenuBox } from "../CloseMenuBox.js";

const HeaderSection = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const clickHamburger = (e) => {
    e.stopPropagation();
    setIsShowMobileMenu(!isShowMobileMenu);
  };

  if (typeof window !== "undefined") {
    document.documentElement.addEventListener("click", () => {
      setIsShowMobileMenu(false);
    });
  }

  return (
    <div className="c-large flex justify-between items-center h-16 md:h-20">
      <a href="/" className="flex justify-center items-center">
        <LogoUseco width="153" height="40" />
      </a>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#home" className={cn(styles.menuItem, styles.desktopMenuItem)}>
          Home
        </a>
        <a
          href="#feature"
          className={cn(styles.menuItem, styles.desktopMenuItem)}
        >
          Feature
        </a>
        <a
          href="#advantages"
          className={cn(styles.menuItem, styles.desktopMenuItem)}
        >
          Advantages
        </a>
        <a href="#scan" className={cn(styles.menuItem, styles.desktopMenuItem)}>
          Scan & Go
        </a>
      </div>

      {/* mobile */}

      <div
        className={cn(
          styles.mobileMenu,
          isShowMobileMenu && styles.mobileMenuOpen
        )}
      >
        <a href="#home" className={cn(styles.menuItem, styles.mobileMenuItem)}>
          Home
        </a>
        <a
          href="#feature"
          className={cn(styles.menuItem, styles.mobileMenuItem)}
        >
          Feature
        </a>
        <a
          href="#advantages"
          className={cn(styles.menuItem, styles.mobileMenuItem)}
        >
          Advantages
        </a>
        <a href="#scan" className={cn(styles.menuItem, styles.mobileMenuItem)}>
          Scan & Go
        </a>
      </div>

      <button
        className="flex md:hidden items-center justify-center gap-2 flex-col rounded-md border border-main w-10 h-10"
        onClick={(e) => clickHamburger(e)}
      >
        <span className="h-0.5 w-6 bg-main"></span>
        <span className="h-0.5 w-6 bg-main"></span>
        <span className="h-0.5 w-6 bg-main"></span>
      </button>
    </div>
  );
};
export default HeaderSection;
