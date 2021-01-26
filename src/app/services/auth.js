export const isToken = "token";
export const isAuthenticated = () => {
  localStorage.getItem(isToken !== null);
};
export const getToken = () => localStorage.getItem(isToken);
export const login = (token) => {
  localStorage.setItem(isToken, isToken);
};
export const logout = () => {
  localStorage.removeItem(isToken);
};
