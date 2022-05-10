import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className="bg-main">
      <div className="c-large flex">
        <div className="order-2 lg:order-1 mt-28 -mb-32">
          <Image
            src="/photos/features-phone.png"
            alt="Appstore"
            width={412}
            height={825}
            responsive="true"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p>features</p>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
