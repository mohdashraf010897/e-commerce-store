import ShopActionTypes from "./../ActionTypes/shop";
import { sortShopInventory } from "./../../utils/helper";
import { RAW_SHOP_DATA } from "../../constants";
const INITIAL_STATE = {
  shopInventory: RAW_SHOP_DATA,
  appliedFilters: [],
  appliedSortOption: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.ADD_FILTER_OPTION: {
      let appliedFilters =
        action.payload === "" || state.appliedFilters.length === 3
          ? []
          : [...state.appliedFilters, action.payload];

      let finalShopInventory = RAW_SHOP_DATA;
      if (appliedFilters?.length > 0) {
        finalShopInventory = RAW_SHOP_DATA.filter((shop_item) =>
          appliedFilters.includes(shop_item.tag)
        );
      }
      return {
        ...state,
        appliedFilters,
        shopInventory: finalShopInventory,
      };
    }

    case ShopActionTypes.REMOVE_FILTER_OPTION: {
      let appliedFilters = state.appliedFilters.filter(
        (filter_item) => filter_item !== action.payload
      );
      let finalShopInventory = RAW_SHOP_DATA;
      if (appliedFilters?.length > 0) {
        finalShopInventory = RAW_SHOP_DATA.filter((shop_item) =>
          appliedFilters.includes(shop_item.tag)
        );
      }

      return {
        ...state,
        appliedFilters,
        shopInventory: finalShopInventory,
      };
    }

    case ShopActionTypes.SET_SORT_OPTION: {
      let finalShopInventory = sortShopInventory(
        state.shopInventory,
        action.payload
      );

      return {
        ...state,
        shopInventory: [...finalShopInventory],
        appliedSortOption: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
