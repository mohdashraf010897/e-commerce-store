import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FilterCheckboxButton from "../FilterCheckboxButton/index";
import { FILTER_OPTIONS } from "./../../../constants/index";
import {
  addFilterOption,
  removeFilterOption,
} from "./../../../redux/Actions/shop";

const FilterBox = ({ appliedFilters, applyFilter, removeFilter }) => {
  const getFilters = () => {
    return FILTER_OPTIONS.map((filter_item, idx) => {
      const isSelected =
        appliedFilters?.includes(filter_item.value) ||
        (appliedFilters?.length === 0 && filter_item.value === "");
      return (
        <FilterCheckboxButton
          key={idx}
          label={filter_item.label}
          isSelected={isSelected}
          onClick={
            isSelected
              ? () => removeFilter(filter_item.value)
              : () => applyFilter(filter_item.value)
          }
        />
      );
    });
  };

  return (
    <div className="filter-box">
      <label>Filters: </label>
      <div className="filter-box__options">{getFilters()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appliedFilters: state.shop.appliedFilters,
  };
};

const mapDispatchToProps = {
  applyFilter: addFilterOption,
  removeFilter: removeFilterOption,
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterBox);
