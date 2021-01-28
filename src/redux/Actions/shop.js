import ShopActionTypes from "./../ActionTypes/shop";

export const addFilterOption = (item) => {
  {
    return {
      type: ShopActionTypes.ADD_FILTER_OPTION,
      payload: item,
    };
  }
};

export const removeFilterOption = (item) => ({
  type: ShopActionTypes.REMOVE_FILTER_OPTION,
  payload: item,
});

export const setSortOption = (item) => ({
  type: ShopActionTypes.SET_SORT_OPTION,
  payload: item,
});
