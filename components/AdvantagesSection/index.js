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
    <div className="c-large mt-64 flex flex-col">
      <div className="flex flex-col mx-auto">
        <h4 className="text-main-dark text-center font-medium text-2xl leading-8">
          Advantages
        </h4>
        <p className="max-w-md text-main text-4xl font-bold text-center leading-medium my-5">
          What is your advantages with Useco?
        </p>
        <p className="text-main-dark text-base text-center font-normal">
          Etkinlik içi ve etkinlik dışında hızlı etkileşim sağlanır.
        </p>
      </div>
      <div className="flex mt-10 justify-between">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <h4 className="text-main text-2xl font-bold mb-12">
              Personal Advantages
            </h4>
            <div className="flex flex-col gap-16">
              <Box
                logo={<Card width="60" height="60" />}
                text="Geleneksel kartvizite son!"
              />
              <Box
                logo={<RecyCard width="60" height="60" />}
                text="Sürekli güncellenebilir kartvizit!"
              />
              <Box
                logo={<Touch width="60" height="60" />}
                text="Kolay iletişim , hızlı etkileşim!"
              />
              <Box
                logo={<Faces width="60" height="60" />}
                text="Bolca etkinlik ve etkinliklerde anlık bildirim!"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-main text-2xl font-bold mb-12">
              Community Advantages
            </h4>
            <div className="flex flex-col gap-16">
              <Box
                logo={<Card width="60" height="60" />}
                text="Geleneksel yaka kartlarına son!"
              />
              <Box
                logo={<PeopleForbidden width="60" height="60" />}
                text="Etkinliklerde giriş sırası beklemeye son!"
              />
              <Box
                logo={<Tasks width="60" height="60" />}
                text="Sorunsuz katılımcı kontrolü!"
              />
              <Box
                logo={<People width="60" height="60" />}
                text="Etkinliklerde takım oluşturma!"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
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
        <h4 className="text-main text-4xl font-bold text-center">More Than Unlimited, Unlimited Fun</h4>
        <p className="text-main-dark text-2xl font-normal text-center">Useco kullanıcıların etkinliklerden olabildiğince verim alması için tasarlanmış bildirim sistemi ile çevrenizde bulunan sınırsız kategoride etkinliklerden ilgi alanınızda olanları size bildiriyor, bu sayede tek bir etkinliği bile kaçırmıyorsunuz.</p>
      </div>
    </div>
  );
};
export default AdvantagesSection;
