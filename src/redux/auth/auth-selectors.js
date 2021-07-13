const getIsAuth = state => state.auth.isAuthenticated;
const getAuthUserName = state => state.auth.user.username;

const getAuthToken = state => state.auth.token;

export {getIsAuth, getAuthUserName, getAuthToken};
