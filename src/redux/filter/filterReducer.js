import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
 getFilterValue,
 getFilterValueError,
 getnotAllowedProducts,
 getnotAllowedProductsError,
} from "./filterActions";

const filterItemReducer = createReducer("", {
 [getFilterValue]: (state, action) => action.payload,
});
const productsItemReducer = createReducer(null, {
 [getnotAllowedProducts]: (state, action) => action.payload,
});
const filterItemReducerError = createReducer(null, {
 [getFilterValueError]: (state, action) => action.payload,
});
const productsItemReducerError = createReducer(null, {
 [getnotAllowedProductsError]: (state, action) => action.payload,
});

export const filterReducer = combineReducers({
 filter: filterItemReducer,
 products: productsItemReducer,
 filterError: filterItemReducerError,
 productsError: productsItemReducerError,
});
