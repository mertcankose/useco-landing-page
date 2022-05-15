import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";
import Box from "./box";
import {
  Card,
  RecyCard,
  Touch,
  Faces,
  PeopleForbidden,
  Tasks,
  People,
} from "../icons";

const AdvantagesSection = () => {
  return (
    <div id="acquisitions" className="c-large mt-64 flex flex-col scroll-m-4">
      <div className="flex flex-col mx-auto">
        <h4 className="text-main-dark text-center font-medium text-2xl leading-8">
          Acquisitions
        </h4>
        <p className="max-w-md text-main text-4xl font-bold text-center leading-medium my-5">
          What are your acquisitions with Useco?
        </p>
        <p className="text-main-dark text-base text-center font-normal">
          You can stay connected with your network everywhere.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row mt-10 justify-between">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center order-2 xl:order-1">
          <div className="flex flex-col">
            <h4 className="text-main text-2xl font-bold mb-12">
              Personal Acquisitions
            </h4>
            <div className="flex flex-col gap-16">
              <Box
                logo={<Card width="60" height="60" />}
                text="Puts an end to usage of traditional business cards!"
              />
              <Box
                logo={<RecyCard width="60" height="60" />}
                text="Offers updatable business cards!"
              />
              <Box
                logo={<Touch width="60" height="60" />}
                text="Easy connections and communication!"
              />
              <Box
                logo={<Faces width="60" height="60" />}
                text="Accesebility to lots of events and instant notificiations!"
              />
            </div>
          </div>
          <div className="flex flex-col mt-10 md:mt-0">
            <h4 className="text-main text-2xl font-bold mb-12">
              Community Acqusitions
            </h4>
            <div className="flex flex-col gap-16">
              <Box
                logo={<Card width="60" height="60" />}
                text="Ending the era of traditional badges!"
              />
              <Box
                logo={<PeopleForbidden width="60" height="60" />}
                text="Puts an end to endless queues!"
              />
              <Box
                logo={<Tasks width="60" height="60" />}
                text="Seamless attendant checks!"
              />
              <Box
                logo={<People width="60" height="60" />}
                text="Opportunity to build teams at events!"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 xl:order-2 mb-20 xl:mb-0">
          <Image
            src="/photos/advantages-phone.png"
            alt="Appstore"
            width={398}
            height={508}
            responsive="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-11 mt-72 mb-44 max-w-4xl mx-auto">
        <h4 className="text-main text-4xl font-bold text-left md:text-center leading-medium">
          Reach Beyond the Limits of Events.
        </h4>
        <p className="text-main-dark text-2xl font-normal text-left md:text-center leading-8">
          Useco notifies you about limitless events around you to make your
          experience more effective and fun Thanks to its recommendation system
          you can reach beyond the limits of events and never miss an
          opportunity.
        </p>
      </div>
    </div>
  );
};
export default AdvantagesSection;
