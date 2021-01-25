export const isToken = (token) => token;
export const isAuthenticated = () => localStorage.getItem(isToken()) !== null;
export const getToken = () => localStorage.getItem(isToken());
export const login = (key, token) => {
  localStorage.setItem(key, token);
};
export const logout = () => {
  localStorage.removeItem(isToken());
};
