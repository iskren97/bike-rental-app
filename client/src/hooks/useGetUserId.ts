// useGetUserID is used for getting the id of
// the currently logged user where needed

export const useGetUserID = () => {
  return window.localStorage.getItem('userID');
};
