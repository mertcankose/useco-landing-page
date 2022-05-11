import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import BrandSection from "../components/BrandSection";
import FeaturesSection from "../components/FeaturesSection";
import AdvantagesSection from "../components/AdvantagesSection";
import BgSection from "../components/BgSection";
import ScanSection from "../components/ScanSection";
import RecyclableSection from "../components/RecyclableSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Useco</title>
        <meta name="description" content="Useco" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Header />
        <BrandSection title="mertcan" />
        <FeaturesSection />
        <AdvantagesSection />
        <BgSection/>
        <ScanSection />
        <RecyclableSection />
        <Footer />
        <div></div>
      </div>
    </div>
  );
}
