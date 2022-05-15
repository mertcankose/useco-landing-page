import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import {
  Recyclable,
  Maintainability,
  Renewability,
  EcoFriendly,
} from "../icons/";
import Box from "./box";

const RecyclableSection = () => {
  return (
    <div className="flex c-large flex-col items-center gap-16 z-40 relative">
      <h4 className="text-5xl text-main font-bold text-center leading-mediumup">
        Useco cares the world we live in!
      </h4>
      <Recyclable width="124" height="124" />
      <div className="flex gap-6 justify-center flex-wrap">
        <Box
          logo={<Maintainability width="124" height="124" />}
          title="Eco-friendly"
          text="Useco aims to reduce total carbon footprint of the events by transferring all the functions of badges and business cards to mobile devices. In this era, Useco stands for more eco-friendly events."
        />
        <Box
          logo={<Renewability width="124" height="124" />}
          title="Sustainable"
          text="Useco aims to cancel out the consumption of paper and plastic that used for making badges and business cards, with this, ten thousand trees can be dried from being cut and bring back to nature."
        />
        <Box
          logo={<EcoFriendly width="124" height="124" />}
          title="Eco-İlluminative"
          text="Useco prioritizes the events that promote mass awareness about environment. We are protecting the nature and aim to enlighten people about its significance."
        />
      </div>
    </div>
  );
};
export default RecyclableSection;
