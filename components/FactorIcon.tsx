import React, { useEffect, useState } from "react";
import { ICategory } from "../interfaces/categories.interface";
import Image from "next/image";

const FactorIcon = ({ category }: { category: ICategory }) => {
  const [iconUrl] = useState(category.iconUrl);
  useEffect(() => {
    console.log('we here my guy');

    // console.log(iconUrl);
  }, []);
  return iconUrl ? (
    <Image alt={`${category.name}`} src={iconUrl} layout="fill"></Image>
  ) : (
    <Image
      alt={`${category.name}`}
      src={"/category_icons/electricity.png"}
      layout="fill"
    ></Image>
  );
};

export default FactorIcon;
