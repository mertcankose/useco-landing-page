import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";
import Box from "./box";
import { Brain, Money, Finger, Connection } from "../icons";

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-main pt-32 pb-32">
      <div className="c-large flex flex-col xl:flex-row justify-between items-center xl:items-start">
        <div className="order-2 xl:order-1 flex items-center justify-end">
          <Image
            src="/photos/features-phone.png"
            alt="Appstore"
            width={402}
            height={802}
            responsive="true"
          />
        </div>
        <div className="flex flex-col order-1 xl:order-2">
          <h4 className="text-white leading-8 text-2xl">Features</h4>
          <p className="text-white text-5xl leading-mediumup font-bold mt-5 mb-12 max-w-middle">
            Useco’s DNA
          </p>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <Box
                logo={<Brain width="86" height="86" />}
                title="Innovative QR Code System"
                text="Get’s rid of badges and business cards."
              />
              <Box
                logo={<Money width="86" height="86" />}
                title="Lower Costs"
                text="Avoids the cost of printing badges and business cards."
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <Box
                logo={<Finger width="86" height="86" />}
                title="Quick Interaction"
                text="Makes light speed interaction possible in or out of the events."
              />
              <Box
                logo={<Connection width="86" height="86" />}
                title="Continuous Connection"
                text="Keeps its users connected and coordinated."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
