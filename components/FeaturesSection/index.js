import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";
import Box from "./box";
import {Brain,Money, Finger, Connection} from "../icons"

const FeaturesSection = () => {
  return (
    <div className="bg-main pt-28">
      <div className="c-large flex flex-col xl:flex-row justify-between">
        <div className="order-2 xl:order-1 -mb-44 flex justify-end items-center">
          <Image
            src="/photos/features-phone.png"
            alt="Appstore"
            width={412}
            height={825}
            responsive="true"
          />
        </div>
        <div className="order-1 xl:order-2">
          <h4 className="text-white leading-8 text-2xl">Features</h4>
          <p className="text-white text-5xl leading-mediumup font-bold mt-5 mb-24 max-w-middle">Do you want to learn Useco’s DNA?</p>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <Box logo={<Brain width="86" height="86" />} title="Yenilikçi Sistem" text="Tek kullanımlık kartviziti ortadan kaldırır." />
              <Box logo={<Money width="86" height="86" />} title="Düşük Maliyet" text="Kartvizitte oluşan kaybolma ve yıpranma maliyetlerini ortadan kaldırır." />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <Box logo={<Finger width="86" height="86"  />} title="Hızlı Etkileşim" text="Etkinlik içi ve etkinlik dışında hızlı etkileşim sağlanır." />
              <Box logo={<Connection width="86" height="86" />} title="Sürekli Bağlantı" text="Kaybolmayan bağlantı imkanı tanır." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
