import React, { useState, useEffect } from "react";
import { RAW_SHOP_DATA, SIZE_MAPPING_ROMAN } from "./../../constants/index";

const CartDropdownItem = ({ itemId, selectedSize, removeCartItem }) => {
  const { vendor, image_src, name } =
    RAW_SHOP_DATA.filter((raw_item) => raw_item.id === itemId)[0] || {};

  return (
    <div className="cart-dropdown-item">
      <span className="close-btn" onClick={() => removeCartItem(itemId)}>
        <i class="fa fa-trash"></i>
      </span>
      <div className="cart-dropdown-item__img">
        <img src={image_src} />
      </div>
      <div className="cart-dropdown-item__details">
        <span className="brand">{vendor}</span>
        <span className="name">{name}</span>
        <span className="size">{SIZE_MAPPING_ROMAN[selectedSize]}</span>
      </div>
    </div>
  );
};

const CartDropdown = ({ open, cartItems, removeCartItem }) => {
  const mapCartItemsToJsx = () =>
    cartItems?.map((item) => (
      <CartDropdownItem
        itemId={item.id}
        selectedSize={item.size}
        removeCartItem={removeCartItem}
      />
    ));

  return (
    <div className={`cart-dropdown ${open ? "open" : ""}`}>
      <div className="cart-dropdown-options">
        {!!cartItems.length ? (
          mapCartItemsToJsx()
        ) : (
          <span>Please Add Items to Proceed!</span>
        )}
      </div>
      <div className="checkout-cta-container">
        <button disabled={!cartItems.length} className="checkout-cta">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
