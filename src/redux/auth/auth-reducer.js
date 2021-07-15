import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialUserState = {
  email: null,
  username: null,
  id: null,
  userData: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => ({
    email: payload.email,
    username: payload.username,
    id: payload.id,
    userData: payload.userData,
  }),
});
const todaySummaryInfo = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.todaySummary,
  [loginSuccess]: (_, { payload }) => payload.todaySummary,
  [logoutSuccess]: () => null,
  [getCurrentUserSuccess]: (_, { payload }) => payload.days.daySummary,
});

const token = createReducer(null, {
  [registerSuccess]: () => null,
  [loginSuccess]: (_, { payload }) => payload.accessToken,
  [logoutSuccess]: () => null,
});

const loading = createReducer(false, {
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => false,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});
const isRegistrated = createReducer(false, {
  [registerSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user,
  todaySummaryInfo,
  token,
  isAuthenticated,
  loading,
  isRegistrated,
  error,
});

export { authReducer };
