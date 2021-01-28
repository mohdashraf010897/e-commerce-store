import React, { useState, useEffect } from "react";
import { SIZE_MAPPING_ROMAN, SIZE_MAPPING_NUMERIC } from "../../constants";
import { connect } from "react-redux";
import { addCartItem, removeCartItem } from "./../../redux/Actions/cart";

const SizeButton = ({ value, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`size-button ${isSelected ? "selected" : ""}`}
  >
    {SIZE_MAPPING_NUMERIC[value]}
  </button>
);

const CatalogueCard = ({
  item: {
    id,
    vendor,
    name,
    image_src,
    price: discountedPrice,
    compare_at_price: actualPrice,
    tag,
    options: sizeOptions,
  },
  cartItems,
  addCartItem,
  removeCartItem,
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  useEffect(() => {
    let setCartItemIdx = "";
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        setCartItemIdx = i;
        break;
      }
    }

    if (setCartItemIdx !== "") {
      setAddedToCart(true);
      setSelectedSize(cartItems[setCartItemIdx].size);
    } else {
      setAddedToCart(false);
      setSelectedSize(null);
    }
  }, [cartItems]);

  const calculateDiscountPercentage = () =>
    ((actualPrice - discountedPrice) / actualPrice) * 100;

  const getSizeOptions = () =>
    sizeOptions.map((item) => (
      <SizeButton
        key={item.id}
        value={item.value}
        isSelected={item.value === selectedSize}
        onClick={() => setSelectedSize(item.value)}
      />
    ));

  const getSizeOptionsRoman = () =>
    sizeOptions.map((item) => SIZE_MAPPING_ROMAN[item.value]).join(", ");

  return (
    <div className="catalogue-card">
      <div className="catalogue-card__img">
        <img src={image_src[0]} alt={tag} />
      </div>
      <div className="catalogue-card__details">
        {/* on hover size options  */}
        {!selectedSize && (
          <div className="size-selection">
            <h3>Select Size</h3>
            {getSizeOptions()}
          </div>
        )}
        {selectedSize && (
          <button
            onClick={
              addedToCart
                ? () => removeCartItem(id)
                : () => addCartItem({ id, size: selectedSize })
            }
            className="add-to-cart-cta"
          >
            {addedToCart ? "Remove From Cart" : "Add to cart"}
          </button>
        )}
        <div className="sizes-available" data-visible={!!selectedSize}>
          Sizes: {getSizeOptionsRoman()}
        </div>

        {/*------------  */}

        {/* default view */}
        <h3 className="product-brand" data-visible={!selectedSize}>
          {vendor}
        </h3>
        <span className="product-name" data-visible={!selectedSize}>
          {name}
        </span>
        {/* ----------- */}
        <div className="product-pricing">
          <span className="product-pricing__discounted">
            ${discountedPrice}
          </span>
          <span className="product-pricing__actual">${actualPrice}</span>
          <span className="product-pricing__discount-percentage">
            ({`${Math.round(calculateDiscountPercentage())}% off`})
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = {
  addCartItem,
  removeCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueCard);
