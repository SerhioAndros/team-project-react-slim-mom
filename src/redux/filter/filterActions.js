import { createAction } from "@reduxjs/toolkit";

export const getFilterValue = createAction("filter/getFilterValue");
export const getFilterValueError = createAction("filter/getFilterValueError");

export const getnotAllowedProducts = createAction("products/getnotAllowedProducts");
export const getnotAllowedProductsError = createAction("products/getnotAllowedProductsError");