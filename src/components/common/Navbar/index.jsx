import React, { useState, useEffect } from "react";

import ShopTradeLogo from "./../../../assets/images/shoptrade-logo-favicon.png";
import SearchIcon from "./../../../assets/images/search-icon.svg";
import ProfileIcon from "./../../../assets/images/profile-icon.svg";
import CartIcon from "./../../../assets/images/cart-icon.svg";
import ArrowHeadDown from "./../../../assets/images/arrow-head-down.svg";
import { removeCartItem } from "../../../redux/Actions/cart";
import { connect } from "react-redux";
import CartDropdown from "../../CartDropdown";

const Navbar = ({ cartItems, removeCartItem }) => {
  const [openCartDropdown, setOpenCartDropdown] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src={ShopTradeLogo} alt="shoptrade" />
      </a>
      <ul className="nav-links">
        <li className="nav-links__item">
          <a href="#">
            Shop <img src={ArrowHeadDown} alt="dropdown" />
          </a>
        </li>
        <li className="nav-links__item">
          <a href="#">About Us</a>
        </li>
        <li className="nav-links__item">
          <a href="#">Our Stores</a>
        </li>
        <li className="nav-links__item">
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <span className="user-utilities">
        <span className="user-utilities__search">
          {" "}
          <input id="search" type="text" placeholder="Search" />{" "}
          <label htmlFor="search">
            <img src={SearchIcon} alt="search-icon" />
          </label>
        </span>
        <span className="user-utilities__profile">
          <img src={ProfileIcon} alt="profle-icon" />
        </span>
        <span
          className="user-utilities__cart"
          onClick={() => setOpenCartDropdown(!openCartDropdown)}
        >
          <CartDropdown
            open={openCartDropdown}
            cartItems={cartItems}
            removeCartItem={removeCartItem}
          />
          <img src={CartIcon} alt="cart-icon" />
          {cartItems.length > 0 && (
            <span className="user-utilities__cart--items-count">
              {cartItems.length}
            </span>
          )}
        </span>
      </span>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = {
  removeCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
