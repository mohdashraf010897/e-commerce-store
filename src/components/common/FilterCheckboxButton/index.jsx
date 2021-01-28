import React from "react";

const FilterCheckboxButton = ({
  label = "pass label",
  isSelected = false,
  onClick = () => console.log("Please Pass onclick handler"),
}) => {
  return (
    <label onClick={onClick}>
      <span
        className={`filter-checkbox-button ${isSelected ? "selected" : ""}`}
      >
        {label}
      </span>
    </label>
  );
};

export default FilterCheckboxButton;
