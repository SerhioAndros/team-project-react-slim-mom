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
  } catch (error) {
    alert(`${error.message}`);
    dispatch(registerError(error.message));
  }
};

const logIn = (loginObject) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post("/auth/login", loginObject);
    console.log();
    // token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    alert("Введен неверный логин или пароль.");
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
    dispatch(getCurrentUserError(error.message));
  }
};

const getUserDayInfo = () => async (dispatch, getState) => {
  const userId = getState().auth.user.id;
  const userBody = getState().auth.user.userData;
  const { weight, height, age, bloodType, desiredWeight } = userBody;
  const objUserBody = { weight, height, age, bloodType, desiredWeight };
  console.log(objUserBody);
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
