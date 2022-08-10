import type { GetServerSideProps } from "next";
import Head from "next/head";
import { HTMLAttributes } from "react";
import Conversion from "../components/Conversion";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { sampleDomesticFlightId } from "../services/data.sample";
import estimateFactor, { FactorParams } from "../services/estimate.service";
import styles from "../styles/Home.module.scss";

interface IProps extends HTMLAttributes<HTMLElement> {
  factors: any;
  [x: string]: any;
}

export default function Home({ factors }: IProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kita Demo</title>
        <meta name="description" content="Demo to translate activities in terms of carbon footprint using CO2e estimations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>KiTa Demo</h1>
        </div>
        <Search></Search>
        <Conversion></Conversion>
      </main>
      <Footer>{JSON.stringify(factors, null, "\t")}</Footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params: FactorParams = {
    id: sampleDomesticFlightId,
    type: "flight-d",
    value: 100,
    unit: "km",
  };

  const data = await estimateFactor(params);
  // Pass data to the page via props
  return { props: { factors: data } };
};
