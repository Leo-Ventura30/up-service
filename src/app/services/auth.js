export const isToken = "token";
export const isAuthenticated = () => {
  localStorage.getItem(getToken(isToken) !== null);
};
export const getToken = () => localStorage.getItem(isToken);
export const login = (token) => {
  localStorage.setItem(isToken, "");
};
export const logout = () => {
  localStorage.removeItem(isToken);
};
