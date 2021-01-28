import React, { useState, useEffect } from "react";
import ArrowHeadDown from "./../../../assets/images/arrow-head-down.svg";
import { setSortOption } from "./../../../redux/Actions/shop";
import { connect } from "react-redux";
import { SORT_OPTIONS } from "./../../../constants/index";

const CapsuleDropdown = ({ sortOption, setSortOption }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const mapSortOptionsToJsx = () => {
    return SORT_OPTIONS.map((item) => (
      <span key={item.key} onClick={() => setSortOption(item.label)}>
        {item.label}
      </span>
    ));
  };

  return (
    <div
      className={`capsule-dropdown `}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <span>
        Sort By: <strong>{sortOption}</strong>
        <div className={`dropdown-container ${showDropdown ? "open" : ""}`}>
          {mapSortOptionsToJsx()}
        </div>
      </span>

      <img src={ArrowHeadDown} alt="sorter" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sortOption: state.shop.appliedSortOption,
  };
};

const mapDispatchToProps = { setSortOption };
export default connect(mapStateToProps, mapDispatchToProps)(CapsuleDropdown);
