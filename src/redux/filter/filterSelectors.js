import { createSelector } from "@reduxjs/toolkit";

export const filterSelector = (state) => state.filter.filter;
export const productsSelector = (state) => state.filter.products;
export const notAllowedProductsSelector = (state) => state.notAllowedProducts;

export const getfilteredProductsSelector = createSelector(
  [productsSelector, filterSelector],
  (products, filteredItem) =>
    products?.filter((product) =>
      product.toLowerCase().includes(filteredItem.toLowerCase())
    )
);

export const getFilteredNotAllowedProductsSelector = createSelector(
  [notAllowedProductsSelector, filterSelector],
  (products, filteredItem) =>
    products?.filter((product) =>
      product.toLowerCase().includes(filteredItem.toLowerCase())
    )
);
