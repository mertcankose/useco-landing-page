import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className="bg-main md:min-h-avg">
      <div className="c-large">
        <div className="order-2 lg:order-1 -mb-28 pt-20">
          <Image
            src="/photos/features-phone.png"
            alt="Appstore"
            width={412}
            height={825}
            responsive="true"
          />
        </div>
        <div>
          <p>features</p>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
