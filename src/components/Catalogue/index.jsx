import React, { useState, useEffect } from "react";
import FilterBox from "./../common/FilterBox/index";
import SortDropdown from "./../common/SortDropdown/index";
import CatalogueCard from "../CatalogueCard";
import { RAW_SHOP_DATA } from "../../constants";

const Catalogue = ({ shopInventory }) => {
  const populateCards = () => {
    return shopInventory.map((item) => (
      <CatalogueCard key={item.id} item={item} />
    ));
  };

  return (
    <div className="catalogue">
      <div className="catalogue__header">
        <h2>
          All Products <span>({RAW_SHOP_DATA.length} Products)</span>
        </h2>
        <div className="catalogue__header--filter-n-sort">
          <FilterBox />
          <SortDropdown />
        </div>
      </div>
      <div className="catalogue__body">{populateCards()}</div>
    </div>
  );
};

export default Catalogue;
