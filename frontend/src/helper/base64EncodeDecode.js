export const encrypt = (text) => {
  return btoa(text);
};
export const decrypt = (text) => {
  return atob(text);
};
