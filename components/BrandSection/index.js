import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";

const BrandSection = () => {
  return (
    <div
      id="home"
      className="c-large flex flex-col items-center lg:flex-row md:min-h-[calc(100vh-4rem)]"
    >
      <div className={styles.left}>
        <h1 className="text-5xl xl:text-6xl text-main font-bold leading-medium">
          Use & Connect
        </h1>
        <h2 className="text-3xl xl:text-4xl font-medium mt-3 mb-medium">
          Best App For Your Event
        </h2>
        <p className="text-xl xl:text-2xl lg:pr-16 text-main-dark leading-8">
          Useco allows its users to create specialized or public events, send
          notifications abou upcoming events to other Useco users and it is all
          for free.
        </p>
        <div className="flex flex-col md:flex-row gap-3 mt-20 mb-20 md:mt-28 md:mb-0">
          <a href="/">
            <Image
              src="/photos/appstore-download.png"
              alt="Appstore"
              width={150}
              height={45}
              responsive="true"
            />
          </a>
          <a href="/">
            <Image
              src="/photos/playstore-download.png"
              alt="Appstore"
              width={150}
              height={45}
              responsive="true"
            />
          </a>
          <a href="/">
            <Image
              src="/photos/appgallery-download.png"
              alt="Appstore"
              width={150}
              height={45}
              responsive="true"
            />
          </a>
        </div>
      </div>
      <div className="order-1 lg:order-2 -ml-16 md:-mr-0 mb-9 md:mb-0 mt-10 md:mt-0">
        <video width="700" height="700" loop autoPlay muted playsInline>
          <source src="/videos/useco-3d.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default BrandSection;
