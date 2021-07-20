import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from "./auth-actions";
import { alertError, alertSuccess } from "../../shared/reactAlert";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (registrationObject) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post("/auth/register", registrationObject);
    dispatch(registerSuccess(data));
    alertSuccess("Регистрация прошла успешно. Ввойдите в свою учетную запись.");
  } catch (error) {
    if (error.response?.status === 409) {
      alertError("Пользователь с тaкой почтой уже зарегистрирован");
    }
    dispatch(registerError(error.message));
  }
};

const logIn = (loginObject) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post("/auth/login", loginObject);
    dispatch(loginSuccess(data));
    alertSuccess("Добро пожаловать");
  } catch (error) {
    if (error.response?.status === 403) {
      alertError("Неверный логин или пароль");
    }
    dispatch(loginError(error.message));
  }
};

const logOut = () => async (dispatch, getState) => {
  dispatch(logoutRequest());
  const authToken = getState().auth.token;
  try {
    token.set(authToken);
    const { data } = await axios.post("/auth/logout");
    token.unset();

    dispatch(logoutSuccess(data));
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get("/user");
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(logoutSuccess());
    }
    dispatch(getCurrentUserError(error.message));
  }
};

const getUserDayInfo = () => async (dispatch, getState) => {
  const userId = getState().auth.user.id;
  const userBody = getState().auth.user.userData;
  const { weight, height, age, bloodType, desiredWeight } = userBody;
  const objUserBody = { weight, height, age, bloodType, desiredWeight };
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(getUserInfoRequest());

  try {
    const response = await axios.post(`/daily-rate/${userId}`, objUserBody);

    dispatch(getUserInfoSuccess(response));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};

export { token, register, logIn, logOut, getCurrentUser, getUserDayInfo };
