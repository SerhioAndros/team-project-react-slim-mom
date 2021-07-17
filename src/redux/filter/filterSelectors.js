import { createSelector } from "@reduxjs/toolkit";

export const filterSelector = (state) => state.filter.filter;
export const productsSelector = (state) => state.filter.products

export const getfilteredProductsSelector = createSelector(
 [productsSelector, filterSelector],
 (products, filteredItem) =>
  products.filter((product) =>
   product.toLowerCase().includes(filteredItem.toLowerCase())
  )
);
