import { SORT_OPTIONS } from "./../constants/index";

export const sortShopInventory = (inventory, sortOption) => {
  let sortedArray = [];

  if (SORT_OPTIONS.find((item) => item.label === sortOption).key === 1) {
    sortedArray = inventory.sort((item1, item2) => {
      if (+item1.price < +item2.price) return -1;
      if (+item1.price > +item2.price) return 1;
      return 0;
    });
  }
  if (SORT_OPTIONS.find((item) => item.label === sortOption).key === 2) {
    sortedArray = inventory.sort((item1, item2) => {
      if (+item1.price > +item2.price) return -1;
      if (+item1.price < +item2.price) return 1;
      return 0;
    });
  }

  if (SORT_OPTIONS.find((item) => item.label === sortOption).key === 3) {
    sortedArray = inventory.sort((item1, item2) => {
      if (item1.vendor.toLowerCase() < item2.vendor.toLowerCase()) return -1;
      if (item1.vendor.toLowerCase() > item2.vendor.toLowerCase()) return 1;
      return 0;
    });
  }

  if (SORT_OPTIONS.find((item) => item.label === sortOption).key === 4) {
    sortedArray = inventory.sort((item1, item2) => {
      if (item1.vendor.toLowerCase() > item2.vendor.toLowerCase()) return -1;
      if (item1.vendor.toLowerCase() < item2.vendor.toLowerCase()) return 1;
      return 0;
    });
  }
  return sortedArray;
};
