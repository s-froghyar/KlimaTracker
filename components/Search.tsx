import React, { HTMLAttributes, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { searchForFactor } from "../services/source.service";
import { GetServerSideProps } from "next";
import { FactorSource } from "../interfaces/search_dto";
import FactorCard from "./FactorCard";
import estimateFactor, { FactorParams } from "../services/estimate.service";
import { sampleDomesticFlightId } from "../services/data.sample";


import styles from '../styles/Search.module.scss';
import { Factor } from "../models/factor.model";

const Search = () => {
  const [factors, setFactors] = useState<Factor[]>([]);

  const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { data } = await searchForFactor(e.target.value);
    const rawFactors: FactorSource[] = data.results;

    setFactors((_) => rawFactors.map(f => new Factor(f)));
    return;
  };

  const debouncedSearchHandler = useMemo(
    () => debounce(searchHandler, 300),
    []
  );
  const RandomFactor = () => {
    if (factors[0]) {
      return <FactorCard key={`bla`} factor={factors[0]}></FactorCard>
    }
    return <></>
  }
  return (
    <>
      <div className={styles.search_bar}>
        {/* <label htmlFor="factor-search-input"></label> */}
        <input
          type="text"
          className={styles.search_inpt}
          id="factor-search-input"
          placeholder="Search for Climate factors"
          onChange={debouncedSearchHandler}
        />
      </div>
      <div className={styles.results_cont}>
          {factors?.map((f, ind, _) => <FactorCard key={`${f.id}__${ind}`} factor={f}></FactorCard>)}
          {/* {RandomFactor()} */}

      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const params: FactorParams = {
      id: sampleDomesticFlightId,
      type: "flight-d",
      value: 100,
      unit: "km"
    }
  
    const data = await estimateFactor(params);
    // Pass data to the page via props
    return { props: { api_key: process.env.CLIMATIQ_KEY } };
  };
  

export default Search;
