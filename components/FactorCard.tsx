import React from "react";
import { useEffect } from "react";
import { Factor } from "../models/factor.model";
import styles from "../styles/FactorCard.module.scss";
import FactorIcon from "./FactorIcon";

const FactorCard = ({ factor }: { factor: Factor }) => {
  useEffect(() => {
    // console.log(factor);


  }, []);

  return (
    <section className={styles.container}>
      <label>{factor.name}</label>
      <div className={styles.fields}>
        <span>Region: {factor.region_name}</span>
        <span>Year: {factor.year}</span>
        <span>
          Source:
          <a href={factor.source_link} target="_blank" rel="noreferrer">
            {factor.source}
          </a>
        </span>
      </div>
      <div className={styles.icon}>
        <FactorIcon category={factor.category}></FactorIcon>
      </div>
    </section>
  );
};

export default FactorCard;
