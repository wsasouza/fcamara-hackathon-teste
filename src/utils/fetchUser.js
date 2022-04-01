export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('@google_user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('@google_user'))
      : localStorage.clear();

  return userInfo;
};
