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
      <h4 className="text-5xl text-main font-bold text-center leading-mediumup">Useco cares the world!</h4>
      <Recyclable width="124" height="124" />
      <div className="flex gap-6 justify-center flex-wrap">
        <Box
          logo={<Maintainability width="124" height="124" />}
          title="Sürdürebilirlik"
          text="Useco yaka kartı ve kartvizitlerin tüm işlevlerini mobil cihazlara aktararak etkinliklerin karbon ayak izlerini küçültmeyi amaçlıyor, Useco kullanmak etkinliğinizin çevre dostu olması anlamına geliyor."
        />
        <Box
          logo={<Renewability width="124" height="124" />}
          title="Yenilenebilirlik"
          text="Useco, yaka kartı ve kartvizit yapımında kullanılan kağıt ve plastik tüketimini sıfıra indirerek yılda 10.000 ağacı kesilmekten kurtarmayı ve doğaya geri kazandırmayı amaçlıyor.
          "
        />
        <Box
          logo={<EcoFriendly width="124" height="124" />}
          title="Sürdürebilirlik"
          text="Useco çevreyi koruma temelli etkinliklere ara yüzünde çokça yer vermeyi ve çevre bilinci oluşması adına yapılacak etkinliklere destek olmayı planlıyor. Doğayı koruyor ve insanların bunun önemini anlamasını sağlamayı amaçlıyoruz."
        />
      </div>
    </div>
  );
};
export default RecyclableSection;
