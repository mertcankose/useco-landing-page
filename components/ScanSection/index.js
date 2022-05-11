import React, {useState, useEffect} from "react";
import styles from "./index.module.css";
import cn from "classnames";
import Image from "next/image";

const ScanSection = () => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const runMove = (e) => {
    /*
    setTop(e.pageY- 4120);
    setLeft(e.pageX-250);
    */
  }

  return (
    <div id="scan" className="bg-main mx-auto flex flex-col py-36 mb-28 relative z-30" onMouseMove={(e) => runMove(e)}>
      {/*<div id="light" style={{left:left, top:top}} className="absolute w-96 h-96 bg-white z-20 rounded-full"></div>*/}
      <div className="c-large">

 
      <h4 className="text-white text-6xl sm:text-8xl font-bold text-center">Scan & Go!</h4>
      <p className="text-3xl sm:text-4xl text-white font-medium text-center mt-3 mb-7">Pass Without Waiting!</p>
      <p className="text-2xl text-white font-normal text-center">Hemen kodu tarat, sınırsız içeriğe erişim sağla.</p>
      <div className="flex justify-center items-center bg-white p-20 max-w-sm max-h-96 rounded-full mx-auto mt-28">
        <Image
          src="/photos/qr-code.png"
          alt="QR Code"
          width={240}
          height={240}
          responsive="true"
        />
      </div>
      </div>
    </div>
  );
};
export default ScanSection;
