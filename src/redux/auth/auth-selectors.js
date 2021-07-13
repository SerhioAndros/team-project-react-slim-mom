const getIsAuth = (state) => state.auth.isAuthenticated;
const getAuthUserName = (state) => state.auth.user.username;

export { getIsAuth, getAuthUserName };
